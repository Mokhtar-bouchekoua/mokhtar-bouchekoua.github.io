"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import * as THREE from "three"

// A stylised digital twin: a wireframe building whose floor sensors stream data
// up to a model node. Everything is procedural, so the scene ships no assets.

const FLOORS = 6
const FLOOR_HEIGHT = 0.62
const WIDTH = 3.6
const DEPTH = 2.6
const BASE_ANGLE = -0.55
const CORE = new THREE.Vector3(2.9, FLOORS * FLOOR_HEIGHT + 1.15, 0.2)

const palette = {
  edge: new THREE.Color("#5b7cff"),
  plate: new THREE.Color("#2a3f8f"),
  sensor: new THREE.Color("#9fb6ff"),
  particle: new THREE.Color("#b9caff"),
  core: new THREE.Color("#e6ecff"),
}

// Deterministic pseudo-random numbers so server, first paint and every visit match.
function seeded(seed: number) {
  let s = seed
  return () => {
    s = (s * 16807) % 2147483647
    return (s - 1) / 2147483646
  }
}

function useSensors(count: number) {
  return useMemo(() => {
    const rand = seeded(42)
    return Array.from({ length: count }, (_, i) => {
      const floor = i % FLOORS
      return new THREE.Vector3(
        (rand() - 0.5) * (WIDTH - 0.5),
        floor * FLOOR_HEIGHT + 0.08,
        (rand() - 0.5) * (DEPTH - 0.5),
      )
    })
  }, [count])
}

function Building() {
  const floors = useMemo(() => {
    const box = new THREE.BoxGeometry(WIDTH, FLOOR_HEIGHT * 0.86, DEPTH)
    const edges = new THREE.EdgesGeometry(box)
    box.dispose()
    return edges
  }, [])
  const plate = useMemo(() => new THREE.PlaneGeometry(WIDTH, DEPTH), [])

  useEffect(() => () => { floors.dispose(); plate.dispose() }, [floors, plate])

  return (
    <group>
      {Array.from({ length: FLOORS }, (_, i) => (
        <group key={i} position={[0, i * FLOOR_HEIGHT + FLOOR_HEIGHT * 0.43, 0]}>
          <lineSegments geometry={floors}>
            <lineBasicMaterial color={palette.edge} transparent opacity={0.55 + (i / FLOORS) * 0.45} />
          </lineSegments>
          <mesh geometry={plate} rotation-x={-Math.PI / 2} position-y={-FLOOR_HEIGHT * 0.43}>
            <meshBasicMaterial color={palette.plate} transparent opacity={0.22} side={THREE.DoubleSide} depthWrite={false} />
          </mesh>
        </group>
      ))}
    </group>
  )
}

// Scene time owned by us: R3F resets clock.elapsedTime whenever `frameloop` changes,
// which happens each time the hero scrolls in or out of view.
function useSceneTime(animate: boolean) {
  const time = useRef(0)
  useFrame((_, delta) => { if (animate) time.current += Math.min(delta, 0.1) })
  return time
}

function Sensors({ points, animate }: { points: THREE.Vector3[]; animate: boolean }) {
  const mesh = useRef<THREE.InstancedMesh>(null)
  const dummy = useMemo(() => new THREE.Object3D(), [])
  const time = useSceneTime(animate)

  useFrame(() => {
    if (!mesh.current) return
    const t = time.current
    for (let i = 0; i < points.length; i++) {
      dummy.position.copy(points[i])
      dummy.scale.setScalar(1 + Math.max(0, Math.sin(t * 2.2 + i * 1.7)) * 0.9)
      dummy.updateMatrix()
      mesh.current.setMatrixAt(i, dummy.matrix)
    }
    mesh.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, points.length]}>
      <sphereGeometry args={[0.055, 12, 12]} />
      <meshBasicMaterial color={palette.sensor} />
    </instancedMesh>
  )
}

// Particles travel along curved paths from a sensor to the model node.
function DataFlow({ sensors, count, animate }: { sensors: THREE.Vector3[]; count: number; animate: boolean }) {
  const points = useRef<THREE.Points>(null)
  const { curves, offsets, speeds, positions } = useMemo(() => {
    const rand = seeded(7)
    const curves = Array.from({ length: count }, (_, i) => {
      const start = sensors[i % sensors.length]
      const control = new THREE.Vector3((start.x + CORE.x) / 2 + 0.6, Math.max(start.y, CORE.y) + 0.4, (start.z + CORE.z) / 2)
      return new THREE.QuadraticBezierCurve3(start, control, CORE)
    })
    return {
      curves,
      offsets: curves.map(() => rand()),
      speeds: curves.map(() => 0.12 + rand() * 0.16),
      positions: new Float32Array(count * 3),
    }
  }, [sensors, count])
  const target = useMemo(() => new THREE.Vector3(), [])
  const time = useSceneTime(animate)

  useFrame(() => {
    if (!points.current) return
    const t = time.current
    for (let i = 0; i < curves.length; i++) {
      curves[i].getPoint((offsets[i] + t * speeds[i]) % 1, target)
      positions[i * 3] = target.x
      positions[i * 3 + 1] = target.y
      positions[i * 3 + 2] = target.z
    }
    points.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color={palette.particle} size={0.07} sizeAttenuation transparent opacity={0.9} blending={THREE.AdditiveBlending} depthWrite={false} />
    </points>
  )
}

function ModelCore({ animate }: { animate: boolean }) {
  const outer = useRef<THREE.LineSegments>(null)
  const inner = useRef<THREE.Mesh>(null)
  const edges = useMemo(() => {
    const ico = new THREE.IcosahedronGeometry(0.42, 0)
    const result = new THREE.EdgesGeometry(ico)
    ico.dispose()
    return result
  }, [])
  useEffect(() => () => edges.dispose(), [edges])

  useFrame((_, delta) => {
    if (!animate) return
    if (outer.current) outer.current.rotation.y += delta * 0.5
    if (inner.current) inner.current.rotation.x -= delta * 0.35
  })

  return (
    <group position={CORE}>
      <lineSegments ref={outer} geometry={edges}>
        <lineBasicMaterial color={palette.core} transparent opacity={0.9} />
      </lineSegments>
      <mesh ref={inner}>
        <octahedronGeometry args={[0.17, 0]} />
        <meshBasicMaterial color={palette.edge} />
      </mesh>
    </group>
  )
}

function Rig({ animate, children }: { animate: boolean; children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null)
  const { pointer } = useThree()
  const time = useSceneTime(animate)

  useFrame((_, delta) => {
    if (!group.current || !animate) return
    const targetY = BASE_ANGLE + time.current * 0.08 + pointer.x * 0.35
    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, targetY, 3, delta)
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, pointer.y * -0.08, 3, delta)
  })

  // Starts at the resting angle, so the single frame rendered under reduced motion is framed correctly.
  return <group ref={group} position={[-0.5, -2.3, 0]} rotation={[0, BASE_ANGLE, 0]}>{children}</group>
}

function Scene({ animate, compact }: { animate: boolean; compact: boolean }) {
  const sensors = useSensors(compact ? 18 : 30)
  return (
    <Rig animate={animate}>
      <gridHelper args={[14, 28, "#26365f", "#18233d"]} position-y={-0.01} />
      <Building />
      <Sensors points={sensors} animate={animate} />
      <DataFlow sensors={sensors} count={compact ? 60 : 120} animate={animate} />
      <ModelCore animate={animate} />
    </Rig>
  )
}

export default function TwinScene({ onReady }: { onReady?: () => void }) {
  const host = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(true)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [compact, setCompact] = useState(false)

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)")
    const small = window.matchMedia("(max-width: 760px)")
    const sync = () => { setReducedMotion(motion.matches); setCompact(small.matches) }
    sync()
    motion.addEventListener("change", sync)
    small.addEventListener("change", sync)
    // Stop rendering when the hero is scrolled away: no GPU work for an invisible canvas.
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting))
    if (host.current) observer.observe(host.current)
    return () => {
      motion.removeEventListener("change", sync)
      small.removeEventListener("change", sync)
      observer.disconnect()
    }
  }, [])

  const animate = !reducedMotion

  return (
    <div ref={host} className="twin-canvas" aria-hidden="true">
      <Canvas
        flat
        dpr={[1, compact ? 1.5 : 2]}
        camera={{ position: [8.6, 3.9, 10.8], fov: 36 }}
        gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
        frameloop={visible && animate ? "always" : "demand"}
        onCreated={() => onReady?.()}
      >
        <Scene animate={animate} compact={compact} />
      </Canvas>
    </div>
  )
}
