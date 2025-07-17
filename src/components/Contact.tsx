'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`New Project Inquiry from ${formData.name}`)
      const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not specified'}
Project Type: ${formData.project || 'Not specified'}

Project Details:
${formData.message}
      `.trim())
      
      const mailtoLink = `mailto:technical@earendel.co.za?subject=${subject}&body=${body}`
      
      // Open email client
      window.location.href = mailtoLink
      
      // Reset form and show success message
      setFormData({
        name: '',
        email: '',
        company: '',
        project: '',
        message: ''
      })
      
      setSubmitStatus('success')
      setSubmitMessage('Email client opened successfully! Please send the email to complete your inquiry.')
      
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
      setSubmitMessage('There was an error opening your email client. Please try again or contact us directly at technical@earendel.co.za')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-secondary-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 glow-text">
            Start Your Project
          </h2>
          <p className="text-xl text-secondary-300 max-w-3xl mx-auto">
            Ready to bring your embedded software vision to life? Let&apos;s discuss your requirements.
          </p>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-primary-500 to-tech-cyan mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-secondary-900/50 backdrop-blur-sm border border-primary-500/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-secondary-800/50 border border-primary-500/30 rounded-lg text-white placeholder-secondary-400 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-secondary-800/50 border border-primary-500/30 rounded-lg text-white placeholder-secondary-400 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-secondary-300 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-secondary-800/50 border border-primary-500/30 rounded-lg text-white placeholder-secondary-400 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-colors duration-200"
                  placeholder="Your company"
                />
              </div>

              <div>
                <label htmlFor="project" className="block text-sm font-medium text-secondary-300 mb-2">
                  Project Type
                </label>
                <select
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-secondary-800/50 border border-primary-500/30 rounded-lg text-white focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-colors duration-200"
                >
                  <option value="">Select project type</option>
                  <option value="consumer">Consumer Electronics</option>
                  <option value="automotive">Automotive Systems</option>
                  <option value="iot">IoT Development</option>
                  <option value="consulting">Technical Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary-300 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-secondary-800/50 border border-primary-500/30 rounded-lg text-white placeholder-secondary-400 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-colors duration-200 resize-vertical"
                  placeholder="Tell us about your project requirements, timeline, and any specific challenges..."
                />
              </div>

              {/* Status Message */}
              {submitStatus !== 'idle' && (
                <div className={`p-4 rounded-lg border ${
                  submitStatus === 'success'
                    ? 'bg-green-900/50 border-green-500/50 text-green-300'
                    : 'bg-red-900/50 border-red-500/50 text-red-300'
                }`}>
                  <div className="flex items-center space-x-2">
                    {submitStatus === 'success' ? (
                      <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    <p className="text-sm">{submitMessage}</p>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full tech-button px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform ${
                  isSubmitting
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25'
                } text-white`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending...</span>
                  </div>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-secondary-900/50 backdrop-blur-sm border border-primary-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-tech-cyan rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <p className="text-secondary-300">technical@earendel.co.za</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-tech-green to-tech-cyan rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Response Time</h4>
                    <p className="text-secondary-300">Within 1 hour</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-tech-orange to-accent-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Location</h4>
                    <p className="text-secondary-300">Global Remote Services</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-secondary-900/50 backdrop-blur-sm border border-primary-500/20 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Why Choose Earendel?</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-tech-green mb-1">20+</div>
                  <div className="text-sm text-secondary-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-tech-cyan mb-1">Multiple</div>
                  <div className="text-sm text-secondary-400">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-tech-orange mb-1">24/7</div>
                  <div className="text-sm text-secondary-400">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-400 mb-1">99%</div>
                  <div className="text-sm text-secondary-400">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}