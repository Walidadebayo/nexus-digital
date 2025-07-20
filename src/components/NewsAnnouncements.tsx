import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  ChevronDown,
  Calendar,
  User,
  Megaphone,
  Star,
  TrendingUp,
  Award,
  Coffee,
  Zap,
  LucideIcon
} from 'lucide-react'

type Priority = 'high' | 'medium' | 'low';

interface NewsItem {
  id: number;
  title: string;
  summary: string;
  content: string;
  date: string;
  author: string;
  category: string;
  isNew: boolean;
  icon: LucideIcon;
  color: string;
  priority: Priority;
}

const NewsAnnouncements: React.FC = () => {
  const [expandedNews, setExpandedNews] = useState<number | null>(null)

  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: "Q3 Results: Record Breaking Performance!",
      summary: "We've achieved our highest quarterly revenue with exceptional team performance across all departments.",
      content: "This quarter has been absolutely phenomenal for Nexus Digital. We've not only met but exceeded all our targets, with a 35% increase in revenue compared to Q2. Our engineering team delivered 3 major product updates, the design team won 2 industry awards, and our sales team closed the biggest deal in company history. This success is a testament to everyone's hard work and dedication. We're planning a company-wide celebration next Friday to recognize these achievements.",
      date: "2025-07-10",
      author: "Sarah Johnson, CEO",
      category: "Company News",
      isNew: true,
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500",
      priority: "high"
    },
    {
      id: 2,
      title: "New Employee Wellness Program Launch",
      summary: "Introducing comprehensive wellness benefits including mental health support, fitness memberships, and flexible work arrangements.",
      content: "We're excited to announce the launch of our comprehensive Employee Wellness Program, effective immediately. This program includes free mental health counseling sessions, gym membership reimbursements up to $100/month, flexible work-from-home options, and quarterly wellness days. Additionally, we're introducing meditation rooms on each floor and healthy snack options in all break rooms. Your wellbeing is our priority, and we believe these initiatives will help create an even better work environment for everyone.",
      date: "2025-07-08",
      author: "Michael Chen, HR Director",
      category: "HR & Benefits",
      isNew: true,
      icon: Coffee,
      color: "from-blue-500 to-cyan-500",
      priority: "medium"
    },
    {
      id: 3,
      title: "Innovation Lab Opens Next Month",
      summary: "Our new state-of-the-art innovation lab will provide cutting-edge tools and collaborative spaces for experimental projects.",
      content: "Get ready for the grand opening of our Innovation Lab on August 1st! This 2,000 square foot space features the latest in VR/AR technology, 3D printing capabilities, IoT development kits, and collaborative workstations. The lab will be available for all employees to work on side projects, experiment with new technologies, and collaborate on innovative solutions. We'll be hosting weekly 'Innovation Hours' where teams can present their experimental projects. Booking system will go live next week.",
      date: "2025-07-05",
      author: "Alex Rivera, CTO",
      category: "Innovation",
      isNew: false,
      icon: Zap,
      color: "from-purple-500 to-pink-500",
      priority: "medium"
    },
    {
      id: 4,
      title: "Team Excellence Awards - Nominations Open",
      summary: "Nominate your colleagues for outstanding contributions in various categories. Recognition ceremony scheduled for month-end.",
      content: "It's time to recognize the amazing work of our team members! Nominations are now open for our quarterly Team Excellence Awards. Categories include: Innovation Champion, Collaboration Star, Customer Hero, Mentor of the Quarter, and Rising Star. Each winner receives a $500 bonus, premium parking spot for 3 months, and recognition at our all-hands meeting. Nominations close on July 20th, and the ceremony will be held on July 30th with catered lunch and prizes. Submit your nominations through the HR portal.",
      date: "2025-07-03",
      author: "Lisa Park, People Operations",
      category: "Recognition",
      isNew: false,
      icon: Award,
      color: "from-yellow-500 to-orange-500",
      priority: "low"
    }
  ]

  const toggleExpanded = (newsId: number) => {
    setExpandedNews(expandedNews === newsId ? null : newsId)
  }

  const getPriorityColor = (priority: Priority): string => {
    switch (priority) {
      case 'high': return 'bg-red-500'
      case 'medium': return 'bg-yellow-500'
      case 'low': return 'bg-green-500'
      default: return 'bg-gray-500'
    }
  }

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString)
    return date.toLocaleDateString(
      'en-US', 
      { 
        month: 'short', 
        day: 'numeric',
        year: 'numeric'
      }
    )
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/5 to-background" id='announcements'>
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Megaphone className="w-6 h-6 text-blue-500" />
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              News & Announcements
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay up to date with the latest company news, updates, and important announcements
          </p>
        </motion.div>

        {/* News Items */}
        <div className="space-y-6">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="relative overflow-hidden border-2 border-transparent hover:border-accent/50 transition-all duration-300 group">
                <CardHeader className="relative">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <div className="relative z-10 flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        {/* Icon */}
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                          {React.createElement(item.icon, { className: "w-5 h-5 text-white" })}
                        </div>
                        
                        {/* Badges */}
                        <div className="flex items-center space-x-2">
                          {item.isNew && (
                            <Badge className="bg-red-500 hover:bg-red-600 text-white">
                              <Star className="w-3 h-3 mr-1" />
                              New
                            </Badge>
                          )}
                          <Badge variant="outline" className="text-xs">
                            {item.category}
                          </Badge>
                          <div className={`w-2 h-2 rounded-full ${getPriorityColor(item.priority)}`} />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {item.title}
                      </h3>

                      {/* Meta Info */}
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(item.date)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{item.author}</span>
                        </div>
                      </div>

                      {/* Summary */}
                      <p className="text-muted-foreground leading-relaxed">
                        {item.summary}
                      </p>
                    </div>

                    {/* Expand Button */}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleExpanded(item.id)}
                      className="ml-4 w-8 h-8 rounded-full p-0 flex-shrink-0"
                    >
                      <motion.div
                        animate={{ rotate: expandedNews === item.id ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                    </Button>
                  </div>
                </CardHeader>

                {/* Expanded Content */}
                <AnimatePresence>
                  {expandedNews === item.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CardContent className="pt-0">
                        <motion.div
                          className="border-t border-border pt-6"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                            {item.content}
                          </p>
                        </motion.div>
                      </CardContent>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-3 rounded-full border-2 hover:bg-accent/50 transition-all duration-300"
          >
            View All Announcements
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default NewsAnnouncements


