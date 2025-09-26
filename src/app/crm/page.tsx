'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { TWLogo } from '@/components/tw-logo'
import {
  HomeIcon,
  UsersIcon,
  ChartBarIcon,
  DocumentTextIcon,
  Cog6ToothIcon,
  ArrowTrendingUpIcon,
  XCircleIcon,
  ClockIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  CalendarIcon,
  PlusIcon,
  FunnelIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/solid'

const sidebarItems = [
  { icon: HomeIcon, label: 'Dashboard', active: true },
  { icon: UsersIcon, label: 'Leads' },
  { icon: FunnelIcon, label: 'Pipeline' },
  { icon: DocumentTextIcon, label: 'Customers' },
  { icon: ChartBarIcon, label: 'Reports' },
  { icon: Cog6ToothIcon, label: 'Settings' },
]

const metrics = [
  { label: 'Monthly Revenue', value: '$847,250', change: '+12.5%', positive: true },
  { label: 'Active Leads', value: '42', change: '+8', positive: true },
  { label: 'Conversion Rate', value: '23%', change: '+2.3%', positive: true },
  { label: 'Avg Deal Size', value: '$18,500', change: '-5.2%', positive: false },
]

const leads = [
  {
    id: 1,
    name: 'Marina Bay Towers',
    contact: 'John Davidson',
    value: '$125,000',
    status: 'Negotiating',
    statusColor: 'bg-yellow-500',
    location: 'Miami Beach, FL',
    phone: '(305) 555-0123',
    email: 'john.davidson@marinabaytowers.com',
    lastContact: '2 hours ago',
    product: 'Vuba Stone Ultra',
    size: '8,500 sq ft',
  },
  {
    id: 2,
    name: 'Coral Gables Residence',
    contact: 'Sarah Chen',
    value: '$45,000',
    status: 'Qualified',
    statusColor: 'bg-blue-500',
    location: 'Coral Gables, FL',
    phone: '(305) 555-0456',
    email: 'schen@email.com',
    lastContact: '1 day ago',
    product: 'Vuba Stone Premium',
    size: '3,200 sq ft',
  },
  {
    id: 3,
    name: 'Downtown Miami Plaza',
    contact: 'Marcus Rodriguez',
    value: '$280,000',
    status: 'Proposal Sent',
    statusColor: 'bg-purple-500',
    location: 'Downtown Miami, FL',
    phone: '(786) 555-0789',
    email: 'mrodriguez@plazadev.com',
    lastContact: '3 days ago',
    product: 'Vuba Stone Ultra',
    size: '15,000 sq ft',
  },
  {
    id: 4,
    name: 'Naples Golf Resort',
    contact: 'Amanda Williams',
    value: '$195,000',
    status: 'Negotiating',
    statusColor: 'bg-yellow-500',
    location: 'Naples, FL',
    phone: '(239) 555-0321',
    email: 'awilliams@naplesgolf.com',
    lastContact: '5 hours ago',
    product: 'Vuba Stone Classic',
    size: '12,000 sq ft',
  },
  {
    id: 5,
    name: 'Boca Retail Center',
    contact: 'David Kumar',
    value: '$88,000',
    status: 'New',
    statusColor: 'bg-green-500',
    location: 'Boca Raton, FL',
    phone: '(561) 555-0654',
    email: 'dkumar@bocaretail.com',
    lastContact: 'Just now',
    product: 'VubaMac Base System',
    size: '6,500 sq ft',
  },
]

const pipelineStages = [
  { name: 'New', count: 8, value: '$450,000', color: 'from-green-500 to-green-600' },
  { name: 'Qualified', count: 12, value: '$820,000', color: 'from-blue-500 to-blue-600' },
  { name: 'Proposal', count: 6, value: '$1,250,000', color: 'from-purple-500 to-purple-600' },
  { name: 'Negotiating', count: 9, value: '$2,100,000', color: 'from-yellow-500 to-yellow-600' },
  { name: 'Closed Won', count: 7, value: '$847,250', color: 'from-emerald-500 to-emerald-600' },
]

export default function CRM() {
  const [loading, setLoading] = useState(true)
  const [selectedLead, setSelectedLead] = useState<typeof leads[0] | null>(null)
  const [, setActiveSection] = useState('dashboard')

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500)
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-stone-900 to-stone-800 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <TWLogo className="h-16 mb-8 mx-auto" />
          <div className="flex gap-2 justify-center">
            <span className="h-3 w-3 bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <span className="h-3 w-3 bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
            <span className="h-3 w-3 bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
          <p className="mt-4 text-stone-400">Loading CRM Dashboard...</p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-stone-50 flex">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -250 }}
        animate={{ x: 0 }}
        className="w-64 bg-gradient-to-b from-stone-900 to-stone-800 text-white"
      >
        <div className="p-6">
          <TWLogo className="h-10" />
          <p className="text-xs text-stone-400 mt-2">CRM Dashboard</p>
        </div>

        <nav className="mt-8">
          {sidebarItems.map((item, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setActiveSection(item.label.toLowerCase())}
              className={`w-full flex items-center gap-3 px-6 py-3 transition-colors ${
                item.active
                  ? 'bg-white/10 border-l-4 border-teal-500 text-white'
                  : 'text-stone-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </motion.button>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-lg p-4">
            <p className="text-sm font-semibold">Pro Tip</p>
            <p className="text-xs mt-1 opacity-90">
              Use keyboard shortcuts (Ctrl+L) to quickly access leads
            </p>
          </div>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-stone-200 px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-stone-900">Dashboard</h1>
              <p className="text-sm text-stone-600">Welcome back, Sales Team</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-4 py-2 rounded-lg hover:from-teal-700 hover:to-cyan-700 transition-colors flex items-center gap-2">
                <PlusIcon className="h-4 w-4" />
                New Lead
              </button>
              <div className="h-10 w-10 bg-gradient-to-br from-stone-200 to-stone-300 rounded-full" />
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-8">
          {/* Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-stone-600">{metric.label}</p>
                  <div className={`flex items-center gap-1 text-sm ${
                    metric.positive ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {metric.positive ? (
                      <ArrowTrendingUpIcon className="h-4 w-4" />
                    ) : (
                      <ArrowTrendingUpIcon className="h-4 w-4 rotate-180" />
                    )}
                    {metric.change}
                  </div>
                </div>
                <p className="text-2xl font-bold text-stone-900">{metric.value}</p>
              </motion.div>
            ))}
          </div>

          {/* Pipeline Overview */}
          <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
            <h2 className="text-lg font-semibold text-stone-900 mb-6">Pipeline Overview</h2>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
              {pipelineStages.map((stage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className={`bg-gradient-to-br ${stage.color} rounded-lg p-4 text-white`}>
                    <p className="text-sm font-medium opacity-90">{stage.name}</p>
                    <p className="text-2xl font-bold mt-2">{stage.count}</p>
                    <p className="text-sm mt-1 opacity-90">{stage.value}</p>
                  </div>
                  {index < pipelineStages.length - 1 && (
                    <ChevronRightIcon className="absolute -right-3 top-1/2 -translate-y-1/2 h-6 w-6 text-stone-300" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Recent Leads */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-stone-200 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-stone-900">Recent Leads</h2>
              <button className="text-sm text-teal-600 hover:text-teal-700">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-stone-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase">Project</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase">Contact</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase">Location</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase">Value</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase">Last Contact</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  {leads.map((lead, index) => (
                    <motion.tr
                      key={lead.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="hover:bg-stone-50 transition-colors cursor-pointer"
                      onClick={() => setSelectedLead(lead)}
                    >
                      <td className="px-6 py-4">
                        <div>
                          <p className="text-sm font-medium text-stone-900">{lead.name}</p>
                          <p className="text-xs text-stone-500">{lead.product} • {lead.size}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-stone-900">{lead.contact}</p>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1 text-sm text-stone-600">
                          <MapPinIcon className="h-4 w-4" />
                          {lead.location}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm font-semibold text-stone-900">{lead.value}</p>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-2 py-1 text-xs font-medium text-white rounded-full ${lead.statusColor}`}>
                          {lead.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-stone-500">{lead.lastContact}</p>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button className="text-stone-400 hover:text-teal-600">
                            <PhoneIcon className="h-4 w-4" />
                          </button>
                          <button className="text-stone-400 hover:text-teal-600">
                            <EnvelopeIcon className="h-4 w-4" />
                          </button>
                          <button className="text-stone-400 hover:text-teal-600">
                            <CalendarIcon className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Lead Detail Modal */}
      {selectedLead && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedLead(null)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-stone-200">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-stone-900">{selectedLead.name}</h2>
                  <p className="text-sm text-stone-600">{selectedLead.location}</p>
                </div>
                <button
                  onClick={() => setSelectedLead(null)}
                  className="text-stone-400 hover:text-stone-600"
                >
                  <XCircleIcon className="h-6 w-6" />
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-xs text-stone-500 uppercase mb-1">Contact Person</p>
                  <p className="text-sm font-medium text-stone-900">{selectedLead.contact}</p>
                </div>
                <div>
                  <p className="text-xs text-stone-500 uppercase mb-1">Deal Value</p>
                  <p className="text-sm font-medium text-stone-900">{selectedLead.value}</p>
                </div>
                <div>
                  <p className="text-xs text-stone-500 uppercase mb-1">Product</p>
                  <p className="text-sm font-medium text-stone-900">{selectedLead.product}</p>
                </div>
                <div>
                  <p className="text-xs text-stone-500 uppercase mb-1">Project Size</p>
                  <p className="text-sm font-medium text-stone-900">{selectedLead.size}</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-sm">
                  <PhoneIcon className="h-4 w-4 text-stone-400" />
                  <span className="text-stone-900">{selectedLead.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <EnvelopeIcon className="h-4 w-4 text-stone-400" />
                  <span className="text-stone-900">{selectedLead.email}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <ClockIcon className="h-4 w-4 text-stone-400" />
                  <span className="text-stone-900">Last contact: {selectedLead.lastContact}</span>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-4 py-2 rounded-lg hover:from-teal-700 hover:to-cyan-700 transition-colors">
                  Send Proposal
                </button>
                <button className="flex-1 border border-stone-200 text-stone-700 px-4 py-2 rounded-lg hover:bg-stone-50 transition-colors">
                  Schedule Meeting
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}