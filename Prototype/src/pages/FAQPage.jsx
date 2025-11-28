import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Link } from 'react-router-dom'
import { Search, MessageCircle, ArrowRight } from 'lucide-react'
import StandardPage from '@/components/layout/StandardPage'
import SectionTitle from '@/components/common/SectionTitle'
import { useState } from 'react'

const FAQPage = () => {
  const [openItems, setOpenItems] = useState({})
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Getting Started', 'Experts', 'Sessions', 'Billing', 'Platform']

  const faqs = [
    {
      category: 'Getting Started',
      question: 'How does TapTime work?',
      answer: 'TapTime connects you with industry experts for focused 15-minute sessions. Simply browse our expert directory, book a session that fits your schedule, and get personalized advice from professionals who\'ve already solved your challenges.'
    },
    {
      category: 'Getting Started', 
      question: 'How do I find the right expert for my needs?',
      answer: 'Use our search and filter system to find experts by industry, expertise, experience level, and availability. Each expert profile includes their background, specialties, reviews, and session focus areas to help you make the best choice.'
    },
    {
      category: 'Experts',
      question: 'How are experts vetted?',
      answer: 'All experts go through a rigorous verification process including background checks, credential verification, and interview assessments. We ensure every expert has proven industry experience and the ability to provide valuable guidance.'
    },
    {
      category: 'Experts',
      question: 'Can I become an expert on TapTime?',
      answer: 'Yes! If you have professional expertise and want to share your knowledge, you can apply to become an expert. We look for professionals with proven track records, strong communication skills, and passion for mentoring others.'
    },
    {
      category: 'Sessions',
      question: 'How long are sessions?',
      answer: 'Standard sessions are 15 minutes, designed to be focused and actionable. Some experts also offer 30-minute deep-dive sessions for more complex topics. The session length is clearly indicated when booking.'
    },
    {
      category: 'Sessions',
      question: 'What if I need to reschedule or cancel?',
      answer: 'You can reschedule or cancel sessions up to 24 hours before the scheduled time without penalty. Cancellations within 24 hours may incur a fee, but we understand emergencies happen and handle each case individually.'
    },
    {
      category: 'Sessions',
      question: 'What happens during a session?',
      answer: 'Sessions are conducted via video call through our platform. You\'ll have a focused conversation with your expert about your specific challenges or questions. Most experts provide actionable advice and may share resources or follow-up materials.'
    },
    {
      category: 'Billing',
      question: 'How much do sessions cost?',
      answer: 'Session prices vary by expert based on their experience and demand. Prices typically range from $50-$500 for a 15-minute session. Each expert sets their own rates, which are clearly displayed on their profile.'
    },
    {
      category: 'Billing',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely, and you\'ll receive a receipt after each transaction.'
    },
    {
      category: 'Platform',
      question: 'Is my personal information secure?',
      answer: 'Yes, we take privacy and security seriously. All personal information is encrypted and stored securely. We never share your information with third parties without your explicit consent. Sessions are private and confidential.'
    },
    {
      category: 'Platform',
      question: 'Do you offer refunds?',
      answer: 'We offer refunds in cases where technical issues prevent a session from occurring or if an expert fails to show up. If you\'re unsatisfied with a session\'s quality, please contact our support team within 48 hours and we\'ll work to resolve the issue.'
    },
    {
      category: 'Platform',
      question: 'Can I record sessions?',
      answer: 'Session recording policies vary by expert. Some allow recording with permission, while others prefer not to be recorded. This information is available on each expert\'s profile, and you can discuss recording preferences when booking.'
    }
  ]

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const filteredFAQs = selectedCategory === 'All' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory)

  const headerActions = (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button size="lg" className="rounded-full px-8 bg-[#efffba] text-black border border-[#efffba] hover:bg-black hover:text-white hover:border-black hover:-translate-y-0.5 transition-all duration-300 shadow-sm hover:shadow-lg" asChild>
        <Link to="/browse">
          Find Your Expert
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
      <Button size="lg" className="rounded-full px-8 border-2 border-white text-white bg-transparent hover:bg-white hover:text-black transition-all" asChild>
        <Link to="/contact">
          Contact Support
        </Link>
      </Button>
    </div>
  )

  return (
    <StandardPage
      title="Frequently Asked Questions"
      description="Find answers to common questions about TapTime, our experts, and how our platform works."
      actions={headerActions}
      headerSize="large"
    >

      {/* Search Bar */}
      <section className="px-4 pb-8">
        <div className="container mx-auto max-w-2xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <input
              type="text"
              placeholder="Search for answers..."
              className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-muted-foreground/20 focus:border-foreground focus:outline-none text-lg"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-4 pb-8">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category 
                  ? "rounded-full px-6 bg-[#efffba] text-black hover:bg-black hover:text-white transition-all" 
                  : "rounded-full px-6 border-2 border-black text-black bg-transparent hover:bg-black hover:text-white transition-all"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Items - Blue Background Section */}
      <section className="py-20 px-4" style={{background: '#081d34'}}>
        <div className="container mx-auto max-w-4xl">
          <SectionTitle 
            title="Browse Questions by Category"
            titleClassName="text-xl md:text-2xl font-semibold text-white"
            description="Click on any question to see the answer"
            descriptionClassName="text-white/90"
            className="mb-12"
          />
          
          <Accordion type="single" collapsible className="bg-white rounded-2xl p-2">
            {filteredFAQs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-100 last:border-0">
                <AccordionTrigger className="text-left font-semibold text-base px-6 py-4 hover:no-underline">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-[#efffba] font-medium">{faq.category}</span>
                    <span>{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-sm text-black/70 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact CTA - Footer Bar Style */}
      <div className="py-8 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-[#efffba] rounded-2xl p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-semibold mb-2 text-black">
                  Still have questions?
                </h3>
                <p className="text-sm text-black/70">
                  Can't find what you're looking for? Our support team is here to help.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#081d34] text-white rounded-full font-semibold text-sm hover:bg-[#0a2040] transition-all">
                  Contact Support
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

export default FAQPage