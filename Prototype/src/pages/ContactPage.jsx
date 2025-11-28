import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone, Clock, ArrowRight } from 'lucide-react'
import StandardPage from '@/components/layout/StandardPage'
import Section from '@/components/common/Section'
import PageContainer from '@/components/common/PageContainer'
import FormCard from '@/components/common/FormCard'
import SectionTitle from '@/components/common/SectionTitle'

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@taptime.com",
      description: "Send us an email and we'll get back to you within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Monday to Friday, 9AM to 6PM PST"
    }
  ]

  const headerActions = (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button size="lg" className="rounded-full px-8 bg-[#efffba] text-black border border-[#efffba] hover:bg-black hover:text-white hover:border-black hover:-translate-y-0.5 transition-all duration-300 shadow-sm hover:shadow-lg" asChild>
        <Link to="/browse">
          Find Your Expert
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </div>
  )

  return (
    <StandardPage
      title="Get in Touch"
      description="Have questions about TapTime? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
      actions={headerActions}
      headerSize="large"
    >

      {/* Contact Form & Info */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <SectionTitle 
                title="Let's start a conversation"
                titleClassName="text-xl md:text-2xl font-semibold"
                description="Fill out the form below and we'll get back to you as soon as possible"
                className="text-start mb-8"
              />
              
              <Card className="bg-gray-100 border-0">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input 
                          id="firstName" 
                          placeholder="Enter your first name"
                          className="border-2 border-muted-foreground/20 focus:border-foreground"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input 
                          id="lastName" 
                          placeholder="Enter your last name"
                          className="border-2 border-muted-foreground/20 focus:border-foreground"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Enter your email address"
                        className="border-2 border-muted-foreground/20 focus:border-foreground"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input 
                        id="subject" 
                        placeholder="What's this about?"
                        className="border-2 border-muted-foreground/20 focus:border-foreground"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us more about your inquiry..."
                        rows={6}
                        className="border-2 border-muted-foreground/20 focus:border-foreground resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full rounded-full bg-[#efffba] text-black border border-[#efffba] hover:bg-black hover:text-white hover:border-black transition-all"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <SectionTitle 
                title="Other ways to reach us"
                titleClassName="text-xl md:text-2xl font-semibold"
                description="Choose the method that works best for you"
                className="text-start mb-8"
              />
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <Card key={index} className="bg-gray-100 border-0">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 rounded-full bg-[#efffba] text-black flex items-center justify-center flex-shrink-0">
                            <Icon className="w-6 h-6" />
                          </div>
                          <div className="space-y-1 flex-1">
                            <h3 className="font-semibold text-black">{info.title}</h3>
                            <p className="text-lg font-medium text-black">{info.details}</p>
                            <p className="text-sm text-black/70">{info.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ CTA - Footer Bar Style */}
      <div className="py-8 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-[#efffba] rounded-2xl p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-semibold mb-2 text-black">
                  Looking for quick answers?
                </h3>
                <p className="text-sm text-black/70">
                  Check out our FAQ section for answers to common questions
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/faq" className="inline-flex items-center gap-2 px-6 py-3 bg-[#081d34] text-white rounded-full font-semibold text-sm hover:bg-[#0a2040] transition-all">
                  View FAQ
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

export default ContactPage