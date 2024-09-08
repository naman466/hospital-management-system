'use client'
 
import { useState } from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { CalendarIcon, Loader2 } from "lucide-react"
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { useRouter } from 'next/navigation'

 
const departments = [
  "Cardiology",
  "Neurology",
  "Orthopedics",
  "Pediatrics",
  "Dermatology",
  "Ophthalmology",
]
 
const doctors = [
  { name: "Dr. John Smith", department: "Cardiology" },
  { name: "Dr. Sarah Johnson", department: "Neurology" },
  { name: "Dr. Michael Lee", department: "Orthopedics" },
  { name: "Dr. Emily Brown", department: "Pediatrics" },
]
 
export default function AppointmentBooking() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [date, setDate] = useState<Date>()
  const [department, setDepartment] = useState('')
  const [doctor, setDoctor] = useState('')
  const [medicalHistory, setMedicalHistory] = useState('')
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

      <main className="flex-grow container mx-auto px-4 py-8">
        {isSubmitted ? (
          <Card className="w-full max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Appointment Request Submitted</CardTitle>
              <CardDescription>Thank you for your appointment request. We will review it and get back to you soon.</CardDescription>
            </CardHeader>
          </Card>
        ) : (
          <Card className="w-full max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Book an Appointment</CardTitle>
              <CardDescription>Please fill out the form below to request an appointment.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                  </div>
                  <div className="space-y-2">
                    <Label>Preferred Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <Select value={department} onValueChange={setDepartment}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a department" />
                    </SelectTrigger>
                    <SelectContent>
                      {departments.map((dept) => (
                        <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="doctor">Preferred Doctor (Optional)</Label>
                  <Select value={doctor} onValueChange={setDoctor}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a doctor (optional)" />
                    </SelectTrigger>
                    <SelectContent>
                      {doctors
                        .filter((doc) => !department || doc.department === department)
                        .map((doc) => (
                          <SelectItem key={doc.name} value={doc.name}>{doc.name}</SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="medicalHistory">Medical Problem/History</Label>
                  <Textarea 
                    id="medicalHistory" 
                    value={medicalHistory} 
                    onChange={(e) => setMedicalHistory(e.target.value)} 
                    placeholder="Please describe your medical problem or relevant medical history"
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Please wait
                    </>
                  ) : (
                    'Submit Appointment Request'
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        )}
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