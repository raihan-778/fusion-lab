"use client"

import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, Calendar, Clock, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface ConfirmationModalProps {
  isOpen: boolean
  onClose: () => void
  bookingData: any
}

export function ConfirmationModal({ isOpen, onClose, bookingData }: ConfirmationModalProps) {
  if (!bookingData) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md"
          >
            <Card>
              <CardHeader className="text-center pb-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4"
                >
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </motion.div>
                <CardTitle className="text-2xl">Meeting Scheduled!</CardTitle>
                <CardDescription>Thank you! We look forward to discussing your project.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">
                      {new Date(bookingData.date).toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">{bookingData.time}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">{bookingData.email}</span>
                  </div>
                </div>

                <div className="text-sm text-muted-foreground">
                  <p className="mb-2">
                    <strong>Project:</strong> {bookingData.projectTitle}
                  </p>
                  {bookingData.budget && (
                    <p className="mb-2">
                      <strong>Budget:</strong> {bookingData.budget}
                    </p>
                  )}
                  {bookingData.timeline && (
                    <p>
                      <strong>Timeline:</strong> {bookingData.timeline}
                    </p>
                  )}
                </div>

                <div className="pt-4 space-y-2">
                  <p className="text-sm text-muted-foreground">📧 A confirmation email has been sent to your inbox</p>
                  <p className="text-sm text-muted-foreground">📞 We'll call you 5 minutes before the meeting</p>
                </div>

                <Button onClick={onClose} className="w-full">
                  Close
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
