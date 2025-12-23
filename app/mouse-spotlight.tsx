"use client"

import { useEffect, useRef, useState } from "react"

export function MouseSpotlight() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const delayedPositionRef = useRef({ x: 0, y: 0 })
  const [, setRenderKey] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    let animationFrameId: number

    const animate = () => {
      delayedPositionRef.current = {
        x: delayedPositionRef.current.x + (mousePosition.x - delayedPositionRef.current.x) * 0.08,
        y: delayedPositionRef.current.y + (mousePosition.y - delayedPositionRef.current.y) * 0.08,
      }
      setRenderKey((prev) => prev + 1)
      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrameId)
  }, [mousePosition])

  return (
    <div
      className="pointer-events-none fixed opacity-[0.15] blur-[90px] transition-none"
      style={{
        left: `${delayedPositionRef.current.x}px`,
        top: `${delayedPositionRef.current.y}px`,
        transform: "translate(-50%, -50%)",
        width: "140px",
        height: "600px",
        borderRadius: "45% 55% 38% 62% / 63% 42% 58% 37%",
        background:
          "radial-gradient(ellipse at 50% 30%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.5) 25%, rgba(255,255,255,0.2) 50%, transparent 75%)",
      }}
    />
  )
}
