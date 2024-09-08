'use client'

import { useState } from 'react'
import Link from "next/link"
import { BedDouble, Pill, Users, Settings, UserPlus, LayoutDashboard, LogOut, Plus, User, MoreVertical} from "lucide-react"
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

type Patient = {
  id: number
  name: string
  status: 'waiting' | 'consulting' | 'completed'
  department: string
  reason: string
}

export default function OPDQueueManagement() {
  const [patients, setPatients] = useState<Patient[]>([
    { id: 1, name: 'John Doe', status: 'waiting', department: 'General', reason: 'Fever' },
    { id: 2, name: 'Jane Smith', status: 'consulting', department: 'Cardiology', reason: 'Chest pain' },
    { id: 3, name: 'Bob Johnson', status: 'waiting', department: 'Orthopedics', reason: 'Back pain' },
  ])

  const [newPatient, setNewPatient] = useState({
    name: '',
    age: '',
    department: '',
    reason: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setNewPatient(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const id = patients.length + 1
    setPatients(prev => [...prev, { ...newPatient, id, status: 'waiting' } as Patient])
    setNewPatient({ name: '', age: '', department: '', reason: '' })
  }

  const updatePatientStatus = (id: number, newStatus: 'waiting' | 'consulting' | 'completed') => {
    setPatients(prev =>
      prev.map(patient =>
        patient.id === id ? { ...patient, status: newStatus } : patient
      )
    )
  }

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
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">OPD Queue Management</h1>
            <div className="flex items-center">
              <span className="text-sm text-gray-600 dark:text-gray-300 mr-2">Dr. Jane Doe</span>
              <img className="w-8 h-8 rounded-full" src="/placeholder.svg?height=32&width=32" alt="User avatar" />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-100 dark:bg-gray-900">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Add New Patient</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={newPatient.name}
                  onChange={handleInputChange}
                  placeholder="Patient Name"
                  className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                />
                <input
                  type="number"
                  name="age"
                  value={newPatient.age}
                  onChange={handleInputChange}
                  placeholder="Age"
                  className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                />
                <select
                  name="department"
                  value={newPatient.department}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                >
                  <option value="">Select Department</option>
                  <option value="General">General</option>
                  <option value="Cardiology">Cardiology</option>
                  <option value="Orthopedics">Orthopedics</option>
                  <option value="Pediatrics">Pediatrics</option>
                </select>
                <input
                  type="text"
                  name="reason"
                  value={newPatient.reason}
                  onChange={handleInputChange}
                  placeholder="Reason for Visit"
                  className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
              >
                <Plus className="inline-block mr-2 h-4 w-4" />
                Add Patient
              </button>
            </form>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Department</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Reason</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {patients.map((patient) => (
                  <tr key={patient.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <User className="h-5 w-5 text-gray-400 mr-2" />
                        <div className="text-sm font-medium text-gray-900 dark:text-white">{patient.name}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        patient.status === 'waiting' ? 'bg-yellow-100 text-yellow-800' : 
                        patient.status === 'consulting' ? 'bg-green-100 text-green-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {patient.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{patient.department}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{patient.reason}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <DropdownMenu.Root>
                        <DropdownMenu.Trigger asChild>
                          <button className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                            <MoreVertical className="h-5 w-5" />
                          </button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Portal>
                          <DropdownMenu.Content className="bg-white dark:bg-gray-800 rounded-md shadow-lg p-1">
                            <DropdownMenu.Item 
                              className="px-2 py-1 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md cursor-pointer"
                              onSelect={() => updatePatientStatus(patient.id, 'waiting')}
                            >
                              Set to Waiting
                            </DropdownMenu.Item>
                            <DropdownMenu.Item 
                              className="px-2 py-1 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md cursor-pointer"
                              onSelect={() => updatePatientStatus(patient.id, 'consulting')}
                            >
                              Set to Consulting
                            </DropdownMenu.Item>
                            <DropdownMenu.Item 
                              className="px-2 py-1 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md cursor-pointer"
                              onSelect={() => updatePatientStatus(patient.id, 'completed')}
                            >
                              Set to Completed
                            </DropdownMenu.Item>
                          </DropdownMenu.Content>
                        </DropdownMenu.Portal>
                      </DropdownMenu.Root>
                    </td>
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