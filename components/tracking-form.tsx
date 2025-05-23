"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"
import {getPackageByTrackingCode} from "@/lib/data/user-tracking"

interface TrackingFormProps {
  className?: string
}

export function TrackingForm({ className }: TrackingFormProps) {
  const [trackingNumber, setTrackingNumber] = useState("")
  const [error, setError] = useState("");
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault()

    const pkg = getPackageByTrackingCode(trackingNumber.trim())
 
     //if (trackingNumber.trim()) {
     if (!pkg) {
       setError("Tracking code not found. Please check and try again.");
       return;
       
       //router.push(`/tracking/${trackingNumber}`)
     }
 
     router.push(`/tracking/${trackingNumber}`)


   /*  e.preventDefault()
    if (trackingNumber.trim()) {
      router.push(`/tracking/${trackingNumber}`)
    } */
  }

  return (
    <form onSubmit={handleSubmit} className={cn("w-full", className)}>
      <div className="flex w-full max-w-md flex-col gap-2 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Enter tracking number"
            className="pl-9"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            required
          />

        {error && <p className="text-red-600 text-sm">{error}</p>}

        </div>
        <Button type="submit" className="bg-yellow-500 text-blue-950 hover:bg-yellow-400">
          Track
        </Button>
      </div>
    </form>
  )
}

