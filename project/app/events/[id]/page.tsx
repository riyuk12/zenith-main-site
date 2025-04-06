"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Users, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function EventPage() {
  const { id } = useParams();
  
  // In a real application, this would be fetched from an API
  const eventData = {
    
  };

  const event = eventData[id as keyof typeof eventData];

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Event not found</h1>
          <Link href="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary py-12">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Events
          </Link>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-video rounded-lg overflow-hidden">
                <img
                  src={event?.image}
                  alt={event?.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {event?.isLive && (
                <div className="absolute top-4 left-4 bg-destructive text-destructive-foreground px-3 py-1 rounded-full flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive-foreground opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-destructive-foreground"></span>
                  </span>
                  Live
                </div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h1 className="text-4xl font-bold mb-6">{event?.title}</h1>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Calendar className="h-5 w-5" />
                  <span>{event?.date}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Clock className="h-5 w-5" />
                  <span>{event?.time}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-5 w-5" />
                  <span>{event?.location}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Users className="h-5 w-5" />
                  <span>
                    {event?.isLive 
                      ? `${event?.currentAttendees}/${event?.capacity} attending`
                      : event?.capacity}
                  </span>
                </div>
              </div>

              <p className="text-muted-foreground mb-8">
                {event?.description}
              </p>

              <Button size="lg" className="w-full md:w-auto">
                {event?.isLive ? "Join Live" : "Register Now"}
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
