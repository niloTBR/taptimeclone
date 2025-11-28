import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { ArrowRight, CheckCircle, Search, Calendar, Video, FileText, Star } from 'lucide-react'
import SectionTitle from '@/components/common/SectionTitle'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import styles from './HowItWorks.module.scss'

const HowItWorksPage = () => {
  const steps = [
    {
      number: "01",
      title: "Tap In: Choose your need",
      description: "Browse our network of verified experts across 25+ categories. Search by expertise, industry, or specific challenge you're facing.",
      icon: <Search className="w-8 h-8" />,
      features: [
        "25+ expert categories",
        "Advanced search filters",
        "Expert profiles with reviews",
        "Clear pricing upfront"
      ]
    },
    {
      number: "02", 
      title: "Smart Match",
      description: "Our AI helps match you with experts who've solved your exact challenges. Book a session that fits your schedule.",
      icon: <Calendar className="w-8 h-8" />,
      features: [
        "AI-powered matching",
        "Instant booking",
        "Flexible scheduling",
        "Secure payments"
      ]
    },
    {
      number: "03",
      title: "Book instantly",
      description: "Choose your preferred time slot and complete your booking. All sessions are conducted via our secure video platform.",
      icon: <Video className="w-8 h-8" />,
      features: [
        "Secure video calls",
        "Session recordings (with permission)",
        "Real-time collaboration tools",
        "Mobile & desktop friendly"
      ]
    },
    {
      number: "04",
      title: "Act with Clarity",
      description: "Leave with actionable insights, clear next steps, and often additional resources to help you implement what you learned.",
      icon: <FileText className="w-8 h-8" />,
      features: [
        "Session summaries",
        "Action plans",
        "Follow-up resources",
        "Progress tracking"
      ]
    }
  ]

  const benefits = [
    {
      title: "Access Real Talent",
      description: "Connect with professionals who have first-hand experience in your challenge area."
    },
    {
      title: "Save Time, Make Progress", 
      description: "Get months of trial and error compressed into focused 15-minute sessions."
    },
    {
      title: "Book on your terms",
      description: "Flexible scheduling that works around your busy professional life."
    },
    {
      title: "Grow with purpose",
      description: "Every session is designed to move you forward with concrete, actionable steps."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Enhanced Hero Section with Background */}
      <section className="relative bg-gradient-to-r from-slate-900 to-blue-900 text-white px-4 py-12 pt-48" style={{backgroundImage: "url('/yianni-mathioudakis-clhGuYYPJpE-unsplash.jpg')", backgroundSize: "cover", backgroundPosition: "center"}}>
        <div className="absolute inset-0 bg-[#48768c]/80"></div>
        <div className="relative z-10">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="space-y-6">
            <h1 className="text-xl md:text-2xl font-semibold tracking-tight text-white">
              Tap Into The Journey That Shapes You
            </h1>
            <p className="text-sm md:text-base text-white/90 max-w-2xl mx-auto leading-relaxed">
              We believe the shortest path between you and your biggest leaps is the knowledge, wisdom and truth of someone who has done the work before you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="rounded-full px-8 bg-[#efffba] text-black border border-[#efffba] hover:bg-black hover:text-white hover:border-black hover:-translate-y-0.5 transition-all duration-300 shadow-sm hover:shadow-lg" asChild>
                <Link to="/browse">
                  Find Your Expert
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 border-2 border-white text-white hover:bg-white hover:text-black transition-all" asChild>
                <Link to="/join-expert">
                  Become an Expert
                </Link>
              </Button>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Why TapTime Exists */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <SectionTitle 
            title="We believe the world's greatest untapped resource is human wisdom and it needs to be effortlessly available"
            titleClassName="text-xl md:text-2xl font-semibold"
            description="From startup founders to financial coaches, business advisors to leadership mentors, TapTime connects you with the people who've done the work, lived the journey, and want to share their wisdom with you — so you don't have to waste yours."
          />
        </div>
      </section>


      {/* How It Works Steps - Homepage Style */}
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
                title="Three simple steps to expert advice"
                titleClassName="text-xl md:text-2xl font-semibold"
                description="Get connected with the right expert in minutes"
                className="mb-12"
              />
            </div>
            
            {/* Steps Carousel */}
            <div className={styles.stepsCarousel}>
              <div className={styles.stepsContainer}>
                {steps.slice(0, 3).map((step, index) => (
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
                        {step.number}
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

      {/* Reviews Section - Homepage Style */}
      <section className="content-section section-padding py-20">
        <div className="page-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SectionTitle 
              title="Success stories from our community"
              titleClassName="text-xl md:text-2xl font-semibold"
              description="See how TapTime has helped professionals achieve breakthrough moments"
              className="mb-12"
            />
            
            <div className={styles.reviewsGrid}>
              {[
                {
                  rating: 5,
                  text: "One 15-60 minute session gave me the exact framework I needed. Landed my dream PM role at Stripe within 2 months.",
                  author: "Alex Chen",
                  role: "Product Manager at Stripe"
                },
                {
                  rating: 5, 
                  text: "My expert walked me through their actual pitch deck. We closed our $2M Series A using their exact strategy.",
                  author: "Sarah Williams",
                  role: "Startup Founder"
                },
                {
                  rating: 5,
                  text: "They showed me what top-tier portfolios really look like. Got callbacks from Google, Apple, and Figma in one week.",
                  author: "Michael Rodriguez",
                  role: "UX Designer"
                }
              ].map((testimonial, index) => (
                <motion.div 
                  key={index}
                  className={styles.reviewCard}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className={styles.reviewStars}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-black text-black" />
                    ))}
                  </div>
                  <p className={styles.reviewText}>
                    "{testimonial.text}"
                  </p>
                  <div className={styles.reviewAuthor}>
                    <div className={styles.authorAvatar}>
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className={styles.authorName}>{testimonial.author}</div>
                      <div className={styles.authorRole}>{testimonial.role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ with Accordions */}
      <section className="py-20 px-4" style={{background: '#081d34'}}>
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-2 mb-12">
            <h2 className="text-xl md:text-2xl font-semibold text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-white/90 leading-relaxed max-w-2xl mx-auto">
              Everything you need to know about getting started with TapTime
            </p>
          </div>
          
          <Accordion type="single" collapsible className="bg-white rounded-2xl p-2">
            {[
              {
                question: "How does TapTime match me with the right expert?",
                answer: "Our AI-powered matching system analyzes your specific needs and connects you with experts who have successfully solved similar challenges. We consider industry experience, expertise areas, and proven results to ensure you get the most relevant guidance."
              },
              {
                question: "What happens during a typical session?",
                answer: "Sessions are conducted via our secure video platform. You'll have a focused conversation with your expert, who will share specific strategies, frameworks, and actionable advice tailored to your situation. Many experts also provide follow-up resources and action plans."
              },
              {
                question: "How quickly can I book a session?",
                answer: "Most sessions can be booked within 24-48 hours. Many experts offer same-day availability for urgent needs. Our instant booking system shows real-time availability, so you can find a time that works for both you and your chosen expert."
              },
              {
                question: "What if I'm not satisfied with my session?",
                answer: "We have a satisfaction guarantee. If you're not happy with your session, our support team will work with you to either find another expert or provide a refund. We're committed to ensuring every session delivers value."
              },
              {
                question: "Can I have ongoing sessions with the same expert?",
                answer: "Absolutely! Many users build long-term relationships with their experts. You can book follow-up sessions, and many experts offer special packages for ongoing mentorship and guidance."
              }
            ].map((item, index) => (
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
              <h3 className={styles.footerCtaTitle}>Ready to tap into expert wisdom?</h3>
              <p className={styles.footerCtaSubtitle}>
                Join thousands who've accelerated their success with TapTime
              </p>
            </div>
            <Link to="/browse" className={styles.footerCtaButton}>
              Browse Experts
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorksPage