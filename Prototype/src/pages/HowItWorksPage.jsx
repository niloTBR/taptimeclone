import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, CheckCircle, Search, Calendar, Video, FileText } from 'lucide-react'
import SectionTitle from '@/components/common/SectionTitle'
import { Link } from 'react-router-dom'

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
      <section className="relative bg-gradient-to-r from-slate-900 to-blue-900 text-white px-4 py-20 pt-32" style={{backgroundImage: "url('/yianni-mathioudakis-clhGuYYPJpE-unsplash.jpg')", backgroundSize: "cover", backgroundPosition: "center"}}>
        <div className="absolute inset-0 bg-[#48768c]/80"></div>
        <div className="relative z-10">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Tap Into The Journey That Shapes You
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We believe the shortest path between you and your biggest leaps is the knowledge, wisdom and truth of someone who has done the work before you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="rounded-full px-8 bg-white text-black hover:bg-gray-100" asChild>
                <Link to="/browse">
                  Find Your Expert
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 border-2 border-white text-white hover:bg-white hover:text-black" asChild>
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
            miniTitle="Why TapTime Exists"
            title="We believe the world's greatest untapped resource is human wisdom and it needs to be effortlessly available"
            description="From startup founders to financial coaches, business advisors to leadership mentors, TapTime connects you with the people who've done the work, lived the journey, and want to share their wisdom with you — so you don't have to waste yours."
          />
        </div>
      </section>

      {/* What You Gain */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <SectionTitle 
            miniTitle="What you gain"
            title="Four key benefits that transform how you grow"
            className="mb-16"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-gray-100 border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardContent className="pt-6 space-y-4 p-6">
                  <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Steps */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <SectionTitle 
            miniTitle="How it works"
            title="Four simple steps to expert guidance"
            description="From finding the right expert to implementing their advice"
            className="mb-16"
          />
          
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="grid lg:grid-cols-2 gap-12 items-center">
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Card className="bg-gray-100 border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-8">
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-lg font-semibold">
                            {step.number}
                          </div>
                          <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center">
                            {step.icon}
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <h3 className="text-2xl font-semibold">
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                        
                        <div className="space-y-2">
                          {step.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} relative h-64 lg:h-80`}>
                  <img 
                    src={`/api/placeholder/500/400`} 
                    alt={step.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <Badge className="absolute top-4 left-4 bg-foreground text-background">
                    Step {step.number}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Born from the Power of Expertise */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-8">
            <h2 className="text-3xl font-semibold">
              Born from the Power of Expertise, Built for Those Who Value Time
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              TapTime was born from a simple realization: the most valuable insights come from real experience, and the most successful people understand that wisdom shared is wisdom multiplied. We built a platform where knowledge meets opportunity, and where both sides win.
            </p>
            
            <div className="bg-gray-100 rounded-lg p-8 border-0 shadow-lg">
              <p className="text-lg italic text-muted-foreground">
                "It's a beautiful thing, how much an expert can change someone's life in just 15 minutes. You get perspective you could never gain on your own."
              </p>
              <div className="mt-4 text-sm font-medium">
                — Expert Review
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-gray-100 border-0 shadow-lg">
            <CardContent className="p-12 text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-semibold">
                  Ready to tap into expert wisdom?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Join thousands who've accelerated their success with TapTime
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="rounded-full px-8 bg-black text-white hover:bg-gray-800" asChild>
                  <Link to="/browse">
                    Browse Experts
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 border-2 border-black bg-white hover:bg-gray-50" asChild>
                  <Link to="/join-expert">
                    Share Your Expertise
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default HowItWorksPage