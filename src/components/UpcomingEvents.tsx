import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card'
import { 
  Calendar as CalendarIcon, 
  Clock, 
  MapPin, 
  Users, 
  ChevronLeft, 
  ChevronRight,
  Coffee,
  Presentation,
  PartyPopper,
  LucideIcon
} from 'lucide-react'

interface EventItem {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  attendees: number;
  category: string;
  icon: LucideIcon;
  color: string;
  description: string;
}

const UpcomingEvents: React.FC = () => {
  const [currentEventIndex, setCurrentEventIndex] = useState<number>(0)

  const events: EventItem[] = [
    {
      id: 1,
      title: "Team Building Workshop",
      date: "2025-07-15",
      time: "14:00 - 17:00",
      location: "Conference Room A",
      attendees: 24,
      category: "Team Building",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
      description: "Join us for an interactive team building session focused on collaboration and communication."
    },
    {
      id: 2,
      title: "Coffee & Code Session",
      date: "2025-07-18",
      time: "10:00 - 11:30",
      location: "Lounge Area",
      attendees: 12,
      category: "Social",
      icon: Coffee,
      color: "from-amber-500 to-orange-500",
      description: "Casual coding session with coffee, snacks, and great conversations about tech."
    },
    {
      id: 3,
      title: "Q3 Presentation Day",
      date: "2025-07-22",
      time: "09:00 - 16:00",
      location: "Main Auditorium",
      attendees: 156,
      category: "Business",
      icon: Presentation,
      color: "from-purple-500 to-pink-500",
      description: "Quarterly presentations from all departments showcasing achievements and goals."
    },
    {
      id: 4,
      title: "Summer Office Party",
      date: "2025-07-25",
      time: "18:00 - 22:00",
      location: "Rooftop Terrace",
      attendees: 89,
      category: "Celebration",
      icon: PartyPopper,
      color: "from-green-500 to-teal-500",
      description: "Celebrate summer with food, drinks, music, and fun activities for the whole team."
    }
  ]

  const nextEvent = () => {
    setCurrentEventIndex((prev) => (prev + 1) % events.length)
  }

  const prevEvent = () => {
    setCurrentEventIndex((prev) => (prev - 1 + events.length) % events.length)
  }

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString)
    return date.toLocaleDateString(
      'en-US', 
      { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }
    )
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-accent/5" id='events'>
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} /> */}
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Upcoming Events
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay connected with your team through our exciting upcoming events and activities
          </p>
        </motion.div>

        {/* Events Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentEventIndex}
              className="grid md:grid-cols-2 gap-8 items-center"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              {/* Featured Event Card */}
              <Card className="relative overflow-hidden border-0 shadow-2xl">
                <div className={`absolute inset-0 bg-gradient-to-br ${events[currentEventIndex].color} opacity-10`} />
                <CardHeader className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${events[currentEventIndex].color} flex items-center justify-center shadow-lg`}>
                      {React.createElement(events[currentEventIndex].icon, { className: "w-6 h-6 text-white" })}
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-accent text-accent-foreground">
                      {events[currentEventIndex].category}
                    </span>
                  </div>
                  <CardTitle className="text-2xl font-bold mb-2">
                    {events[currentEventIndex].title}
                  </CardTitle>
                  <p className="text-muted-foreground">
                    {events[currentEventIndex].description}
                  </p>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-sm">
                      <CalendarIcon className="w-4 h-4 text-muted-foreground" />
                      <span>{formatDate(events[currentEventIndex].date)}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span>{events[currentEventIndex].time}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span>{events[currentEventIndex].location}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span>{events[currentEventIndex].attendees} attendees</span>
                    </div>
                  </div>
                  <Button className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
                    Register Now
                  </Button>
                </CardContent>
              </Card>

              {/* Event List */}
              <div className="space-y-4">
                {events.map((event, index) => (
                  <motion.div
                    key={event.id}
                    className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 ${
                      index === currentEventIndex 
                        ? 'border-blue-500 bg-accent/50 shadow-lg' 
                        : 'border-border hover:border-accent hover:bg-accent/20'
                    }`}
                    onClick={() => setCurrentEventIndex(index)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${event.color} flex items-center justify-center`}>
                        {React.createElement(event.icon, { className: "w-5 h-5 text-white" })}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-sm mb-1">{event.title}</h3>
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <span>{new Date(event.date).toLocaleDateString()}</span>
                          <span>{event.time.split(' - ')[0]}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={prevEvent}
              className="w-10 h-10 rounded-full p-0"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={nextEvent}
              className="w-10 h-10 rounded-full p-0"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-4">
            {events.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentEventIndex ? 'bg-blue-500 w-8' : 'bg-muted-foreground/30'
                }`}
                onClick={() => setCurrentEventIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default UpcomingEvents


