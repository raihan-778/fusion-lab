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
    // <div className="container mx-auto bg-charcoal-purple px-4 py-16 max-w-6xl">
    //   {/* Header Section */}
    //   <motion.div
    //     initial={{ opacity: 0, y: 20 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 0.6 }}
    //     className="text-center mb-16"
    //   >
    //     <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
    //       Book Your Consultation
    //     </h1>
    //     <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
    //       Let&apos;s discuss your vision! Choose a project type and schedule a
    //       time that works for you. Our experts are here to guide you through
    //       every step.
    //     </p>
    //   </motion.div>

    //   <AnimatePresence mode="popLayout">
    //     {!showBookingForm ? (
    //       // Project Type Selection
    //       <motion.div
    //         key="project-selection"
    //         initial={{ opacity: 0, x: -20 }}
    //         animate={{ opacity: 1, x: 0 }}
    //         exit={{ opacity: 0, x: 20 }}
    //         transition={{ duration: 0.5 }}
    //       >
    //         <div className="mb-12">
    //           <h2 className="text-2xl font-semibold mb-4 text-center">
    //             Select Your Project Type
    //           </h2>
    //           <p className="text-muted-foreground text-center mb-8">
    //             Choose the service that best matches your needs
    //           </p>
    //         </div>

    //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
    //           {projectTypes.map((project, index) => (
    //             <motion.div
    //               key={project.id}
    //               initial={{ opacity: 0, y: 20 }}
    //               animate={{ opacity: 1, y: 0 }}
    //               transition={{ duration: 0.5, delay: index * 0.1 }}
    //             >
    //               <ProjectTypeCard
    //                 project={project}
    //                 onSelect={() => handleProjectSelect(project.id)}
    //                 isSelected={selectedProject === project.id}
    //               />
    //             </motion.div>
    //           ))}
    //         </div>

    //         {/* Trust Indicators */}
    //         <motion.div
    //           initial={{ opacity: 0, y: 20 }}
    //           animate={{ opacity: 1, y: 0 }}
    //           transition={{ duration: 0.6, delay: 0.4 }}
    //           className="bg-muted/30 rounded-2xl p-8 text-center"
    //         >
    //           <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
    //             <div className="flex items-center gap-2">
    //               <CheckCircle className="w-4 h-4 text-green-600" />
    //               <span>Free Consultation</span>
    //             </div>
    //             <div className="flex items-center gap-2">
    //               <CheckCircle className="w-4 h-4 text-green-600" />
    //               <span>No Commitment Required</span>
    //             </div>
    //             <div className="flex items-center gap-2">
    //               <CheckCircle className="w-4 h-4 text-green-600" />
    //               <span>Expert Guidance</span>
    //             </div>
    //             <div className="flex items-center gap-2">
    //               <CheckCircle className="w-4 h-4 text-green-600" />
    //               <span>Custom Pricing</span>
    //             </div>
    //           </div>
    //         </motion.div>
    //       </motion.div>
    //     ) : (
    //       // Booking Form
    //       <motion.div
    //         key="booking-form"
    //         initial={{ opacity: 0, x: 20 }}
    //         animate={{ opacity: 1, x: 0 }}
    //         exit={{ opacity: 0, x: -20 }}
    //         transition={{ duration: 0.5 }}
    //       >
    //         <BookingForm
    //           selectedProject={projectTypes.find(
    //             (p) => p.id === selectedProject
    //           )}
    //           onSubmit={handleBookingSubmit}
    //           onBack={handleBackToProjects}
    //         />
    //       </motion.div>
    //     )}
    //   </AnimatePresence>

    //   {/* Confirmation Modal */}
    //   <ConfirmationModal
    //     isOpen={showConfirmation}
    //     onClose={() => setShowConfirmation(false)}
    //     bookingData={bookingData}
    //   />
    // </div>

    <div className="relative container isolate px-4 py-16 max-w-6xl rounded-2xl overflow-hidden">
      {/* ‑-- animated cosmic gradient background ‑-- */}
      <div className="absolute inset-0 -z-10">
        {/* moving nebula */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d1a] via-[#0a0a1f] to-[#0f0f2b]" />
        {/* purple-cyan pulse */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-700/20 via-transparent to-transparent" />
        {/* subtle scanline */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 2px,#111 2px,#111 4px)",
          }}
        />
      </div>

      {/* frosted glass card */}
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="relative rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-slate-700/40 shadow-[0_0_40px_rgba(99,102,241,0.15)]">
          <div className="px-4 py-16 sm:px-10">
            {/* ------------------ your existing JSX goes here ------------------ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent">
                Book Your Consultation
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Let&apos;s discuss your vision! Choose a project type and
                schedule a time that works for you. Our experts are here to
                guide you through every step.
              </p>
            </motion.div>

            <AnimatePresence mode="popLayout">
              {!showBookingForm ? (
                <motion.div
                  key="project-selection"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 text-center text-slate-100">
                      Select Your Project Type
                    </h2>
                    <p className="text-slate-400 text-center mb-8">
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
                    className="bg-slate-800/60 rounded-2xl p-8 text-center border border-slate-700/50"
                  >
                    <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-slate-300">
                      {[
                        "Free Consultation",
                        "No Commitment Required",
                        "Expert Guidance",
                        "Custom Pricing",
                      ].map((txt) => (
                        <div key={txt} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-cyan-400" />
                          <span>{txt}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ) : (
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

            <ConfirmationModal
              isOpen={showConfirmation}
              onClose={() => setShowConfirmation(false)}
              bookingData={bookingData}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
