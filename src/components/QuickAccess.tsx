import React from 'react'
import { motion, Variants } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import {
  FileText,
  Calendar as CalendarIcon,
  Users,
  Settings,
  HelpCircle,
  CreditCard,
  Shield,
  BarChart3,
  Mail,
  Clock,
  Briefcase,
  Coffee,
  LucideIcon
} from 'lucide-react'

interface QuickAccessItem {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  href: string;
}

const QuickAccess: React.FC = () => {
  const quickAccessItems: QuickAccessItem[] = [
    {
      id: 1,
      title: "Leave Request",
      description: "Submit time off requests",
      icon: CalendarIcon,
      color: "from-blue-500 to-cyan-500",
      bgColor: "hover:bg-blue-50 dark:hover:bg-blue-950/20",
      href: "#leave-request"
    },
    {
      id: 2,
      title: "HR Documents",
      description: "Access policies & forms",
      icon: FileText,
      color: "from-green-500 to-emerald-500",
      bgColor: "hover:bg-green-50 dark:hover:bg-green-950/20",
      href: "#hr-docs"
    },
    {
      id: 3,
      title: "IT Support",
      description: "Get technical help",
      icon: HelpCircle,
      color: "from-orange-500 to-red-500",
      bgColor: "hover:bg-orange-50 dark:hover:bg-orange-950/20",
      href: "#it-support"
    },
    {
      id: 4,
      title: "Directory",
      description: "Find team members",
      icon: Users,
      color: "from-purple-500 to-pink-500",
      bgColor: "hover:bg-purple-50 dark:hover:bg-purple-950/20",
      href: "#directory"
    },
    {
      id: 5,
      title: "Expenses",
      description: "Submit expense reports",
      icon: CreditCard,
      color: "from-indigo-500 to-blue-500",
      bgColor: "hover:bg-indigo-50 dark:hover:bg-indigo-950/20",
      href: "#expenses"
    },
    {
      id: 6,
      title: "Security",
      description: "Access & permissions",
      icon: Shield,
      color: "from-red-500 to-pink-500",
      bgColor: "hover:bg-red-50 dark:hover:bg-red-950/20",
      href: "#security"
    },
    {
      id: 7,
      title: "Analytics",
      description: "View performance data",
      icon: BarChart3,
      color: "from-teal-500 to-green-500",
      bgColor: "hover:bg-teal-50 dark:hover:bg-teal-950/20",
      href: "#analytics"
    },
    {
      id: 8,
      title: "Settings",
      description: "Manage preferences",
      icon: Settings,
      color: "from-gray-500 to-slate-500",
      bgColor: "hover:bg-gray-50 dark:hover:bg-gray-950/20",
      href: "#settings"
    },
    {
      id: 9,
      title: "Email",
      description: "Internal messaging",
      icon: Mail,
      color: "from-yellow-500 to-orange-500",
      bgColor: "hover:bg-yellow-50 dark:hover:bg-yellow-950/20",
      href: "#email"
    },
    {
      id: 10,
      title: "Time Tracking",
      description: "Log work hours",
      icon: Clock,
      color: "from-cyan-500 to-blue-500",
      bgColor: "hover:bg-cyan-50 dark:hover:bg-cyan-950/20",
      href: "#time-tracking"
    },
    {
      id: 11,
      title: "Projects",
      description: "Manage tasks & projects",
      icon: Briefcase,
      color: "from-violet-500 to-purple-500",
      bgColor: "hover:bg-violet-50 dark:hover:bg-violet-950/20",
      href: "#projects"
    },
    {
      id: 12,
      title: "Break Room",
      description: "Social & wellness",
      icon: Coffee,
      color: "from-amber-500 to-yellow-500",
      bgColor: "hover:bg-amber-50 dark:hover:bg-amber-950/20",
      href: "#break-room"
    }
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-accent/5" id='resources'>
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Quick Access
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access all your essential tools and resources in one convenient place
          </p>
        </motion.div>

        {/* Quick Access Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {quickAccessItems.map((item, index) => (
            <motion.a
              key={item.id}
              href={item.href}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: { type: 'spring', stiffness: 400, damping: 10 }
              }}
              whileTap={{ scale: 0.95 }}
              className="block"
            >
              <Card className={`relative overflow-hidden border-2 border-transparent hover:border-accent/50 transition-all duration-300 cursor-pointer group ${item.bgColor}`}>
                <CardContent className="p-6 text-center">
                  {/* Animated Background Gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    initial={false}
                  />
                  
                  {/* Icon Container */}
                  <motion.div
                    className="relative z-10 mb-4"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                      {React.createElement(item.icon, { className: "w-8 h-8 text-white" })}
                    </div>
                    
                    {/* Glow Effect */}
                    <motion.div
                      className={`absolute inset-0 w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}
                      animate={{ 
                        scale: [1, 1.1, 1],
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }}
                    />
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="font-semibold text-sm mb-2 text-foreground group-hover:text-foreground transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted-foreground group-hover:text-muted-foreground/80 transition-colors leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Hover Arrow */}
                  <motion.div
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                      <motion.div
                        animate={{ x: [0, 2, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <svg className="w-3 h-3 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.div>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.a>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground mb-4">
            Need help finding something? Our support team is here to assist you.
          </p>
          <motion.a
            href="#support"
            className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <HelpCircle className="w-4 h-4" />
            <span>Contact Support</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default QuickAccess


