'use client'
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Users, Clock, Heart } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useRouter } from 'next/navigation'
import Link from "next/link";

export default function AboutUs() {
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
            <Link href="/status" className="hover:underline">
              Status
            </Link>
            <Button variant="secondary" onClick={() => router.push('/appointment')}>Book Appointment
            </Button>
          </div>
        </nav>
      </div>
    </header>

    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">About MediCare Hospital</h1>
 
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            At MediCare Hospital, our mission is to provide exceptional healthcare services with compassion and expertise. 
            We are committed to improving the health and well-being of our community through innovative medical practices, 
            cutting-edge technology, and a patient-centered approach to care.
          </p>
          <Button>Learn More</Button>
        </div>
        <div>
        <Image 
            src="/images/hospital_building.png" 
            alt="Hospital Building" 
            width={300}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <Card>
          <CardHeader>
            <Award className="w-10 h-10 text-primary mb-2" />
            <CardTitle>Excellence in Care</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Recognized for our outstanding patient outcomes and satisfaction rates.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Users className="w-10 h-10 text-primary mb-2" />
            <CardTitle>Expert Team</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Our staff includes some of the most skilled and experienced healthcare professionals.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Clock className="w-10 h-10 text-primary mb-2" />
            <CardTitle>24/7 Care</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">We&apos;re always here for you, providing round-the-clock medical services.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Heart className="w-10 h-10 text-primary mb-2" />
            <CardTitle>Community Focus</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">We&apos;re dedicated to serving and improving the health of our local community.</p>
          </CardContent>
        </Card>
      </div>
 
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our History</h2>
        <p className="text-gray-600 mb-4">
          Founded in 1975, MediCare Hospital has been a cornerstone of healthcare in our community for over four decades. 
          What started as a small clinic has grown into a full-service hospital, continually expanding our facilities and 
          services to meet the evolving needs of our patients.
        </p>
        <p className="text-gray-600 mb-4">
          Throughout our history, we&apos;ve been at the forefront of medical advancements, introducing cutting-edge treatments 
          and technologies to our region. Our commitment to excellence has earned us numerous accolades and, more importantly, 
          the trust and gratitude of the thousands of patients we&apos;ve had the privilege to serve.
        </p>
      </div>
 
      <div>
        <h2 className="text-2xl font-semibold mb-4">Our Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Dr. Emily Johnson", role: "Chief Executive Officer", image: "/images/placeholder.jpg" },
            { name: "Dr. Michael Chen", role: "Chief Medical Officer", image: "/images/placeholder.jpg" },
            { name: "Sarah Thompson", role: "Chief Nursing Officer", image: "/images/placeholder.jpg" },
          ].map((leader) => (
            <Card key={leader.name}>
              <CardHeader>
              <Image
                  src={leader.image}
                  alt={leader.name}
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4"
                />
                <CardTitle>{leader.name}</CardTitle>
                <CardDescription>{leader.role}</CardDescription>
              </CardHeader>
            </Card>
          ))}
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