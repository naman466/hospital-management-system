'use client'
import React, { useState } from 'react'
import { Search } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from 'next/navigation'

// Mock data for hospitals
const hospitals = [
  { id: 1, name: 'City General Hospital', opdAvailability: 'Available', bedsAvailable: 45, isOpen: true },
  { id: 2, name: 'Sunshine Medical Center', opdAvailability: 'Limited', bedsAvailable: 12, isOpen: true },
  { id: 3, name: 'Greenwood Health Institute', opdAvailability: 'Unavailable', bedsAvailable: 0, isOpen: false },
  { id: 4, name: 'Riverside Community Hospital', opdAvailability: 'Available', bedsAvailable: 28, isOpen: true },
  { id: 5, name: 'Mountain View Clinic', opdAvailability: 'Available', bedsAvailable: 5, isOpen: true },
]

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterOpen, setFilterOpen] = useState(false)

  const filteredHospitals = hospitals.filter(hospital => 
    hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterOpen ? hospital.isOpen : true)
  )
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex flex-wrap justify-between items-center">
            <Link href="/" className="text-2xl font-bold mb-2 sm:mb-0">
              MediCare Hospital
            </Link>
            <div className="flex flex-wrap space-x-4 items-center">
              <Link href="/about" className="hover:underline">
                About
              </Link>
              <Link href="/locations" className="hover:underline">
                Locations
              </Link>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
              <Link href="/specialties" className="hover:underline">
                Specialties
              </Link>
              <Link href="/transfer" className="hover:underline">
                Transfer
              </Link>
              <Link href="/login" className="hover:underline">
                Login
              </Link>
              <Link href = '/status' className="hover:underline">
              Status
              </Link>
              <Button variant="secondary" onClick={() => router.push('/appointment')}>Book Appointment</Button>
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <div className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Other locations</h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
              <div className="relative w-full sm:w-64 mb-4 sm:mb-0">
                <input
                  type="text"
                  placeholder="Search hospitals..."
                  className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>
              <div className="flex items-center">
                <label htmlFor="filterOpen" className="mr-2 text-sm font-medium text-gray-700">Show only open</label>
                <input
                  id="filterOpen"
                  type="checkbox"
                  className="rounded text-blue-500 focus:ring-blue-500"
                  checked={filterOpen}
                  onChange={(e) => setFilterOpen(e.target.checked)}
                />
              </div>
            </div>
            <div className="bg-white shadow overflow-hidden sm:rounded-md">
              <ul className="divide-y divide-gray-200">
                {filteredHospitals.map((hospital) => (
                  <li key={hospital.id}>
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-blue-600 truncate">{hospital.name}</p>
                        <div className="ml-2 flex-shrink-0 flex">
                          <p className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            hospital.isOpen ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {hospital.isOpen ? 'Open' : 'Closed'}
                          </p>
                        </div>
                      </div>
                      <div className="mt-2 sm:flex sm:justify-between">
                        <div className="sm:flex">
                          <p className="flex items-center text-sm text-gray-500">
                            OPD: {hospital.opdAvailability}
                          </p>
                          <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                            Beds Available: {hospital.bedsAvailable}
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-muted">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="hover:underline">About Us</Link></li>
                <li><Link href="/locations" className="hover:underline">Locations</Link></li>
                <li><Link href="/specialties" className="hover:underline">Specialties</Link></li>
                <li><Link href="/transfer" className="hover:underline">Transfer</Link></li>
                <li><Link href="/review" className="hover:underline">Give a Review</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Departments</h3>
              <ul className="space-y-2">
                <li><Link href="/emergency" className="hover:underline">Emergency</Link></li>
                <li><Link href="/outpatient" className="hover:underline">Outpatient</Link></li>
                <li><Link href="/inpatient" className="hover:underline">Inpatient</Link></li>
                <li><Link href="/icu" className="hover:underline">ICU</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact Information</h3>
              <p>123 Hospital Street</p>
              <p>City, State 12345</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: info@medicare.com</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Newsletter</h3>
              <p className="mb-2">Stay updated with our latest news and offers</p>
              <form className="flex">
                <Input type="email" placeholder="Your email" className="mr-2" />
                <Button type="submit">Subscribe</Button>
              </form>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 MediCare Hospital. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}