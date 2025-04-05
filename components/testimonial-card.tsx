import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  company: string
}

export function TestimonialCard({ quote, author, company }: TestimonialCardProps) {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg">
      <CardContent className="pt-6">
        <Quote className="mb-4 h-8 w-8 text-blue-200" />
        <p className="mb-4 text-gray-700">{quote}</p>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <div>
          <p className="font-semibold text-blue-950">{author}</p>
          <p className="text-sm text-gray-500">{company}</p>
        </div>
      </CardFooter>
    </Card>
  )
}

