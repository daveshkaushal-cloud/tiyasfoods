'use client'

import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion'

export default function TiltCard({
  children,
  className = '',
}) {
  const ref = useRef(null)
  const [hovered, setHovered] = useState(false)

  const px = useMotionValue(0)
  const py = useMotionValue(0)

  const sx = useSpring(px, { stiffness: 150, damping: 18, restDelta: 0.001 })
  const sy = useSpring(py, { stiffness: 150, damping: 18, restDelta: 0.001 })

  const rotateX = useTransform(sy, [-0.5, 0.5], [10, -10])
  const rotateY = useTransform(sx, [-0.5, 0.5], [-10, 10])

  const liftX = useTransform(sx, [-0.5, 0.5], [-8, 8])
  const liftY = useTransform(sy, [-0.5, 0.5], [-8, 8])

  const glareX = useTransform(sx, [-0.5, 0.5], ['20%', '80%'])
  const glareY = useTransform(sy, [-0.5, 0.5], ['20%', '80%'])

  function onMove(e) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    px.set((e.clientX - rect.left) / rect.width - 0.5)
    py.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  function onLeave() {
    px.set(0)
    py.set(0)
    setHovered(false)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={onLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        transformPerspective: 900,
      }}
      className={`group relative will-change-transform ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-2 rounded-[2rem] bg-lime-500/0 blur-2xl transition-all duration-500"
        style={{ opacity: hovered ? 0.25 : 0, background: 'radial-gradient(circle at 50% 60%, rgba(132,204,22,0.5), transparent 70%)' }}
      />
      <div
        className="pointer-events-none absolute -inset-1 rounded-[2rem] transition-all duration-500"
        style={{
          opacity: hovered ? 0.5 : 0,
          boxShadow: '0 30px 60px -15px rgba(0,0,0,0.8), 0 0 0 1px rgba(132,204,22,0.15)',
        }}
      />

      <div
        className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] backdrop-blur-xl transition-colors duration-500 group-hover:border-lime-300/30"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.18), transparent 45%)`,
          }}
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

        <motion.div style={{ x: liftX, y: liftY, transformStyle: 'preserve-3d' }} className="relative p-7">
          {children}
        </motion.div>
      </div>
    </motion.div>
  )
}