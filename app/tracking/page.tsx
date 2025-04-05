import type { Metadata } from "next"
import { TrackingForm } from "@/components/tracking-form"

export const metadata: Metadata = {
  title: "Track Your Shipment | Smart Mover Shipping Logistics",
  description: "Track your shipment in real-time with Smart Mover Shipping Logistics' tracking system.",
}

export default function TrackingPage() {
  return (
    <main className="flex-1">
      <section className="bg-gradient-to-r from-blue-950 to-blue-900 py-16 text-white md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Track Your Shipment</h1>
            <p className="mb-8 text-gray-200">
              Enter your tracking number to get real-time updates on your shipment status
            </p>
            <TrackingForm className="mx-auto" />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-bold text-blue-950">Tracking Information</h2>
            <div className="mb-8 rounded-lg border p-6">
              <p className="text-center text-gray-600">
                Enter your tracking number above to view your shipment details.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="mb-4 text-xl font-semibold text-blue-950">How to Track Your Shipment</h3>
                <ol className="ml-6 list-decimal space-y-2 text-gray-700">
                  <li>Enter your tracking number in the search box above</li>
                  <li>Click the "Track" button to view your shipment status</li>
                  <li>View detailed information about your shipment's journey</li>
                </ol>
              </div>

              <div>
                <h3 className="mb-4 text-xl font-semibold text-blue-950">Don't Have a Tracking Number?</h3>
                <p className="text-gray-700">
                  If you don't have a tracking number or have questions about your shipment, please contact our customer
                  service team:
                </p>
                <ul className="mt-2 space-y-2 text-gray-700">
                  <li>Email: tracking@smartmover.com</li>
                  <li>Phone: +1 (555) 123-4567</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

