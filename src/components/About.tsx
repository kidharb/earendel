export default function About() {
  return (
    <section id="about" className="py-20 bg-secondary-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 glow-text">
            About Earendel
          </h2>
          <p className="text-xl text-secondary-300 max-w-3xl mx-auto">
            Pioneering embedded software solutions with precision and innovation
          </p>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-primary-500 to-tech-cyan mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="space-y-6">
            <div className="bg-secondary-800/50 backdrop-blur-sm border border-primary-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <div className="w-3 h-3 bg-tech-green rounded-full mr-3"></div>
                Our Mission
              </h3>
              <p className="text-secondary-300 leading-relaxed">
                At Earendel, we specialize in developing robust, efficient embedded software solutions 
                for consumer electronics and automotive systems. Named after the most distant star 
                known to humanity, we reach beyond conventional boundaries to deliver exceptional 
                embedded C/C++ programming expertise.
              </p>
            </div>

            <div className="bg-secondary-800/50 backdrop-blur-sm border border-primary-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <div className="w-3 h-3 bg-tech-cyan rounded-full mr-3"></div>
                Our Expertise
              </h3>
              <p className="text-secondary-300 leading-relaxed">
                With over 15 years of experience in embedded systems development, we bring deep 
                technical knowledge in real-time operating systems, hardware abstraction layers, 
                and safety-critical applications. Our solutions are designed to meet the highest 
                industry standards while optimizing for performance and reliability.
              </p>
            </div>
          </div>

          {/* Stats and Highlights */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-secondary-800/50 backdrop-blur-sm border border-primary-500/20 rounded-lg p-6 text-center hover:border-primary-400/40 transition-colors duration-300">
                <div className="text-tech-green text-3xl font-bold mb-2">15+</div>
                <div className="text-secondary-300 text-sm">Years of Experience</div>
              </div>
              <div className="bg-secondary-800/50 backdrop-blur-sm border border-primary-500/20 rounded-lg p-6 text-center hover:border-primary-400/40 transition-colors duration-300">
                <div className="text-tech-cyan text-3xl font-bold mb-2">100%</div>
                <div className="text-secondary-300 text-sm">Client Satisfaction</div>
              </div>
              <div className="bg-secondary-800/50 backdrop-blur-sm border border-primary-500/20 rounded-lg p-6 text-center hover:border-primary-400/40 transition-colors duration-300">
                <div className="text-tech-orange text-3xl font-bold mb-2">24/7</div>
                <div className="text-secondary-300 text-sm">Support Available</div>
              </div>
              <div className="bg-secondary-800/50 backdrop-blur-sm border border-primary-500/20 rounded-lg p-6 text-center hover:border-primary-400/40 transition-colors duration-300">
                <div className="text-primary-400 text-3xl font-bold mb-2">∞</div>
                <div className="text-secondary-300 text-sm">Innovation Drive</div>
              </div>
            </div>

            {/* Core Values */}
            <div className="bg-secondary-800/50 backdrop-blur-sm border border-primary-500/20 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Core Values</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-tech-green rounded-full mr-3"></div>
                  <span className="text-secondary-300">Precision in every line of code</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-tech-cyan rounded-full mr-3"></div>
                  <span className="text-secondary-300">Innovation through technology</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-tech-orange rounded-full mr-3"></div>
                  <span className="text-secondary-300">Reliability in critical systems</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary-400 rounded-full mr-3"></div>
                  <span className="text-secondary-300">Excellence in delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Earendel Star Reference */}
        <div className="mt-16 text-center">
          <div className="bg-secondary-800/30 backdrop-blur-sm border border-primary-500/20 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4">Why Earendel?</h3>
            <p className="text-secondary-300 leading-relaxed mb-4">
              Earendel, discovered by the Hubble Space Telescope, is the most distant star known to humanity 
              at 12.9 billion light-years away in the constellation Cetus. Like this distant beacon of light, 
              we strive to push the boundaries of what's possible in embedded systems development.
            </p>
            <div className="text-tech-cyan text-sm matrix-text">
              12.9 billion light-years • Constellation Cetus • Hubble Discovery • WHL0137-LS
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}