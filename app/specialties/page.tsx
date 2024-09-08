'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HeartPulse, Brain, Baby, Bone, Eye, Stethoscope, Syringe, Microscope } from "lucide-react"
import Link from "next/link"
import { useRouter } from 'next/navigation'

 
const specialties = [
  {
    name: "Cardiology",
    icon: HeartPulse,
    description: "Diagnosis and treatment of heart diseases",
    services: ["Echocardiography", "Angioplasty", "Cardiac Surgery", "Pacemaker Implantation"],
    doctors: ["Dr. John Smith", "Dr. Emily Johnson"]
  },
  {
    name: "Neurology",
    icon: Brain,
    description: "Disorders of the nervous system",
    services: ["EEG", "MRI Scans", "Stroke Treatment", "Epilepsy Management"],
    doctors: ["Dr. Michael Brown", "Dr. Sarah Davis"]
  },
  {
    name: "Pediatrics",
    icon: Baby,
    description: "Medical care for infants, children, and adolescents",
    services: ["Vaccinations", "Growth Monitoring", "Pediatric Surgery", "Developmental Assessments"],
    doctors: ["Dr. Lisa Wilson", "Dr. Robert Taylor"]
  },
  {
    name: "Orthopedics",
    icon: Bone,
    description: "Musculoskeletal system - bones, joints, ligaments, tendons, muscles",
    services: ["Joint Replacement", "Fracture Care", "Sports Medicine", "Spine Surgery"],
    doctors: ["Dr. James Anderson", "Dr. Patricia Martinez"]
  },
  {
    name: "Ophthalmology",
    icon: Eye,
    description: "Diagnosis and treatment of eye disorders",
    services: ["Cataract Surgery", "Glaucoma Treatment", "LASIK", "Retinal Disorders"],
    doctors: ["Dr. David Lee", "Dr. Jennifer White"]
  },
  {
    name: "Internal Medicine",
    icon: Stethoscope,
    description: "Prevention, diagnosis, and treatment of adult diseases",
    services: ["Annual Check-ups", "Chronic Disease Management", "Preventive Care", "Geriatric Medicine"],
    doctors: ["Dr. Thomas Clark", "Dr. Elizabeth Brown"]
  },
  {
    name: "Dermatology",
    icon: Microscope,
    description: "Skin, hair, and nail health",
    services: ["Skin Cancer Screening", "Acne Treatment", "Laser Therapy", "Cosmetic Dermatology"],
    doctors: ["Dr. Rachel Green", "Dr. Daniel Martinez"]
  },
  {
    name: "Endocrinology",
    icon: Syringe,
    description: "Disorders of the endocrine system and its hormones",
    services: ["Diabetes Management", "Thyroid Disorders", "Hormone Replacement Therapy", "Osteoporosis Treatment"],
    doctors: ["Dr. Laura Adams", "Dr. Christopher Lee"]
  }
]
 
export default function Specialties() {
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
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Medical Specialties</h1>
        <p className="text-xl text-center mb-12">
          At our hospital, we offer a wide range of medical specialties to provide comprehensive care for all your health needs.
        </p>
  
        <Tabs defaultValue="all" className="w-full mb-12">
          <TabsList className="flex justify-center mb-8">
            <TabsTrigger value="all">All Specialties</TabsTrigger>
            <TabsTrigger value="surgical">Surgical</TabsTrigger>
            <TabsTrigger value="non-surgical">Non-Surgical</TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specialties.map((specialty) => (
                <SpecialtyCard key={specialty.name} specialty={specialty} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="surgical">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specialties
                .filter((s) => ["Cardiology", "Orthopedics", "Ophthalmology"].includes(s.name))
                .map((specialty) => (
                  <SpecialtyCard key={specialty.name} specialty={specialty} />
                ))}
            </div>
          </TabsContent>
          <TabsContent value="non-surgical">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specialties
                .filter((s) => ["Neurology", "Pediatrics", "Internal Medicine", "Dermatology", "Endocrinology"].includes(s.name))
                .map((specialty) => (
                  <SpecialtyCard key={specialty.name} specialty={specialty} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
  
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Our Specialties?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Expert Physicians</CardTitle>
              </CardHeader>
              <CardContent>
                Our team consists of board-certified physicians with years of experience in their respective fields.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Cutting-edge Technology</CardTitle>
              </CardHeader>
              <CardContent>
                We invest in the latest medical technologies to provide accurate diagnoses and effective treatments.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Comprehensive Care</CardTitle>
              </CardHeader>
              <CardContent>
                From prevention to treatment and follow-up, we offer complete care for all your medical needs.
              </CardContent>
            </Card>
          </div>
        </section>
  
        <section>
          <h2 className="text-3xl font-bold mb-6 text-center">Need Help Choosing a Specialty?</h2>
          <p className="text-center mb-8">
            If you&apos;re unsure which specialty you need, our team is here to help guide you to the right department.
          </p>
          <div className="flex justify-center">
            <Button size="lg">
              <Link href="/contact">Contact Us for Guidance</Link>
            </Button>
          </div>
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
 
function SpecialtyCard({ specialty }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center text-2xl">
          {<specialty.icon className="mr-2 h-6 w-6" />}
          {specialty.name}
        </CardTitle>
        <CardDescription>{specialty.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <h4 className="font-semibold mb-2">Key Services:</h4>
        <ul className="list-disc list-inside mb-4">
          {specialty.services.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
        <h4 className="font-semibold mb-2">Our Specialists:</h4>
        <ul className="list-disc list-inside">
          {specialty.doctors.map((doctor) => (
            <li key={doctor}>{doctor}</li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button>
          <Link href={`/specialties/${specialty.name.toLowerCase()}`}>Learn More</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
