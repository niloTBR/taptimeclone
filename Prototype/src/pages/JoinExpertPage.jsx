import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import SectionTitle from '@/components/common/SectionTitle'
import { Link } from 'react-router-dom'
import { 
  DollarSign, 
  Clock, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Star,
  Quote,
  Award,
  Briefcase,
  GraduationCap,
  MessageSquare,
  Heart,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import joinExpertData from '@/data/join-expert.json'
import { useState } from 'react'
import { motion } from 'framer-motion'
import styles from './JoinExpert.module.scss'

const JoinExpertPage = () => {
  const { 
    hero, 
    benefits, 
    process, 
    requirements, 
    testimonials, 
    categories, 
    faq, 
    stats 
  } = joinExpertData

  const [currentRequirementIndex, setCurrentRequirementIndex] = useState(0)
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0)

  // Enhanced requirements with clean icons
  const enhancedRequirements = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Proven Experience",
      description: "5+ years of proven experience in your field"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Leadership Role",
      description: "Leadership role at a recognized company or successful entrepreneur"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Teaching Experience",
      description: "Track record of mentoring, teaching, or coaching others"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Communication Skills",
      description: "Excellent communication skills and professional presence"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Passion for Helping",
      description: "Passion for helping others succeed and grow"
    }
  ]

  const nextRequirement = () => {
    setCurrentRequirementIndex((prev) => (prev + 1) % enhancedRequirements.length)
  }

  const prevRequirement = () => {
    setCurrentRequirementIndex((prev) => (prev - 1 + enhancedRequirements.length) % enhancedRequirements.length)
  }

  const getIcon = (iconName) => {
    const icons = {
      DollarSign,
      Clock,
      Users,
      TrendingUp
    }
    const IconComponent = icons[iconName] || DollarSign
    return <IconComponent className="w-8 h-8" />
  }

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Enhanced Hero Section with Background */}
      <section className="relative bg-gradient-to-r from-slate-900 to-blue-900 text-white px-4 py-12 pt-32" style={{backgroundImage: "url('/yianni-mathioudakis-clhGuYYPJpE-unsplash.jpg')", backgroundSize: "cover", backgroundPosition: "center"}}>
        <div className="absolute inset-0 bg-[#48768c]/80"></div>
        <div className="relative z-10">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center space-y-8">
            <div>
              <h1 className="text-xl md:text-2xl font-semibold tracking-tight text-white mb-4">
                {hero.title}
              </h1>
              <p className="text-sm md:text-base text-white/90 max-w-3xl mx-auto">
                {hero.subtitle}
              </p>
            </div>

            {/* Hero Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold text-white">{stats.experts}</div>
                <div className="text-sm text-white/80">Active Experts</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold text-white">{stats.avgEarning}</div>
                <div className="text-sm text-white/80">Average Hourly Rate</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold text-white">{stats.satisfaction}</div>
                <div className="text-sm text-white/80">Expert Satisfaction</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold text-white">{stats.repeatBookings}</div>
                <div className="text-sm text-white/80">Repeat Bookings</div>
              </div>
            </div>
            
            {/* Apply Button - Below Stats */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="rounded-full px-8 bg-[#efffba] text-black border border-[#efffba] hover:bg-black hover:text-white hover:border-black hover:-translate-y-0.5 transition-all duration-300 shadow-sm hover:shadow-lg" asChild>
                <Link to="/signup?type=expert">
                  Apply to Become an Expert
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <SectionTitle 
            title="Turn Your Expertise Into Impact"
            description="Join the premier platform where knowledge meets opportunity"
            className="mb-12"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-100 rounded-xl p-6">
                <div className="space-y-4">
                  <div className="text-black">
                    {getIcon(benefit.icon)}
                  </div>
                  <h3 className="font-semibold text-lg">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Homepage Style */}
      <section className="content-section-alternate section-padding py-20">
        <div className="page-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className={styles.howItWorksHeader}>
              <SectionTitle 
                title="Three simple steps to get started"
                description="From application to earning, we make it easy to share your expertise"
                className="mb-12"
              />
            </div>
            
            {/* Steps Carousel */}
            <div className={styles.stepsCarousel}>
              <div className={styles.stepsContainer}>
                {process.map((step, index) => (
                  <motion.div 
                    key={index} 
                    className={styles.stepCard}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {/* Image Placeholder */}
                    <div className={styles.stepImagePlaceholder}>
                    </div>
                    
                    {/* Step Content */}
                    <div className={styles.stepContent}>
                      <div className={styles.stepNumber}>
                        {step.step}
                      </div>
                      <h3 className={styles.stepTitle}>
                        {step.title}
                      </h3>
                      <p className={styles.stepDescription}>
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expert Testimonials - Homepage Style Carousel */}
      <section className="content-section section-padding py-20">
        <div className="page-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SectionTitle 
              title="What Our Experts Say"
              description="Real earnings and impact from professionals like you"
              className="mb-12"
            />
            
            {/* Reviews Carousel */}
            <div className={styles.reviewsCarousel}>
              <div 
                className={styles.reviewsContainer}
                style={{ transform: `translateX(-${currentReviewIndex * (100/3)}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <motion.div 
                    key={testimonial.id}
                    className={styles.reviewCard}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: (index % 3) * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{ width: 'calc((100% - 4rem) / 3)' }}
                  >
                    <div className={styles.reviewStars}>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-black text-black" />
                      ))}
                    </div>
                    <p className={styles.reviewText}>
                      "{testimonial.quote}"
                    </p>
                    <div className={styles.reviewAuthor}>
                      <div className={styles.authorAvatar}>
                        {getInitials(testimonial.name)}
                      </div>
                      <div className={styles.authorInfo}>
                        <div className={styles.authorName}>{testimonial.name}</div>
                        <div className={styles.authorRole}>{testimonial.title}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Reviews Pagination */}
            <div className={styles.paginationControls} style={{ marginTop: '2rem' }}>
              <div className={styles.paginationArrows}>
                <button
                  onClick={() => {
                    setCurrentReviewIndex(prev => prev > 0 ? prev - 1 : Math.max(0, testimonials.length - 3))
                  }}
                  className={styles.paginationArrow}
                  type="button"
                >
                  <ChevronLeft />
                </button>
                <button
                  onClick={() => {
                    setCurrentReviewIndex(prev => prev < testimonials.length - 3 ? prev + 1 : 0)
                  }}
                  className={styles.paginationArrow}
                  type="button"
                >
                  <ChevronRight />
                </button>
              </div>
              <div className={styles.paginationDots}>
                {Array.from({ length: Math.max(1, testimonials.length - 2) }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentReviewIndex(i)}
                    className={`${styles.dot} ${i === currentReviewIndex ? styles.active : ''}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <SectionTitle 
            title="What Kind of Expert Are You?"
            description="We're looking for experts across all major industries and functions"
            className="mb-12"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {categories.map((category, index) => (
              <Link 
                key={index} 
                to={`/browse?category=${encodeURIComponent(category.name)}`}
                className="block"
              >
                <div className="bg-gray-100 rounded-xl p-6 h-full hover:bg-gray-200 transition-colors cursor-pointer">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm mb-2">{category.name}</h3>
                      <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                        {category.description}
                      </p>
                      <div className="text-xs font-semibold text-black">
                        {category.averageRate}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-600 flex-shrink-0 ml-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements - Clean Cards */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <SectionTitle 
            title={requirements.title}
            description={requirements.subtitle}
            className="mb-12"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {enhancedRequirements.slice(0, 4).map((requirement, index) => (
              <div key={index} className="bg-gray-100 rounded-xl p-6">
                <div className="space-y-4">
                  <div className="text-black">
                    {requirement.icon}
                  </div>
                  <h3 className="font-semibold text-lg">{requirement.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {requirement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4" style={{background: '#081d34'}}>
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-2 mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight text-white" style={{fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif"}}>
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-white/90 max-w-3xl leading-relaxed mx-auto">
              Everything you need to know about becoming a TapTime expert
            </p>
          </div>
          
          <Accordion type="single" collapsible className="bg-white rounded-2xl p-2">
            {faq.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-100 last:border-0">
                <AccordionTrigger className="text-left font-semibold text-base px-6 py-4 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-sm text-muted-foreground leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA - Homepage Style Footer Bar */}
      <div className={styles.footerCta}>
        <div className={styles.footerCtaContent}>
          <div>
            <div className={styles.footerCtaText}>
              <h3 className={styles.footerCtaTitle}>Ready to Start Earning?</h3>
              <p className={styles.footerCtaSubtitle}>
                Join the leading platform for expert knowledge sharing and start monetizing your expertise today.
              </p>
            </div>
            <Link to="/signup?type=expert" className={styles.footerCtaButton}>
              Apply to Become an Expert
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JoinExpertPage