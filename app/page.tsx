import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { TrackingForm } from "@/components/tracking-form"
import { ServiceCard } from "@/components/service-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { StatsCard } from "@/components/stats-card"

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Banner */}
      <section className="relative h-[600px] overflow-hidden bg-gradient-to-r from-blue-950 to-blue-900">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/homeBg1.jpg"
            alt="Shipping logistics"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white md:px-6">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Global Logistics <span className="text-yellow-400">Solutions</span>
          </h1>
          <p className="mb-8 max-w-3xl text-lg text-gray-200 md:text-xl">
            Reliable sea and air freight forwarding services for businesses and individuals worldwide
          </p>
          <TrackingForm className="w-full max-w-md" />
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-yellow-500 text-blue-950 hover:bg-yellow-400">
              <Link href="/services">Our Services</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-blue-950 sm:text-4xl">Our Services</h2>
            <p className="mx-auto max-w-3xl text-gray-600">
              Comprehensive logistics solutions tailored to meet your specific shipping needs
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              title="Sea Freight"
              description="Reliable and cost-effective ocean shipping solutions for all cargo types and volumes."
              icon="Ship"
            />
            <ServiceCard
              title="Air Freight"
              description="Fast and efficient air cargo services for time-sensitive shipments worldwide."
              icon="Plane"
            />
            <ServiceCard
              title="Customs Clearance"
              description="Expert handling of all documentation and regulatory requirements for smooth border crossings."
              icon="FileCheck"
            />
            <ServiceCard
              title="Warehousing"
              description="Secure storage facilities with inventory management systems for your goods."
              icon="Warehouse"
            />
            <ServiceCard
              title="Cargo Insurance"
              description="Comprehensive coverage options to protect your valuable shipments during transit."
              icon="Shield"
            />
            <ServiceCard
              title="Door-to-Door Delivery"
              description="Complete logistics solutions from pickup to final destination anywhere in the world."
              icon="Truck"
            />
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-blue-950 text-white hover:bg-blue-900">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-950 py-16 text-white md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <StatsCard number="15+" label="Years Experience" />
            <StatsCard number="120+" label="Countries Served" />
            <StatsCard number="10,000+" label="Shipments Annually" />
            <StatsCard number="98%" label="Customer Satisfaction" />
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative h-[400px] overflow-hidden rounded-xl">
              <Image
                src="/images/homeBg2.jpg"
                alt="About Smart Mover Shipping Logistics"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-blue-950 sm:text-4xl">
                Your Trusted Logistics Partner
              </h2>
              <p className="mb-6 text-gray-600">
                Smart Mover Shipping Logistics has been providing exceptional freight forwarding and logistics services
                since 2008. With a global network of partners and a dedicated team of professionals, we deliver reliable
                and efficient shipping solutions to businesses of all sizes.
              </p>
              <p className="mb-8 text-gray-600">
                Our commitment to excellence, transparency, and customer satisfaction has made us a preferred logistics
                partner for companies worldwide.
              </p>
              <Button asChild size="lg" className="bg-yellow-500 text-blue-950 hover:bg-yellow-400">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-blue-950 sm:text-4xl">What Our Clients Say</h2>
            <p className="mx-auto max-w-3xl text-gray-600">
              Don't just take our word for it - hear from some of our satisfied clients
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              quote="Smart Mover has transformed our international shipping operations. Their attention to detail and proactive communication have saved us time and money."
              author="Sarah Johnson"
              company="Global Retail Solutions"
            />
            <TestimonialCard
              quote="We've been working with Smart Mover for over 5 years, and they consistently deliver exceptional service. Their team goes above and beyond to ensure our shipments arrive safely and on time."
              author="Michael Chen"
              company="Tech Innovations Inc."
            />
            <TestimonialCard
              quote="As a small business, finding a reliable logistics partner was crucial. Smart Mover understood our needs and provided customized solutions that helped us expand into new markets."
              author="Emma Rodriguez"
              company="Artisan Exports"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-950 py-16 text-white md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Ready to Ship with Confidence?</h2>
            <p className="mb-8 text-gray-200">
              Contact our team today to discuss your logistics needs and discover how Smart Mover can optimize your
              shipping operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-yellow-500 text-blue-950 hover:bg-yellow-400">
                <Link href="/contact">Get a Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/tracking">Track Shipment</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

