"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle the form submission here
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 5000)
  }

  return (
    <main className="flex-1">
      <section className="bg-gradient-to-r from-blue-950 to-blue-900 py-16 text-white md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Contact Us</h1>
            <p className="mb-8 text-gray-200">
              Get in touch with our team for inquiries, quotes, or assistance with your shipping needs
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-3">
              <div className="lg:col-span-1">
                <h2 className="mb-6 text-2xl font-bold text-blue-950">Get In Touch</h2>
                <div className="space-y-6">
                  <Card>
                    <CardContent className="flex items-start gap-4 p-6">
                      <MapPin className="mt-1 h-6 w-6 text-yellow-500" />
                      <div>
                        <h3 className="font-semibold text-blue-950">Our Location</h3>
                        <p className="text-gray-600">123 Logistics Way, Shipping District, New York, NY 10001, USA</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="flex items-start gap-4 p-6">
                      <Phone className="mt-1 h-6 w-6 text-yellow-500" />
                      <div>
                        <h3 className="font-semibold text-blue-950">Phone</h3>
                        <p className="text-gray-600">+1 (555) 123-4567</p>
                        <p className="text-gray-600">+1 (555) 987-6543</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="flex items-start gap-4 p-6">
                      <Mail className="mt-1 h-6 w-6 text-yellow-500" />
                      <div>
                        <h3 className="font-semibold text-blue-950">Email</h3>
                        <p className="text-gray-600">info@smartmover.com</p>
                        <p className="text-gray-600">support@smartmover.com</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="flex items-start gap-4 p-6">
                      <Clock className="mt-1 h-6 w-6 text-yellow-500" />
                      <div>
                        <h3 className="font-semibold text-blue-950">Business Hours</h3>
                        <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                        <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                        <p className="text-gray-600">Sunday: Closed</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className="lg:col-span-2">
                <Tabs defaultValue="contact" className="w-full">
                  <TabsList className="mb-6 grid w-full grid-cols-2">
                    <TabsTrigger value="contact">Contact Form</TabsTrigger>
                    <TabsTrigger value="quote">Request a Quote</TabsTrigger>
                  </TabsList>
                  <TabsContent value="contact">
                    <Card>
                      <CardContent className="p-6">
                        <form onSubmit={handleSubmit} className="space-y-6">
                          <div className="grid gap-4 sm:grid-cols-2">
                            <div className="space-y-2">
                              <Label htmlFor="first-name">First Name</Label>
                              <Input id="first-name" required />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="last-name">Last Name</Label>
                              <Input id="last-name" required />
                            </div>
                          </div>
                          <div className="grid gap-4 sm:grid-cols-2">
                            <div className="space-y-2">
                              <Label htmlFor="email">Email</Label>
                              <Input id="email" type="email" required />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="phone">Phone</Label>
                              <Input id="phone" type="tel" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="subject">Subject</Label>
                            <Input id="subject" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="message">Message</Label>
                            <Textarea id="message" rows={5} required />
                          </div>
                          <Button type="submit" className="w-full bg-blue-950 text-white hover:bg-blue-900">
                            Send Message
                          </Button>
                          {formSubmitted && (
                            <div className="flex items-center gap-2 rounded-md bg-green-50 p-3 text-green-700">
                              <CheckCircle className="h-5 w-5" />
                              <span>Your message has been sent successfully!</span>
                            </div>
                          )}
                        </form>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="quote">
                    <Card>
                      <CardContent className="p-6">
                        <form onSubmit={handleSubmit} className="space-y-6">
                          <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-blue-950">Shipment Details</h3>
                            <div className="space-y-2">
                              <Label>Shipment Type</Label>
                              <RadioGroup defaultValue="commercial">
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="commercial" id="commercial" />
                                  <Label htmlFor="commercial">Commercial</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="personal" id="personal" />
                                  <Label htmlFor="personal">Personal</Label>
                                </div>
                              </RadioGroup>
                            </div>
                            <div className="space-y-2">
                              <Label>Freight Type</Label>
                              <RadioGroup defaultValue="air">
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="air" id="air" />
                                  <Label htmlFor="air">Air Freight</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="sea" id="sea" />
                                  <Label htmlFor="sea">Sea Freight</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="both" id="both" />
                                  <Label htmlFor="both">Both</Label>
                                </div>
                              </RadioGroup>
                            </div>
                            <div className="grid gap-4 sm:grid-cols-2">
                              <div className="space-y-2">
                                <Label htmlFor="origin">Origin</Label>
                                <Select>
                                  <SelectTrigger id="origin">
                                    <SelectValue placeholder="Select country" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="us">United States</SelectItem>
                                    <SelectItem value="uk">United Kingdom</SelectItem>
                                    <SelectItem value="ca">Canada</SelectItem>
                                    <SelectItem value="au">Australia</SelectItem>
                                    <SelectItem value="de">Germany</SelectItem>
                                    <SelectItem value="fr">France</SelectItem>
                                    <SelectItem value="cn">China</SelectItem>
                                    <SelectItem value="jp">Japan</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="destination">Destination</Label>
                                <Select>
                                  <SelectTrigger id="destination">
                                    <SelectValue placeholder="Select country" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="us">United States</SelectItem>
                                    <SelectItem value="uk">United Kingdom</SelectItem>
                                    <SelectItem value="ca">Canada</SelectItem>
                                    <SelectItem value="au">Australia</SelectItem>
                                    <SelectItem value="de">Germany</SelectItem>
                                    <SelectItem value="fr">France</SelectItem>
                                    <SelectItem value="cn">China</SelectItem>
                                    <SelectItem value="jp">Japan</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>
                            <div className="grid gap-4 sm:grid-cols-3">
                              <div className="space-y-2">
                                <Label htmlFor="weight">Weight (kg)</Label>
                                <Input id="weight" type="number" min="0" step="0.1" />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="dimensions">Dimensions (cm)</Label>
                                <Input id="dimensions" placeholder="L x W x H" />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="pieces">Number of Pieces</Label>
                                <Input id="pieces" type="number" min="1" />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="goods-description">Description of Goods</Label>
                              <Textarea id="goods-description" rows={3} />
                            </div>
                          </div>

                          <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-blue-950">Contact Information</h3>
                            <div className="grid gap-4 sm:grid-cols-2">
                              <div className="space-y-2">
                                <Label htmlFor="quote-name">Full Name</Label>
                                <Input id="quote-name" required />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="company">Company Name</Label>
                                <Input id="company" />
                              </div>
                            </div>
                            <div className="grid gap-4 sm:grid-cols-2">
                              <div className="space-y-2">
                                <Label htmlFor="quote-email">Email</Label>
                                <Input id="quote-email" type="email" required />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="quote-phone">Phone</Label>
                                <Input id="quote-phone" type="tel" required />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="additional-info">Additional Information</Label>
                              <Textarea id="additional-info" rows={3} />
                            </div>
                          </div>
                          <Button type="submit" className="w-full bg-blue-950 text-white hover:bg-blue-900">
                            Request Quote
                          </Button>
                          {formSubmitted && (
                            <div className="flex items-center gap-2 rounded-md bg-green-50 p-3 text-green-700">
                              <CheckCircle className="h-5 w-5" />
                              <span>Your quote request has been submitted successfully!</span>
                            </div>
                          )}
                        </form>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-blue-950 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mb-8 text-gray-600">
              Find answers to common questions about our shipping and logistics services
            </p>
            <div className="grid gap-6 text-left">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-blue-950">How do I track my shipment?</h3>
                <p className="text-gray-600">
                  You can track your shipment by entering your tracking number on our{" "}
                  <Link href="/tracking" className="text-blue-600 hover:underline">
                    tracking page
                  </Link>
                  . You'll receive real-time updates on your shipment's status and location.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-blue-950">What shipping options do you offer?</h3>
                <p className="text-gray-600">
                  We offer a range of shipping options including air freight, sea freight, express delivery, and
                  specialized shipping for oversized or delicate items. Visit our{" "}
                  <Link href="/services" className="text-blue-600 hover:underline">
                    services page
                  </Link>{" "}
                  for more details.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-blue-950">How do I get a shipping quote?</h3>
                <p className="text-gray-600">
                  You can request a shipping quote by filling out our quote request form on this page, or by contacting
                  our customer service team directly at info@smartmover.com or +1 (555) 123-4567.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-blue-950">Do you offer customs clearance services?</h3>
                <p className="text-gray-600">
                  Yes, we provide comprehensive customs clearance services to ensure your shipments move smoothly across
                  international borders. Our experts handle all documentation and regulatory requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

