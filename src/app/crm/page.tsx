'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TWLogo } from '@/components/tw-logo'
import Image from 'next/image'
import {
  HomeIcon,
  UsersIcon,
  ChartBarIcon,
  DocumentTextIcon,
  Cog6ToothIcon,
  ArrowTrendingUpIcon,
  FunnelIcon,
  ChevronRightIcon,
  PlusIcon,
  MagnifyingGlassIcon,
  BellIcon,
  UserCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  CalendarIcon,
  ClockIcon,
  CurrencyDollarIcon,
  BuildingOfficeIcon,
  TagIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Overview', icon: HomeIcon, current: true },
  { name: 'Leads', icon: UsersIcon, current: false },
  { name: 'Deals', icon: CurrencyDollarIcon, current: false },
  { name: 'Companies', icon: BuildingOfficeIcon, current: false },
  { name: 'Analytics', icon: ChartBarIcon, current: false },
]

const stats = [
  { name: 'Revenue This Month', value: '$847,250', change: '+12.5%', changeType: 'positive' },
  { name: 'New Leads', value: '42', change: '+8', changeType: 'positive' },
  { name: 'Conversion Rate', value: '23%', change: '+2.3%', changeType: 'positive' },
  { name: 'Average Deal Size', value: '$18,500', change: '-5.2%', changeType: 'negative' },
]

const recentDeals = [
  {
    id: 1,
    company: 'Marina Bay Towers',
    contact: 'John Davidson',
    value: 125000,
    stage: 'Negotiation',
    probability: 75,
    closeDate: '2024-02-15',
    owner: 'Sarah Mitchell',
    product: 'Vuba Stone Ultra - 8,500 sq ft',
    lastActivity: '2 hours ago',
  },
  {
    id: 2,
    company: 'Coral Gables Residence',
    contact: 'Sarah Chen',
    value: 45000,
    stage: 'Qualification',
    probability: 30,
    closeDate: '2024-03-01',
    owner: 'Mike Rodriguez',
    product: 'Vuba Stone Premium - 3,200 sq ft',
    lastActivity: '1 day ago',
  },
  {
    id: 3,
    company: 'Downtown Miami Plaza',
    contact: 'Marcus Rodriguez',
    value: 280000,
    stage: 'Proposal',
    probability: 60,
    closeDate: '2024-02-28',
    owner: 'Sarah Mitchell',
    product: 'Vuba Stone Ultra - 15,000 sq ft',
    lastActivity: '3 days ago',
  },
  {
    id: 4,
    company: 'Naples Golf Resort',
    contact: 'Amanda Williams',
    value: 195000,
    stage: 'Negotiation',
    probability: 80,
    closeDate: '2024-02-20',
    owner: 'Mike Rodriguez',
    product: 'Vuba Stone Classic - 12,000 sq ft',
    lastActivity: '5 hours ago',
  },
]

const stageColors = {
  'Qualification': 'bg-blue-100 text-blue-800 border-blue-200',
  'Proposal': 'bg-purple-100 text-purple-800 border-purple-200',
  'Negotiation': 'bg-yellow-100 text-yellow-800 border-yellow-200',
  'Closed Won': 'bg-green-100 text-green-800 border-green-200',
  'Closed Lost': 'bg-red-100 text-red-800 border-red-200',
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function CRM() {
  const [loading, setLoading] = useState(true)
  const [selectedDeal, setSelectedDeal] = useState<typeof recentDeals[0] | null>(null)

  useEffect(() => {
    setTimeout(() => setLoading(false), 800)
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <div className="animate-pulse">
            <div className="h-2 w-48 bg-gradient-to-r from-stone-600 to-stone-700 rounded-full mx-auto" />
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Top Navigation Bar */}
      <header className="bg-white border-b border-gray-200">
        <div className="px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <TWLogo className="h-8" showText={false} />
              <nav className="hidden md:flex space-x-1">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    className={classNames(
                      item.current
                        ? 'bg-gray-100 text-gray-900'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50',
                      'px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 flex items-center gap-2'
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.name}
                  </button>
                ))}
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search deals, contacts..."
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-transparent w-64"
                />
              </div>
              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
                <BellIcon className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
                <UserCircleIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="px-6 py-8 max-w-7xl mx-auto">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <motion.div
              key={stat.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <p className="text-sm text-gray-600">{stat.name}</p>
              <p className="text-2xl font-semibold text-gray-900 mt-2">{stat.value}</p>
              <div className="flex items-center mt-2">
                {stat.changeType === 'positive' ? (
                  <ArrowUpIcon className="h-4 w-4 text-green-500 mr-1" />
                ) : (
                  <ArrowDownIcon className="h-4 w-4 text-red-500 mr-1" />
                )}
                <span className={classNames(
                  stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600',
                  'text-sm font-medium'
                )}>
                  {stat.change}
                </span>
                <span className="text-sm text-gray-500 ml-2">vs last month</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Deals Table */}
        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Active Deals</h2>
                <p className="text-sm text-gray-600 mt-1">Track and manage your sales pipeline</p>
              </div>
              <div className="flex items-center gap-3">
                <button className="px-4 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors flex items-center gap-2">
                  <FunnelIcon className="h-4 w-4" />
                  Filter
                </button>
                <button className="px-4 py-2 text-sm bg-gradient-to-r from-stone-700 to-stone-800 text-white rounded-lg hover:from-stone-800 hover:to-stone-900 transition-colors flex items-center gap-2">
                  <PlusIcon className="h-4 w-4" />
                  New Deal
                </button>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50/50 border-b border-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left">
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-medium text-gray-600 uppercase tracking-wider">Company</span>
                      <ChevronDownIcon className="h-3 w-3 text-gray-400" />
                    </div>
                  </th>
                  <th className="px-6 py-3 text-left">
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-medium text-gray-600 uppercase tracking-wider">Value</span>
                      <ChevronDownIcon className="h-3 w-3 text-gray-400" />
                    </div>
                  </th>
                  <th className="px-6 py-3 text-left">
                    <span className="text-xs font-medium text-gray-600 uppercase tracking-wider">Stage</span>
                  </th>
                  <th className="px-6 py-3 text-left">
                    <span className="text-xs font-medium text-gray-600 uppercase tracking-wider">Probability</span>
                  </th>
                  <th className="px-6 py-3 text-left">
                    <span className="text-xs font-medium text-gray-600 uppercase tracking-wider">Close Date</span>
                  </th>
                  <th className="px-6 py-3 text-left">
                    <span className="text-xs font-medium text-gray-600 uppercase tracking-wider">Owner</span>
                  </th>
                  <th className="px-6 py-3 text-left">
                    <span className="text-xs font-medium text-gray-600 uppercase tracking-wider">Activity</span>
                  </th>
                  <th className="px-6 py-3 text-right">
                    <span className="text-xs font-medium text-gray-600 uppercase tracking-wider">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {recentDeals.map((deal) => (
                  <motion.tr
                    key={deal.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="hover:bg-gray-50/50 transition-colors cursor-pointer"
                    onClick={() => setSelectedDeal(deal)}
                  >
                    <td className="px-6 py-4">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{deal.company}</div>
                        <div className="text-xs text-gray-500">{deal.contact}</div>
                        <div className="text-xs text-gray-400 mt-1">{deal.product}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-semibold text-gray-900">
                        ${deal.value.toLocaleString()}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={classNames(
                        stageColors[deal.stage as keyof typeof stageColors] || 'bg-gray-100 text-gray-800',
                        'inline-flex px-2.5 py-0.5 text-xs font-medium rounded-full border'
                      )}>
                        {deal.stage}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                          <div
                            className="bg-gradient-to-r from-stone-600 to-stone-700 h-2 rounded-full"
                            style={{ width: `${deal.probability}%` }}
                          />
                        </div>
                        <span className="text-sm text-gray-600">{deal.probability}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">{deal.closeDate}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="h-6 w-6 rounded-full bg-gradient-to-br from-stone-400 to-stone-600 mr-2" />
                        <span className="text-sm text-gray-900">{deal.owner}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center text-xs text-gray-500">
                        <ClockIcon className="h-3 w-3 mr-1" />
                        {deal.lastActivity}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                          <PhoneIcon className="h-4 w-4" />
                        </button>
                        <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                          <EnvelopeIcon className="h-4 w-4" />
                        </button>
                        <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
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

        {/* Pipeline View */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Pipeline Overview</h2>
          <div className="grid grid-cols-5 gap-4">
            {['Qualification', 'Proposal', 'Negotiation', 'Contract', 'Closed'].map((stage, index) => (
              <div key={stage} className="bg-white rounded-lg border border-gray-100 p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-medium text-gray-900">{stage}</h3>
                  <span className="text-xs text-gray-500">
                    ${(Math.random() * 500000).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </span>
                </div>
                <div className="space-y-2">
                  {[1, 2].map((card) => (
                    <div key={card} className="bg-gray-50 rounded-lg p-3 border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
                      <div className="text-xs font-medium text-gray-900">Sample Deal {card}</div>
                      <div className="text-xs text-gray-500 mt-1">$25,000</div>
                      <div className="flex items-center mt-2">
                        <div className="h-4 w-4 rounded-full bg-gradient-to-br from-stone-400 to-stone-600" />
                        <span className="text-xs text-gray-500 ml-1">2 days ago</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}