"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle,
  Code,
  Globe,
  ShoppingCart,
  Smartphone,
} from "lucide-react";
import { useState } from "react";
import { BookingForm } from "./booking-form";
import { ConfirmationModal } from "./confirmation-modal";
import { ProjectTypeCard } from "./project-type-card";

const projectTypes = [
  {
    id: "web-development",
    title: "Web Development",
    description: "Custom websites and web applications",
    icon: Code,
    priceRange: "$2,000 - $15,000",
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    description: "Online stores and marketplace solutions",
    icon: ShoppingCart,
    priceRange: "$3,000 - $25,000",
  },
  {
    id: "mobile-app",
    title: "Mobile Apps",
    description: "iOS and Android applications",
    icon: Smartphone,
    priceRange: "$5,000 - $50,000",
  },
  {
    id: "full-stack",
    title: "Full-Stack Solutions",
    description: "Complete digital ecosystems",
    icon: Globe,
    priceRange: "$10,000 - $100,000+",
  },
];

export function MeetingBooking() {
  const [selectedProject, setSelectedProject] = useState<string>("");
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [bookingData, setBookingData] = useState<any>(null);

  const handleProjectSelect = (projectId: string) => {
    setSelectedProject(projectId);
    setShowBookingForm(true);
  };

  const handleBookingSubmit = (data: any) => {
    setBookingData(data);
    setShowConfirmation(true);
    setShowBookingForm(false);
  };

  const handleBackToProjects = () => {
    setShowBookingForm(false);
    setSelectedProject("");
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
          Book Your Consultation
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Let&apos;s discuss your vision! Choose a project type and schedule a
          time that works for you. Our experts are here to guide you through
          every step.
        </p>
      </motion.div>

      <AnimatePresence mode="popLayout">
        {!showBookingForm ? (
          // Project Type Selection
          <motion.div
            key="project-selection"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-center">
                Select Your Project Type
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                Choose the service that best matches your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {projectTypes.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProjectTypeCard
                    project={project}
                    onSelect={() => handleProjectSelect(project.id)}
                    isSelected={selectedProject === project.id}
                  />
                </motion.div>
              ))}
            </div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-muted/30 rounded-2xl p-8 text-center"
            >
              <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Free Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>No Commitment Required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Expert Guidance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Custom Pricing</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : (
          // Booking Form
          <motion.div
            key="booking-form"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            <BookingForm
              selectedProject={projectTypes.find(
                (p) => p.id === selectedProject
              )}
              onSubmit={handleBookingSubmit}
              onBack={handleBackToProjects}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        bookingData={bookingData}
      />
    </div>
  );
}
