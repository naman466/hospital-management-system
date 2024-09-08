'use client'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2 } from "lucide-react"
import Link from "next/link"
import { useRouter } from 'next/navigation'


const branches = [
  { id: 1, name: "Central Hospital" },
  { id: 2, name: "North Wing Clinic" },
  { id: 3, name: "South Side Medical Center" },
]
 
export default function TransferRequestPage() {
  const [patientName, setPatientName] = useState('')
  const [patientId, setPatientId] = useState('')
  const [currentBranch, setCurrentBranch] = useState('')
  const [targetBranch, setTargetBranch] = useState('')
  const [reason, setReason] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const router = useRouter();
 
  if (isSubmitted) {
    return (
      <Card className="w-full max-w-md mx-auto mt-8">
        <CardHeader>
          <CardTitle>Transfer Request Submitted</CardTitle>
          <CardDescription>Your transfer request has been successfully submitted. We will process it shortly.</CardDescription>
        </CardHeader>
      </Card>
    )
  }
 
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

    <main className="container mx-auto px-4 py-8">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Patient Transfer Request</CardTitle>
          <CardDescription>Fill out this form to request a patient transfer between branches.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="patientName">Patient Name</Label>
              <Input
                id="patientName"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="patientId">Patient ID</Label>
              <Input
                id="patientId"
                value={patientId}
                onChange={(e) => setPatientId(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="currentBranch">Current Branch</Label>
              <Select value={currentBranch} onValueChange={setCurrentBranch}>
                <SelectTrigger>
                  <SelectValue placeholder="Select current branch" />
                </SelectTrigger>
                <SelectContent>
                  {branches.map((branch) => (
                    <SelectItem key={branch.id} value={branch.name}>{branch.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="targetBranch">Target Branch</Label>
              <Select value={targetBranch} onValueChange={setTargetBranch}>
                <SelectTrigger>
                  <SelectValue placeholder="Select target branch" />
                </SelectTrigger>
                <SelectContent>
                  {branches.map((branch) => (
                    <SelectItem key={branch.id} value={branch.name}>{branch.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="reason">Reason for Transfer</Label>
              <Textarea
                id="reason"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="Please provide a reason for the transfer request..."
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                'Submit Transfer Request'
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
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
