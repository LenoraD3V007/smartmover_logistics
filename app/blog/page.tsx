import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, Tag, User } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog | Smart Mover Shipping Logistics",
  description: "Stay updated with the latest news, insights, and trends in the logistics and shipping industry.",
}

export default function BlogPage() {
  return (
    <main className="flex-1">
      <section className="bg-gradient-to-r from-blue-950 to-blue-900 py-16 text-white md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Blog</h1>
            <p className="mb-8 text-gray-200">
              Stay updated with the latest news, insights, and trends in the logistics and shipping industry
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <div className="mb-8 flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-blue-950">Latest Articles</h2>
                  <div className="flex items-center gap-2">
                    <Tabs defaultValue="all">
                      <TabsList>
                        <TabsTrigger value="all">All</TabsTrigger>
                        <TabsTrigger value="industry">Industry</TabsTrigger>
                        <TabsTrigger value="tips">Tips</TabsTrigger>
                        <TabsTrigger value="news">News</TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>
                </div>

                <div className="grid gap-8">
                  {[
                    {
                      title: "The Future of Sustainable Shipping: Trends to Watch",
                      excerpt:
                        "Explore the latest innovations and practices in sustainable shipping and how they're reshaping the logistics industry.",
                      image: "/placeholder.svg?height=300&width=600",
                      date: "April 2, 2025",
                      author: "Michael Chen",
                      category: "Industry Trends",
                      readTime: "8 min read",
                    },
                    {
                      title: "Navigating Global Supply Chain Disruptions in 2025",
                      excerpt:
                        "Learn strategies to mitigate risks and maintain operational continuity amid ongoing global supply chain challenges.",
                      image: "/placeholder.svg?height=300&width=600",
                      date: "March 28, 2025",
                      author: "Sarah Johnson",
                      category: "Industry Insights",
                      readTime: "6 min read",
                    },
                    {
                      title: "5 Ways Technology is Transforming Freight Forwarding",
                      excerpt:
                        "Discover how AI, blockchain, IoT, and other technologies are revolutionizing the freight forwarding industry.",
                      image: "/placeholder.svg?height=300&width=600",
                      date: "March 15, 2025",
                      author: "David Rodriguez",
                      category: "Technology",
                      readTime: "7 min read",
                    },
                    {
                      title: "Best Practices for International Shipping Documentation",
                      excerpt:
                        "A comprehensive guide to managing documentation for international shipments to avoid delays and compliance issues.",
                      image: "/placeholder.svg?height=300&width=600",
                      date: "March 5, 2025",
                      author: "Emily Wong",
                      category: "Tips & Guides",
                      readTime: "5 min read",
                    },
                  ].map((post, index) => (
                    <Card key={index} className="overflow-hidden">
                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="relative h-[200px] md:h-full">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex flex-col p-6">
                          <CardHeader className="p-0">
                            <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
                              <span className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                {post.date}
                              </span>
                              <span>•</span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                {post.readTime}
                              </span>
                            </div>
                            <CardTitle className="mb-2 text-xl text-blue-950">
                              <Link href={`/blog/${index + 1}`} className="hover:text-blue-700">
                                {post.title}
                              </Link>
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="mb-4 flex-1 p-0">
                            <p className="text-gray-600">{post.excerpt}</p>
                          </CardContent>
                          <CardFooter className="flex items-center justify-between p-0">
                            <div className="flex items-center gap-2 text-sm">
                              <User className="h-4 w-4 text-gray-500" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-800">
                              <Tag className="h-3 w-3" />
                              <span>{post.category}</span>
                            </div>
                          </CardFooter>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                <div className="mt-8 flex justify-center">
                  <Button variant="outline" className="border-blue-950 text-blue-950 hover:bg-blue-50">
                    Load More Articles
                  </Button>
                </div>
              </div>

              <div>
                <div className="sticky top-24 space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl text-blue-950">Search</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="relative">
                        <Input placeholder="Search articles..." className="pr-10" />
                        <Button size="sm" className="absolute right-1 top-1 h-7 w-7 p-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                          >
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.3-4.3" />
                          </svg>
                          <span className="sr-only">Search</span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl text-blue-950">Categories</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {[
                          "Industry Trends",
                          "Technology",
                          "Tips & Guides",
                          "Case Studies",
                          "Company News",
                          "Regulations & Compliance",
                        ].map((category, index) => (
                          <li key={index}>
                            <Link
                              href="#"
                              className="flex items-center justify-between text-gray-600 hover:text-blue-950"
                            >
                              <span>{category}</span>
                              <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-500">
                                {Math.floor(Math.random() * 20) + 1}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl text-blue-950">Popular Posts</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          {
                            title: "How to Choose the Right Freight Forwarding Partner",
                            date: "February 15, 2025",
                          },
                          {
                            title: "Understanding Incoterms: A Comprehensive Guide",
                            date: "January 28, 2025",
                          },
                          {
                            title: "The Impact of AI on Logistics Operations",
                            date: "January 10, 2025",
                          },
                        ].map((post, index) => (
                          <div key={index} className="flex gap-3">
                            <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                              <Image
                                src="/placeholder.svg?height=64&width=64"
                                alt={post.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <h4 className="font-medium text-blue-950 hover:text-blue-700">
                                <Link href="#">{post.title}</Link>
                              </h4>
                              <p className="text-xs text-gray-500">{post.date}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl text-blue-950">Subscribe</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-gray-600">Stay updated with our latest articles and industry insights.</p>
                      <div className="space-y-3">
                        <Input placeholder="Your email address" type="email" />
                        <Button className="w-full bg-blue-950 text-white hover:bg-blue-900">Subscribe</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

