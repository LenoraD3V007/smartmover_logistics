import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Ship, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <Link href="/" className="mb-4 flex items-center gap-2">
              <Ship className="h-6 w-6 text-yellow-500" />
              <span className="text-xl font-bold">
                Smart<span className="text-yellow-500">Mover</span>
              </span>
            </Link>
            <p className="mb-4 text-gray-300">
              Your trusted partner for global freight forwarding and logistics solutions.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-300 hover:text-yellow-500">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-yellow-500">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-yellow-500">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-yellow-500">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-yellow-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-yellow-500">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/tracking" className="text-gray-300 hover:text-yellow-500">
                  Track Shipment
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-yellow-500">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/career" className="text-gray-300 hover:text-yellow-500">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-yellow-500">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-500" />
                <span className="text-gray-300">
161 Airpark Center East Drive, Building A,
Nashville, TN 37217 
</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-yellow-500" />
                <span className="text-gray-300">+1 (815) 916-9026</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-yellow-500" />
                <span className="text-gray-300">info@smartcargomover.com</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Newsletter</h3>
            <p className="mb-4 text-gray-300">Subscribe to our newsletter for the latest updates and offers.</p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Your email address"
                className="border-gray-700 bg-blue-900 text-white placeholder:text-gray-400"
              />
              <Button className="w-full bg-yellow-500 text-blue-950 hover:bg-yellow-400">Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-blue-900 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-gray-300">
              &copy; {new Date().getFullYear()} Smart Mover Shipping Logistics. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm">
              <Link href="/privacy-policy" className="text-gray-300 hover:text-yellow-500">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-300 hover:text-yellow-500">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

