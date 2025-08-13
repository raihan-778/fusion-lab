"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ProjectType {
  id: string
  title: string
  description: string
  icon: LucideIcon
  priceRange: string
}

interface ProjectTypeCardProps {
  project: ProjectType
  onSelect: () => void
  isSelected: boolean
}

export function ProjectTypeCard({ project, onSelect, isSelected }: ProjectTypeCardProps) {
  const Icon = project.icon

  return (
    <motion.div whileHover={{ scale: 1.02, y: -4 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
      <Card
        className={`cursor-pointer transition-all duration-300 hover:shadow-lg border-2 ${
          isSelected ? "border-primary shadow-lg" : "border-border hover:border-primary/50"
        }`}
        onClick={onSelect}
      >
        <CardHeader className="pb-4">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-primary/10">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <CardTitle className="text-xl">{project.title}</CardTitle>
              <CardDescription className="text-sm">{project.description}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Starting from</p>
              <p className="font-semibold text-primary">{project.priceRange}</p>
            </div>
            <Button variant="outline" size="sm">
              Select
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
