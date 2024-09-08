'use client'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useRouter } from 'next/navigation'

 
export default function ContactUs() {
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
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-6">
              We&apos;re here to help and answer any question you might have. We look forward to hearing from you.
            </p>
 
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <Input id="name" placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <Input id="phone" type="tel" placeholder="Your Phone Number" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <Textarea id="message" placeholder="Your Message" rows={4} />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>
 
          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader className="flex flex-row items-center space-x-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <CardTitle>Address</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>123 Hospital Street, Cityville, State 12345, Country</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center space-x-2">
                  <Phone className="w-5 h-5 text-primary" />
                  <CardTitle>Phone</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Emergency: (123) 456-7890</p>
                  <p>General Inquiries: (123) 456-7891</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center space-x-2">
                  <Mail className="w-5 h-5 text-primary" />
                  <CardTitle>Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>info@medicarehospital.com</p>
                  <p>appointments@medicarehospital.com</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center space-x-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <CardTitle>Hours of Operation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Emergency Care: 24/7</p>
                  <p>Outpatient Services: Mon-Fri, 8:00 AM - 6:00 PM</p>
                  <p>Visiting Hours: Daily, 10:00 AM - 8:00 PM</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
 
        <div>
          <h2 className="text-2xl font-semibold mb-4">Location</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe 
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648750455!2d-73.98784368459253!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1629794293527!5m2!1sen!2sus" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
            ></iframe>
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