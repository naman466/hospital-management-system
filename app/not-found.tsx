'use client'
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"
import Link from "next/link"
 
export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <AlertTriangle className="mx-auto h-12 w-12 text-yellow-500" />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Oops! Something went wrong</h1>
        <p className="mt-6 text-base leading-7 text-gray-600">We apologize for the inconvenience. Please try again later.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild>
            <Link href="/">
              Go back home
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/contact">
              Contact support
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}