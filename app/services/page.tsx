import type React from "react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Ship, Plane, FileCheck, Warehouse, Shield, Truck, Package, BarChart, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Services | Smart Mover Shipping Logistics",
  description:
    "Explore Smart Mover Shipping Logistics' comprehensive freight forwarding and logistics services for businesses worldwide.",
}

export default function ServicesPage() {
  return (
    <main className="flex-1">
      <section className="bg-gradient-to-r from-blue-950 to-blue-900 py-16 text-white md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Services</h1>
            <p className="mb-8 text-gray-200">
              Comprehensive logistics solutions tailored to meet your specific shipping needs
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-6xl">
            <Tabs defaultValue="all" className="w-full">
              <div className="mb-8 flex justify-center">
                <TabsList className="grid w-full max-w-2xl grid-cols-2 md:grid-cols-4">
                  <TabsTrigger value="all">All Services</TabsTrigger>
                  <TabsTrigger value="air">Air Freight</TabsTrigger>
                  <TabsTrigger value="sea">Sea Freight</TabsTrigger>
                  <TabsTrigger value="specialized">Specialized</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  <ServiceCard
                    icon={<Ship className="h-6 w-6" />}
                    title="Sea Freight"
                    description="Reliable and cost-effective ocean shipping solutions for all cargo types and volumes."
                  />
                  <ServiceCard
                    icon={<Plane className="h-6 w-6" />}
                    title="Air Freight"
                    description="Fast and efficient air cargo services for time-sensitive shipments worldwide."
                  />
                  <ServiceCard
                    icon={<FileCheck className="h-6 w-6" />}
                    title="Customs Clearance"
                    description="Expert handling of all documentation and regulatory requirements for smooth border crossings."
                  />
                  <ServiceCard
                    icon={<Warehouse className="h-6 w-6" />}
                    title="Warehousing"
                    description="Secure storage facilities with inventory management systems for your goods."
                  />
                  <ServiceCard
                    icon={<Shield className="h-6 w-6" />}
                    title="Cargo Insurance"
                    description="Comprehensive coverage options to protect your valuable shipments during transit."
                  />
                  <ServiceCard
                    icon={<Truck className="h-6 w-6" />}
                    title="Door-to-Door Delivery"
                    description="Complete logistics solutions from pickup to final destination anywhere in the world."
                  />
                  <ServiceCard
                    icon={<Package className="h-6 w-6" />}
                    title="Specialized Cargo"
                    description="Tailored solutions for oversized, hazardous, perishable, and high-value shipments."
                  />
                  <ServiceCard
                    icon={<BarChart className="h-6 w-6" />}
                    title="Supply Chain Consulting"
                    description="Expert advice to optimize your logistics operations and reduce costs."
                  />
                  <ServiceCard
                    icon={<FileCheck className="h-6 w-6" />}
                    title="Project Logistics"
                    description="Specialized handling for complex, large-scale projects requiring coordinated shipments."
                  />
                </div>
              </TabsContent>

              <TabsContent value="air">
                <div className="mb-12 grid gap-8 lg:grid-cols-2">
                  <div>
                    <h2 className="mb-4 text-2xl font-bold text-blue-950">Air Freight Services</h2>
                    <p className="mb-6 text-gray-600">
                      Our air freight services offer speed, reliability, and flexibility for your time-sensitive
                      shipments. With partnerships with major airlines worldwide, we provide comprehensive air cargo
                      solutions tailored to your specific needs.
                    </p>
                    <ul className="mb-6 space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="mt-1 h-5 w-5 text-green-500" />
                        <span className="text-gray-600">Express air freight for urgent shipments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="mt-1 h-5 w-5 text-green-500" />
                        <span className="text-gray-600">Consolidated air freight for cost efficiency</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="mt-1 h-5 w-5 text-green-500" />
                        <span className="text-gray-600">Charter services for oversized or special cargo</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="mt-1 h-5 w-5 text-green-500" />
                        <span className="text-gray-600">Temperature-controlled solutions for perishables</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="mt-1 h-5 w-5 text-green-500" />
                        <span className="text-gray-600">Dangerous goods handling with proper certification</span>
                      </li>
                    </ul>
                    <Button asChild className="bg-blue-950 text-white hover:bg-blue-900">
                      <Link href="/contact">Request Air Freight Quote</Link>
                    </Button>
                  </div>
                  <div className="relative h-[300px] overflow-hidden rounded-xl lg:h-auto">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Air Freight Services"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  <ServiceCard
                    icon={<Plane className="h-6 w-6" />}
                    title="Express Air Freight"
                    description="Priority handling and fastest transit times for urgent shipments that need to arrive at their destination as quickly as possible."
                  />
                  <ServiceCard
                    icon={<Plane className="h-6 w-6" />}
                    title="Standard Air Freight"
                    description="Balanced solution offering reliable delivery times at competitive rates for regular shipments."
                  />
                  <ServiceCard
                    icon={<Plane className="h-6 w-6" />}
                    title="Charter Services"
                    description="Dedicated aircraft solutions for oversized cargo, time-critical shipments, or special projects requiring customized handling."
                  />
                </div>
              </TabsContent>

              <TabsContent value="sea">
                <div className="mb-12 grid gap-8 lg:grid-cols-2">
                  <div>
                    <h2 className="mb-4 text-2xl font-bold text-blue-950">Sea Freight Services</h2>
                    <p className="mb-6 text-gray-600">
                      Our sea freight services provide cost-effective solutions for shipping large volumes of goods
                      internationally. With strategic partnerships with major shipping lines, we offer reliable ocean
                      freight services for all types of cargo.
                    </p>
                    <ul className="mb-6 space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="mt-1 h-5 w-5 text-green-500" />
                        <span className="text-gray-600">Full Container Load (FCL) shipments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="mt-1 h-5 w-5 text-green-500" />
                        <span className="text-gray-600">Less than Container Load (LCL) consolidation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="mt-1 h-5 w-5 text-green-500" />
                        <span className="text-gray-600">Break bulk and project cargo handling</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="mt-1 h-5 w-5 text-green-500" />
                        <span className="text-gray-600">Refrigerated container solutions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="mt-1 h-5 w-5 text-green-500" />
                        <span className="text-gray-600">Dangerous goods transportation</span>
                      </li>
                    </ul>
                    <Button asChild className="bg-blue-950 text-white hover:bg-blue-900">
                      <Link href="/contact">Request Sea Freight Quote</Link>
                    </Button>
                  </div>
                  <div className="relative h-[300px] overflow-hidden rounded-xl lg:h-auto">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Sea Freight Services"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  <ServiceCard
                    icon={<Ship className="h-6 w-6" />}
                    title="Full Container Load (FCL)"
                    description="Dedicated container shipping for larger cargo volumes, offering security, faster transit times, and cost efficiency."
                  />
                  <ServiceCard
                    icon={<Ship className="h-6 w-6" />}
                    title="Less than Container Load (LCL)"
                    description="Cost-effective solution for smaller shipments, allowing you to pay only for the space you use within a shared container."
                  />
                  <ServiceCard
                    icon={<Ship className="h-6 w-6" />}
                    title="Special Equipment"
                    description="Specialized containers including open top, flat rack, refrigerated, and tank containers for unique cargo requirements."
                  />
                </div>
              </TabsContent>

              <TabsContent value="specialized">
                <div className="mb-12 grid gap-8 lg:grid-cols-2">
                  <div>
                    <h2 className="mb-4 text-2xl font-bold text-blue-950">Specialized Logistics Services</h2>
                    <p className="mb-6 text-gray-600">
                      Our specialized logistics services cater to unique shipping requirements and industry-specific
                      needs. We provide tailored solutions for challenging cargo types and complex logistics projects.
                    </p>
                    <ul className="mb-6 space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="mt-1 h-5 w-5 text-green-500" />
                        <span className="text-gray-600">
                          Project cargo logistics for large-scale industrial projects
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="mt-1 h-5 w-5 text-green-500" />
                        <span className="text-gray-600">Hazardous materials handling with proper certification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="mt-1 h-5 w-5 text-green-500" />
                        <span className="text-gray-600">
                          Temperature-controlled logistics for pharmaceuticals and perishables
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="mt-1 h-5 w-5 text-green-500" />
                        <span className="text-gray-600">High-value cargo with enhanced security measures</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="mt-1 h-5 w-5 text-green-500" />
                        <span className="text-gray-600">Oversized and heavy lift transportation</span>
                      </li>
                    </ul>
                    <Button asChild className="bg-blue-950 text-white hover:bg-blue-900">
                      <Link href="/contact">Discuss Your Specialized Needs</Link>
                    </Button>
                  </div>
                  <div className="relative h-[300px] overflow-hidden rounded-xl lg:h-auto">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Specialized Logistics Services"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  <ServiceCard
                    icon={<Package className="h-6 w-6" />}
                    title="Project Logistics"
                    description="Comprehensive planning and execution for complex, large-scale projects requiring coordinated shipments and specialized handling."
                  />
                  <ServiceCard
                    icon={<Shield className="h-6 w-6" />}
                    title="Hazardous Materials"
                    description="Certified handling and transportation of dangerous goods in compliance with international regulations and safety standards."
                  />
                  <ServiceCard
                    icon={<Truck className="h-6 w-6" />}
                    title="Oversized Cargo"
                    description="Specialized equipment and expertise for transporting large, heavy, or irregularly shaped items that exceed standard dimensions."
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-blue-950">Industries We Serve</h2>
              <p className="mx-auto max-w-3xl text-gray-600">
                We provide specialized logistics solutions for a wide range of industries, each with unique requirements
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Retail & E-commerce",
                  description: "Streamlined logistics solutions for retail distribution and e-commerce fulfillment.",
                },
                {
                  title: "Manufacturing",
                  description: "Efficient supply chain management for raw materials and finished products.",
                },
                {
                  title: "Pharmaceuticals",
                  description: "Temperature-controlled and secure transportation for sensitive medical products.",
                },
                {
                  title: "Automotive",
                  description: "Specialized handling for automotive parts, components, and vehicles.",
                },
                {
                  title: "Technology",
                  description: "Secure and timely delivery of high-value electronics and IT equipment.",
                },
                {
                  title: "Food & Beverage",
                  description: "Temperature-controlled solutions for perishable food products.",
                },
                {
                  title: "Oil & Gas",
                  description: "Project logistics for equipment and supplies in the energy sector.",
                },
                {
                  title: "Fashion & Apparel",
                  description: "Time-sensitive logistics for seasonal collections and fashion retail.",
                },
              ].map((industry, index) => (
                <Card key={index}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-blue-950">{industry.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{industry.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-blue-950">Why Choose Smart Mover</h2>
              <p className="mx-auto max-w-3xl text-gray-600">
                Discover the advantages that make us the preferred logistics partner for businesses worldwide
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <CheckCircle className="h-8 w-8 text-blue-950" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-blue-950">Global Network</h3>
                <p className="text-gray-600">
                  With offices in 15 countries and partners in over 120 nations, we offer truly global logistics
                  coverage.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <CheckCircle className="h-8 w-8 text-blue-950" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-blue-950">Industry Expertise</h3>
                <p className="text-gray-600">
                  Our team brings decades of specialized experience across various industries and logistics challenges.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <CheckCircle className="h-8 w-8 text-blue-950" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-blue-950">Customized Solutions</h3>
                <p className="text-gray-600">
                  We tailor our services to your specific needs rather than offering one-size-fits-all solutions.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <CheckCircle className="h-8 w-8 text-blue-950" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-blue-950">Advanced Technology</h3>
                <p className="text-gray-600">
                  Our digital platforms provide real-time tracking, reporting, and supply chain visibility.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <CheckCircle className="h-8 w-8 text-blue-950" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-blue-950">Dedicated Support</h3>
                <p className="text-gray-600">
                  Our customer service team is available 24/7 to address your questions and provide assistance.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <CheckCircle className="h-8 w-8 text-blue-950" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-blue-950">Sustainability Focus</h3>
                <p className="text-gray-600">
                  We're committed to environmentally responsible logistics practices and reducing carbon footprints.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-950 py-16 text-white md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Ready to Get Started?</h2>
            <p className="mb-8 text-gray-200">
              Contact our team today to discuss your logistics needs and discover how Smart Mover can optimize your
              shipping operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-yellow-500 text-blue-950 hover:bg-yellow-400">
                <Link href="/contact">Request a Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/contact">Contact Sales Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg">
      <CardHeader className="pb-2">
        <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-950">
          {icon}
        </div>
        <CardTitle className="text-xl text-blue-950">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

