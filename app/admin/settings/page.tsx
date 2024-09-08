'use client'

import { useState } from 'react'
import Link from "next/link"
import { BedDouble, Pill, Users, Settings, UserPlus, LayoutDashboard, LogOut, Plus, Trash } from "lucide-react"

type Department = { id: string; name: string }
type Doctor = { id: string; name: string; department: string }
type StaffRole = { id: string; name: string }

export default function SettingsAdministration() {
  const [departments, setDepartments] = useState<Department[]>([
    { id: 'D001', name: 'Cardiology' },
    { id: 'D002', name: 'Neurology' },
  ])
  const [doctors, setDoctors] = useState<Doctor[]>([
    { id: 'DR001', name: 'Dr. John Smith',  department: 'Cardiology' },
    { id: 'DR002', name: 'Dr. Jane Doe', department: 'Neurology' },
  ])
  const [staffRoles, setStaffRoles] = useState<StaffRole[]>([
    { id: 'R001', name: 'Nurse' },
    { id: 'R002', name: 'Technician' },
  ])
  const [hospitalInfo, setHospitalInfo] = useState({
    name: 'City General Hospital',
    address: '123 Medical Center Blvd, City, State 12345',
    phone: '(555) 123-4567',
    capacity: '200',
  })

  const [newDepartment, setNewDepartment] = useState('')
  const [newDoctor, setNewDoctor] = useState({ name: '', department: '' })
  const [newStaffRole, setNewStaffRole] = useState('')

  const handleAddDepartment = (e: React.FormEvent) => {
    e.preventDefault()
    const id = `D${(departments.length + 1).toString().padStart(3, '0')}`
    setDepartments(prev => [...prev, { id, name: newDepartment }])
    setNewDepartment('')
  }

  const handleAddDoctor = (e: React.FormEvent) => {
    e.preventDefault()
    const id = `DR${(doctors.length + 1).toString().padStart(3, '0')}`
    setDoctors(prev => [...prev, { id, ...newDoctor }])
    setNewDoctor({ name: '', department: '' })
  }

  const handleAddStaffRole = (e: React.FormEvent) => {
    e.preventDefault()
    const id = `R${(staffRoles.length + 1).toString().padStart(3, '0')}`
    setStaffRoles(prev => [...prev, { id, name: newStaffRole }])
    setNewStaffRole('')
  }

  const handleHospitalInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setHospitalInfo(prev => ({ ...prev, [name]: value }))
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
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">Settings / Administration</h1>
            <div className="flex items-center">
              <span className="text-sm text-gray-600 dark:text-gray-300 mr-2">Dr. Jane Doe</span>
              <img className="w-8 h-8 rounded-full" src="/placeholder.svg?height=32&width=32" alt="User avatar" />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-100 dark:bg-gray-900">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Departments</h2>
              <form onSubmit={handleAddDepartment} className="mb-4 flex">
                <input
                  type="text"
                  value={newDepartment}
                  onChange={(e) => setNewDepartment(e.target.value)}
                  placeholder="New Department"
                  className="flex-1 p-2 border border-gray-300 rounded-l-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
                >
                  <Plus className="h-5 w-5" />
                </button>
              </form>
              <ul className="space-y-2">
                {departments.map((dept) => (
                  <li key={dept.id} className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300">{dept.name}</span>
                    <button
                      onClick={() => setDepartments(prev => prev.filter(d => d.id !== dept.id))}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash className="h-4 w-4" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Doctors</h2>
              <form onSubmit={handleAddDoctor} className="mb-4 space-y-2">
                <input
                  type="text"
                  value={newDoctor.name}
                  onChange={(e) => setNewDoctor(prev => ({...prev, name: e.target.value}))}
                  placeholder="Doctor Name"
                  className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                />
                <select
                  value={newDoctor.department}
                  onChange={(e) => setNewDoctor(prev => ({...prev, department: e.target.value}))}
                  className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                >
                  <option value="">Select Department</option>
                  {departments.map((dept) => (
                    <option key={dept.id} value={dept.name}>{dept.name}</option>
                  ))}
                </select>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                >
                  Add Doctor
                </button>
              </form>
              <ul className="space-y-2">
                {doctors.map((doctor) => (
                  <li key={doctor.id} className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300">{doctor.name} - {doctor.department}</span>
                    <button
                      onClick={() => setDoctors(prev => prev.filter(d => d.id !== doctor.id))}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash className="h-4 w-4" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Staff Roles</h2>
              <form onSubmit={handleAddStaffRole} className="mb-4 flex">
                <input
                  type="text"
                  value={newStaffRole}
                  onChange={(e) => setNewStaffRole(e.target.value)}
                  placeholder="New Staff Role"
                  className="flex-1 p-2 border border-gray-300 rounded-l-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
                >
                  <Plus className="h-5 w-5" />
                </button>
              </form>
              <ul className="space-y-2">
                {staffRoles.map((role) => (
                  <li key={role.id} className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300">{role.name}</span>
                    <button
                      onClick={() => setStaffRoles(prev => prev.filter(r => r.id !== role.id))}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash className="h-4 w-4" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Hospital Information</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Hospital Name</label>
                  <input
                    type="text"
                    name="name"
                    value={hospitalInfo.name}
                    onChange={handleHospitalInfoChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={hospitalInfo.address}
                    onChange={handleHospitalInfoChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    value={hospitalInfo.phone}
                    onChange={handleHospitalInfoChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Capacity</label>
                  <input
                    type="number"
                    name="capacity"
                    value={hospitalInfo.capacity}
                    onChange={handleHospitalInfoChange}
                    className="mt-1 w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}