import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Award,
  Coffee,
  Code,
  Palette,
  BarChart3,
  LucideIcon
} from 'lucide-react'

interface TeamMember {
  id: number;
  name: string;
  role: string;
  department: string;
  avatar: string;
  funFact: string;
  achievement: string;
  skills: string[];
  icon: LucideIcon;
  gradient: string;
  bgColor: string;
}

const TeamSpotlight: React.FC = () => {
  const [currentMemberIndex, setCurrentMemberIndex] = useState<number>(0)

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Senior UX Designer",
      department: "Design",
      avatar: "SC",
      funFact: "Has visited 23 countries and speaks 4 languages fluently",
      achievement: "Led the redesign that increased user engagement by 40%",
      skills: ["UI/UX Design", "Prototyping", "User Research"],
      icon: Palette,
      gradient: "from-pink-500 to-rose-500",
      bgColor: "from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Full Stack Developer",
      department: "Engineering",
      avatar: "MR",
      funFact: "Builds mechanical keyboards in his spare time",
      achievement: "Optimized backend performance, reducing load times by 60%",
      skills: ["React", "Node.js", "PostgreSQL"],
      icon: Code,
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20"
    },
    {
      id: 3,
      name: "Emily Watson",
      role: "Data Analyst",
      department: "Analytics",
      avatar: "EW",
      funFact: "Former competitive chess player and coffee connoisseur",
      achievement: "Identified key insights that drove 25% revenue growth",
      skills: ["Python", "SQL", "Data Visualization"],
      icon: BarChart3,
      gradient: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20"
    },
    {
      id: 4,
      name: "David Kim",
      role: "Product Manager",
      department: "Product",
      avatar: "DK",
      funFact: "Marathon runner who's completed 12 races across 6 countries",
      achievement: "Successfully launched 3 major features ahead of schedule",
      skills: ["Strategy", "Agile", "User Stories"],
      icon: Award,
      gradient: "from-purple-500 to-violet-500",
      bgColor: "from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20"
    }
  ]

  const nextMember = () => {
    setCurrentMemberIndex((prev) => (prev + 1) % teamMembers.length)
  }

  const prevMember = () => {
    setCurrentMemberIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length)
  }

  const currentMember = teamMembers[currentMemberIndex]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/5 to-background" id='teams'>
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Star className="w-6 h-6 text-yellow-500" />
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Team Spotlight
            </h2>
            <Star className="w-6 h-6 text-yellow-500" />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the amazing people who make Nexus Digital a great place to work
          </p>
        </motion.div>

        {/* Featured Member Card */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentMember.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <Card className={`relative overflow-hidden border-0 shadow-2xl bg-gradient-to-br ${currentMember.bgColor}`}>
                <CardContent className="p-8 sm:p-12">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Member Info */}
                    <div className="text-center md:text-left">
                      {/* Avatar */}
                      <motion.div
                        className="relative inline-block mb-6"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                      >
                        <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${currentMember.gradient} flex items-center justify-center text-white text-3xl font-bold shadow-2xl`}>
                          {currentMember.avatar}
                        </div>
                        <motion.div
                          className={`absolute -inset-2 rounded-full bg-gradient-to-br ${currentMember.gradient} opacity-20 blur-lg`}
                          animate={{ rotate: 360 }}
                          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                        />
                        <div className={`absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-gradient-to-br ${currentMember.gradient} flex items-center justify-center shadow-lg`}>
                          {React.createElement(currentMember.icon, { className: "w-6 h-6 text-white" })}
                        </div>
                      </motion.div>

                      {/* Name & Role */}
                      <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                        {currentMember.name}
                      </h3>
                      <p className="text-lg text-muted-foreground mb-1">
                        {currentMember.role}
                      </p>
                      <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-6">
                        {currentMember.department} Department
                      </p>

                      {/* Skills */}
                      <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
                        {currentMember.skills.map((skill, index) => (
                          <motion.span
                            key={skill}
                            className="px-3 py-1 text-xs font-medium bg-accent/50 text-accent-foreground rounded-full"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Achievement & Fun Fact */}
                    <div className="space-y-6">
                      <motion.div
                        className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                      >
                        <div className="flex items-center space-x-3 mb-3">
                          <Award className="w-5 h-5 text-yellow-500" />
                          <h4 className="font-semibold text-foreground">Recent Achievement</h4>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {currentMember.achievement}
                        </p>
                      </motion.div>

                      <motion.div
                        className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                      >
                        <div className="flex items-center space-x-3 mb-3">
                          <Coffee className="w-5 h-5 text-orange-500" />
                          <h4 className="font-semibold text-foreground">Fun Fact</h4>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {currentMember.funFact}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={prevMember}
              className="w-12 h-12 rounded-full p-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Member Indicators */}
            <div className="flex space-x-3">
              {teamMembers.map((member, index) => (
                <motion.button
                  key={member.id}
                  className={`relative w-12 h-12 rounded-full text-xs font-bold transition-all duration-300 ${
                    index === currentMemberIndex
                      ? `bg-gradient-to-br ${member.gradient} text-white shadow-lg scale-110`
                      : 'bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                  }`}
                  onClick={() => setCurrentMemberIndex(index)}
                  whileHover={{ scale: index === currentMemberIndex ? 1.1 : 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {member.avatar}
                  {index === currentMemberIndex && (
                    <motion.div
                      className={`absolute -inset-1 rounded-full bg-gradient-to-br ${member.gradient} opacity-30 blur`}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextMember}
              className="w-12 h-12 rounded-full p-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamSpotlight


