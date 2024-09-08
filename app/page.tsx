import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { CalendarDays, Clock, HeartPulse, Stethoscope, Users } from "lucide-react"
import Link from "next/link"

const specialties = [
  { name: "Cardiology", icon: HeartPulse, description: "Heart and cardiovascular system" },
  { name: "Neurology", icon: Stethoscope, description: "Brain and nervous system" },
  { name: "Pediatrics", icon: Users, description: "Medical care for children" },
  { name: "Orthopedics", icon: Stethoscope, description: "Musculoskeletal system" },
]

const doctors = [
  { name: "Dr. John Smith", specialty: "Cardiology", availability: "Mon, Wed, Fri" },
  { name: "Dr. Sarah Johnson", specialty: "Neurology", availability: "Tue, Thu, Sat" },
  { name: "Dr. Michael Brown", specialty: "Pediatrics", availability: "Mon, Tue, Wed" },
  { name: "Dr. Emily Davis", specialty: "Orthopedics", availability: "Wed, Thu, Fri" },
]

export default function Homepage() {
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
              <Button variant="secondary">Book Appointment</Button>
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Main content remains unchanged */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Our Specialties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialties.map((specialty) => (
              <Card key={specialty.name}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <specialty.icon className="mr-2 h-6 w-6" />
                    {specialty.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{specialty.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Our Doctors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctors.map((doctor) => (
              <Card key={doctor.name}>
                <CardHeader>
                  <CardTitle>{doctor.name}</CardTitle>
                  <CardDescription>{doctor.specialty}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Available: {doctor.availability}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Hospital Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CalendarDays className="mr-2 h-6 w-6" />
                  Bed Availability
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">42</p>
                <p className="text-sm text-muted-foreground">Available beds</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="mr-2 h-6 w-6" />
                  OPD Queue Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">25 min</p>
                <p className="text-sm text-muted-foreground">Average waiting time</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Departments</h2>
          <Tabs defaultValue="emergency" className="w-full">
            <TabsList>
              <TabsTrigger value="emergency">Emergency</TabsTrigger>
              <TabsTrigger value="outpatient">Outpatient</TabsTrigger>
              <TabsTrigger value="inpatient">Inpatient</TabsTrigger>
              <TabsTrigger value="icu">ICU</TabsTrigger>
            </TabsList>
            <TabsContent value="emergency">
              <Card>
                <CardHeader>
                  <CardTitle>Emergency Department</CardTitle>
                  <CardDescription>24/7 emergency medical care</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Our emergency department is equipped to handle all types of medical emergencies. We have a team of experienced doctors and nurses available around the clock.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="outpatient">
              <Card>
                <CardHeader>
                  <CardTitle>Outpatient Department</CardTitle>
                  <CardDescription>Consultation and treatment without admission</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Our outpatient department offers a wide range of medical services including consultations, diagnostic tests, and minor procedures that don&apos;t require overnight stay.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="inpatient">
              <Card>
                <CardHeader>
                  <CardTitle>Inpatient Department</CardTitle>
                  <CardDescription>Comprehensive care for admitted patients</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Our inpatient department provides round-the-clock care for patients who require hospitalization. We offer comfortable rooms and personalized care plans.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="icu">
              <Card>
                <CardHeader>
                  <CardTitle>Intensive Care Unit (ICU)</CardTitle>
                  <CardDescription>Specialized care for critically ill patients</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Our state-of-the-art ICU is equipped with advanced life support systems and is staffed by highly trained critical care specialists to provide the best care for critically ill patients.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>
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