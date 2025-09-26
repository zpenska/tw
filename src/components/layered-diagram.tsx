'use client'

import { motion } from 'framer-motion'
import {
  CheckCircleIcon,
  ChevronRightIcon,
  ShieldCheckIcon,
  BoltIcon,
  ClockIcon
} from '@heroicons/react/24/solid'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Heading, Subheading } from '@/components/text'
import Image from 'next/image'

export function LayeredDiagram() {
  const features = [
    { icon: ShieldCheckIcon, text: '100% Flood Resistant' },
    { icon: BoltIcon, text: '48-Hour Installation' },
    { icon: ClockIcon, text: '10-Year Warranty' }
  ]

  const comparisonData = [
    { feature: 'Flood Damage Risk', traditional: 'High', vubaMac: 'Zero' },
    { feature: 'Water Absorption', traditional: '5-10%', vubaMac: '0%' },
    { feature: 'Lifespan', traditional: '5-10 years', vubaMac: '25+ years' },
    { feature: 'Maintenance', traditional: 'Annual', vubaMac: 'Minimal' }
  ]

  const layerDetails = [
    { name: 'Vuba Surface', description: 'Premium decorative finish', thickness: '3/8" - 3/4"' },
    { name: 'VubaMac', description: 'Flood-resistant base layer', thickness: '1/2" - 1 1/2"' },
    { name: 'SRM Capping Layer', description: 'Structural reinforcement mesh', thickness: 'Integrated' },
    { name: 'Geotextile Membrane', description: 'Permeable separation layer', thickness: 'Variable' },
    { name: 'Sub-Soil', description: 'Compacted foundation', thickness: 'As required' }
  ]

  return (
    <div className="bg-gradient-to-b from-white via-stone-50 to-white py-16 sm:py-24">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <Subheading>Advanced Flood-Defense Technology</Subheading>
          <Heading as="h2" className="mt-2 max-w-3xl mx-auto">
            Why VubaMac Protects Where Others Fail
          </Heading>
          <p className="mt-4 text-lg text-stone-600 max-w-2xl mx-auto">
            Our patented multi-layer system creates an impermeable barrier that has protected
            thousands of Florida properties through major hurricanes
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left side - VubaMac Diagram Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-stone-900 mb-6">System Components</h3>

              {/* VubaMac Base Build Up Image */}
              <div className="relative aspect-square w-full max-w-md mx-auto mb-8">
                <Image
                  src="/images/VubaMac_Base_Build_Up-01.png"
                  alt="VubaMac Base System Layers"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Layer Details */}
              <div className="space-y-3 border-t border-stone-200 pt-6">
                <h4 className="text-sm font-semibold text-stone-700 mb-3">Layer Specifications</h4>
                {layerDetails.map((layer, index) => (
                  <motion.div
                    key={layer.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 text-sm"
                  >
                    <div className="w-2 h-2 bg-stone-400 rounded-full mt-1.5 flex-shrink-0" />
                    <div className="flex-1">
                      <span className="font-medium text-stone-900">{layer.name}:</span>
                      <span className="text-stone-600 ml-1">{layer.description}</span>
                      <span className="text-stone-500 text-xs block">{layer.thickness}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right side - Product Info */}
          <div className="space-y-6">
            {/* Product Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl p-6 sm:p-8"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-stone-900">VubaMac Base System</h3>
                  <p className="text-3xl font-bold text-stone-900 mt-2">$12-15/sq ft</p>
                </div>
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                  Best Value
                </span>
              </div>

              <p className="text-stone-600 mb-6">
                Essential flood-resistant base layer technology. Perfect for new
                construction and major renovations. Our patented multi-layer system
                creates an impermeable barrier while maintaining structural integrity.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex flex-col items-center text-center p-3 bg-stone-50 rounded-lg">
                    <feature.icon className="h-6 w-6 text-stone-600 mb-2" />
                    <span className="text-xs font-medium text-stone-700">{feature.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button href="#calculator" className="flex-1">
                  Get Free Quote
                </Button>
                <Button href="#products" variant="secondary" className="flex-1">
                  View All Products
                </Button>
              </div>
            </motion.div>

            {/* Comparison Table */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-2xl shadow-xl p-6 sm:p-8 text-white"
            >
              <h4 className="text-lg font-bold mb-6">Why VubaMac vs Traditional Surfaces?</h4>
              <div className="space-y-4">
                {comparisonData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-stone-700 last:border-0">
                    <span className="text-sm text-stone-300">{item.feature}</span>
                    <div className="flex items-center gap-3 sm:gap-4">
                      <span className="text-sm text-red-400 line-through">{item.traditional}</span>
                      <ChevronRightIcon className="h-4 w-4 text-stone-500 flex-shrink-0" />
                      <span className="text-sm text-green-400 font-semibold">{item.vubaMac}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Grant Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200"
            >
              <div className="flex items-start gap-3">
                <CheckCircleIcon className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-stone-900 mb-1">FEMA Grant Eligible</h4>
                  <p className="text-sm text-stone-600">
                    Qualify for up to 40% project cost coverage through flood mitigation assistance programs.
                    We handle all documentation and application assistance.
                  </p>
                  <button className="text-sm font-semibold text-blue-600 hover:text-blue-700 mt-2 flex items-center gap-1 hover:gap-2 transition-all">
                    Learn about grants
                    <ChevronRightIcon className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Additional Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-r from-stone-50 to-stone-100 rounded-2xl p-6 border border-stone-200"
            >
              <h4 className="font-bold text-stone-900 mb-4">Why Florida Contractors Choose VubaMac</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-stone-700">Tested through Category 5 hurricanes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-stone-700">10,000+ successful installations since 2018</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-stone-700">Zero flood damage claims to date</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-stone-700">Certified installer network statewide</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  )
}