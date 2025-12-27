'use client'

import { useState, useEffect } from 'react'

export function TechBackground() {
  const [particles, setParticles] = useState<Array<{
    id: number
    size: number
    left: number
    top: number
    duration: number
    delay: number
    x: number
    y: number
  }>>([])

  const [networkNodes, setNetworkNodes] = useState<Array<{
    id: number
    x: number
    y: number
  }>>([])

  useEffect(() => {
    // Only generate random values on client-side
    setParticles(
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        size: Math.random() * 5 + 3,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: Math.random() * 4 + 3,
        delay: Math.random() * 3,
        x: (Math.random() - 0.5) * 200,
        y: (Math.random() - 0.5) * 200,
      }))
    )

    setNetworkNodes(
      Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: (i % 5) * 250 + 100 + (Math.random() - 0.5) * 100,
        y: Math.floor(i / 5) * 150 + 100 + (Math.random() - 0.5) * 100,
      }))
    )
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      {/* Animated Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {particles.length > 0 && particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full blur-sm animate-float-particle"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              background: `radial-gradient(circle, rgba(59, 130, 246, 0.6), rgba(139, 92, 246, 0.4))`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
              '--particle-x': `${particle.x}px`,
              '--particle-y': `${particle.y}px`,
            } as React.CSSProperties & { '--particle-x': string; '--particle-y': string }}
          />
        ))}
      </div>

      {/* AI Brain Network */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 600">
        {/* Network Nodes */}
        {networkNodes.length > 0 && networkNodes.map((node) => (
          <g key={node.id}>
            <circle
              cx={node.x}
              cy={node.y}
              r="10"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="2"
              className="animate-pulse animate-node-pulse"
              style={{ animationDelay: `${node.id * 0.2}s` }}
            />
            <circle
              cx={node.x}
              cy={node.y}
              r="4"
              fill="url(#gradient)"
              opacity="0.9"
              className="animate-node-glow"
              style={{ animationDelay: `${node.id * 0.2}s` }}
            />
          </g>
        ))}

        {/* Connection Lines */}
        {networkNodes.slice(0, 10).map((node, i) => {
          const nextNode = networkNodes[(i + 1) % networkNodes.length]
          return (
            <line
              key={`line-${i}`}
              x1={node.x}
              y1={node.y}
              x2={nextNode.x}
              y2={nextNode.y}
              stroke="url(#gradient)"
              strokeWidth="1.5"
              opacity="0.4"
              className="animate-line-pulse"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          )
        })}

        {/* Additional Network Connections */}
        {networkNodes.slice(0, 8).map((node, i) => {
          const targetNode = networkNodes[(i + 3) % networkNodes.length]
          return (
            <line
              key={`conn-${i}`}
              x1={node.x}
              y1={node.y}
              x2={targetNode.x}
              y2={targetNode.y}
              stroke="url(#gradient)"
              strokeWidth="1"
              opacity="0.2"
              strokeDasharray="4 4"
              className="animate-line-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          )
        })}

        {/* Circuit Board Pattern */}
        <g transform="translate(600, 300)" className="animate-circuit-float">
          <rect x="-60" y="-40" width="120" height="80" fill="none" stroke="url(#gradient)" strokeWidth="1.5" opacity="0.3" rx="5" />
          <circle cx="-40" cy="-20" r="3" fill="url(#gradient)" opacity="0.6" className="animate-node-glow" />
          <circle cx="40" cy="-20" r="3" fill="url(#gradient)" opacity="0.6" className="animate-node-glow" style={{ animationDelay: '0.3s' }} />
          <circle cx="-40" cy="20" r="3" fill="url(#gradient)" opacity="0.6" className="animate-node-glow" style={{ animationDelay: '0.6s' }} />
          <circle cx="40" cy="20" r="3" fill="url(#gradient)" opacity="0.6" className="animate-node-glow" style={{ animationDelay: '0.9s' }} />
          <line x1="-40" y1="-20" x2="40" y2="-20" stroke="url(#gradient)" strokeWidth="1" opacity="0.3" className="animate-line-pulse" />
          <line x1="-40" y1="-20" x2="-40" y2="20" stroke="url(#gradient)" strokeWidth="1" opacity="0.3" className="animate-line-pulse" style={{ animationDelay: '0.5s' }} />
          <line x1="40" y1="-20" x2="40" y2="20" stroke="url(#gradient)" strokeWidth="1" opacity="0.3" className="animate-line-pulse" style={{ animationDelay: '0.7s' }} />
          <line x1="-40" y1="20" x2="40" y2="20" stroke="url(#gradient)" strokeWidth="1" opacity="0.3" className="animate-line-pulse" style={{ animationDelay: '1s' }} />
        </g>

        {/* Security Shield */}
        <g transform="translate(900, 200)" className="animate-shield-float">
          <path
            d="M 0,-50 L 30,-20 L 30,20 L 0,50 L -30,20 L -30,-20 Z"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="2"
            opacity="0.5"
            className="animate-shield-pulse"
          />
          <circle 
            cx="0" 
            cy="0" 
            r="15" 
            fill="none" 
            stroke="url(#gradient)" 
            strokeWidth="2" 
            opacity="0.7"
            className="animate-shield-pulse"
            style={{ animationDelay: '0.3s' }}
          />
        </g>

        {/* Code Brackets */}
        <g transform="translate(100, 450)" className="animate-code-float">
          <text
            x="0"
            y="0"
            fill="url(#gradient)"
            fontSize="50"
            fontFamily="monospace"
            opacity="0.4"
            className="animate-code-pulse"
          >
            {'{'}
          </text>
          <text
            x="70"
            y="0"
            fill="url(#gradient)"
            fontSize="50"
            fontFamily="monospace"
            opacity="0.4"
            className="animate-code-pulse"
            style={{ animationDelay: '0.5s' }}
          >
            {'}'}
          </text>
        </g>

        {/* Additional Code Blocks */}
        <g transform="translate(800, 100)" className="animate-code-float" style={{ animationDelay: '1s' }}>
          <rect x="0" y="-15" width="60" height="30" fill="none" stroke="url(#gradient)" strokeWidth="1.5" opacity="0.3" rx="3" />
          <line x1="10" y1="-5" x2="50" y2="-5" stroke="url(#gradient)" strokeWidth="1" opacity="0.4" className="animate-line-pulse" />
          <line x1="10" y1="0" x2="40" y2="0" stroke="url(#gradient)" strokeWidth="1" opacity="0.4" className="animate-line-pulse" style={{ animationDelay: '0.3s' }} />
          <line x1="10" y1="5" x2="45" y2="5" stroke="url(#gradient)" strokeWidth="1" opacity="0.4" className="animate-line-pulse" style={{ animationDelay: '0.6s' }} />
        </g>

        {/* Terminal Window */}
        <g transform="translate(400, 500)" className="animate-code-float" style={{ animationDelay: '1.5s' }}>
          <rect x="0" y="-25" width="100" height="50" fill="none" stroke="url(#gradient)" strokeWidth="2" opacity="0.3" rx="5" />
          <circle cx="15" cy="-15" r="4" fill="#ef4444" opacity="0.6" />
          <circle cx="30" cy="-15" r="4" fill="#f59e0b" opacity="0.6" />
          <circle cx="45" cy="-15" r="4" fill="#10b981" opacity="0.6" />
          <text x="10" y="5" fill="url(#gradient)" fontSize="14" fontFamily="monospace" opacity="0.4">$ npm</text>
          <line x1="10" y1="15" x2="90" y2="15" stroke="url(#gradient)" strokeWidth="1" opacity="0.3" className="animate-terminal-cursor" />
        </g>

        {/* Data Flow Arrows */}
        <g transform="translate(200, 200)" className="animate-circuit-float" style={{ animationDelay: '2s' }}>
          <path d="M 0,0 L 40,0 L 35,-5 M 40,0 L 35,5" fill="none" stroke="url(#gradient)" strokeWidth="2" opacity="0.4" className="animate-data-flow" />
          <path d="M 50,0 L 90,0 L 85,-5 M 90,0 L 85,5" fill="none" stroke="url(#gradient)" strokeWidth="2" opacity="0.4" className="animate-data-flow" style={{ animationDelay: '0.5s' }} />
          <circle cx="0" cy="0" r="5" fill="url(#gradient)" opacity="0.6" className="animate-node-glow" />
          <circle cx="45" cy="0" r="5" fill="url(#gradient)" opacity="0.6" className="animate-node-glow" style={{ animationDelay: '0.3s' }} />
          <circle cx="95" cy="0" r="5" fill="url(#gradient)" opacity="0.6" className="animate-node-glow" style={{ animationDelay: '0.6s' }} />
        </g>

        {/* Hexagonal Network Pattern */}
        <g transform="translate(1100, 350)" className="animate-circuit-float" style={{ animationDelay: '2.5s' }}>
          <polygon points="0,-30 26,-15 26,15 0,30 -26,15 -26,-15" fill="none" stroke="url(#gradient)" strokeWidth="2" opacity="0.4" className="animate-shield-pulse" />
          <circle cx="0" cy="0" r="8" fill="url(#gradient)" opacity="0.6" className="animate-node-glow" />
          <line x1="-26" y1="-15" x2="-52" y2="-30" stroke="url(#gradient)" strokeWidth="1.5" opacity="0.3" />
          <line x1="26" y1="-15" x2="52" y2="-30" stroke="url(#gradient)" strokeWidth="1.5" opacity="0.3" />
          <circle cx="-52" cy="-30" r="5" fill="url(#gradient)" opacity="0.5" className="animate-node-glow" />
          <circle cx="52" cy="-30" r="5" fill="url(#gradient)" opacity="0.5" className="animate-node-glow" />
        </g>

        {/* Gradient Definition */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.8" />
          </linearGradient>
        </defs>
      </svg>

      {/* Animated Circles */}
      <div className="absolute top-20 left-10 w-64 h-64 border-2 border-blue-500/30 rounded-full animate-spin-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 border-2 border-purple-500/30 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }} />
      
      {/* Moving Orbs */}
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-orb-float" />
      <div className="absolute bottom-1/4 right-1/3 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-orb-float" style={{ animationDelay: '2s' }} />
    </div>
  )
}

