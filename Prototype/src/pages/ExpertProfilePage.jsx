import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { 
  Star, 
  Heart,
  Share,
  Crown,
  Award,
  ChevronDown,
  X,
  Calendar,
  Clock,
  HeartHandshake,
  ExternalLink
} from 'lucide-react'
import expertProfileData from '@/data/expert-profile.json'

const ExpertProfilePage = () => {
  const { expert, about, sessions, reviews, calendar } = expertProfileData
  const [activeTab, setActiveTab] = useState('about')
  const [showShareTooltip, setShowShareTooltip] = useState(false)

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase()
  }

  const getCategoryFromExpertise = (expertise) => {
    const categoryMap = {
      'Tech Strategy': 'Technology & Innovation',
      'Startup Scaling': 'Business & Startups',
      'E-commerce': 'Business & Startups',
      'Brand Building': 'Marketing & Growth',
      'Product Strategy': 'Technology & Innovation',
      'Tech Leadership': 'Technology & Innovation',
      'Marketing Strategy': 'Marketing & Growth',
      'Growth Hacking': 'Marketing & Growth',
      'UX Design': 'Design & Creativity',
      'Design Systems': 'Design & Creativity',
      'Financial Planning': 'Finance & Economics',
      'Fundraising': 'Finance & Economics',
      'Startup Strategy & Scaling': 'Business & Startups',
      'Product-Market Fit': 'Business & Startups',
      'Fundraising (Seed to Series C)': 'Finance & Economics',
      'Team Building & Hiring': 'Business & Startups',
      'Go-to-Market Strategy': 'Marketing & Growth',
      'SaaS Business Models': 'Business & Startups',
      'Product Development': 'Technology & Innovation',
      'Investor Relations': 'Finance & Economics'
    }
    return categoryMap[expertise] || 'Business & Startups'
  }


  const handleBookSession = () => {
    window.location.href = `/book/${expert.id}`
  }

  const handleShareProfile = () => {
    const profileUrl = window.location.href
    if (navigator.share) {
      navigator.share({
        title: `${expert.name} - TapTime Expert`,
        text: `Check out ${expert.name}'s expert profile on TapTime`,
        url: profileUrl
      })
    } else {
      // Fallback - copy to clipboard
      navigator.clipboard.writeText(profileUrl).then(() => {
        setShowShareTooltip(true)
        setTimeout(() => setShowShareTooltip(false), 2000)
      })
    }
  }


  return (
    <div className="min-h-screen bg-background">
      {/* Enhanced Header Section with Hero Background */}
      <section className="relative bg-gradient-to-r from-slate-900 to-blue-900 text-white px-4 py-20 pt-32" style={{backgroundImage: "url('/yianni-mathioudakis-clhGuYYPJpE-unsplash.jpg')", backgroundSize: "cover", backgroundPosition: "center"}}>
        <div className="absolute inset-0 bg-[#48768c]/80"></div>
      </section>

      {/* Main Content Section */}
      <section className="py-8 px-4 -mt-16 relative z-10">
        <div className="container mx-auto max-w-6xl space-y-8">
          
          {/* Intro Section - Photo and Basic Info */}
          <div className="bg-gray-100 rounded-2xl border-0 p-8 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Left Side - Photo */}
              <div className="lg:col-span-1">
                <div className="relative">
                  <div className="w-full aspect-square rounded-2xl overflow-hidden bg-gray-200 shadow-md">
                    <img 
                      src="/portrait-1.avif" 
                      alt={expert.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Right Side - Basic Info */}
              <div className="lg:col-span-2 space-y-6">
                {/* Name with Verified Badge and Actions */}
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h1 className="text-2xl md:text-3xl font-medium tracking-tight">{expert.name}</h1>
                    {expert.badges.includes('Verified') && (
                      <div className="w-6 h-6 flex items-center justify-center">
                        <svg viewBox="0 0 24 24" className="w-6 h-6">
                          <g>
                            <path d="M12 1.5c-.5 0-1 .2-1.4.6L9.2 3.5c-.3.3-.7.4-1.1.4H6.5c-.8 0-1.5.7-1.5 1.5v1.6c0 .4-.1.8-.4 1.1L3.2 9.5c-.8.8-.8 2 0 2.8l1.4 1.4c.3.3.4.7.4 1.1V16.5c0 .8.7 1.5 1.5 1.5h1.6c.4 0 .8.1 1.1.4l1.4 1.4c.8.8 2 .8 2.8 0l1.4-1.4c.3-.3.7-.4 1.1-.4h1.6c.8 0 1.5-.7 1.5-1.5v-1.6c0-.4.1-.8.4-1.1l1.4-1.4c.8-.8.8-2 0-2.8l-1.4-1.4c-.3-.3-.4-.7-.4-1.1V5.5c0-.8-.7-1.5-1.5-1.5h-1.6c-.4 0-.8-.1-1.1-.4L13.4 2.1c-.4-.4-.9-.6-1.4-.6z" fill="#1d9bf0"/>
                            <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                          </g>
                        </svg>
                      </div>
                    )}
                    {/* Wishlist and Share in Grey Circles */}
                    <div className="ml-auto flex gap-2">
                      <div className="relative">
                        <div 
                          className="w-8 h-8 bg-white hover:bg-gray-50 rounded-full flex items-center justify-center cursor-pointer transition-colors shadow-sm"
                          onClick={handleShareProfile}
                          title="Share Profile"
                        >
                          <Share className="w-4 h-4" />
                        </div>
                        {showShareTooltip && (
                          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-foreground text-background px-2 py-1 rounded text-xs whitespace-nowrap">
                            Link copied!
                          </div>
                        )}
                      </div>
                      <div className="w-8 h-8 bg-white hover:bg-gray-50 rounded-full flex items-center justify-center cursor-pointer transition-colors shadow-sm">
                        <Heart className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h2 className="text-lg text-muted-foreground font-normal mt-1">{expert.title}</h2>
                </div>

                {/* Rating with Top Expert Badge */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-black text-black" />
                      <span className="text-sm font-medium">{expert.rating}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      ({expert.reviewCount})
                    </span>
                  </div>
                  {/* Top Expert Badge next to rating */}
                  {expert.badges.includes('Top Expert') && (
                    <Badge variant="outline" className="border-yellow-500 text-yellow-600 bg-yellow-50 px-2 py-1 rounded-full inline-flex items-center gap-1 w-fit">
                      <Crown className="w-3 h-3" />
                      Top Expert
                    </Badge>
                  )}
                </div>

                {/* Details Table */}
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-y-3 text-sm">
                    <div className="text-muted-foreground">Category</div>
                    <div>
                      <Link to={`/browse?category=${encodeURIComponent(getCategoryFromExpertise(about.expertise[0]))}`}>
                        <Badge 
                          variant="secondary" 
                          className="bg-white hover:bg-gray-50 text-black cursor-pointer transition-colors shadow-sm"
                        >
                          {getCategoryFromExpertise(about.expertise[0])}
                        </Badge>
                      </Link>
                    </div>
                    
                    <div className="text-muted-foreground">Location</div>
                    <div>{expert.location}</div>
                    
                    <div className="text-muted-foreground">Language</div>
                    <div>{expert.languages.join(', ')}</div>
                    
                    <div className="text-muted-foreground">Sessions Completed</div>
                    <div>{expert.totalSessions}</div>
                    
                    {expert.charity && (
                      <>
                        <div className="text-muted-foreground">Donating To Charity</div>
                        <div className="flex items-center gap-2">
                          <HeartHandshake className="w-4 h-4 text-green-600" />
                          <a 
                            href={expert.charity.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-600 hover:text-green-700 font-medium flex items-center gap-1 hover:underline"
                          >
                            {expert.charity.name}
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Book Button and Availability */}
                <div className="border-t pt-6 mt-6 grid grid-cols-2 gap-4">
                  {/* Book Button - Left aligned with charity value above */}
                  <div>
                    <Button 
                      onClick={handleBookSession}
                      className="rounded-full bg-black text-white hover:bg-gray-800 py-4 px-8 font-medium transition-all flex items-center justify-between gap-6 min-w-[180px]"
                    >
                      <span className="text-base">
                        {expert.rate.split('/')[0]}
                        <span className="text-sm opacity-70">/{expert.rate.split('/')[1]}</span>
                      </span>
                      <span className="text-base">Book</span>
                    </Button>
                  </div>
                  
                  {/* Next Availability - Right side */}
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Next Available</p>
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <p className="text-sm font-medium text-black">
                        {calendar.availableSlots[0].date} at {calendar.availableSlots[0].slots[0]}
                      </p>
                    </div>
                    <button 
                      onClick={() => setActiveTab('calendar')}
                      className="text-sm text-gray-600 hover:text-black hover:underline transition-colors"
                    >
                      View all times →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Industries and Expertise Section - New Design */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              {/* Industries Section */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-[#efffba] flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h4M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Industries</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-3 py-1.5">
                    {getCategoryFromExpertise(about.expertise[0])}
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-3 py-1.5">
                    SaaS & Cloud Computing
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-3 py-1.5">
                    Entrepreneurship
                  </Badge>
                </div>
              </div>

              {/* Expertise Section */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-[#efffba] flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Expertise</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {about.expertise.map((skill, index) => (
                    <Badge 
                      key={index}
                      variant="outline" 
                      className="border-gray-300 text-gray-700 hover:border-black hover:text-black cursor-pointer transition-all px-3 py-1.5"
                      onClick={() => {
                        console.log('Search for:', skill)
                      }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Tabs and Content Section */}
          <div className="bg-gray-100 rounded-2xl border-0 p-8 shadow-lg">
            {/* Tab Navigation */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex space-x-8">
                <button
                  onClick={() => setActiveTab('about')}
                  className={`pb-3 border-b-2 transition-colors ${
                    activeTab === 'about'
                      ? 'border-black text-black font-medium'
                      : 'border-transparent text-muted-foreground hover:text-black'
                  }`}
                >
                  About
                </button>
                <button
                  onClick={() => setActiveTab('reviews')}
                  className={`pb-3 border-b-2 transition-colors ${
                    activeTab === 'reviews'
                      ? 'border-black text-black font-medium'
                      : 'border-transparent text-muted-foreground hover:text-black'
                  }`}
                >
                  Reviews ({expert.reviewCount})
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div className="space-y-6">
              {activeTab === 'about' && (
                <div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {about.bio}
                  </p>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {reviews.slice(0, 6).map((review) => (
                    <div key={review.id} className="bg-white rounded-xl border-0 p-6 shadow-md hover:shadow-lg transition-shadow">
                      <div className="flex items-center gap-3 mb-4">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={review.reviewerImage} alt={review.reviewerName} />
                          <AvatarFallback>{getInitials(review.reviewerName)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium text-sm">{review.reviewerName}</div>
                          <div className="text-xs text-muted-foreground">{review.reviewerTitle}</div>
                        </div>
                      </div>
                      
                      <div className="flex gap-1 mb-3">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-black text-black" />
                        ))}
                      </div>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                        {review.review}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{review.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default ExpertProfilePage