"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface ProjectType {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  priceRange: string;
}

interface ProjectTypeCardProps {
  project: ProjectType;
  onSelect: () => void;
  isSelected: boolean;
}

export function ProjectTypeCard({
  project,
  onSelect,
  isSelected,
}: ProjectTypeCardProps) {
  const Icon = project.icon;

  return (
    // <motion.div whileHover={{ scale: 1.02, y: -4 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
    //   <Card
    //     className={`cursor-pointer transition-all duration-300 hover:shadow-lg border-2 ${
    //       isSelected ? "border-primary shadow-lg" : "border-border hover:border-primary/50"
    //     }`}
    //     onClick={onSelect}
    //   >
    //     <CardHeader className="pb-4">
    //       <div className="flex items-center gap-4">
    //         <div className="p-3 rounded-xl bg-primary/10">
    //           <Icon className="w-6 h-6 text-primary" />
    //         </div>
    //         <div>
    //           <CardTitle className="text-xl">{project.title}</CardTitle>
    //           <CardDescription className="text-sm">{project.description}</CardDescription>
    //         </div>
    //       </div>
    //     </CardHeader>
    //     <CardContent className="pt-0">
    //       <div className="flex justify-between items-center">
    //         <div>
    //           <p className="text-sm text-muted-foreground mb-1">Starting from</p>
    //           <p className="font-semibold text-primary">{project.priceRange}</p>
    //         </div>
    //         <Button variant="outline" size="sm">
    //           Select
    //         </Button>
    //       </div>
    //     </CardContent>
    //   </Card>
    // </motion.div>
    <motion.div
      whileHover={{ scale: 1.03, y: -6 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Card
        className={`
      cursor-pointer relative overflow-hidden rounded-2xl border-2
      bg-slate-900/70 backdrop-blur-md transition-all duration-300
      ${
        isSelected
          ? "border-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.45)]"
          : "border-slate-700 hover:border-cyan-500/60 hover:shadow-[0_0_20px_rgba(6,182,212,0.25)]"
      }
    `}
        onClick={onSelect}
      >
        {/* animated neon scan-line */}
        <div
          className={`absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none
        ${isSelected ? "opacity-100" : "group-hover:opacity-40"}`}
          style={{
            background:
              "repeating-linear-gradient(0deg,rgba(6,182,212,0.06),rgba(6,182,212,0.06) 1px,transparent 1px,transparent 3px)",
            backgroundSize: "100% 6px",
            animation: "scan 3s linear infinite",
          }}
        />

        <CardHeader className="pb-4">
          <div className="flex items-start gap-4">
            <motion.div
              whileHover={{ rotate: 5 }}
              className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20"
            >
              <Icon className="w-6 h-6 text-cyan-300" />
            </motion.div>
            <div>
              <CardTitle className="text-xl text-slate-100">
                {project.title}
              </CardTitle>
              <CardDescription className="text-sm text-slate-400 mt-1">
                {project.description}
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="pt-0 flex justify-between items-end">
          <div>
            <p className="text-xs text-slate-500 mb-1">Starting from</p>
            <p className="text-lg font-bold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
              {project.priceRange}
            </p>
          </div>
          <Button
            size="sm"
            className={`
          border-none rounded-full px-5
          ${
            isSelected
              ? "bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold"
              : "bg-slate-800/80 text-slate-200 hover:bg-slate-700/80"
          }
        `}
          >
            {isSelected ? "Selected" : "Select"}
          </Button>
        </CardContent>
      </Card>

      {/* tiny CSS for the scan animation */}
      <style jsx>{`
        @keyframes scan {
          0% {
            background-position-y: 0px;
          }
          100% {
            background-position-y: 30px;
          }
        }
      `}</style>
    </motion.div>
  );
}
