import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Target, Users, TrendingUp, Award, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | Smart Mover Shipping Logistics",
  description:
    "Learn about Smart Mover Shipping Logistics, our history, mission, values, and the team behind our global freight forwarding services.",
}

export default function AboutPage() {
  return (
    <main className="flex-1">
      <section className="bg-gradient-to-r from-blue-950 to-blue-900 py-16 text-white md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              About Smart Mover Shipping Logistics
            </h1>
            <p className="mb-8 text-gray-200">
              Your trusted partner for global freight forwarding and logistics solutions since 2008
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 text-3xl font-bold tracking-tight text-blue-950">Our Story</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Smart Mover Shipping Logistics was founded in 2008 with a simple mission: to provide reliable,
                    efficient, and cost-effective logistics solutions for businesses of all sizes. What began as a small
                    operation with just five employees has grown into a global logistics provider with offices in 15
                    countries and a network of partners spanning over 120 nations.
                  </p>
                  <p>
                    Our journey started when our founder, Michael Chen, identified a gap in the market for personalized
                    logistics services that prioritized customer relationships and tailored solutions over
                    one-size-fits-all approaches. Drawing on his 20 years of experience in the shipping industry,
                    Michael assembled a team of logistics experts committed to revolutionizing how businesses manage
                    their supply chains.
                  </p>
                  <p>
                    Over the years, we've expanded our service offerings from basic freight forwarding to comprehensive
                    end-to-end logistics solutions, including customs clearance, warehousing, distribution, and
                    specialized shipping for various industries. Through economic ups and downs, technological
                    revolutions, and global challenges, Smart Mover has remained steadfast in our commitment to
                    excellence and innovation.
                  </p>
                  <p>
                    Today, Smart Mover Shipping Logistics is recognized as an industry leader, trusted by thousands of
                    businesses worldwide to handle their most valuable shipments and complex logistics challenges. While
                    we've grown significantly, we remain true to our founding principles of personalized service,
                    reliability, and building lasting partnerships with our clients.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] overflow-hidden rounded-xl lg:h-auto">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Smart Mover Shipping Logistics headquarters"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-blue-950">Our Mission & Values</h2>
              <p className="mx-auto max-w-3xl text-gray-600">
                At Smart Mover, our mission and values guide everything we do, from daily operations to long-term
                strategic decisions
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                    <Target className="h-6 w-6 text-blue-950" />
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-blue-950">Our Mission</h3>
                  <p className="text-gray-600">
                    To empower businesses worldwide with seamless, reliable, and innovative logistics solutions that
                    optimize their supply chains, reduce costs, and enable global growth. We strive to be more than a
                    service provider—we aim to be a strategic partner in our clients' success, delivering value through
                    expertise, technology, and exceptional service.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100">
                    <Award className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-blue-950">Our Vision</h3>
                  <p className="text-gray-600">
                    To be the world's most trusted logistics partner, recognized for our commitment to excellence,
                    innovation, and sustainability. We envision a future where global trade is seamless, efficient, and
                    accessible to businesses of all sizes, powered by smart logistics solutions that leverage
                    cutting-edge technology while maintaining a human touch.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex items-start gap-3">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100">
                  <CheckCircle className="h-5 w-5 text-blue-950" />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-950">Reliability</h4>
                  <p className="text-gray-600">
                    We deliver on our promises, ensuring your shipments arrive safely and on time, every time.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100">
                  <Users className="h-5 w-5 text-blue-950" />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-950">Customer Focus</h4>
                  <p className="text-gray-600">
                    We put our clients at the center of everything we do, tailoring solutions to meet their unique
                    needs.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100">
                  <TrendingUp className="h-5 w-5 text-blue-950" />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-950">Innovation</h4>
                  <p className="text-gray-600">
                    We continuously seek new ways to improve our services and embrace cutting-edge technologies.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100">
                  <Clock className="h-5 w-5 text-blue-950" />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-950">Efficiency</h4>
                  <p className="text-gray-600">
                    We optimize processes to save time and resources, passing those benefits on to our clients.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100">
                  <Award className="h-5 w-5 text-blue-950" />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-950">Excellence</h4>
                  <p className="text-gray-600">
                    We strive for the highest standards in every aspect of our operations and service delivery.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100">
                  <Users className="h-5 w-5 text-blue-950" />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-950">Integrity</h4>
                  <p className="text-gray-600">
                    We conduct business with honesty, transparency, and ethical practices at all times.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-blue-950">Our Leadership Team</h2>
              <p className="mx-auto max-w-3xl text-gray-600">
                Meet the experienced professionals who guide our company's strategic direction and operations
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Michael Chen",
                  position: "Founder & CEO",
                  bio: "With over 25 years in the logistics industry, Michael founded Smart Mover in 2008 with a vision to transform global shipping through personalized service and innovation.",
                },
                {
                  name: "Sarah Johnson",
                  position: "Chief Operations Officer",
                  bio: "Sarah oversees our global operations, bringing 18 years of experience in supply chain management and a passion for operational excellence.",
                },
                {
                  name: "David Rodriguez",
                  position: "Chief Technology Officer",
                  bio: "David leads our technology initiatives, focusing on developing innovative solutions that streamline logistics processes and enhance customer experience.",
                },
                {
                  name: "Emily Wong",
                  position: "VP of Global Sales",
                  bio: "Emily drives our global sales strategy, building strong client relationships and expanding our presence in key markets worldwide.",
                },
                {
                  name: "James Wilson",
                  position: "VP of Customer Success",
                  bio: "James ensures our clients receive exceptional service and support, leading a team dedicated to solving complex logistics challenges.",
                },
                {
                  name: "Sophia Patel",
                  position: "Director of Sustainability",
                  bio: "Sophia spearheads our environmental initiatives, working to reduce our carbon footprint and develop sustainable logistics solutions.",
                },
              ].map((member, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-[200px]">
                    <Image
                      src={`/placeholder.svg?height=200&width=400&text=${encodeURIComponent(member.name)}`}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-blue-950">{member.name}</h3>
                    <p className="mb-3 text-sm font-medium text-yellow-600">{member.position}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-950 py-16 text-white md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Join Our Team</h2>
            <p className="mb-8 text-gray-200">
              We're always looking for talented individuals who share our passion for excellence in logistics
            </p>
            <Button asChild size="lg" className="bg-yellow-500 text-blue-950 hover:bg-yellow-400">
              <Link href="/career">View Career Opportunities</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

