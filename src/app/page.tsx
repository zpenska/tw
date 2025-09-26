import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import {
  ShieldCheckIcon,
  ClockIcon,
  BeakerIcon,
  HomeModernIcon,
  SparklesIcon,
  CheckCircleIcon,
  MapPinIcon
} from '@heroicons/react/16/solid'
import { ChatBot } from '@/components/chatbot'
import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'The Workshop Surface Company - Premium Vuba Stone Distribution',
  description: 'Florida\'s premier distributor of flood-resistant Vuba Stone surfaces. 100% waterproof, eco-friendly stone surfacing with 25-year warranty.',
}

function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover opacity-20"
        >
          <source src="/Generated File September 25, 2025 - 8_27PM.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-stone-50/90 via-stone-50/70 to-stone-50" />
      </div>
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-stone-200/20 ring-inset opacity-50" />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <div className="flex flex-col items-center text-center">
            <Image
              src="/TWLogo.png"
              alt="The Workshop Surface Company"
              width={600}
              height={200}
              className="object-contain mb-12"
              priority
            />
            <h1 className="font-display text-5xl/[0.9] font-medium tracking-tight text-balance text-stone-950 sm:text-6xl/[0.8] md:text-7xl/[0.8]">
              The Future of Flood-Resistant Surfaces
            </h1>
            <p className="mt-8 max-w-lg text-xl/7 font-medium text-stone-800/90 sm:text-2xl/8">
              Premium Vuba Stone distribution for Florida and the Southeast. 100% waterproof, eco-friendly surfaces backed by 25-year warranty.
            </p>
            <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
              <Button href="#products">
                Explore Products
              </Button>
              <Button variant="secondary" href="#calculator">
                Request Samples
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

function FeatureSection() {
  const features = [
    {
      icon: ShieldCheckIcon,
      title: '100% Flood Resistant',
      description: 'VubaMac technology creates an impermeable barrier against water damage'
    },
    {
      icon: ClockIcon,
      title: '48-Hour Installation',
      description: 'Quick professional installation minimizes disruption to your property'
    },
    {
      icon: BeakerIcon,
      title: 'Zero VOC Emissions',
      description: 'Environmentally friendly surfaces safe for families and pets'
    },
    {
      icon: HomeModernIcon,
      title: '25-Year Warranty',
      description: 'Industry-leading warranty coverage for residential and commercial'
    },
    {
      icon: SparklesIcon,
      title: 'Government Grant Eligible',
      description: 'Qualify for flood mitigation grants up to 40% of project cost'
    },
  ]

  return (
    <div className="overflow-hidden bg-gradient-to-b from-white to-stone-50">
      <Container className="py-24">
        <Subheading>Why Choose Vuba Stone</Subheading>
        <Heading as="h2" className="mt-2 max-w-3xl">
          Florida&apos;s Most Trusted Flood-Resistant Surface Solution
        </Heading>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-stone-600 to-stone-700 rounded-lg opacity-0 group-hover:opacity-20 transition duration-500" />
              <div className="relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <feature.icon className="h-10 w-10 text-stone-600 mb-4" />
                <h3 className="text-lg font-semibold text-stone-900">{feature.title}</h3>
                <p className="mt-2 text-sm text-stone-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

function ProductSection() {
  const products = [
    {
      name: 'VubaMac Base System',
      price: '$12-15/sq ft',
      description: 'Essential flood-resistant base layer technology. Perfect for new construction and major renovations.',
      features: ['100% Waterproof', 'Quick Installation', '10-Year Warranty'],
      gradient: 'from-gray-500 to-gray-600',
      image: '/images/VubaMac_Base_Build_Up-01.png',
    },
    {
      name: 'Vuba Stone Classic',
      price: '$18-22/sq ft',
      description: 'Our most popular line combining affordability with premium flood protection.',
      features: ['8 Color Options', 'Slip-Resistant', '15-Year Warranty'],
      gradient: 'from-stone-600 to-stone-700',
      popular: true,
      image: '/images/Manhattan_4f8d833e-8fde-4f4d-b4de-b5953f6dac18.jpg',
    },
    {
      name: 'Vuba Stone Premium',
      price: '$25-30/sq ft',
      description: 'Enhanced aesthetics with superior durability for discerning property owners.',
      features: ['12 Color Options', 'UV Resistant', '20-Year Warranty'],
      gradient: 'from-stone-500 to-stone-600',
      image: '/images/MilanoMarble_a1935bf6-7774-4c79-91bc-ccf564f9dc07.jpg',
    },
    {
      name: 'Vuba Stone Ultra',
      price: '$35-40/sq ft',
      description: 'The pinnacle of flood-resistant surfacing with custom design options.',
      features: ['Custom Colors', 'Heat Reflective', '25-Year Warranty'],
      gradient: 'from-stone-700 to-stone-800',
      image: '/images/Versailles.jpg',
    },
  ]

  return (
    <Container id="products" className="py-24">
      <Subheading>Our Products</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
        Professional-grade stone surfaces for every budget
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-8 sm:mt-16 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product, index) => (
          <div key={index} className="group relative">
            {product.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                <span className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Most Popular
                </span>
              </div>
            )}
            <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
            <div className="relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col overflow-hidden">
              {product.image && (
                <div className="h-48 w-full relative mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              )}
              <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-xl font-semibold text-stone-900 mb-2">{product.name}</h3>
              <div className="text-2xl font-bold text-stone-900 mb-4">
                {product.price}
              </div>
              <p className="text-sm text-stone-600 mb-4 flex-grow">{product.description}</p>
              <ul className="space-y-2 mb-6">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-stone-700">
                    <CheckCircleIcon className="h-4 w-4 text-stone-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              </div>
              <div className="p-6 pt-0">
                <Button href="#calculator" className="w-full">
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}

function GallerySection() {
  const projects = [
    {
      title: 'Boca Raton Waterfront Estate',
      location: 'Boca Raton, FL',
      size: '12,000 sq ft',
      product: 'Vuba Stone Ultra',
      image: '/images/Versailles.jpg',
    },
    {
      title: 'Miami Design District Plaza',
      location: 'Miami, FL',
      size: '25,000 sq ft',
      product: 'Vuba Stone Premium',
      image: '/images/Manhattan_4f8d833e-8fde-4f4d-b4de-b5953f6dac18.jpg',
    },
    {
      title: 'Naples Country Club',
      location: 'Naples, FL',
      size: '18,000 sq ft',
      product: 'Vuba Stone Classic',
      image: '/images/MilanoMarble_a1935bf6-7774-4c79-91bc-ccf564f9dc07.jpg',
    },
    {
      title: 'Tampa Bay Municipal Center',
      location: 'Tampa, FL',
      size: '35,000 sq ft',
      product: 'VubaMac Base System',
      image: '/images/Palazzo_05778205-57a6-48e4-a7be-8d2f030b1311.jpg',
    },
    {
      title: 'Fort Lauderdale Marina',
      location: 'Fort Lauderdale, FL',
      size: '22,000 sq ft',
      product: 'Vuba Stone Ultra',
      image: '/images/IpanemaBeach_33e848c2-5ab9-40f9-97fd-a09500befe27.jpg',
    },
    {
      title: 'Orlando Theme Park Walkways',
      location: 'Orlando, FL',
      size: '45,000 sq ft',
      product: 'Vuba Stone Premium',
      image: '/images/EllisIsland.jpg',
    },
  ]

  return (
    <div className="bg-stone-50 py-24" id="gallery">
      <Container>
        <Subheading>Project Gallery</Subheading>
        <Heading as="h2" className="mt-2 max-w-3xl">
          Transforming Florida properties with flood-resistant surfaces
        </Heading>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 p-6 text-white">
                    <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPinIcon className="h-4 w-4" />
                      {project.location}
                    </div>
                    <div className="mt-2 flex gap-4 text-sm">
                      <span>{project.size}</span>
                      <span>•</span>
                      <span>{project.product}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

function TestimonialsSection() {
  const testimonials = [
    {
      name: 'John Davidson',
      role: 'General Contractor',
      company: 'Davidson Construction, Miami',
      content: 'After Hurricane Ian, we exclusively recommend Vuba Stone. The flood resistance is unmatched, and our clients love the aesthetic options.',
    },
    {
      name: 'Sarah Martinez',
      role: 'Property Manager',
      company: 'Coastal Properties Group',
      content: 'We have installed Vuba Stone in 12 waterfront properties. Zero flood damage claims since installation. It is a game-changer.',
    },
    {
      name: 'Michael Chen',
      role: 'Architect',
      company: 'Chen Design Studio',
      content: 'The versatility of Vuba Stone allows us to create stunning designs while meeting Florida strict flood zone requirements.',
    },
  ]

  return (
    <Container className="py-24">
      <Subheading>Trusted by Florida Professionals</Subheading>
      <Heading as="h2" className="mt-2 max-w-3xl">
        Join thousands of satisfied contractors and homeowners
      </Heading>
      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-stone-200 to-stone-300" />
              <div>
                <div className="font-semibold text-stone-900">{testimonial.name}</div>
                <div className="text-sm text-stone-600">{testimonial.role}</div>
                <div className="text-xs text-stone-500">{testimonial.company}</div>
              </div>
            </div>
            <p className="text-stone-700 italic">&quot;{testimonial.content}&quot;</p>
          </div>
        ))}
      </div>
    </Container>
  )
}

function QuoteCalculator() {
  return (
    <div className="bg-gradient-to-br from-stone-900 to-stone-800 py-24" id="calculator">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Heading as="h2" className="text-white">
            Get Your Free Quote
          </Heading>
          <p className="mt-4 text-lg text-stone-300">
            Calculate your project cost and explore financing options
          </p>

          <div className="mt-12 bg-white/10 backdrop-blur rounded-2xl p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Project Size (sq ft)"
                  className="w-full rounded-lg bg-white/90 px-4 py-3 text-stone-900 placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-500"
                />
                <select className="w-full rounded-lg bg-white/90 px-4 py-3 text-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-500">
                  <option>Select Product</option>
                  <option>VubaMac Base System</option>
                  <option>Vuba Stone Classic</option>
                  <option>Vuba Stone Premium</option>
                  <option>Vuba Stone Ultra</option>
                </select>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-lg bg-white/90 px-4 py-3 text-stone-900 placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-500"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full rounded-lg bg-white/90 px-4 py-3 text-stone-900 placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-500"
                />
              </div>

              <Button className="w-full">
                Calculate Quote
              </Button>
            </form>

            <div className="mt-8 flex items-center justify-center gap-4 text-sm text-stone-300">
              <CheckCircleIcon className="h-5 w-5 text-stone-400" />
              <span>Free consultation included</span>
              <CheckCircleIcon className="h-5 w-5 text-stone-400" />
              <span>No obligation</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <FeatureSection />
        <ProductSection />
        <GallerySection />
        <TestimonialsSection />
        <QuoteCalculator />
      </main>
      <Footer />
      <ChatBot />
    </div>
  )
}