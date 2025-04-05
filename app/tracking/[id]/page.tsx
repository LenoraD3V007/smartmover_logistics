import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Clock, MapPin, Calendar, User, Building, Phone, Mail } from "lucide-react"

interface TrackingPageProps {
  params: {
    id: string
  }
}

export function generateMetadata({ params }: TrackingPageProps): Metadata {
  return {
    title: `Tracking: ${params.id} | Smart Mover Shipping Logistics`,
    description: "Track your shipment in real-time with Smart Mover Shipping Logistics' tracking system.",
  }
}

// This would normally come from an API or database
const getMockTrackingData = (id: string) => {
  return {
    trackingNumber: id,
    status: "In Transit",
    estimatedDelivery: "April 10, 2025",
    origin: "Nashville-Tennessee, USA",
    destination: "Fairmont-West Virginia, USA",
    service: "Express Sea Freight",
    weight: "2,185 kg",
    pieces: "1",
    shipDate: "April 5, 2025",
    receiver: {
      name: "Elsie Louise Patrick",
      company: "...",
      address: "8081/2 Center Ave. mononagh, WV, 26554",
      phone: "+1 681-332-6965",
      email: "...",
    },
    journey: [
      {
        date: "April 5, 2025",
        time: "09:30 AM",
        location: "Nashville-Tennesse, USA",
        status: "Transhipment document processed",
        completed: true,
      },
      {
        date: "April 5, 2025",
        time: "11:45 AM",
        location: "Nashville-Tennessee, USA",
        status: "Processed at origin warehouse",
        completed: true,
      },
      {
        date: "April 5, 2025",
        time: "1:15 PM",
        location: "Nashville-Tennesse, USA",
        status: "Departed for enforcement investigation",
        completed: true,
      },
      {
        date: "April 5, 2025",
        time: "3:30 PM",
        location: "In Transit",
        status: "In transit to destination",
        completed: true,
      },
      /*{
        date: "April 7, 2025",
        time: "09:00 AM",
        location: "London, UK",
        status: "Arrived at destination facility",
        completed: false,
      },
      {
        date: "April 9, 2025",
        time: "02:30 PM",
        location: "London, UK",
        status: "Out for delivery",
        completed: false,
      },
      {
        date: "April 10, 2025",
        time: "11:00 AM",
        location: "London, UK",
        status: "Delivered",
        completed: false,
      },*/
    ],
  }
}

export default function TrackingDetailPage({ params }: TrackingPageProps) {
  const trackingData = getMockTrackingData(params.id)

  return (
    <main className="flex-1">
      <section className="bg-gradient-to-r from-blue-950 to-blue-900 py-12 text-white md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
              <div>
                <h1 className="text-2xl font-bold sm:text-3xl">Tracking Details</h1>
                <p className="text-gray-200">Tracking Number: {trackingData.trackingNumber}</p>
              </div>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/tracking">Track Another Shipment</Link>
              </Button>
            </div>
            <div className="rounded-lg bg-white p-4 text-blue-950 sm:p-6">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-yellow-500" />
                  <span className="font-medium">Status:</span>
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                    {trackingData.status}
                  </span>
                </div>
                <div>
                  <span className="font-medium">Estimated Delivery:</span> <span>{trackingData.estimatedDelivery}</span>
                </div>
              </div>

              <div className="mb-8 grid gap-6 md:grid-cols-2">
                <div className="space-y-4 rounded-lg bg-gray-50 p-4">
                  <h3 className="font-semibold">Shipment Information</h3>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="text-gray-500">Origin</p>
                      <p className="font-medium">{trackingData.origin}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Destination</p>
                      <p className="font-medium">{trackingData.destination}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Service</p>
                      <p className="font-medium">{trackingData.service}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Ship Date</p>
                      <p className="font-medium">{trackingData.shipDate}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Weight</p>
                      <p className="font-medium">{trackingData.weight}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Pieces</p>
                      <p className="font-medium">{trackingData.pieces}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 rounded-lg bg-gray-50 p-4">
                  <h3 className="font-semibold">Receiver Information</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <User className="mt-0.5 h-4 w-4 text-gray-400" />
                      <div>
                        <p className="text-gray-500">Name</p>
                        <p className="font-medium">{trackingData.receiver.name}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Building className="mt-0.5 h-4 w-4 text-gray-400" />
                      <div>
                        <p className="text-gray-500">Company</p>
                        <p className="font-medium">{trackingData.receiver.company}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="mt-0.5 h-4 w-4 text-gray-400" />
                      <div>
                        <p className="text-gray-500">Address</p>
                        <p className="font-medium">{trackingData.receiver.address}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Phone className="mt-0.5 h-4 w-4 text-gray-400" />
                      <div>
                        <p className="text-gray-500">Phone</p>
                        <p className="font-medium">{trackingData.receiver.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Mail className="mt-0.5 h-4 w-4 text-gray-400" />
                      <div>
                        <p className="text-gray-500">Email</p>
                        <p className="font-medium">{trackingData.receiver.email}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="mb-4 font-semibold">Shipment Image</h3>
                <div className="relative h-[200px] overflow-hidden rounded-lg sm:h-[300px]">
                  {/*<Image src="/placeholder.svg?height=300&width=800" alt="Shipment" fill className="object-cover" />*/}
                  <Image src="/images/toyota_tacoma.jpg" alt="Toyota Tacoma 2025" fill className="object-cover" />
                </div>
              </div>

              <div>
                <h3 className="mb-4 font-semibold">Shipment Journey</h3>
                <div className="space-y-6">
                  {trackingData.journey.map((step, index) => (
                    <div key={index} className="relative flex gap-4">
                      <div className="flex flex-col items-center">
                        <div
                          className={`flex h-8 w-8 items-center justify-center rounded-full ${
                            step.completed ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-400"
                          }`}
                        >
                          {step.completed ? <CheckCircle2 className="h-5 w-5" /> : <Clock className="h-5 w-5" />}
                        </div>
                        {index < trackingData.journey.length - 1 && (
                          <div className={`h-full w-0.5 ${step.completed ? "bg-green-200" : "bg-gray-200"}`} />
                        )}
                      </div>
                      <div className="flex-1 pb-6">
                        <div className="flex flex-col justify-between gap-2 sm:flex-row">
                          <div>
                            <h4 className="font-medium">{step.status}</h4>
                            <p className="text-sm text-gray-500">{step.location}</p>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Calendar className="h-4 w-4" />
                            <span>{step.date}</span>
                            <span>•</span>
                            <Clock className="h-4 w-4" />
                            <span>{step.time}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

