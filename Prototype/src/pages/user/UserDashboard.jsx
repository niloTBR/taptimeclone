import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line } from 'recharts'
import ExpertCard from '@/components/common/ExpertCard'
import Header from '@/components/layout/Header'
import { 
  Calendar,
  Clock,
  Star,
  Video,
  Plus,
  CheckCircle,
  Check,
  ArrowRight,
  MessageCircle,
  MoreHorizontal,
  User,
  Settings,
  Bell,
  BookOpen,
  TrendingUp,
  Target,
  MapPin,
  Mail,
  Phone,
  Building,
  Edit,
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
  Crown,
  Shield,
  CreditCard,
  Download,
  Receipt,
  LogOut,
  Menu,
  Send
} from 'lucide-react'

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('upcoming')
  const [showReschedule, setShowReschedule] = useState(false)
  const [selectedSession, setSelectedSession] = useState(null)
  const [showSessionDetail, setShowSessionDetail] = useState(false)
  const [sessionDetailTab, setSessionDetailTab] = useState('summary')
  const [showRatingPopup, setShowRatingPopup] = useState(false)
  const [selectedRating, setSelectedRating] = useState(0)
  const [ratingComment, setRatingComment] = useState('')
  const [expertsScrollPosition, setExpertsScrollPosition] = useState(0)
  const [showPaymentMessage, setShowPaymentMessage] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [settingsTab, setSettingsTab] = useState('basic')
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('card')
  const [showAddPaymentForm, setShowAddPaymentForm] = useState(false)
  const [savedCards, setSavedCards] = useState([
    { 
      id: 1, 
      type: 'VISA', 
      last4: '4242', 
      expiry: '12/2025', 
      isPrimary: true,
      gradient: 'from-blue-600 to-purple-600'
    },
    { 
      id: 2, 
      type: 'MSTR', 
      last4: '8888', 
      expiry: '08/2026', 
      isPrimary: false,
      gradient: 'from-red-500 to-orange-500'
    }
  ])
  const [selectedSessionType, setSelectedSessionType] = useState(null)
  const [showNotifications, setShowNotifications] = useState(false)

  // Handle setting primary card
  const setPrimaryCard = (cardId) => {
    setSavedCards(cards => cards.map(card => ({
      ...card,
      isPrimary: card.id === cardId
    })))
  }

  // Mock user data from onboarding
  const user = {
    firstName: 'John',
    lastName: 'Smith',
    email: 'john.smith@example.com',
    phone: '+1 (555) 123-4567',
    bio: 'Product manager passionate about building scalable solutions and leading high-performing teams.',
    country: 'United States',
    avatar: '/portrait-1.avif',
    memberSince: 'January 2024',
    primaryGoals: 'Start a new business, Improve leadership skills, Learn new technologies',
    expertiseNeeded: 'Product Strategy, Team Leadership, Technology Innovation'
  }

  const sessionData = [
    { month: 'Jan', sessions: 2 },
    { month: 'Feb', sessions: 4 },
    { month: 'Mar', sessions: 6 }
  ]

  const learningData = [
    { month: 'Jan', hours: 8 },
    { month: 'Feb', hours: 12 },
    { month: 'Mar', hours: 15 }
  ]

  const suggestedExperts = [
    {
      id: 'robert-kim',
      name: 'Dr. Robert Kim',
      title: 'AI Product Strategy',
      rating: 4.9,
      reviewCount: 200,
      rate: '$220/15min',
      bio: 'Helping companies build AI-powered products that scale. Former VP of Product at Google, now consulting on product strategy.',
      image: '/portrait-2.webp',
      expertise: ['Product Strategy'],
      isTopExpert: true,
      isVerified: true
    },
    {
      id: 'maria-santos',
      name: 'Maria Santos',
      title: 'Team Leadership Coach',
      rating: 4.8,
      reviewCount: 150,
      rate: '$180/15min',
      bio: 'Executive coach specializing in leadership development and team performance. Helping managers become effective leaders.',
      image: '/portrait-3.avif',
      expertise: ['Team Leadership'],
      isTopExpert: false,
      isVerified: true
    },
    {
      id: 'david-chen',
      name: 'David Chen',
      title: 'Growth Marketing Expert',
      rating: 4.7,
      reviewCount: 89,
      rate: '$160/15min',
      bio: 'Growth marketing specialist who has scaled startups from 0 to millions in revenue. Expert in digital marketing and analytics.',
      image: '/portrait-4.avif',
      expertise: ['Growth Marketing'],
      isTopExpert: true,
      isVerified: false
    },
    {
      id: 'sarah-jones',
      name: 'Sarah Jones',
      title: 'UX Design Lead',
      rating: 4.9,
      reviewCount: 167,
      rate: '$190/15min',
      bio: 'Senior UX designer with 8+ years creating user-centered digital experiences for Fortune 500 companies.',
      image: '/portrait-5.avif',
      expertise: ['UX Design'],
      isTopExpert: false,
      isVerified: true
    },
    {
      id: 'michael-taylor',
      name: 'Michael Taylor',
      title: 'Business Strategy Consultant',
      rating: 4.6,
      reviewCount: 234,
      rate: '$200/15min',
      bio: 'Former McKinsey consultant helping businesses develop strategic roadmaps and optimize operations for growth.',
      image: '/portrait-1.avif',
      expertise: ['Business Strategy'],
      isTopExpert: false,
      isVerified: false
    },
    {
      id: 'emily-wilson',
      name: 'Emily Wilson',
      title: 'Data Science Expert',
      rating: 4.8,
      reviewCount: 156,
      rate: '$210/15min',
      bio: 'Data scientist with expertise in machine learning and analytics. Helping companies make data-driven decisions.',
      image: '/portrait-2.webp',
      expertise: ['Data Science'],
      isTopExpert: true,
      isVerified: true
    },
    {
      id: 'james-brown',
      name: 'James Brown',
      title: 'Sales Strategy Expert',
      rating: 4.7,
      reviewCount: 198,
      rate: '$170/15min',
      bio: 'Sales leader with track record of building high-performing sales teams and scaling revenue operations.',
      image: '/portrait-3.avif',
      expertise: ['Sales Strategy'],
      isTopExpert: false,
      isVerified: true
    },
    {
      id: 'lisa-garcia',
      name: 'Lisa Garcia',
      title: 'Content Marketing Specialist',
      rating: 4.9,
      reviewCount: 143,
      rate: '$150/15min',
      bio: 'Content strategist helping brands build authentic connections through storytelling and content marketing.',
      image: '/portrait-4.avif',
      expertise: ['Content Marketing'],
      isTopExpert: false,
      isVerified: false
    }
  ]

  const conversations = [
    {
      id: 1,
      expertName: 'Dr. Michael Chen',
      lastMessage: 'Looking forward to our session tomorrow!',
      time: '2 hours ago',
      unread: 1,
      avatar: '/api/placeholder/40/40'
    },
    {
      id: 2,
      expertName: 'Lisa Park',
      lastMessage: 'Here are the resources I mentioned...',
      time: '1 day ago',
      unread: 0,
      avatar: '/api/placeholder/40/40'
    }
  ]

  const upcomingSessions = [
    {
      id: 1,
      expertName: 'Dr. Michael Chen',
      expertTitle: 'Product Strategy Expert',
      date: 'Tomorrow',
      time: '2:00 PM',
      duration: '60 min',
      topic: 'Product Roadmap Review',
      summary: 'Review your current product strategy and identify areas for improvement. We\'ll discuss market positioning and competitive analysis.',
      cost: '$200',
      avatar: '/portrait-2.webp',
      expertImage: '/portrait-2.webp',
      category: 'Strategy',
      rating: 4.9,
      reviewCount: 89,
      verified: true,
      paymentStatus: 'paid',
      expertise: ['Product Strategy']
    }
  ]

  const pastSessions = [
    {
      id: 1,
      sessionNumber: '#5',
      expertName: 'Emily Rodriguez',
      expertTitle: 'UX Design Lead',
      date: 'Mar 18',
      rating: 5,
      topic: 'Design System Consultation',
      duration: '60 min',
      cost: '$180',
      feedback: 'Excellent insights on building scalable design systems. Very actionable advice.',
      hasReview: false,
      avatar: '/portrait-4.avif',
      expertImage: '/portrait-4.avif',
      category: 'Design',
      expertRating: 4.9,
      reviewCount: 76,
      verified: true,
      paymentStatus: 'paid',
      expertise: ['UX Design']
    },
    {
      id: 2,
      sessionNumber: '#4',
      expertName: 'James Wilson',
      expertTitle: 'Business Coach',
      date: 'Mar 10',
      rating: 4,
      topic: 'Business Planning Strategy',
      duration: '75 min',
      cost: '$200',
      feedback: 'Great strategic guidance. Helped clarify our business direction.',
      hasReview: true,
      avatar: '/portrait-5.avif',
      expertImage: '/portrait-5.avif',
      category: 'Business',
      expertRating: 4.7,
      reviewCount: 54,
      verified: true,
      paymentStatus: 'paid',
      expertise: ['Business Strategy']
    },
    {
      id: 3,
      sessionNumber: '#3',
      expertName: 'Anna Taylor',
      expertTitle: 'Product Manager',
      date: 'Mar 5',
      rating: null,
      topic: 'Product Roadmap Planning',
      duration: '60 min',
      cost: '$160',
      feedback: 'Amazing session! Clear roadmap and priorities established.',
      hasReview: true,
      avatar: '/portrait-1.avif',
      expertImage: '/portrait-1.avif',
      category: 'Product',
      expertRating: 4.8,
      reviewCount: 92,
      verified: true,
      paymentStatus: 'paid',
      expertise: ['Product Strategy']
    }
  ]

  const getInitials = (name) => {
    if (typeof name === 'string') {
      return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()
    }
    return (user.firstName[0] + user.lastName[0]).toUpperCase()
  }

  // Mock notifications data
  const notifications = [
    {
      id: 1,
      type: 'session',
      title: 'Session Reminder',
      message: 'Your session with Dr. Michael Chen starts in 1 hour',
      time: '1h ago',
      read: false,
      avatar: '/portrait-2.webp'
    },
    {
      id: 2,
      type: 'booking',
      title: 'Booking Confirmed',
      message: 'Your session with Emily Rodriguez has been confirmed for tomorrow',
      time: '3h ago',
      read: false,
      avatar: '/portrait-4.avif'
    },
    {
      id: 3,
      type: 'review',
      title: 'New Review',
      message: 'James Wilson left you a 5-star review',
      time: '1d ago',
      read: true,
      avatar: '/portrait-5.avif'
    }
  ]

  // Favourite experts data
  const favouriteExperts = [
    {
      id: "isabella-grace",
      name: "Isabella Grace Harrington",
      title: "Founder of TechNova",
      rate: "$500/15min",
      rating: 5.0,
      reviewCount: 127,
      image: "/portrait-1.avif",
      badge: "Top Expert",
      expertise: ["Tech Strategy", "Startup Scaling"],
      bio: "Built and scaled TechNova from idea to $100M valuation. Expert in product-market fit and raising Series A-C funding.",
      isTopExpert: true
    },
    {
      id: "sophia-martinez",
      name: "Sophia Martinez",
      title: "Founder of BloomWell Skincare",
      rate: "$500/15min",
      rating: 4.9,
      reviewCount: 203,
      image: "/portrait-2.webp",
      badge: "Top Expert",
      expertise: ["E-commerce", "Brand Building"],
      bio: "Bootstrapped BloomWell to $50M revenue. Expert in DTC marketing, brand strategy, and scaling operations.",
      isTopExpert: true
    },
    {
      id: "emily-carter",
      name: "Emily Carter",
      title: "CMO at DataFlow Inc",
      rate: "$450/15min",
      rating: 4.8,
      reviewCount: 156,
      image: "/portrait-4.avif",
      badge: "Verified",
      expertise: ["Marketing Strategy", "Growth Hacking"],
      bio: "Built marketing teams that drove 10x growth at 3 startups. Expert in growth loops, conversion optimization, and paid acquisition.",
      isVerified: true
    }
  ]

  const tabs = [
    { id: 'upcoming', label: 'Upcoming', count: upcomingSessions.length },
    { id: 'past', label: 'Past Sessions', count: pastSessions.length },
    { id: 'favourites', label: 'Favourites', count: favouriteExperts.length }
  ]

  return (
    <div className="min-h-screen bg-background">
      <style jsx>{`
        .force-black-text * {
          color: #000000 !important;
        }
        .force-black-text .text-2xl {
          color: #000000 !important;
        }
        .force-black-text p {
          color: #000000 !important;
        }
        .force-gray-text {
          color: #666666 !important;
        }
        .analytics-number {
          color: #000000 !important;
          font-weight: bold !important;
        }
      `}</style>
      <Header onNotificationClick={() => setShowNotifications(true)} />

      {/* Analytics Header Section with Hero Background */}
      <section className="relative bg-gradient-to-r from-slate-900 to-blue-900 text-white px-6 py-20 pt-32 content-section-alternate" style={{backgroundImage: "url('/yianni-mathioudakis-clhGuYYPJpE-unsplash.jpg')", backgroundSize: "cover", backgroundPosition: "center"}}>
        <div className="absolute inset-0 bg-[#48768c]/80"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Welcome Text */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold">Welcome back, {user.firstName}!</h1>
          </div>

          {/* Analytics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-start">
            {/* Total Sessions */}
            <Card className="border-0 bg-white/95 backdrop-blur-sm hover:bg-white hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer force-black-text">
              <CardContent className="p-4">
                <div className="flex gap-4 h-20">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-50 rounded-lg flex-shrink-0 self-center">
                    <BookOpen className="w-6 h-6 text-blue-500" />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex-1">
                      <p className="text-2xl font-bold analytics-number">{pastSessions.length + upcomingSessions.length}</p>
                      <p className="text-sm font-medium force-gray-text">Total Sessions</p>
                    </div>
                    <div className="h-8 w-full mt-auto">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={sessionData}>
                          <Bar dataKey="sessions" fill="#8bb8ff" radius={[2, 2, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                      <div className="w-full h-px bg-gray-200"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Learning Hours */}
            <Card className="border-0 bg-white/95 backdrop-blur-sm hover:bg-white hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer force-black-text">
              <CardContent className="p-4">
                <div className="flex gap-4 h-20">
                  <div className="flex items-center justify-center w-12 h-12 bg-emerald-50 rounded-lg flex-shrink-0 self-center">
                    <Target className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex-1">
                      <p className="text-2xl font-bold analytics-number">35</p>
                      <p className="text-sm font-medium force-gray-text">Learning Hours</p>
                    </div>
                    <div className="h-8 w-full mt-auto">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={learningData}>
                          <Bar dataKey="hours" fill="#86efac" radius={[2, 2, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                      <div className="w-full h-px bg-gray-200"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Completion Rate */}
            <Card className="border-0 bg-white/95 backdrop-blur-sm hover:bg-white hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer force-black-text">
              <CardContent className="p-4">
                <div className="flex gap-4 h-20">
                  <div className="flex items-center justify-center w-12 h-12 bg-violet-50 rounded-lg flex-shrink-0 self-center">
                    <CheckCircle className="w-6 h-6 text-violet-500" />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex-1">
                      <p className="text-2xl font-bold analytics-number">94%</p>
                      <p className="text-sm font-medium force-gray-text">Completion Rate</p>
                    </div>
                    <div className="mt-auto">
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div className="bg-violet-400 h-1.5 rounded-full transition-all duration-300" style={{width: '94%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Average Rating */}
            <Card className="border-0 bg-white/95 backdrop-blur-sm hover:bg-white hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer force-black-text">
              <CardContent className="p-4">
                <div className="flex gap-4 h-20">
                  <div className="flex items-center justify-center w-12 h-12 bg-amber-50 rounded-lg flex-shrink-0 self-center">
                    <Star className="w-6 h-6 text-amber-500" />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex-1">
                      <p className="text-2xl font-bold analytics-number">4.8</p>
                      <p className="text-sm font-medium force-gray-text">Average Rating</p>
                    </div>
                    <div className="flex gap-1 mt-auto">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className={`w-3 h-3 ${star <= 4 ? 'fill-amber-300 text-amber-300' : star === 5 ? 'fill-amber-300 text-amber-300' : 'text-gray-300'}`} />
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <div className="container mx-auto max-w-7xl py-6">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="xl:col-span-1">
          {/* User Profile Card */}
          <Card className="shadow-md border bg-white">
            <CardContent className="p-6 flex flex-col">
              <div className="flex gap-4 mb-4">
                <div className="relative">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={user.avatar} alt={`${user.firstName} ${user.lastName}`} />
                    <AvatarFallback className="text-lg">{getInitials()}</AvatarFallback>
                  </Avatar>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="absolute bottom-0 right-0 rounded-full w-6 h-6 p-0 bg-white shadow-md border border-gray-200"
                  >
                    <Edit className="w-3 h-3" />
                  </Button>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-lg mb-1">{user.firstName} {user.lastName}</h3>
                  <div className="space-y-1 text-xs">
                    <div className="flex items-center gap-2">
                      <Mail className="w-3 h-3 text-muted-foreground" />
                      <span className="text-muted-foreground truncate">{user.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-3 h-3 text-muted-foreground" />
                      <span className="text-muted-foreground">{user.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3 h-3 text-muted-foreground" />
                      <span className="text-muted-foreground">{user.country}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-3 bg-blue-50 rounded-lg mb-4 border border-blue-100">
                <div className="flex items-center justify-center gap-2 text-xs text-blue-700">
                  <Eye className="w-3 h-3" />
                  <span className="font-medium">Profile visible to experts</span>
                </div>
              </div>
              
              <div className="space-y-3 text-xs">
                <div>
                  <h4 className="font-medium mb-1 text-sm">Bio</h4>
                  <p className="text-muted-foreground">{user.bio}</p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-1 text-sm">Goals</h4>
                  <p className="text-muted-foreground">{user.primaryGoals}</p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-1 text-sm">Interests</h4>
                  <p className="text-muted-foreground">{user.expertiseNeeded}</p>
                </div>
              </div>
              
              <Button 
                variant="outline"
                className="w-full mt-6 rounded-full text-sm font-medium border border-gray-300 text-gray-700 hover:bg-black hover:text-white transition-colors"
                onClick={() => setShowSettings(true)}
              >
                <Edit className="w-4 h-4 mr-2" />
                Profile & Payment Settings
              </Button>
            </CardContent>
          </Card>
        </div>
        
        {/* Main Content Area */}
        <div className="xl:col-span-3">
          {/* Navigation Tabs */}
          <div className="mb-8">
            <div className="bg-gray-50 p-1 rounded-xl inline-flex">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-lg font-medium text-sm flex items-center gap-2 transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                  }`}
                >
                  {tab.label}
                  {tab.count > 0 && (
                    <Badge variant="secondary" className={`text-xs ${
                      activeTab === tab.id ? 'bg-gray-100 text-gray-600' : 'bg-gray-200 text-gray-500'
                    }`}>
                      {tab.count}
                    </Badge>
                  )}
                </button>
              ))}
            </div>
          </div>
          
          {/* Tab Content */}
          {activeTab === 'upcoming' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingSessions.map((session) => (
                <Card 
                  key={session.id} 
                  className="group transition-all duration-300 border-0 bg-gray-100 hover:bg-gray-200 cursor-pointer h-full relative"
                  onClick={() => {
                    setSelectedSession(session)
                    setSelectedSessionType('upcoming')
                    setSessionDetailTab('chat')
                    setShowSessionDetail(true)
                  }}
                >
                  {/* Expert Photo Header */}
                  <div className="relative h-32 overflow-hidden rounded-t-lg bg-gray-100">
                    <img 
                      src={session.expertImage} 
                      alt={session.expertName}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 right-3">
                      <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm text-black text-xs px-2 py-1 shadow-sm">
                        {session.category}
                      </Badge>
                    </div>
                    
                  </div>

                  <CardContent className="p-6 flex flex-col min-h-0">
                    <div className="flex-1 space-y-5 text-left">
                      {/* Rating and Verification Row */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-black text-black" />
                            <span className="text-sm font-medium text-black">{session.rating}</span>
                          </div>
                          <span className="text-xs text-muted-foreground">
                            ({session.reviewCount})
                          </span>
                        </div>
                      </div>

                      {/* Expert Name and Title */}
                      <div>
                        <h3 className="font-semibold text-base leading-tight text-left text-black">
                          {session.expertName}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-2 text-left">
                          {session.expertTitle}
                        </p>
                      </div>
                      
                      {/* Session Topic and Summary */}
                      <div>
                        <h4 className="font-medium text-sm mb-1">{session.topic}</h4>
                        <p className="text-xs text-muted-foreground text-left leading-relaxed line-clamp-2">
                          {session.summary}
                        </p>
                      </div>
                      
                      {/* Session Details */}
                      <div className="space-y-1 text-xs text-muted-foreground">
                        <p>📅 {session.date} at {session.time}</p>
                        <p>⏱️ {session.duration}</p>
                        <p className="text-gray-900 font-semibold">{session.cost}</p>
                      </div>
                    </div>

                    {/* Actions - Always at Bottom */}
                    <div className="mt-auto flex-shrink-0 pt-4">
                      <div className="flex justify-between items-center">
                        <div className="flex gap-2 w-full">
                          {session.paymentStatus === 'paid' ? (
                            <Button 
                              size="sm" 
                              className="rounded-full px-4 flex items-center gap-2 bg-[#efffba] text-black hover:bg-black hover:text-white border border-[#efffba] hover:border-black transition-all text-sm font-medium flex-1"
                            >
                              Reschedule
                            </Button>
                          ) : (
                            <Button 
                              size="sm" 
                              variant="outline"
                              className="rounded-full px-4 flex items-center gap-2 border border-gray-300 text-gray-500 bg-gray-50 cursor-not-allowed text-sm font-medium flex-1"
                              onClick={(e) => {
                                e.stopPropagation()
                                setShowPaymentMessage(true)
                              }}
                            >
                              Complete Payment
                            </Button>
                          )}
                          
                          <Button 
                            size="sm" 
                            variant="outline"
                            className="rounded-full border border-black px-4 text-black hover:bg-black hover:text-white transition-all text-sm font-medium"
                          >
                            View
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          
          {activeTab === 'past' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastSessions.map((session) => (
                <Card 
                  key={session.id} 
                  className="group transition-all duration-300 border-0 bg-gray-100 hover:bg-gray-200 cursor-pointer h-full relative"
                  onClick={() => {
                    setSelectedSession(session)
                    setSelectedSessionType('past')
                    setSessionDetailTab('summary')
                    setShowSessionDetail(true)
                  }}
                >
                  {/* Expert Photo Header */}
                  <div className="relative h-32 overflow-hidden rounded-t-lg bg-gray-100">
                    <img 
                      src={session.expertImage} 
                      alt={session.expertName}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 right-3">
                      <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm text-black text-xs px-2 py-1 shadow-sm">
                        {session.category}
                      </Badge>
                    </div>
                    
                  </div>

                  <CardContent className="p-6 flex flex-col min-h-0">
                    <div className="flex-1 space-y-5 text-left">
                      {/* Rating and Verification Row */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-black text-black" />
                            <span className="text-sm font-medium">{session.expertRating}</span>
                          </div>
                          <span className="text-xs text-muted-foreground">
                            ({session.reviewCount})
                          </span>
                        </div>
                      </div>

                      {/* Expert Name and Title */}
                      <div>
                        <h3 className="font-semibold text-base leading-tight text-left text-black">
                          {session.expertName}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-2 text-left">
                          {session.expertTitle}
                        </p>
                      </div>
                      
                      {/* Session Topic and Summary */}
                      <div>
                        <h4 className="font-medium text-sm mb-1">{session.topic}</h4>
                        <p className="text-xs text-muted-foreground text-left leading-relaxed line-clamp-2">
                          {session.feedback}
                        </p>
                      </div>
                      
                      {/* Session Details */}
                      <div className="space-y-1 text-xs text-muted-foreground">
                        <p>📅 {session.date} • Session {session.sessionNumber}</p>
                        <p>⏱️ {session.duration}</p>
                        <div className="flex items-center gap-2">
                          {session.rating ? (
                            <>
                              <span>Your rating:</span>
                              <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star 
                                    key={i} 
                                    className={`w-3 h-3 ${i < session.rating ? 'fill-black text-black' : 'text-gray-300'}`} 
                                  />
                                ))}
                              </div>
                            </>
                          ) : (
                            <span 
                              className="text-orange-600 cursor-pointer hover:text-orange-700 hover:underline"
                              onClick={(e) => {
                                e.stopPropagation()
                                setSelectedSession(session)
                                setShowRatingPopup(true)
                              }}
                            >
                              Unrated - Please rate this session
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Actions - Always at Bottom */}
                    <div className="mt-auto flex-shrink-0 pt-4">
                      <div className="flex justify-between items-center">
                        <div className="flex gap-2 w-full">
                          <Button 
                            size="sm" 
                            className="rounded-full px-4 flex items-center gap-2 bg-[#efffba] text-black hover:bg-black hover:text-white border border-[#efffba] hover:border-black transition-all flex-1"
                            onClick={(e) => {
                              e.preventDefault()
                              e.stopPropagation()
                              window.location.href = `/book/${session.expertName.toLowerCase().replace(' ', '-')}`
                            }}
                          >
                            <span className="text-sm font-medium">{session.cost.split('/')[0]}</span>
                            <span className="text-xs opacity-75">/{session.cost.split('/')[1]}</span>
                            <span className="ms-1">Book</span>
                          </Button>
                          
                          <Button 
                            size="sm" 
                            variant="outline"
                            className="rounded-full border border-black px-4 text-black hover:bg-black hover:text-white transition-all text-sm font-medium"
                          >
                            View
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {activeTab === 'favourites' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favouriteExperts.map((expert) => (
                <ExpertCard 
                  key={expert.id}
                  expert={expert}
                  showActions={true}
                  className="h-full"
                  showCrown={expert.isTopExpert}
                  showVerified={expert.isVerified}
                />
              ))}
            </div>
          )}
          
          
        </div>
        </div>
      </div>

      {/* Experts Recommended for You - Footer Section */}
      <section className="bg-white border-t px-6 py-12">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold tracking-tight">Recommended for You</h2>
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="icon"
                  className="rounded-full border-gray-300 text-gray-600 hover:bg-gray-100 hover:text-black hover:border-gray-400 transition-all"
                  onClick={() => {
                    const container = document.getElementById('experts-scroll-container')
                    if (container) {
                      container.scrollBy({ left: -320, behavior: 'smooth' })
                    }
                  }}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon"
                  className="rounded-full border-gray-300 text-gray-600 hover:bg-gray-100 hover:text-black hover:border-gray-400 transition-all"
                  onClick={() => {
                    const container = document.getElementById('experts-scroll-container')
                    if (container) {
                      container.scrollBy({ left: 320, behavior: 'smooth' })
                    }
                  }}
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
              <Button 
                className="rounded-full bg-[#efffba] text-black hover:bg-black hover:text-white transition-colors px-6 py-2 font-medium border border-[#efffba] hover:border-black"
                asChild
              >
                <a href="/browse">
                  View All Experts
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
          <div 
            id="experts-scroll-container" 
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {suggestedExperts.map((expert, index) => (
              <div key={index} className="flex-none w-80">
                <ExpertCard 
                  expert={expert}
                  showActions={true}
                  className="h-full"
                  showCrown={expert.isTopExpert}
                  showCharity={false}
                  showVerified={expert.isVerified}
                />
              </div>
            ))}
          </div>
          <style jsx>{`
            #experts-scroll-container::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </div>
      </section>

      {/* Session Detail Overlay Sidebar */}
      {showSessionDetail && selectedSession && (
        <div className="fixed inset-0 bg-black/50 z-50">
          <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-xl overflow-y-auto">
            <Card className="border-2 border-foreground h-full rounded-none">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <CardTitle>Session Details</CardTitle>
                  <Button 
                    variant="outline" 
                    size="icon"
                    className="rounded-full border-gray-300 text-gray-600 hover:bg-gray-100 hover:text-black hover:border-gray-400 transition-all"
                    onClick={() => setShowSessionDetail(false)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
                
                {/* Expert Info with Photo - Moved above tabs */}
                <div 
                  className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors mb-4"
                  onClick={() => window.open(`/expert/${selectedSession.expertName.toLowerCase().replace(' ', '-')}`, '_blank')}
                >
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={selectedSession.avatar} alt={selectedSession.expertName} />
                    <AvatarFallback>{getInitials(selectedSession.expertName)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm truncate">{selectedSession.expertName}</h4>
                    <p className="text-xs text-muted-foreground truncate">{selectedSession.expertTitle}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </div>
                
                {/* Tab Navigation */}
                <div className="flex space-x-4 border-b">
                  <button
                    onClick={() => setSessionDetailTab('summary')}
                    className={`pb-2 px-1 text-sm font-medium border-b-2 transition-colors ${
                      sessionDetailTab === 'summary'
                        ? 'border-foreground text-foreground'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Summary
                  </button>
                  <button
                    onClick={() => setSessionDetailTab('chat')}
                    className={`pb-2 px-1 text-sm font-medium border-b-2 transition-colors ${
                      sessionDetailTab === 'chat'
                        ? 'border-foreground text-foreground'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Chat
                  </button>
                </div>
              </CardHeader>
              <CardContent className={`${sessionDetailTab === 'chat' ? 'h-[calc(100vh-12rem)] flex flex-col' : 'space-y-4'}`}>{sessionDetailTab === 'summary' && (
                <div className="space-y-4">

                {/* Session Details */}
                <div>
                  <h5 className="font-medium text-sm mb-3">Session Details</h5>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-medium text-sm">{selectedSession.topic}</div>
                      <div className="text-xs text-muted-foreground mt-1">{selectedSession.duration}</div>
                    </div>
                    <div className="font-semibold text-sm">{selectedSession.cost}</div>
                  </div>
                </div>

                {/* Date & Time */}
                <div className="border-t my-3" />
                <div>
                  <h5 className="font-medium text-sm mb-2">Date & Time</h5>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{selectedSession.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm mt-1">
                    <Clock className="w-4 h-4" />
                    <span>{selectedSession.time}</span>
                  </div>
                </div>

                {/* Actions based on session status */}
                <div className="border-t my-3" />
                {selectedSessionType === 'upcoming' ? (
                  <div className="space-y-3">
                    {/* Primary Action - Join Session */}
                    <Button className="w-full rounded-full bg-[#efffba] text-black hover:bg-black hover:text-white py-3 text-base font-semibold">
                      <Video className="w-5 h-5 mr-2" />
                      Join Session
                    </Button>
                    
                    {/* Secondary Actions */}
                    <div className="grid grid-cols-2 gap-3">
                      <Button 
                        variant="outline" 
                        className="rounded-full border-2 border-gray-300 text-gray-700 hover:bg-black hover:text-white hover:border-black"
                        onClick={() => {
                          setShowSessionDetail(false)
                          setShowReschedule(true)
                        }}
                      >
                        Reschedule
                      </Button>
                      <Button 
                        variant="outline" 
                        className="rounded-full border-2 border-red-300 text-red-600 hover:bg-red-600 hover:text-white hover:border-red-600"
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                ) : (
                  /* Past Session Actions */
                  <div className="space-y-3">
                    <Button 
                      className="w-full rounded-full bg-[#efffba] text-black hover:bg-black hover:text-white py-3 text-base font-semibold"
                      onClick={() => window.open(`/booking?expert=${selectedSession.expertName.toLowerCase().replace(' ', '-')}`, '_blank')}
                    >
                      Book Again
                    </Button>
                    
                    {selectedSession.rating ? (
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <p className="text-sm text-muted-foreground mb-2">Your Rating</p>
                        <div className="flex justify-center gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star 
                              key={star}
                              className={`h-4 w-4 ${
                                star <= selectedSession.rating 
                                  ? 'fill-yellow-400 text-yellow-400' 
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Button 
                        variant="outline" 
                        className="w-full rounded-full border-2 border-gray-300 text-gray-700 hover:bg-black hover:text-white hover:border-black"
                        onClick={() => setShowRatingPopup(true)}
                      >
                        <Star className="w-4 h-4 mr-2" />
                        Rate Session
                      </Button>
                    )}
                  </div>
                )}
                </div>
                )}

                {sessionDetailTab === 'chat' && (
                  <div className="flex flex-col h-full">
                    {selectedSessionType === 'upcoming' ? (
                      <>
                        {/* Conversation History - Takes available space */}
                        <div className="flex-1 overflow-y-auto py-4">
                          <div className="space-y-3">
                            {/* Previous messages */}
                            <div className="p-3 bg-gray-50 rounded-lg">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-sm font-medium">{selectedSession.expertName}</span>
                                <span className="text-xs text-muted-foreground">Yesterday 3:20 PM</span>
                              </div>
                              <p className="text-sm">Looking forward to our session tomorrow! I've prepared some materials based on your goals.</p>
                            </div>
                            
                            <div className="p-3 bg-blue-50 rounded-lg ml-6">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-sm font-medium">You</span>
                                <span className="text-xs text-muted-foreground">Yesterday 4:15 PM</span>
                              </div>
                              <p className="text-sm">Perfect! I'm excited to dive into the roadmap discussion. Thanks for the prep work.</p>
                            </div>
                            
                            <div className="p-3 bg-gray-50 rounded-lg">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-sm font-medium">{selectedSession.expertName}</span>
                                <span className="text-xs text-muted-foreground">Today 9:30 AM</span>
                              </div>
                              <p className="text-sm">Just sent you the session agenda and some pre-reading materials via email.</p>
                            </div>
                          </div>
                        </div>
                        
                        {/* Message input - Fixed at bottom */}
                        <div className="flex gap-2 pt-4 border-t mt-auto">
                          <input 
                            type="text" 
                            className="flex-1 p-3 border border-gray-300 rounded-lg" 
                            placeholder="Type a message..."
                          />
                          <Button size="sm" className="rounded-full w-10 h-10 p-0 bg-[#efffba] text-black hover:bg-black hover:text-white">
                            <Send className="w-4 h-4" />
                          </Button>
                        </div>
                      </>
                    ) : (
                      /* Past Session - Chat Closed */
                      <div className="flex-1 flex items-center justify-center">
                        <div className="text-center">
                          <div className="p-6 bg-gray-50 rounded-lg">
                            <MessageCircle className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                            <h4 className="font-medium text-gray-600 mb-2">Chat Closed</h4>
                            <p className="text-sm text-muted-foreground">
                              Chat is no longer available for completed sessions.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      )}
      
      {/* Reschedule Modal */}
      {showReschedule && selectedSession && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="w-full max-w-md mx-4 border-2 border-foreground">
            <CardHeader>
              <CardTitle>Reschedule Session</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium">{selectedSession.topic}</h4>
                <p className="text-sm text-muted-foreground">with {selectedSession.expertName}</p>
                <p className="text-sm text-muted-foreground">Currently: {selectedSession.date} at {selectedSession.time}</p>
              </div>
              
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium">New Date</label>
                  <input type="date" className="w-full mt-1 p-2 border-2 border-foreground rounded-lg" />
                </div>
                <div>
                  <label className="text-sm font-medium">New Time</label>
                  <select className="w-full mt-1 p-2 border-2 border-foreground rounded-lg">
                    <option>9:00 AM</option>
                    <option>10:00 AM</option>
                    <option>2:00 PM</option>
                    <option>4:00 PM</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium">Reason (Optional)</label>
                  <textarea 
                    className="w-full mt-1 p-2 border-2 border-foreground rounded-lg" 
                    rows="2" 
                    placeholder="Let the expert know why you're rescheduling..."
                  ></textarea>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  className="flex-1 rounded-full border-2 border-foreground"
                  onClick={() => setShowReschedule(false)}
                >
                  Cancel
                </Button>
                <Button 
                  className="flex-1 rounded-full"
                  onClick={() => {
                    setShowReschedule(false)
                    setSelectedSession(null)
                  }}
                >
                  Confirm Reschedule
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
      
      {/* Rating Popup */}
      {showRatingPopup && selectedSession && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="w-full max-w-md mx-4 border-2 border-foreground">
            <CardHeader className="relative">
              <CardTitle>Rate Your Session</CardTitle>
              <Button 
                size="sm" 
                variant="ghost"
                className="absolute top-2 right-2 rounded-full w-8 h-8 p-0"
                onClick={() => {
                  setShowRatingPopup(false)
                  setSelectedRating(0)
                  setRatingComment('')
                }}
              >
                <X className="w-4 h-4" />
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <h4 className="font-medium mb-2">{selectedSession.topic}</h4>
                <p className="text-sm text-muted-foreground">with {selectedSession.expertName}</p>
              </div>
              
              <div className="flex justify-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-8 h-8 cursor-pointer ${i < selectedRating ? 'fill-black text-black' : 'text-gray-300 hover:text-black'}`}
                    onClick={() => setSelectedRating(i + 1)}
                  />
                ))}
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Leave a comment (optional)</label>
                <textarea 
                  className="w-full p-3 border-2 border-gray-200 rounded-lg resize-none" 
                  rows="3" 
                  placeholder="How was your session with the expert?"
                  value={ratingComment}
                  onChange={(e) => setRatingComment(e.target.value)}
                />
              </div>
              
              <div className="flex justify-center">
                <Button 
                  className="w-full rounded-full bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => {
                    // Here you would save the rating
                    console.log('Rating:', selectedRating, 'Comment:', ratingComment)
                    setShowRatingPopup(false)
                    setSelectedRating(0)
                    setRatingComment('')
                  }}
                >
                  Submit Rating
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
      
      {/* Payment Message Popup */}
      {showPaymentMessage && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="w-full max-w-md mx-4 border-2 border-foreground">
            <CardHeader>
              <CardTitle>Payment Required</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Please make the payment to confirm your session booking. Once payment is completed, you'll be able to join your session.
              </p>
              
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  className="flex-1 rounded-full border-2 border-foreground"
                  onClick={() => setShowPaymentMessage(false)}
                >
                  Cancel
                </Button>
                <Button 
                  className="flex-1 rounded-full"
                  onClick={() => {
                    setShowPaymentMessage(false)
                    // Redirect to payment page or handle payment
                    console.log('Redirect to payment')
                  }}
                >
                  Make Payment
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-4xl h-[90vh] flex flex-col">
            {/* Settings Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-xl font-semibold">Profile & Payment Settings</h2>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  onClick={() => setShowSettings(false)}
                  className="rounded-full px-6 py-2 border-gray-300 text-gray-700 hover:bg-black hover:text-white hover:border-black transition-colors font-medium"
                >
                  Discard
                </Button>
                <Button
                  className="rounded-full px-6 py-2 bg-[#efffba] text-black hover:bg-black hover:text-white border border-[#efffba] hover:border-black transition-colors font-medium"
                >
                  Save Changes
                </Button>
              </div>
            </div>

            {/* Settings Content */}
            <div className="flex-1 flex overflow-hidden">
              {/* Tab Navigation */}
              <div className="w-64 border-r p-4">
                <nav className="space-y-2">
                  {[
                    { id: 'basic', label: 'Basic Information', icon: User },
                    { id: 'security', label: 'Account Security', icon: Shield },
                    { id: 'goals', label: 'Goals & Interests', icon: Target },
                    { id: 'billing', label: 'Billing Information', icon: CreditCard },
                    { id: 'invoices', label: 'Invoices', icon: Receipt }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setSettingsTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2 text-left rounded-lg transition-colors ${
                        settingsTab === tab.id
                          ? 'bg-gray-100 text-gray-900 font-medium'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <tab.icon className="w-4 h-4" />
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Tab Content */}
              <div className="flex-1 p-6 overflow-y-auto">
                {settingsTab === 'basic' && (
                  <div>
                    <h3 className="text-lg font-semibold mb-6">Basic Information</h3>
                    <div className="space-y-6">
                      {/* Profile Picture */}
                      <div className="flex items-center gap-4">
                        <Avatar className="w-20 h-20">
                          <AvatarImage src={user.avatar} alt={`${user.firstName} ${user.lastName}`} />
                          <AvatarFallback className="text-xl">{getInitials()}</AvatarFallback>
                        </Avatar>
                        <div>
                          <Button className="mb-2 rounded-full bg-[#efffba] text-black hover:bg-black hover:text-white transition-colors px-4 py-2 text-sm font-medium">
                            Change Photo
                          </Button>
                          <p className="text-xs text-gray-500">JPG, PNG or GIF. Max size 5MB.</p>
                        </div>
                      </div>

                      {/* Name Fields */}
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label className="text-sm font-semibold text-gray-700 mb-3 block">First Name</label>
                          <input 
                            type="text" 
                            value={user.firstName}
                            className="w-full p-4 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent focus:bg-white transition-all"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-semibold text-gray-700 mb-3 block">Last Name</label>
                          <input 
                            type="text" 
                            value={user.lastName}
                            className="w-full p-4 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent focus:bg-white transition-all"
                          />
                        </div>
                      </div>

                      {/* Email and Phone */}
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label className="text-sm font-semibold text-gray-700 mb-3 block">Email Address</label>
                          <input 
                            type="email" 
                            value={user.email}
                            className="w-full p-4 border border-gray-200 rounded-xl bg-gray-100 text-gray-500 cursor-not-allowed"
                            disabled
                          />
                          <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                            <Shield className="w-3 h-3" />
                            Email cannot be changed for security
                          </p>
                        </div>
                        <div>
                          <label className="text-sm font-semibold text-gray-700 mb-3 block">Phone Number</label>
                          <input 
                            type="tel" 
                            value={user.phone}
                            className="w-full p-4 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent focus:bg-white transition-all"
                          />
                        </div>
                      </div>

                      {/* Country */}
                      <div>
                        <label className="text-sm font-semibold text-gray-700 mb-3 block">Country</label>
                        <select className="w-full p-4 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent focus:bg-white transition-all">
                          <option value="United States">United States</option>
                          <option value="Canada">Canada</option>
                          <option value="United Kingdom">United Kingdom</option>
                          <option value="Australia">Australia</option>
                          <option value="Germany">Germany</option>
                          <option value="France">France</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      {/* Bio */}
                      <div>
                        <label className="text-sm font-semibold text-gray-700 mb-3 block">Bio</label>
                        <textarea 
                          value={user.bio}
                          rows="4"
                          className="w-full p-4 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent focus:bg-white transition-all resize-none"
                          placeholder="Tell us about yourself..."
                        />
                        <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          Brief description visible to experts during session booking
                        </p>
                      </div>

                      {/* Time Zone */}
                      <div>
                        <label className="text-sm font-semibold text-gray-700 mb-3 block">Time Zone</label>
                        <select className="w-full p-4 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent focus:bg-white transition-all">
                          <option value="PST">Pacific Standard Time (PST)</option>
                          <option value="MST">Mountain Standard Time (MST)</option>
                          <option value="CST">Central Standard Time (CST)</option>
                          <option value="EST">Eastern Standard Time (EST)</option>
                          <option value="GMT">Greenwich Mean Time (GMT)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}
                
                {settingsTab === 'security' && (
                  <div>
                    <h3 className="text-lg font-semibold mb-6">Account Security</h3>
                    <div className="space-y-6">
                      {/* Current Password */}
                      <div>
                        <label className="text-sm font-medium mb-2 block">Current Password</label>
                        <input 
                          type="password" 
                          placeholder="Enter current password"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                        />
                      </div>

                      {/* New Password */}
                      <div>
                        <label className="text-sm font-medium mb-2 block">New Password</label>
                        <input 
                          type="password" 
                          placeholder="Enter new password"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                        />
                        <p className="text-xs text-muted-foreground mt-1">Must be at least 8 characters with uppercase, lowercase, and number</p>
                      </div>

                      {/* Confirm Password */}
                      <div>
                        <label className="text-sm font-medium mb-2 block">Confirm New Password</label>
                        <input 
                          type="password" 
                          placeholder="Confirm new password"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                        />
                      </div>

                    </div>
                  </div>
                )}
                
                {settingsTab === 'goals' && (
                  <div>
                    <h3 className="text-lg font-semibold mb-6">Goals & Interests</h3>
                    <div className="space-y-8">
                      {/* Primary Goals */}
                      <div className="bg-gray-50 rounded-xl p-6">
                        <label className="text-sm font-semibold text-gray-700 mb-3 block">What are your primary goals?</label>
                        <textarea 
                          value={user.primaryGoals}
                          rows="4"
                          className="w-full p-4 border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent focus:bg-white transition-all resize-none"
                          placeholder="e.g., Start a new business, Improve leadership skills, Learn new technologies"
                        />
                        <p className="text-xs text-gray-500 mt-2">Help us understand what you want to achieve</p>
                      </div>

                      {/* Expertise Areas */}
                      <div className="bg-gray-50 rounded-xl p-6">
                        <label className="text-sm font-semibold text-gray-700 mb-3 block">Areas of Interest</label>
                        <div className="grid grid-cols-2 gap-3 mb-4">
                          {['Business & Startups', 'Technology & Innovation', 'Design & Creativity', 'Marketing & Growth', 'Finance & Economics', 'Health & Wellness'].map((area) => (
                            <label key={area} className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-white transition-colors bg-white">
                              <input type="checkbox" className="mr-3 rounded" />
                              <span className="text-sm font-medium">{area}</span>
                            </label>
                          ))}
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-600 mb-2 block">Other areas (specify)</label>
                          <input 
                            type="text" 
                            className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                            placeholder="Enter any other areas you're interested in"
                          />
                        </div>
                      </div>

                      {/* Experience Level */}
                      <div className="bg-gray-50 rounded-xl p-6">
                        <label className="text-sm font-semibold text-gray-700 mb-3 block">What's your experience level?</label>
                        <div className="space-y-3">
                          {[
                            { value: 'beginner', label: 'Beginner', desc: 'Just starting out in my career' },
                            { value: 'intermediate', label: 'Intermediate', desc: '2-5 years of experience' },
                            { value: 'experienced', label: 'Experienced', desc: '5-10 years of experience' },
                            { value: 'expert', label: 'Expert', desc: '10+ years of experience' }
                          ].map((level) => (
                            <label key={level.value} className="flex items-start p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-white transition-colors bg-white">
                              <input type="radio" name="experienceLevel" className="mt-1 mr-3" />
                              <div>
                                <div className="font-medium text-sm">{level.label}</div>
                                <div className="text-xs text-gray-500">{level.desc}</div>
                              </div>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Current Challenge */}
                      <div className="bg-gray-50 rounded-xl p-6">
                        <label className="text-sm font-semibold text-gray-700 mb-3 block">What's your biggest challenge right now?</label>
                        <textarea 
                          rows="3"
                          className="w-full p-4 border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all resize-none"
                          placeholder="Describe the main obstacle or challenge you're facing"
                        />
                        <p className="text-xs text-gray-500 mt-2">This helps us recommend the most relevant experts</p>
                      </div>
                    </div>
                  </div>
                )}
                
                {settingsTab === 'billing' && (
                  <div>
                    <h3 className="text-lg font-semibold mb-6">Billing Information</h3>
                    <div className="space-y-8">
                      {/* Current Payment Methods */}
                      <div className="bg-gray-50 rounded-xl p-6">
                        <h4 className="text-md font-semibold mb-4 text-gray-700">Saved Credit/Debit Cards</h4>
                        <div className="space-y-3 mb-6">
                          {savedCards.map((card) => (
                            <div key={card.id} className={`flex items-center justify-between p-5 border rounded-xl bg-white shadow-sm transition-all ${
                              card.isPrimary ? 'border-green-300 bg-green-50' : 'border-gray-300 hover:border-gray-400'
                            }`}>
                              <div className="flex items-center gap-4">
                                {savedCards.length > 1 && (
                                  <input 
                                    type="radio" 
                                    name="primaryCard" 
                                    checked={card.isPrimary}
                                    onChange={() => setPrimaryCard(card.id)}
                                    className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500"
                                  />
                                )}
                                <div className={`w-12 h-8 bg-gradient-to-r ${card.gradient} rounded-lg text-white text-xs flex items-center justify-center font-bold`}>
                                  {card.type}
                                </div>
                                <div>
                                  <p className="font-semibold text-sm text-gray-900">•••• •••• •••• {card.last4}</p>
                                  <p className="text-xs text-gray-500">Expires {card.expiry}</p>
                                </div>
                                {card.isPrimary && (
                                  <Badge variant="secondary" className="ml-2 bg-green-100 text-green-800 border-green-200">Primary</Badge>
                                )}
                              </div>
                              <div className="flex gap-2">
                                <Button 
                                  variant="outline" 
                                  size="sm" 
                                  className="border-gray-300 hover:bg-gray-50"
                                  onClick={(e) => {
                                    e.preventDefault()
                                    // Edit card functionality
                                  }}
                                >
                                  Edit
                                </Button>
                                <Button 
                                  variant="outline" 
                                  size="sm" 
                                  className="text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700"
                                  onClick={(e) => {
                                    e.preventDefault()
                                    // Remove card functionality - could implement here
                                  }}
                                >
                                  Remove
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        <Button 
                          className="bg-[#efffba] text-black hover:bg-black hover:text-white rounded-full px-6 transition-colors"
                          onClick={() => setShowAddPaymentForm(!showAddPaymentForm)}
                        >
                          <Plus className="w-4 h-4 mr-2" />
                          Add Credit/Debit Card
                        </Button>
                      </div>

                      {/* Add New Payment Method */}
                      {showAddPaymentForm && (
                        <div className="bg-gray-50 rounded-xl p-6">
                        <h4 className="text-md font-semibold mb-4 text-gray-700">Add New Payment Method</h4>
                        
                        {/* Credit/Debit Card Form */}
                        <div className="space-y-4 mb-6">
                          <label className="text-sm font-semibold text-gray-700 block">Add New Card</label>
                        </div>

                        {/* Credit Card Form */}
                        <div className="space-y-4">
                            <div className="space-y-4">
                              {/* Card Number */}
                              <div>
                                <label className="text-sm font-medium mb-2 block">Card Number</label>
                                <input 
                                  type="text" 
                                  placeholder="1234 5678 9012 3456"
                                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                                />
                              </div>

                              {/* Expiry and CVC */}
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <label className="text-sm font-medium mb-2 block">Expiry Date</label>
                                  <input 
                                    type="text" 
                                    placeholder="MM/YY"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                                  />
                                </div>
                                <div>
                                  <label className="text-sm font-medium mb-2 block">CVC</label>
                                  <input 
                                    type="text" 
                                    placeholder="123"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                                  />
                                </div>
                              </div>

                              {/* Cardholder Name */}
                              <div>
                                <label className="text-sm font-medium mb-2 block">Cardholder Name</label>
                                <input 
                                  type="text" 
                                  placeholder="John Smith"
                                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                                />
                              </div>

                              {/* Billing Address */}
                              <div className="border-t pt-4">
                                <h5 className="font-medium text-sm mb-3">Billing Address</h5>
                                <div className="space-y-4">
                                  <div>
                                    <label className="text-sm font-medium mb-2 block">Address Line 1</label>
                                    <input 
                                      type="text" 
                                      placeholder="123 Main Street"
                                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                                    />
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium mb-2 block">Address Line 2 (Optional)</label>
                                    <input 
                                      type="text" 
                                      placeholder="Apartment, suite, etc."
                                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                                    />
                                  </div>
                                  <div className="grid grid-cols-2 gap-4">
                                    <div>
                                      <label className="text-sm font-medium mb-2 block">City</label>
                                      <input 
                                        type="text" 
                                        placeholder="San Francisco"
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                                      />
                                    </div>
                                    <div>
                                      <label className="text-sm font-medium mb-2 block">State</label>
                                      <input 
                                        type="text" 
                                        placeholder="CA"
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                                      />
                                    </div>
                                  </div>
                                  <div className="grid grid-cols-2 gap-4">
                                    <div>
                                      <label className="text-sm font-medium mb-2 block">Postal Code</label>
                                      <input 
                                        type="text" 
                                        placeholder="94102"
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                                      />
                                    </div>
                                    <div>
                                      <label className="text-sm font-medium mb-2 block">Country</label>
                                      <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent">
                                        <option value="US">United States</option>
                                        <option value="CA">Canada</option>
                                        <option value="GB">United Kingdom</option>
                                        <option value="AU">Australia</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>


                          <Button className="w-full mt-4">
                            Add Credit/Debit Card
                          </Button>
                        </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                
                {settingsTab === 'invoices' && (
                  <div>
                    <h3 className="text-lg font-semibold mb-6">Invoices</h3>
                    <div className="space-y-6">

                      {/* Invoice PDFs */}
                      <div className="space-y-3">
                        {[
                          { session: 'Product Strategy Session', expert: 'Dr. Michael Chen', amount: '$200', date: 'Nov 1, 2024' },
                          { session: 'Leadership Coaching', expert: 'Sarah Williams', amount: '$180', date: 'Oct 28, 2024' },
                          { session: 'Tech Innovation Workshop', expert: 'David Rodriguez', amount: '$250', date: 'Oct 15, 2024' }
                        ].map((invoice, index) => (
                          <div key={index} className="flex justify-between items-center p-4 border border-gray-200 rounded-xl">
                            <div>
                              <p className="font-semibold text-gray-900">{invoice.expert}</p>
                              <p className="text-sm text-gray-500">{invoice.date}</p>
                              <p className="text-sm text-gray-600">{invoice.session}</p>
                            </div>
                            <div className="flex items-center gap-4">
                              <span className="font-bold text-lg text-gray-900">{invoice.amount}</span>
                              <Button size="sm" className="bg-[#efffba] text-black hover:bg-black hover:text-white rounded-full px-4">
                                <Download className="w-4 h-4 mr-1" />
                                PDF
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Notifications Sidebar */}
      {showNotifications && (
        <div className="fixed inset-0 bg-black/50 z-50">
          <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-xl overflow-y-auto">
            <Card className="border-0 h-full rounded-none">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <CardTitle className="text-lg">Notifications</CardTitle>
                  <Button 
                    size="sm" 
                    variant="ghost"
                    className="rounded-full w-8 h-8 p-0"
                    onClick={() => setShowNotifications(false)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {notifications.map((notification) => (
                  <div 
                    key={notification.id}
                    className={`p-4 rounded-lg border transition-all hover:bg-gray-50 cursor-pointer ${
                      !notification.read ? 'bg-blue-50 border-blue-200' : 'bg-white border-gray-200'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={notification.avatar} />
                        <AvatarFallback>{notification.title[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium text-sm">{notification.title}</h4>
                          {!notification.read && (
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{notification.message}</p>
                        <p className="text-xs text-muted-foreground mt-2">{notification.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
                
                {notifications.length === 0 && (
                  <div className="text-center py-8">
                    <Bell className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                    <p className="text-muted-foreground">No notifications yet</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  )
}

export default UserDashboard