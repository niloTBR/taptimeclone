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
      <section className="relative bg-gradient-to-r from-slate-900 to-blue-900 text-white px-4 py-20 pt-32" style={{backgroundImage: "url('/yianni-mathioudakis-clhGuYYPJpE-unsplash.jpg')", backgroundSize: "cover", backgroundPosition: "center"}}>
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
              <Button size="lg" className="rounded-full px-8 bg-white text-black hover:bg-green-500 hover:text-white transition-all" asChild>
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
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <SectionTitle 
            miniTitle="Why Join TapTime"
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

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <SectionTitle 
            miniTitle="How It Works"
            title="Three Simple Steps to Get Started"
            description="From application to earning, we make it easy to share your expertise"
            className="mb-12"
          />
          
          <div className="relative max-w-5xl mx-auto">
            {/* Background line */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-[2px] bg-gray-300" style={{width: 'calc(100% - 8rem)', marginLeft: '4rem'}}></div>
            
            <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              {process.map((step, index) => (
                <div key={index} className="flex-1 text-center relative z-10">
                  <div className="w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expert Testimonials */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <SectionTitle 
            miniTitle="Success Stories"
            title="What Our Experts Say"
            description="Real earnings and impact from professionals like you"
            className="mb-12"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-gray-100 border-0">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-black text-black" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3 pt-4">
                    <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center">
                      <span className="text-sm font-medium">
                        {getInitials(testimonial.name)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.title}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <SectionTitle 
            miniTitle="Expertise Areas"
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
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <SectionTitle 
            miniTitle="FAQ"
            title="Frequently Asked Questions"
            description="Everything you need to know about becoming a TapTime expert"
            className="mb-12"
          />
          
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

      {/* Final CTA */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Start Earning?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Join the leading platform for expert knowledge sharing and start monetizing your expertise today.
            </p>
          </div>
          
          <Button 
            size="lg" 
            className="rounded-full px-10 py-6 text-lg font-medium shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(-45deg, #10b981, #059669, #047857, #10b981)',
              backgroundSize: '400% 400%',
              animation: 'gradient 3s ease infinite'
            }}
            asChild
          >
            <Link to="/signup?type=expert">
              Apply to Become an Expert
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          
          <style jsx>{`
            @keyframes gradient {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
          `}</style>
        </div>
      </section>
    </div>
  )
}

export default JoinExpertPage