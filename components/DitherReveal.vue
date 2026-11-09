<template>
  <div ref="containerRef" class="dither-reveal">
    <canvas ref="canvasRef" class="dither-reveal__canvas" />
  </div>
</template>

<script setup lang="ts">
/**
 * Port para Vue do componente DitherReveal (OriginKit, hero-40).
 * Renderiza uma imagem com efeito de dithering via WebGL; ao passar o mouse,
 * revela a imagem original num círculo ao redor do cursor.
 *
 * Diferença do original: prop `tint` colore os pontos escuros do dithering
 * (preto = comportamento original).
 */
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

type DitherStyle = 'bayer8' | 'lines' | 'noise'

const props = withDefaults(defineProps<{
  src: string
  fit?: 'cover' | 'contain'
  focusY?: number
  ditherStyle?: DitherStyle
  dotSize?: number
  revealRadius?: number
  revealSoftness?: number
  wave?: boolean
  waveSpeed?: number
  waveDensity?: number
  tint?: string
  /** Posição (0–1, na largura da imagem) que separa o lado direito do esquerdo */
  splitX?: number
  /** Quanto subir o lado direito, em fração da largura do container (0 = nada) */
  shiftRight?: number
}>(), {
  fit: 'cover',
  focusY: 50,
  ditherStyle: 'bayer8',
  dotSize: 5,
  revealRadius: 100,
  revealSoftness: 50,
  wave: true,
  waveSpeed: 82,
  waveDensity: 25,
  tint: '#000000',
  splitX: 0.475,
  shiftRight: 0,
})

const DITHER_INDEX: Record<DitherStyle, number> = { bayer8: 0, lines: 1, noise: 2 }

const containerRef = ref<HTMLDivElement | null>(null)
const canvasRef = ref<HTMLCanvasElement | null>(null)

function clamp(n: unknown, min: number, max: number, fallback: number) {
  const v = typeof n === 'number' ? n : parseFloat(String(n))
  if (!Number.isFinite(v)) return fallback
  return Math.min(max, Math.max(min, v))
}

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace('#', '')
  const full = h.length === 3 ? h.split('').map(c => c + c).join('') : h
  const n = parseInt(full, 16)
  if (!Number.isFinite(n)) return [0, 0, 0]
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255]
}

function settings() {
  const reduceMotion = typeof window !== 'undefined'
    && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  const waveOn = props.wave && !reduceMotion
  const speed = waveOn ? clamp(props.waveSpeed, 1, 100, 82) / 100 : 0
  return {
    fit: props.fit === 'contain' ? 1 : 0,
    focusY: clamp(props.focusY, 0, 100, 50) / 100,
    ditherStyle: DITHER_INDEX[props.ditherStyle] ?? 0,
    pixelSize: clamp(props.dotSize, 1, 20, 5) / 2,
    revealRadius: clamp(props.revealRadius, 20, 600, 100),
    revealSoftness: clamp(props.revealSoftness, 0, 100, 50) / 100,
    waveSpeed: speed,
    waveFrequency: clamp(props.waveDensity, 5, 100, 25) / 10,
    waveAmplitude: speed * 0.4,
    waveMargin: speed * 0.4 * 0.15,
    tint: hexToRgb(props.tint),
  }
}

let cleanup: (() => void) | null = null

function setup() {
  const canvas = canvasRef.value
  const container = containerRef.value
  if (!canvas || !container) return
  const gl = canvas.getContext('webgl', { antialias: false, premultipliedAlpha: false })
  if (!gl) return

  const compile = (type: number, source: string) => {
    const sh = gl.createShader(type)!
    gl.shaderSource(sh, source)
    gl.compileShader(sh)
    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
      console.warn('DitherReveal shader:', gl.getShaderInfoLog(sh))
    }
    return sh
  }

  const vs = compile(gl.VERTEX_SHADER, VERT)
  const fs = compile(gl.FRAGMENT_SHADER, FRAG)
  const program = gl.createProgram()!
  gl.attachShader(program, vs)
  gl.attachShader(program, fs)
  gl.linkProgram(program)
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.warn('DitherReveal link:', gl.getProgramInfoLog(program))
    return
  }
  gl.useProgram(program)
  gl.deleteShader(vs)
  gl.deleteShader(fs)

  const buffer = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW)
  const aPos = gl.getAttribLocation(program, 'aPos')
  gl.enableVertexAttribArray(aPos)
  gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0)

  const u = (name: string) => gl.getUniformLocation(program, name)
  const uTime = u('uTime')
  const uMouse = u('uMouse')
  const uMouseActive = u('uMouseActive')
  const uRevealRadius = u('uRevealRadius')
  const uRevealSoftness = u('uRevealSoftness')
  const uPixelSize = u('uPixelSize')
  const uDitherStyle = u('uDitherStyle')
  const uWaveSpeed = u('uWaveSpeed')
  const uWaveFrequency = u('uWaveFrequency')
  const uWaveAmplitude = u('uWaveAmplitude')
  const uWaveMargin = u('uWaveMargin')
  const uCanvasAspect = u('uCanvasAspect')
  const uImageAspect = u('uImageAspect')
  const uResolution = u('uResolution')
  const uFit = u('uFit')
  const uFocusY = u('uFocusY')
  const uTint = u('uTint')
  const uSplitX = u('uSplitX')
  const uShiftRight = u('uShiftRight')

  // Placeholder branco (some com o multiply) até a imagem carregar
  const texture = gl.createTexture()
  gl.bindTexture(gl.TEXTURE_2D, texture)
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true)
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([255, 255, 255, 255]))
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)

  let imgAspect = 1.5
  const img = new Image()
  img.crossOrigin = 'anonymous'
  img.onload = () => {
    if (img.naturalHeight > 0) imgAspect = img.naturalWidth / img.naturalHeight
    gl.bindTexture(gl.TEXTURE_2D, texture)
    try {
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img)
    } catch {
      // Host sem CORS: mantém o placeholder
    }
  }
  img.onerror = () => console.warn('DitherReveal: image failed to load:', props.src)
  img.src = props.src

  const mouse = { x: 0.5, y: 0.5, active: 0, target: 0, entered: false }

  // Escuta na janela: o conteúdo da seção fica por cima do canvas,
  // então os eventos não chegariam ao container.
  const onMove = (e: PointerEvent) => {
    const r = container.getBoundingClientRect()
    const inside = e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom
    if (!inside) {
      mouse.target = 0
      return
    }
    mouse.x = (e.clientX - r.left) / r.width
    mouse.y = 1 - (e.clientY - r.top) / r.height
    mouse.entered = true
    mouse.target = 1
  }
  const onLeaveWindow = () => (mouse.target = 0)
  window.addEventListener('pointermove', onMove, { passive: true })
  document.addEventListener('pointerleave', onLeaveWindow)

  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 3)
    canvas.width = Math.max(1, Math.floor(container.clientWidth * dpr))
    canvas.height = Math.max(1, Math.floor(container.clientHeight * dpr))
    gl.viewport(0, 0, canvas.width, canvas.height)
  }
  resize()
  const ro = new ResizeObserver(resize)
  ro.observe(container)

  let inView = true
  const io = new IntersectionObserver(([entry]) => (inView = entry.isIntersecting), { threshold: 0.01 })
  io.observe(container)

  const start = performance.now()
  let raf = 0
  const render = () => {
    raf = requestAnimationFrame(render)
    if (!inView) return
    const L = settings()
    mouse.active += (mouse.target - mouse.active) * 0.08

    gl.uniform1f(uTime, (performance.now() - start) / 1000)
    gl.uniform2f(uMouse, mouse.x, mouse.y)
    gl.uniform1f(uMouseActive, mouse.entered ? mouse.active : 0)
    gl.uniform1f(uRevealRadius, L.revealRadius)
    gl.uniform1f(uRevealSoftness, L.revealSoftness)
    gl.uniform1f(uPixelSize, L.pixelSize)
    gl.uniform1f(uDitherStyle, L.ditherStyle)
    gl.uniform1f(uWaveSpeed, L.waveSpeed)
    gl.uniform1f(uWaveFrequency, L.waveFrequency)
    gl.uniform1f(uWaveAmplitude, L.waveAmplitude)
    gl.uniform1f(uWaveMargin, L.waveMargin)
    gl.uniform1f(uCanvasAspect, canvas.width / canvas.height)
    gl.uniform1f(uImageAspect, imgAspect)
    gl.uniform2f(uResolution, container.clientWidth || 1, container.clientHeight || 1)
    gl.uniform1f(uFit, L.fit)
    gl.uniform1f(uFocusY, L.focusY)
    gl.uniform3f(uTint, L.tint[0], L.tint[1], L.tint[2])
    gl.uniform1f(uSplitX, props.splitX)
    gl.uniform1f(uShiftRight, props.shiftRight)
    gl.drawArrays(gl.TRIANGLES, 0, 3)
  }
  render()

  cleanup = () => {
    cancelAnimationFrame(raf)
    ro.disconnect()
    io.disconnect()
    img.onload = null
    img.onerror = null
    window.removeEventListener('pointermove', onMove)
    document.removeEventListener('pointerleave', onLeaveWindow)
    gl.deleteProgram(program)
    gl.deleteBuffer(buffer)
    gl.deleteTexture(texture)
  }
}

onMounted(setup)
onBeforeUnmount(() => cleanup?.())
watch(() => props.src, () => {
  cleanup?.()
  setup()
})

const VERT = /* glsl */ `
attribute vec2 aPos;
varying vec2 vUv;
void main() {
    vUv = aPos * 0.5 + 0.5;
    gl_Position = vec4(aPos, 0.0, 1.0);
}
`

const FRAG = /* glsl */ `
precision highp float;

uniform sampler2D uTexture;
uniform float uTime;
uniform vec2 uMouse;
uniform float uMouseActive;
uniform float uRevealRadius;
uniform float uRevealSoftness;
uniform float uPixelSize;
uniform float uDitherStyle;

uniform float uWaveSpeed;
uniform float uWaveFrequency;
uniform float uWaveAmplitude;
uniform float uWaveMargin;

uniform float uCanvasAspect;
uniform float uImageAspect;
uniform vec2 uResolution;
uniform float uFit;
uniform float uFocusY;
uniform vec3 uTint;
uniform float uSplitX;
uniform float uShiftRight;

varying vec2 vUv;

float Bayer2(vec2 a) {
    a = floor(a);
    return fract(a.x * 0.5 + a.y * a.y * 0.75);
}
float Bayer4(vec2 a) { return Bayer2(a * 0.5) * 0.25 + Bayer2(a); }
float Bayer8(vec2 a) { return Bayer4(a * 0.5) * 0.25 + Bayer2(a); }

float ign(vec2 p) {
    return fract(52.9829189 * fract(0.06711056 * p.x + 0.00583715 * p.y));
}

float ordered3(float gray, float thr) {
    float adj = gray + (thr - 0.5) * 0.5;
    return adj < 0.33 ? 0.0 : (adj < 0.66 ? 0.5 : 1.0);
}

float ditherTone(float gray, float ps) {
    vec2 fc = gl_FragCoord.xy / ps;
    if (uDitherStyle < 0.5) {
        return ordered3(gray, Bayer8(fc));
    } else if (uDitherStyle < 1.5) {
        float period = ps * 4.0;
        float v = fract((gl_FragCoord.x + gl_FragCoord.y) / period);
        return 1.0 - step(v, 1.0 - gray);
    }
    return step(ign(fc), gray);
}

vec2 fitUv(vec2 uv) {
    vec2 cover = uCanvasAspect < uImageAspect
        ? vec2(uCanvasAspect / uImageAspect, 1.0)
        : vec2(1.0, uImageAspect / uCanvasAspect);
    vec2 s = uFit > 0.5 ? 1.0 / cover : cover / (1.0 + 2.0 * uWaveMargin);
    vec2 out_ = (uv - 0.5) * s + 0.5;
    out_.y += (1.0 - s.y) * (0.5 - uFocusY) * step(s.y, 1.0);
    return out_;
}

void main() {
    vec2 uv = vUv;
    float time = uTime;
    float waveStrength = uWaveAmplitude * 0.1;
    float revealNorm = uRevealRadius / max(min(uResolution.x, uResolution.y), 1.0);

    float wave1 = sin(uv.y * uWaveFrequency + time * uWaveSpeed) * waveStrength;
    float wave2 = sin(uv.x * uWaveFrequency * 0.7 + time * uWaveSpeed * 0.8) * waveStrength * 0.5;

    vec2 distortedUv = uv;
    distortedUv.x += wave1;
    distortedUv.y += wave2;

    if (uMouseActive > 0.01) {
        float dist = distance(uv, uMouse);
        float mouseInfluence = smoothstep(revealNorm, 0.0, dist);
        float ripple = sin(dist * uWaveFrequency * 5.0 - time * uWaveSpeed)
            * uWaveAmplitude * 0.05 * mouseInfluence * uMouseActive;
        distortedUv.x += ripple;
        distortedUv.y += ripple;
    }

    vec2 sampleUv = fitUv(distortedUv);
    // Sobe só a parte direita da imagem (mão de cima), sem mexer na esquerda
    if (uShiftRight > 0.0 && sampleUv.x > uSplitX) {
        distortedUv.y -= uShiftRight * uResolution.x / uResolution.y;
        sampleUv = fitUv(distortedUv);
    }
    vec4 color = texture2D(uTexture, sampleUv);
    vec2 inside = step(vec2(0.0), sampleUv) * step(sampleUv, vec2(1.0));
    // Fora da imagem = branco (fica invisível com mix-blend-mode: multiply)
    color = mix(vec4(1.0), color, inside.x * inside.y);

    float gray = dot(color.rgb, vec3(0.299, 0.587, 0.114));
    float ps = max(uPixelSize, 0.25);
    float tone = ditherTone(gray, ps);
    vec3 ditherColor = mix(uTint, vec3(1.0), tone);

    float revealDist = distance(uv * uResolution, uMouse * uResolution);
    float innerRadius = max(0.0, uRevealRadius * (1.0 - uRevealSoftness));
    float outerRadius = uRevealRadius * (1.0 + uRevealSoftness) + 0.001;
    float revealAmount = (1.0 - smoothstep(innerRadius, outerRadius, revealDist)) * uMouseActive;

    gl_FragColor = vec4(mix(ditherColor, color.rgb, revealAmount), 1.0);
}
`
</script>

<style scoped>
.dither-reveal {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.dither-reveal__canvas {
  display: block;
  width: 100%;
  height: 100%;
}
</style>

