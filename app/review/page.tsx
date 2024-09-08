'use client'
import { useState } from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { StarIcon } from "lucide-react"
import { useRouter } from 'next/navigation'

 
export default function ReviewPage() {
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
 
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the review data to your backend
    console.log({ rating, comment, name, email })
    setSubmitted(true)
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

      <main className="flex-grow container mx-auto px-4 py-8">
        {submitted ? (
          <Card className="w-full max-w-md mx-auto mt-8">
            <CardHeader>
              <CardTitle>Thank You!</CardTitle>
              <CardDescription>Your review has been submitted successfully.</CardDescription>
            </CardHeader>
          </Card>
        ) : (
          <Card className="w-full max-w-md mx-auto">
            <CardHeader>
              <CardTitle>Leave a Review</CardTitle>
              <CardDescription>We value your feedback. Please share your experience with us.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label>Rating</Label>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarIcon
                        key={star}
                        className={`h-6 w-6 cursor-pointer ${
                          star <= rating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                        onClick={() => setRating(star)}
                      />
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="comment">Your Review</Label>
                  <Textarea
                    id="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Please share your experience..."
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Your Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <Button type="submit" className="w-full">Submit Review</Button>
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