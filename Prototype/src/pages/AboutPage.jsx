import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { Users, Target, Award, Heart, Clock, Star, Zap, ArrowRight, CheckCircle, Globe, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import StandardPage from '@/components/layout/StandardPage'
import Section from '@/components/common/Section'
import PageContainer from '@/components/common/PageContainer'
import SectionTitle from '@/components/common/SectionTitle'

// About page component
const AboutPage = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = React.useState(0)
  
  const stats = [
    { icon: Users, value: "1,000+", label: "Verified Experts" },
    { icon: Clock, value: "10,000+", label: "Sessions Completed" },
    { icon: Star, value: "4.9/5", label: "Average Rating" },
    { icon: Globe, value: "50+", label: "Countries Served" }
  ]

  const problems = [
    {
      title: "Expert knowledge is locked away",
      description: "Industry professionals have incredible insights, but there's no easy way to access them when you need guidance."
    },
    {
      title: "Real Guidance Comes from Many Voices",
      description: "One mentor can't solve everything - TapTime matches you with multiple experts so you can get diverse perspectives and faster breakthroughs."
    },
    {
      title: "Learning is inefficient and expensive",
      description: "Courses and workshops are generic, time-consuming, and don't address your unique challenges."
    }
  ]

  const solutions = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Expert Access",
      description: "Connect with verified industry professionals in minutes, not months. Get personalized advice exactly when you need it."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Perfect Matching",
      description: "Our AI matches you with experts who've solved your exact challenges, ensuring relevant and actionable guidance."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "15-60 Minute Sessions",
      description: "Get focused, high-impact advice in bite-sized sessions that fit your schedule and deliver immediate value."
    }
  ]

  const values = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Quality First",
      description: "Every expert is rigorously vetted. We maintain the highest standards to ensure you get exceptional guidance."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Human Connection",
      description: "Real people, real experience, real results. We believe in the power of human-to-human knowledge transfer."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Driven",
      description: "We're building a global community where expertise flows freely and everyone can learn from the best."
    }
  ]

  const testimonials = [
    {
      quote: "One 15-60 minute session gave me the exact framework I needed. Landed my dream PM role at Stripe within 2 months.",
      author: "Alex Chen",
      role: "Product Manager at Stripe"
    },
    {
      quote: "My expert walked me through their actual pitch deck. We closed our $2M Series A using their exact strategy.",
      author: "Sarah Williams", 
      role: "Startup Founder"
    },
    {
      quote: "They showed me what top-tier portfolios really look like. Got callbacks from Google, Apple, and Figma in one week.",
      author: "Michael Rodriguez",
      role: "UX Designer"
    }
  ]

  const breadcrumbs = [
    { label: 'About', href: null }
  ]

  const headerActions = (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button size="lg" className="rounded-full px-8 bg-[#efffba] text-black border border-[#efffba] hover:bg-black hover:text-white hover:border-black hover:-translate-y-0.5 transition-all duration-300 shadow-sm hover:shadow-lg" asChild>
        <Link to="/browse">
          Find Your Expert
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
      <Button size="lg" className="rounded-full px-8 border-2 border-white text-white bg-transparent hover:bg-white hover:text-black transition-all" asChild>
        <Link to="/join-expert">
          Become an Expert
        </Link>
      </Button>
    </div>
  )

  return (
    <StandardPage
      title="Expert guidance, when you need it most"
      description="Connect with industry professionals who've already solved your exact challenges. Get personalized advice in focused 15-60 minute sessions that deliver real results."
      breadcrumbs={breadcrumbs}
      actions={headerActions}
      headerSize="large"
    >
      {/* Stats Section - Homepage Style with Blue Background */}
      <section className="py-20 px-4" style={{background: '#081d34'}}>
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map(({ icon: Icon, value, label }, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 rounded-full bg-[#efffba] text-black flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-2 text-white">
                    {value}
                  </div>
                  <div className="text-sm text-white/70">
                    {label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Problem We Solve */}
      <Section background="muted" spacing="default">
        <PageContainer size="wide">
          <SectionTitle 
            title="Real Guidance Comes from Many Voices"
            titleClassName="text-xl md:text-2xl font-semibold"
            description="We identified three major problems that keep professionals from getting the guidance they need"
            className="mb-16"
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <Card key={index} className="bg-gray-100 border-0">
                <CardContent className="p-8 space-y-4">
                  <div className="text-[#efffba] text-5xl font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-black">
                    {problem.title}
                  </h3>
                  <p className="text-black/70 leading-relaxed">
                    {problem.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </PageContainer>
      </Section>

      {/* Our Solution */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <SectionTitle 
            title="We're changing how expertise flows"
            titleClassName="text-xl md:text-2xl font-semibold"
            description="TapTime makes expert knowledge accessible, affordable, and immediate"
            className="mb-16"
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="bg-gray-100 border-0">
                <CardContent className="pt-6 space-y-4 p-8">
                  <div className="text-black mb-4">
                    {React.cloneElement(solution.icon, { className: "w-12 h-12" })}
                  </div>
                  <h3 className="text-xl font-semibold text-black">
                    {solution.title}
                  </h3>
                  <p className="text-black/70 leading-relaxed">
                    {solution.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Proof & Impact - Testimonials Carousel (JoinExpertPage Style) */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
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
              className="mb-16"
            />
            
            {/* Testimonials Carousel Container */}
            <div className="relative overflow-hidden">
              <div 
                className="flex gap-8 transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonialIndex * (100/3)}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <motion.div 
                    key={index}
                    className="flex-none"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: (index % 3) * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{ width: 'calc((100% - 4rem) / 3)' }}
                  >
                    <Card className="bg-gray-100 border-0 h-full">
                      <CardContent className="p-8 space-y-6">
                        <div className="flex items-center gap-1 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-black text-black" />
                          ))}
                        </div>
                        <p className="text-black/70 italic leading-relaxed">
                          "{testimonial.quote}"
                        </p>
                        <div className="mt-auto">
                          <div className="font-semibold text-black">{testimonial.author}</div>
                          <div className="text-sm text-black/60">{testimonial.role}</div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Pagination Controls */}
            <div className="flex justify-center items-center gap-8 mt-8">
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setCurrentTestimonialIndex(prev => prev > 0 ? prev - 1 : 0)
                  }}
                  className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                  type="button"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    setCurrentTestimonialIndex(prev => prev < testimonials.length - 3 ? prev + 1 : prev)
                  }}
                  className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                  type="button"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <div className="flex gap-1.5">
                {Array.from({ length: Math.max(1, testimonials.length - 2) }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentTestimonialIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === currentTestimonialIndex ? 'bg-black w-8' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <SectionTitle 
            title="Building the future of professional growth"
            titleClassName="text-xl md:text-2xl font-semibold"
            description="How we're democratizing access to expert knowledge"
            className="mb-12"
          />
          
          <div className="prose prose-lg mx-auto space-y-6">
            <p className="leading-relaxed text-black/70">
              TapTime was born from a simple observation: while the world is full of incredibly talented professionals, most people struggle to access their expertise when they need it most. Traditional mentorship is expensive, time-consuming, and often mismatched.
            </p>
            <p className="leading-relaxed text-black/70">
              Founded in 2024, we set out to bridge this gap by creating a platform where expertise meets opportunity. Our team came together with a shared vision of making professional guidance accessible to everyone, everywhere.
            </p>
            <p className="leading-relaxed text-black/70">
              Today, we're building a global community where knowledge flows freely, connecting ambitious professionals with industry leaders who've already solved their exact challenges. Every session is designed for immediate impact and real results.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4" style={{background: '#081d34'}}>
        <div className="container mx-auto max-w-6xl">
          <SectionTitle 
            title="What drives us every day"
            titleClassName="text-xl md:text-2xl font-semibold text-white"
            description="The principles that guide how we build and grow TapTime"
            descriptionClassName="text-white/90"
            className="mb-16"
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-gray-100 border-0">
                <CardContent className="pt-6 space-y-4 p-8">
                  <div className="text-black mb-4">
                    {React.cloneElement(value.icon, { className: "w-12 h-12" })}
                  </div>
                  <h3 className="text-xl font-semibold text-black">
                    {value.title}
                  </h3>
                  <p className="text-black/70 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Community - Footer CTA Bar */}
      <div className="py-8 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-[#efffba] rounded-2xl p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-semibold mb-2 text-black">
                  Join the TapTime Community
                </h3>
                <p className="text-sm text-black/70">
                  Whether you're seeking expert guidance or ready to share your knowledge, there's a place for you in our growing community.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/browse" className="inline-flex items-center gap-2 px-6 py-3 bg-[#081d34] text-white rounded-full font-semibold text-sm hover:bg-[#0a2040] transition-all">
                  Find Your Expert
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StandardPage>
  )
}

export default AboutPage