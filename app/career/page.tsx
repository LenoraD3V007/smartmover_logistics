import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Briefcase, MapPin, Clock, CheckCircle, Users, TrendingUp, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Careers | Smart Mover Shipping Logistics",
  description:
    "Join our team at Smart Mover Shipping Logistics and build your career in the global logistics industry.",
}

export default function CareerPage() {
  return (
    <main className="flex-1">
      <section className="bg-gradient-to-r from-blue-950 to-blue-900 py-16 text-white md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Join Our Team</h1>
            <p className="mb-8 text-gray-200">
              Build your career with a global leader in logistics and freight forwarding
            </p>
            <Button asChild size="lg" className="bg-yellow-500 text-blue-950 hover:bg-yellow-400">
              <Link href="#open-positions">View Open Positions</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 text-3xl font-bold tracking-tight text-blue-950">Why Work With Us</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    At Smart Mover Shipping Logistics, we believe our people are our greatest asset. We're committed to
                    creating an environment where talented individuals can thrive, grow, and make a meaningful impact on
                    the global logistics industry.
                  </p>
                  <p>
                    As a growing company with a global presence, we offer diverse career opportunities across various
                    departments and locations. Whether you're an experienced professional or just starting your career,
                    Smart Mover provides the platform to develop your skills and advance your career in a dynamic and
                    supportive environment.
                  </p>
                  <p>
                    We value innovation, collaboration, and excellence in everything we do. Our team members are
                    encouraged to bring fresh ideas, take initiative, and contribute to our mission of transforming the
                    logistics industry through exceptional service and cutting-edge solutions.
                  </p>
                </div>
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div className="flex items-start gap-3">
                    <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100">
                      <TrendingUp className="h-5 w-5 text-blue-950" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-950">Growth Opportunities</h4>
                      <p className="text-sm text-gray-600">Career advancement and professional development paths</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100">
                      <Users className="h-5 w-5 text-blue-950" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-950">Inclusive Culture</h4>
                      <p className="text-sm text-gray-600">Diverse and supportive work environment</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100">
                      <Award className="h-5 w-5 text-blue-950" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-950">Competitive Benefits</h4>
                      <p className="text-sm text-gray-600">
                        Comprehensive packages for health, wellness, and financial security
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100">
                      <CheckCircle className="h-5 w-5 text-blue-950" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-950">Work-Life Balance</h4>
                      <p className="text-sm text-gray-600">Flexible work arrangements and paid time off</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] overflow-hidden rounded-xl lg:h-auto">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Smart Mover team"
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
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-blue-950">Our Culture & Values</h2>
              <p className="mx-auto max-w-3xl text-gray-600">
                Our workplace culture is built on strong values that guide how we work together and serve our clients
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                    <CheckCircle className="h-6 w-6 text-blue-950" />
                  </div>
                  <CardTitle className="text-xl text-blue-950">Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    We strive for excellence in everything we do, from customer service to operational efficiency. Our
                    team members are committed to delivering the highest quality work and continuously improving our
                    processes.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                    <Users className="h-6 w-6 text-blue-950" />
                  </div>
                  <CardTitle className="text-xl text-blue-950">Collaboration</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    We believe in the power of teamwork and collaboration. By working together across departments and
                    regions, we leverage our collective expertise to solve complex challenges and deliver exceptional
                    results.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                    <TrendingUp className="h-6 w-6 text-blue-950" />
                  </div>
                  <CardTitle className="text-xl text-blue-950">Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    We encourage creative thinking and embrace new technologies and approaches. Our team members are
                    empowered to challenge the status quo and develop innovative solutions that drive our industry
                    forward.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                    <CheckCircle className="h-6 w-6 text-blue-950" />
                  </div>
                  <CardTitle className="text-xl text-blue-950">Integrity</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    We conduct business with honesty, transparency, and ethical practices. We build trust with our
                    clients, partners, and each other by doing what's right, even when it's challenging.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                    <Users className="h-6 w-6 text-blue-950" />
                  </div>
                  <CardTitle className="text-xl text-blue-950">Diversity & Inclusion</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    We celebrate diversity and create an inclusive environment where everyone feels valued and
                    respected. We believe diverse perspectives drive better decision-making and innovation.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                    <Award className="h-6 w-6 text-blue-950" />
                  </div>
                  <CardTitle className="text-xl text-blue-950">Customer Focus</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Our clients are at the center of everything we do. We're dedicated to understanding their needs,
                    exceeding their expectations, and building long-term partnerships based on trust and mutual success.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="open-positions" className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-blue-950">Open Positions</h2>
              <p className="mx-auto max-w-3xl text-gray-600">
                Explore current opportunities to join our global team and make an impact in the logistics industry
              </p>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <div className="mb-8 flex justify-center">
                <TabsList className="grid w-full max-w-2xl grid-cols-2 md:grid-cols-4">
                  <TabsTrigger value="all">All Departments</TabsTrigger>
                  <TabsTrigger value="operations">Operations</TabsTrigger>
                  <TabsTrigger value="sales">Sales & Marketing</TabsTrigger>
                  <TabsTrigger value="tech">Technology</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all" className="space-y-6">
                {[
                  {
                    title: "Logistics Coordinator",
                    department: "Operations",
                    location: "New York, USA",
                    type: "Full-time",
                    description:
                      "Coordinate and monitor logistics operations, ensuring efficient movement of shipments and maintaining communication with clients and partners.",
                  },
                  {
                    title: "Business Development Manager",
                    department: "Sales",
                    location: "London, UK",
                    type: "Full-time",
                    description:
                      "Develop and implement sales strategies to acquire new clients and expand business with existing customers in the European market.",
                  },
                  {
                    title: "Software Developer",
                    department: "Technology",
                    location: "Remote",
                    type: "Full-time",
                    description:
                      "Design and develop software solutions to enhance our logistics management systems and improve operational efficiency.",
                  },
                  {
                    title: "Customs Clearance Specialist",
                    department: "Operations",
                    location: "Singapore",
                    type: "Full-time",
                    description:
                      "Handle customs documentation and ensure compliance with international trade regulations for shipments in the Asia-Pacific region.",
                  },
                  {
                    title: "Digital Marketing Specialist",
                    department: "Marketing",
                    location: "Remote",
                    type: "Full-time",
                    description:
                      "Develop and execute digital marketing campaigns to increase brand awareness and generate leads for our logistics services.",
                  },
                  {
                    title: "Warehouse Operations Manager",
                    department: "Operations",
                    location: "Los Angeles, USA",
                    type: "Full-time",
                    description:
                      "Oversee daily warehouse operations, including inventory management, staff supervision, and process optimization.",
                  },
                ].map((job, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                        <div>
                          <CardTitle className="text-xl text-blue-950">{job.title}</CardTitle>
                          <CardDescription className="mt-1">{job.department}</CardDescription>
                        </div>
                        <Button asChild className="bg-blue-950 text-white hover:bg-blue-900 sm:w-auto">
                          <Link href={`/career/${index + 1}`}>Apply Now</Link>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{job.description}</p>
                    </CardContent>
                    <CardFooter className="flex flex-wrap items-center gap-4 border-t pt-4">
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Briefcase className="h-4 w-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Clock className="h-4 w-4" />
                        <span>Posted 2 weeks ago</span>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="operations" className="space-y-6">
                {[
                  {
                    title: "Logistics Coordinator",
                    department: "Operations",
                    location: "New York, USA",
                    type: "Full-time",
                    description:
                      "Coordinate and monitor logistics operations, ensuring efficient movement of shipments and maintaining communication with clients and partners.",
                  },
                  {
                    title: "Customs Clearance Specialist",
                    department: "Operations",
                    location: "Singapore",
                    type: "Full-time",
                    description:
                      "Handle customs documentation and ensure compliance with international trade regulations for shipments in the Asia-Pacific region.",
                  },
                  {
                    title: "Warehouse Operations Manager",
                    department: "Operations",
                    location: "Los Angeles, USA",
                    type: "Full-time",
                    description:
                      "Oversee daily warehouse operations, including inventory management, staff supervision, and process optimization.",
                  },
                ].map((job, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                        <div>
                          <CardTitle className="text-xl text-blue-950">{job.title}</CardTitle>
                          <CardDescription className="mt-1">{job.department}</CardDescription>
                        </div>
                        <Button asChild className="bg-blue-950 text-white hover:bg-blue-900 sm:w-auto">
                          <Link href={`/career/${index + 1}`}>Apply Now</Link>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{job.description}</p>
                    </CardContent>
                    <CardFooter className="flex flex-wrap items-center gap-4 border-t pt-4">
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Briefcase className="h-4 w-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Clock className="h-4 w-4" />
                        <span>Posted 2 weeks ago</span>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="sales" className="space-y-6">
                {[
                  {
                    title: "Business Development Manager",
                    department: "Sales",
                    location: "London, UK",
                    type: "Full-time",
                    description:
                      "Develop and implement sales strategies to acquire new clients and expand business with existing customers in the European market.",
                  },
                  {
                    title: "Digital Marketing Specialist",
                    department: "Marketing",
                    location: "Remote",
                    type: "Full-time",
                    description:
                      "Develop and execute digital marketing campaigns to increase brand awareness and generate leads for our logistics services.",
                  },
                ].map((job, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                        <div>
                          <CardTitle className="text-xl text-blue-950">{job.title}</CardTitle>
                          <CardDescription className="mt-1">{job.department}</CardDescription>
                        </div>
                        <Button asChild className="bg-blue-950 text-white hover:bg-blue-900 sm:w-auto">
                          <Link href={`/career/${index + 1}`}>Apply Now</Link>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{job.description}</p>
                    </CardContent>
                    <CardFooter className="flex flex-wrap items-center gap-4 border-t pt-4">
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Briefcase className="h-4 w-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Clock className="h-4 w-4" />
                        <span>Posted 2 weeks ago</span>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="tech" className="space-y-6">
                {[
                  {
                    title: "Software Developer",
                    department: "Technology",
                    location: "Remote",
                    type: "Full-time",
                    description:
                      "Design and develop software solutions to enhance our logistics management systems and improve operational efficiency.",
                  },
                ].map((job, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                        <div>
                          <CardTitle className="text-xl text-blue-950">{job.title}</CardTitle>
                          <CardDescription className="mt-1">{job.department}</CardDescription>
                        </div>
                        <Button asChild className="bg-blue-950 text-white hover:bg-blue-900 sm:w-auto">
                          <Link href={`/career/${index + 1}`}>Apply Now</Link>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{job.description}</p>
                    </CardContent>
                    <CardFooter className="flex flex-wrap items-center gap-4 border-t pt-4">
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Briefcase className="h-4 w-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Clock className="h-4 w-4" />
                        <span>Posted 2 weeks ago</span>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>

            <div className="mt-12 text-center">
              <p className="mb-6 text-gray-600">
                Don't see a position that matches your skills? We're always looking for talented individuals to join our
                team.
              </p>
              <Button asChild className="bg-blue-950 text-white hover:bg-blue-900">
                <Link href="/contact">Submit General Application</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-950 py-16 text-white md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Our Hiring Process</h2>
            <p className="mb-8 text-gray-200">
              We've designed a straightforward hiring process to help us find the right candidates while providing you
              with a positive experience
            </p>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
              <div className="flex flex-col items-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-blue-950">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="mb-2 font-semibold">Application</h3>
                <p className="text-sm text-gray-300">Submit your resume and complete our online application</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-blue-950">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="mb-2 font-semibold">Initial Interview</h3>
                <p className="text-sm text-gray-300">Phone or video interview with our HR team</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-blue-950">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="mb-2 font-semibold">Technical Assessment</h3>
                <p className="text-sm text-gray-300">Role-specific assessment or interview with the hiring manager</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-blue-950">
                  <span className="text-xl font-bold">4</span>
                </div>
                <h3 className="mb-2 font-semibold">Final Interview</h3>
                <p className="text-sm text-gray-300">Meet with the team and discuss next steps</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

