'use client'
import { useState } from 'react'
import { Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function OPDStatus() {
  const [searchTerm, setSearchTerm] = useState('')
  const [status, setStatus] = useState(null)

  const handleSearch = (e) => {
    e.preventDefault()
    // This is where you would typically make an API call to fetch the status
    // For demonstration, we'll use a mock status
    setStatus({
      position: 5,
      estimatedWaitTime: '30 minutes'
    })
  }

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
            <Button variant="secondary"  onClick={() => router.push('/appointment')}>Book Appointment</Button>
          </div>
        </nav>
      </div>
    </header>
    <main className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link href="/status" className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  OPD Status
                </Link>
                <Link href="/availability" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Bed Availability
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">OPD Status</h1>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <form onSubmit={handleSearch} className="mt-5 sm:flex sm:items-center">
                <div className="w-full sm:max-w-xs">
                  <label htmlFor="search" className="sr-only">Search by Name or ID</label>
                  <input
                    type="text"
                    name="search"
                    id="search"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="Enter Name or ID"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="mt-3 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  <Search className="h-5 w-5 mr-2" />
                  Search
                </button>
              </form>
              {status && (
                <div className="mt-6">
                  <h2 className="text-lg leading-6 font-medium text-gray-900">Your OPD Status</h2>
                  <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="bg-white overflow-hidden shadow rounded-lg">
                      <div className="px-4 py-5 sm:p-6">
                        <dt className="text-sm font-medium text-gray-500 truncate">Current Position</dt>
                        <dd className="mt-1 text-3xl font-semibold text-gray-900">{status.position}</dd>
                      </div>
                    </div>
                    <div className="bg-white overflow-hidden shadow rounded-lg">
                      <div className="px-4 py-5 sm:p-6">
                        <dt className="text-sm font-medium text-gray-500 truncate">Estimated Wait Time</dt>
                        <dd className="mt-1 text-3xl font-semibold text-gray-900">{status.estimatedWaitTime}</dd>
                      </div>
                    </div>
                  </dl>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
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