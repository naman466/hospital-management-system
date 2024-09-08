'use client'
import { useState } from 'react'
import Link from "next/link"
import { BedDouble, Pill, Users, Settings, UserPlus, LayoutDashboard, LogOut, Plus, Bed} from "lucide-react"

type Bed = {
  id: string
  ward: 'General' | 'ICU' | 'Emergency'
  status: 'available' | 'occupied'
  patientName?: string
}

export default function BedAvailabilityDashboard() {
  const [beds, setBeds] = useState<Bed[]>([
    { id: 'B001', ward: 'General', status: 'available' },
    { id: 'B002', ward: 'ICU', status: 'occupied', patientName: 'John Doe' },
    { id: 'B003', ward: 'Emergency', status: 'available' },
    { id: 'B004', ward: 'General', status: 'occupied', patientName: 'Jane Smith' },
  ])

  const [filter, setFilter] = useState<'General' | 'ICU' | 'Emergency' | 'All'>('All')
  const [newPatient, setNewPatient] = useState({ name: '', bedId: '' })

  const handleAdmitPatient = (e: React.FormEvent) => {
    e.preventDefault()
    setBeds(prev => prev.map(bed => 
      bed.id === newPatient.bedId ? { ...bed, status: 'occupied', patientName: newPatient.name } : bed
    ))
    setNewPatient({ name: '', bedId: '' })
  }

  const filteredBeds = filter === 'All' ? beds : beds.filter(bed => bed.ward === filter)

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center h-16 border-b border-gray-200 dark:border-gray-700">
            <span className="text-lg font-bold text-gray-800 dark:text-white">Hospital Management</span>
          </div>
          <nav className="flex-1 overflow-y-auto">
            <ul className="p-4 space-y-2">
              <li>
                <Link href="/admin/dashboard" className="flex items-center p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
                  <LayoutDashboard className="w-5 h-5 mr-3" />
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/admin/opd" className="flex items-center p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
                  <Users className="w-5 h-5 mr-3" />
                  OPD Queue
                </Link>
              </li>
              <li>
                <Link href="/admin/beds" className="flex items-center p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
                  <BedDouble className="w-5 h-5 mr-3" />
                  Bed Availability
                </Link>
              </li>
              <li>
                <Link href="/admin/inventory" className="flex items-center p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
                  <Pill className="w-5 h-5 mr-3" />
                  Inventory
                </Link>
              </li>
              <li>
                <Link href="/admin/admission" className="flex items-center p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
                  <UserPlus className="w-5 h-5 mr-3" />
                  Patient Admission
                </Link>
              </li>
              <li>
                <Link href="/admin/settings" className="flex items-center p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
                  <Settings className="w-5 h-5 mr-3" />
                  Settings
                </Link>
              </li>
            </ul>
          </nav>
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <Link href="/login" className="flex items-center w-full p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
                    <LogOut className="w-5 h-5 mr-3" />
                    Logout
                </Link>
                </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between px-6 py-3">
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">Bed Availability Dashboard</h1>
            <div className="flex items-center">
              <span className="text-sm text-gray-600 dark:text-gray-300 mr-2">Dr. Jane Doe</span>
              <img className="w-8 h-8 rounded-full" src="/placeholder.svg?height=32&width=32" alt="User avatar" />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-100 dark:bg-gray-900">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Admit Patient</h2>
            <form onSubmit={handleAdmitPatient} className="flex space-x-4">
              <input
                type="text"
                value={newPatient.name}
                onChange={(e) => setNewPatient(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Patient Name"
                className="flex-1 p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
              <select
                value={newPatient.bedId}
                onChange={(e) => setNewPatient(prev => ({ ...prev, bedId: e.target.value }))}
                className="flex-1 p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              >
                <option value="">Select Bed</option>
                {beds.filter(bed => bed.status === 'available').map(bed => (
                  <option key={bed.id} value={bed.id}>{bed.id} - {bed.ward}</option>
                ))}
              </select>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
              >
                <Plus className="inline-block mr-2 h-4 w-4" />
                Admit
              </button>
            </form>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="p-4 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Bed Status</h2>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value as any)}
                className="p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                <option value="All">All Wards</option>
                <option value="General">General</option>
                <option value="ICU">ICU</option>
                <option value="Emergency">Emergency</option>
              </select>
            </div>
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Bed ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Ward</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Patient</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {filteredBeds.map((bed) => (
                  <tr key={bed.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Bed className="h-5 w-5 text-gray-400 mr-2" />
                        <div className="text-sm font-medium text-gray-900 dark:text-white">{bed.id}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{bed.ward}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        bed.status === 'available' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {bed.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{bed.patientName || '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  )
}