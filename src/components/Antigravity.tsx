import React, { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

/* ─── Props ─── */
export interface AntigravityProps {
  count?: number
  magnetRadius?: number
  ringRadius?: number
  waveSpeed?: number
  waveAmplitude?: number
  particleSize?: number
  lerpSpeed?: number
  color?: string
  autoAnimate?: boolean
  particleVariance?: number
  rotationSpeed?: number
  depthFactor?: number
  pulseSpeed?: number
  particleShape?: 'capsule' | 'sphere' | 'box'
  fieldStrength?: number
}

/* ─── Particle type ─── */
interface Particle {
  t: number
  speed: number
  mx: number; my: number; mz: number
  cx: number; cy: number; cz: number
  randomRadiusOffset: number
}

/* ─── Inner (runs inside Canvas) ─── */
const AntigravityInner: React.FC<AntigravityProps> = ({
  count = 300,
  magnetRadius = 10,
  ringRadius = 10,
  waveSpeed = 0.4,
  waveAmplitude = 1,
  particleSize = 2,
  lerpSpeed = 0.1,
  color = '#FF9FFC',
  autoAnimate = false,
  particleVariance = 1,
  rotationSpeed = 0,
  depthFactor = 1,
  pulseSpeed = 3,
  particleShape = 'capsule',
  fieldStrength = 10,
}) => {
  const meshRef = useRef<THREE.InstancedMesh>(null)
  const mouse3D = useRef(new THREE.Vector3(9999, 9999, 0))
  const globalRotation = useRef(0)
  const startTime = useRef(performance.now())
  const dummy = useMemo(() => new THREE.Object3D(), [])
  const { viewport, camera } = useThree()

  /* Mouse → 3D world coords */
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = -(e.clientY / window.innerHeight) * 2 + 1
      const vec = new THREE.Vector3(x, y, 0.5)
      vec.unproject(camera)
      vec.sub(camera.position).normalize()
      const dist = -camera.position.z / vec.z
      mouse3D.current.copy(camera.position).addScaledVector(vec, dist)
    }
    window.addEventListener('mousemove', onMouseMove)
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [camera])

  /* Initialise particles */
  const particles = useMemo<Particle[]>(() => {
    const w = viewport.width || 20
    const h = viewport.height || 20
    return Array.from({ length: count }, () => {
      const x = (Math.random() - 0.5) * w * particleVariance
      const y = (Math.random() - 0.5) * h * particleVariance
      const z = (Math.random() - 0.5) * 20 * depthFactor
      return { t: Math.random() * 100, speed: 0.01 + Math.random() / 200, mx: x, my: y, mz: z, cx: x, cy: y, cz: z, randomRadiusOffset: (Math.random() - 0.5) * 2 }
    })
  }, [count, viewport.width, viewport.height, particleVariance, depthFactor])

  /* Animation loop */
  useFrame(() => {
    if (!meshRef.current) return
    const elapsed = (performance.now() - startTime.current) / 1000
    globalRotation.current += rotationSpeed * 0.01

    /* Auto-animate: move cursor in sine wave when mouse is idle */
    const autoTarget = autoAnimate
      ? new THREE.Vector3(
          Math.sin(elapsed * 0.4) * (viewport.width / 4),
          Math.cos(elapsed * 0.3) * (viewport.height / 4),
          0
        )
      : mouse3D.current

    const pulse = 1 + Math.sin(elapsed * pulseSpeed) * 0.05

    particles.forEach((p, i) => {
      p.t += p.speed

      const dx = autoTarget.x - p.mx
      const dy = autoTarget.y - p.my
      const dist = Math.sqrt(dx * dx + dy * dy)

      let tx = p.mx, ty = p.my, tz = p.mz

      if (dist < magnetRadius) {
        const angle = Math.atan2(dy, dx) + globalRotation.current
        const wave = Math.sin(p.t * waveSpeed + angle) * (0.5 * waveAmplitude)
        const deviation = p.randomRadiusOffset * (5 / (fieldStrength + 0.1))
        const r = (ringRadius + wave + deviation) * pulse

        tx = autoTarget.x + r * Math.cos(angle)
        ty = autoTarget.y + r * Math.sin(angle)
        tz = autoTarget.z
      }

      p.cx += (tx - p.cx) * lerpSpeed
      p.cy += (ty - p.cy) * lerpSpeed
      p.cz += (tz - p.cz) * lerpSpeed

      dummy.position.set(p.cx, p.cy, p.cz)
      dummy.scale.setScalar(particleSize * 0.1)
      dummy.updateMatrix()
      meshRef.current!.setMatrixAt(i, dummy.matrix)
    })

    meshRef.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      {particleShape === 'capsule' && <capsuleGeometry args={[0.1, 0.4, 4, 8]} />}
      {particleShape === 'sphere'  && <sphereGeometry  args={[0.2, 16, 16]} />}
      {particleShape === 'box'     && <boxGeometry      args={[0.2, 0.2, 0.2]} />}
      <meshBasicMaterial color={color} />
    </instancedMesh>
  )
}

/* ─── Outer wrapper (provides Canvas) ─── */
const Antigravity: React.FC<AntigravityProps> = (props) => (
  <Canvas camera={{ position: [0, 0, 50], fov: 35 }}>
    <AntigravityInner {...props} />
  </Canvas>
)

export default Antigravity
