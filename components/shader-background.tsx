"use client"

import { Shader, ChromaFlow, Swirl } from "shaders/react"

interface ShaderBackgroundProps {
  colorA?: string
  colorB?: string
  baseColor?: string
  upColor?: string
  downColor?: string
  leftColor?: string
  rightColor?: string
  intensity?: number
  overlayOpacity?: number
}

export function ShaderBackground({
  colorA = "#080808",
  colorB = "#110e15",
  baseColor = "#3d3659",
  upColor = "#1d1a28",
  downColor = "#0a0810",
  leftColor = "#151220",
  rightColor = "#0e0c18",
  intensity = 1,
  overlayOpacity = 0.15,
}: ShaderBackgroundProps) {
  return (
    <div className="fixed inset-0 z-0" style={{ contain: "strict" }}>
      <Shader className="h-full w-full">
        {/* Layer 1: Swirl Effect */}
        <Swirl
          colorA={colorA}
          colorB={colorB}
          speed={0.6}
          detail={0.8}
          blend={40}
          coarseX={30}
          coarseY={30}
          mediumX={25}
          mediumY={25}
          fineX={20}
          fineY={20}
        />
        {/* Layer 2: ChromaFlow Effect */}
        <ChromaFlow
          baseColor={baseColor}
          upColor={upColor}
          downColor={downColor}
          leftColor={leftColor}
          rightColor={rightColor}
          intensity={intensity}
          radius={1.9}
          momentum={28}
          maskType="alpha"
          opacity={0.88}
        />
      </Shader>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black" style={{ opacity: overlayOpacity }} />
    </div>
  )
}
