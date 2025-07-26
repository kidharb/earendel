export default function Services() {
  const services = [
    {
      title: "Consumer Electronics",
      description: "Embedded C solutions for smart devices, IoT products, and consumer appliances with focus on performance and reliability.",
      features: ["Real-time Systems", "Low Power Design", "Sensor Integration", "Wireless Connectivity", "RTOS", "Board Bring up", "Troubleshooting"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      color: "tech-green"
    },
    {
      title: "Automotive Systems",
      description: "Safety-critical embedded software for automotive applications, meeting industry standards and regulations.",
      features: ["AUTOSAR Compliance", "Functional Safety", "CAN/LIN Protocols", "ECU Development", "Test Code"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3m-6 6h12a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V9a2 2 0 012-2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: "tech-cyan"
    },
    {
      title: "Hardware Integration",
      description: "Seamless integration between software and hardware components for optimal system performance.",
      features: ["Driver Development", "Board Support Packages", "Hardware Abstraction", "Performance Optimization", "Test Jigs"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "tech-orange"
    }
  ]

  return (
    <section id="services" className="py-20 bg-secondary-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 glow-text">
            Services
          </h2>
          <p className="text-xl text-secondary-300 max-w-3xl mx-auto">
            Specialized C/C++ programming expertise for mission-critical embedded systems
          </p>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-primary-500 to-tech-cyan mx-auto rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-secondary-900/50 backdrop-blur-sm border border-primary-500/20 rounded-xl p-8 hover:border-primary-400/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-primary-500/10"
            >
              {/* Service Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br from-${service.color} to-primary-500 rounded-lg flex items-center justify-center mb-6 floating text-white`} style={{ animationDelay: `${index * 0.2}s` }}>
                {service.icon}
              </div>

              {/* Service Title */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-secondary-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-secondary-400">
                    <div className={`w-2 h-2 bg-${service.color} rounded-full mr-3 flex-shrink-0`}></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Circuit pattern overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none">
                <div className="w-full h-full bg-gradient-to-br from-primary-500/20 to-tech-cyan/20 rounded-xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Technology Stack */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Technology Stack</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['C/C++', 'ARM Cortex', 'FreeRTOS', 'Embedded Linux', 'AUTOSAR', 'CAN/LIN', 'I2C/SPI', 'UART'].map((tech, index) => (
              <span
                key={index}
                className="bg-secondary-800/50 border border-primary-500/30 text-secondary-200 px-4 py-2 rounded-full text-sm font-mono hover:border-primary-400/50 hover:text-primary-400 transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}