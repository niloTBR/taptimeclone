import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { MessageSquare, Lightbulb, Bug, Heart, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import StandardPage from '@/components/layout/StandardPage'
import SectionTitle from '@/components/common/SectionTitle'

const FeedbackPage = () => {
  const feedbackTypes = [
    {
      icon: MessageSquare,
      title: "General Feedback",
      description: "Share your overall experience with TapTime"
    },
    {
      icon: Lightbulb,
      title: "Feature Request",
      description: "Suggest new features or improvements"
    },
    {
      icon: Bug,
      title: "Report Issue",
      description: "Let us know about bugs or technical problems"
    },
    {
      icon: Heart,
      title: "Success Story",
      description: "Share how TapTime has helped you succeed"
    }
  ]

  const headerActions = (
    <Button size="lg" className="rounded-full px-8 bg-[#efffba] text-black border border-[#efffba] hover:bg-black hover:text-white hover:border-black hover:-translate-y-0.5 transition-all duration-300 shadow-sm hover:shadow-lg" asChild>
      <Link to="/browse">
        Find Your Expert
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </Button>
  )

  return (
    <StandardPage
      title="We Value Your Feedback"
      description="Your feedback helps us improve TapTime for everyone. Share your thoughts, suggestions, or report issues - we're listening."
      actions={headerActions}
      headerSize="large"
    >


      {/* Feedback Form */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-3xl">
          <Card className="bg-gray-100 border-0">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-black">First Name</Label>
                    <Input 
                      id="firstName" 
                      placeholder="Enter your first name"
                      className="border-2 border-gray-300 focus:border-black bg-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-black">Last Name</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Enter your last name"
                      className="border-2 border-gray-300 focus:border-black bg-white"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-black">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Enter your email address"
                    className="border-2 border-gray-300 focus:border-black bg-white"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="feedbackType" className="text-black">Feedback Type</Label>
                  <Select>
                    <SelectTrigger className="border-2 border-gray-300 focus:border-black bg-white">
                      <SelectValue placeholder="Select feedback type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Feedback</SelectItem>
                      <SelectItem value="feature">Feature Request</SelectItem>
                      <SelectItem value="bug">Report Issue</SelectItem>
                      <SelectItem value="success">Success Story</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-black">Subject</Label>
                  <Input 
                    id="subject" 
                    placeholder="Brief description of your feedback"
                    className="border-2 border-gray-300 focus:border-black bg-white"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-black">Your Feedback</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us more about your experience, suggestion, or issue..."
                    rows={6}
                    className="border-2 border-gray-300 focus:border-black bg-white resize-none"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="rating" className="text-black">Overall Experience (Optional)</Label>
                  <Select>
                    <SelectTrigger className="border-2 border-gray-300 focus:border-black bg-white">
                      <SelectValue placeholder="Rate your experience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">⭐⭐⭐⭐⭐ Excellent</SelectItem>
                      <SelectItem value="4">⭐⭐⭐⭐ Good</SelectItem>
                      <SelectItem value="3">⭐⭐⭐ Average</SelectItem>
                      <SelectItem value="2">⭐⭐ Poor</SelectItem>
                      <SelectItem value="1">⭐ Very Poor</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full rounded-full bg-[#efffba] text-black border border-[#efffba] hover:bg-black hover:text-white hover:border-black transition-all"
                >
                  Submit Feedback
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Thank You Section */}
      <section className="py-20 px-4" style={{background: '#081d34'}}>
        <div className="container mx-auto max-w-4xl text-center">
          <div className="w-12 h-12 rounded-full bg-[#efffba] text-black flex items-center justify-center mx-auto mb-6">
            <Heart className="w-6 h-6" />
          </div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Thank you for helping us improve
          </h2>
          <p className="text-white/90 text-base max-w-2xl mx-auto">
            Every piece of feedback helps us build a better platform. We review all submissions and use them to enhance the TapTime experience for our entire community.
          </p>
        </div>
      </section>
    </StandardPage>
  )
}

export default FeedbackPage