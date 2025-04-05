import { Ship, Plane, FileCheck, Warehouse, Shield, Truck, Package, BarChart, type LucideIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const IconComponent = getIcon(icon)

  return (
    <Card className="transition-all duration-300 hover:shadow-lg">
      <CardHeader className="pb-2">
        <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-950">
          <IconComponent className="h-6 w-6" />
        </div>
        <CardTitle className="text-xl text-blue-950">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

function getIcon(iconName: string): LucideIcon {
  const icons: Record<string, LucideIcon> = {
    Ship,
    Plane,
    FileCheck,
    Warehouse,
    Shield,
    Truck,
    Package,
    BarChart,
  }

  return icons[iconName] || Package
}

