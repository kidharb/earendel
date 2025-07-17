'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tech-cyan/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-tech-green/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block text-white glow-text">Embedded Software</span>
            <span className="block bg-gradient-to-r from-primary-400 via-tech-cyan to-primary-600 bg-clip-text text-transparent">
              Excellence
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-secondary-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Embedded system solutions for{' '}
            <span className="text-tech-green font-semibold">consumer electronics</span> and{' '}
            <span className="text-tech-cyan font-semibold">automotive systems</span>
          </p>

          {/* Earendel star reference */}
          <div className="mb-12">
            <p className="text-secondary-400 text-sm md:text-base italic">
              Named after the most distant star known to humanity
            </p>
            <p className="text-tech-cyan text-xs md:text-sm matrix-text">
              12.9 billion light-years • Constellation Cetus • Hubble Discovery
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="tech-button bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25">
              Explore Solutions
            </button>
            <button className="tech-button border-2 border-tech-cyan text-tech-cyan hover:bg-tech-cyan hover:text-secondary-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              View Case Studies
            </button>
          </div>

          {/* Tech specs display */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-secondary-800/50 backdrop-blur-sm border border-primary-500/20 rounded-lg p-6 hover:border-primary-400/40 transition-colors duration-300">
              <div className="text-tech-green text-2xl font-bold mb-2">15+</div>
              <div className="text-secondary-300 text-sm">Years Experience</div>
            </div>
            <div className="bg-secondary-800/50 backdrop-blur-sm border border-primary-500/20 rounded-lg p-6 hover:border-primary-400/40 transition-colors duration-300">
              <div className="text-tech-cyan text-2xl font-bold mb-2">100+</div>
              <div className="text-secondary-300 text-sm">Projects Delivered</div>
            </div>
            <div className="bg-secondary-800/50 backdrop-blur-sm border border-primary-500/20 rounded-lg p-6 hover:border-primary-400/40 transition-colors duration-300">
              <div className="text-tech-orange text-2xl font-bold mb-2">24/7</div>
              <div className="text-secondary-300 text-sm">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}