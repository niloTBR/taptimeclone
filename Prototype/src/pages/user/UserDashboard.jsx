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
  Menu
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
  const [selectedSessionType, setSelectedSessionType] = useState(null)

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
    },
    {
      id: 2,
      expertName: 'Lisa Park',
      expertTitle: 'Marketing Strategy',
      date: 'March 25',
      time: '10:00 AM',
      duration: '45 min',
      topic: 'Growth Marketing Session',
      summary: 'Deep dive into growth marketing tactics and customer acquisition strategies for your business.',
      cost: '$150',
      avatar: '/portrait-3.avif',
      expertImage: '/portrait-3.avif',
      category: 'Marketing',
      rating: 4.8,
      reviewCount: 65,
      verified: true,
      paymentStatus: 'pending',
      expertise: ['Growth Marketing']
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

  const tabs = [
    { id: 'upcoming', label: 'Upcoming', count: upcomingSessions.length },
    { id: 'past', label: 'Past Sessions', count: pastSessions.length }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Analytics Header Section with Hero Background */}
      <section className="relative bg-gradient-to-r from-slate-900 to-blue-900 text-white px-6 py-20 pt-32" style={{backgroundImage: "url('/mymind-XUlsF9LYeVk-unsplash.jpg')", backgroundSize: "cover", backgroundPosition: "center"}}>
        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Welcome Text */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold">Welcome back, {user.firstName}!</h1>
          </div>

          {/* Analytics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Total Sessions */}
            <Card className="border-0 bg-white/95 backdrop-blur-sm hover:bg-white transition-all duration-300">
              <CardContent className="p-4">
                <div className="flex gap-4 h-20">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-50 rounded-lg flex-shrink-0 self-center">
                    <BookOpen className="w-6 h-6 text-blue-500" />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex-1">
                      <p className="text-2xl font-bold text-gray-900">{pastSessions.length + upcomingSessions.length}</p>
                      <p className="text-sm text-gray-600 font-medium">Total Sessions</p>
                    </div>
                    <div className="h-8 w-full mt-auto">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={sessionData}>
                          <Bar dataKey="sessions" fill="#8bb8ff" radius={[2, 2, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Learning Hours */}
            <Card className="border-0 bg-white/95 backdrop-blur-sm hover:bg-white transition-all duration-300">
              <CardContent className="p-4">
                <div className="flex gap-4 h-20">
                  <div className="flex items-center justify-center w-12 h-12 bg-emerald-50 rounded-lg flex-shrink-0 self-center">
                    <Target className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex-1">
                      <p className="text-2xl font-bold text-gray-900">35</p>
                      <p className="text-sm text-gray-600 font-medium">Learning Hours</p>
                    </div>
                    <div className="h-8 w-full mt-auto">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={learningData}>
                          <Bar dataKey="hours" fill="#86efac" radius={[2, 2, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Completion Rate */}
            <Card className="border-0 bg-white/95 backdrop-blur-sm hover:bg-white transition-all duration-300">
              <CardContent className="p-4">
                <div className="flex gap-4 h-20">
                  <div className="flex items-center justify-center w-12 h-12 bg-violet-50 rounded-lg flex-shrink-0 self-center">
                    <CheckCircle className="w-6 h-6 text-violet-500" />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex-1">
                      <p className="text-2xl font-bold text-gray-900">94%</p>
                      <p className="text-sm text-gray-600 font-medium">Completion Rate</p>
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
            <Card className="border-0 bg-white/95 backdrop-blur-sm hover:bg-white transition-all duration-300">
              <CardContent className="p-4">
                <div className="flex gap-4 h-20">
                  <div className="flex items-center justify-center w-12 h-12 bg-amber-50 rounded-lg flex-shrink-0 self-center">
                    <Star className="w-6 h-6 text-amber-500" />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex-1">
                      <p className="text-2xl font-bold text-gray-900">4.8</p>
                      <p className="text-sm text-gray-600 font-medium">Average Rating</p>
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
            <CardContent className="p-6">
              <div className="flex gap-4 mb-4">
                <div className="relative">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={user.avatar} alt={`${user.firstName} ${user.lastName}`} />
                    <AvatarFallback className="text-lg">{getInitials()}</AvatarFallback>
                  </Avatar>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="absolute -bottom-1 -right-1 rounded-full w-6 h-6 p-0 bg-white shadow-md"
                  >
                    <Edit className="w-2 h-2" />
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
                className="w-full mt-6 rounded-lg text-sm font-medium"
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
          <div className="border-b border-border mb-8">
            <div className="flex space-x-8">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-primary text-foreground'
                      : 'border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground/40'
                  }`}
                >
                  {tab.label}
                  {tab.count > 0 && (
                    <Badge variant="secondary" className="ml-1">
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
                        {session.paymentStatus === 'paid' ? (
                          <p className="text-gray-600 font-medium">✓ Paid</p>
                        ) : (
                          <p className="text-orange-600 font-medium">⏳ Payment Pending</p>
                        )}
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
                            <span className="text-orange-600">Unrated - Please rate this session</span>
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
                            className="rounded-full px-4 flex items-center gap-2 bg-[#efffba] text-black hover:bg-black hover:text-white border border-[#efffba] hover:border-black transition-all text-sm font-medium flex-1"
                            onClick={() => window.open(`/booking?expert=${session.expertName.toLowerCase().replace(' ', '-')}`, '_blank')}
                          >
                            <span>{session.cost.split('/')[0]}</span>
                            <span className="opacity-75">/{session.cost.split('/')[1]}</span>
                            <span className="ms-1">Book Again</span>
                          </Button>
                          
                          <div className="relative">
                            <Button 
                              size="sm" 
                              variant="outline"
                              className="rounded-full border border-black px-4 text-black hover:bg-black hover:text-white transition-all text-sm font-medium"
                            >
                              View
                            </Button>
                            <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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
                  className="rounded-lg border border-border shadow-sm hover:bg-gray-50"
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
                  className="rounded-lg border border-border shadow-sm hover:bg-gray-50"
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
              <Button variant="outline" className="rounded-lg border border-border shadow-sm hover:bg-gray-50 font-medium">
                View All Experts
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {suggestedExperts.slice(0, 8).map((expert, index) => (
              <div key={index} className="w-full">
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
                    className="rounded-full"
                    onClick={() => setShowSessionDetail(false)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
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
              <CardContent className="space-y-4">{sessionDetailTab === 'summary' && (
                <div className="space-y-4">
                {/* Expert Info with Photo */}
                <div 
                  className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                  onClick={() => window.open(`/expert/${selectedSession.expertName.toLowerCase().replace(' ', '-')}`, '_blank')}
                >
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={selectedSession.avatar} alt={selectedSession.expertName} />
                    <AvatarFallback>{getInitials(selectedSession.expertName)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm truncate">Dr. {selectedSession.expertName}</h4>
                    <p className="text-xs text-muted-foreground truncate">{selectedSession.expertise}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </div>

                <div className="border-t my-3" />

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

                {/* Payment Status */}
                <div className="border-t my-3" />
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm">Session fee</span>
                    <span className="text-sm">{selectedSession.cost}</span>
                  </div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm">Platform fee</span>
                    <span className="text-sm">$5</span>
                  </div>
                  <div className="border-t my-2" />
                  <div className="flex justify-between items-center font-semibold">
                    <span>Status</span>
                    <Badge variant={selectedSession.paymentStatus === 'paid' ? 'default' : 'secondary'}>
                      {selectedSession.paymentStatus === 'paid' ? 'Paid' : 'Pending'}
                    </Badge>
                  </div>
                </div>

                {/* Actions based on session status */}
                <div className="border-t my-3" />
                {selectedSessionType === 'upcoming' ? (
                  <div className="space-y-3">
                    {/* Primary Action - Join Session */}
                    <Button className="w-full rounded-full bg-black hover:bg-gray-800 text-white py-3 text-base font-semibold">
                      <Video className="w-5 h-5 mr-2" />
                      Join Session
                    </Button>
                    
                    {/* Secondary Actions */}
                    <div className="grid grid-cols-2 gap-3">
                      <Button 
                        variant="outline" 
                        className="rounded-full border-2 border-foreground"
                        onClick={() => {
                          setShowSessionDetail(false)
                          setShowReschedule(true)
                        }}
                      >
                        Reschedule
                      </Button>
                      <Button 
                        variant="outline" 
                        className="rounded-full border-2 border-red-500 text-red-600 hover:bg-red-50"
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                ) : (
                  /* Past Session Actions */
                  <div className="space-y-3">
                    <Button 
                      className="w-full rounded-full bg-black hover:bg-gray-800 text-white py-3 text-base font-semibold"
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
                        className="w-full rounded-full border-2 border-foreground"
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
                  <div className="space-y-4">
                    {/* Chat Header with Expert Info */}
                    <div className="flex items-center gap-3 pb-3 border-b">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={selectedSession.avatar} alt={selectedSession.expertName} />
                        <AvatarFallback>{getInitials(selectedSession.expertName)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold text-sm">Dr. {selectedSession.expertName}</h4>
                        <p className="text-xs text-muted-foreground">{selectedSession.expertise}</p>
                      </div>
                    </div>

                    {selectedSessionType === 'upcoming' ? (
                      <div>
                        {/* Conversation History */}
                        <div className="space-y-3 max-h-96 overflow-y-auto">
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
                        
                        {/* New message input */}
                        <div className="flex gap-2 pt-4 border-t">
                          <input 
                            type="text" 
                            className="flex-1 p-3 border border-gray-300 rounded-lg" 
                            placeholder="Type a message..."
                          />
                          <Button size="sm" className="rounded-lg px-4">
                            Send
                          </Button>
                        </div>
                      </div>
                    ) : (
                      /* Past Session - Chat Closed */
                      <div className="text-center py-8">
                        <div className="p-6 bg-gray-50 rounded-lg">
                          <MessageCircle className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                          <h4 className="font-medium text-gray-600 mb-2">Chat Closed</h4>
                          <p className="text-sm text-muted-foreground">
                            Chat is no longer available for completed sessions.
                          </p>
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
            <CardHeader>
              <CardTitle>Rate Your Session</CardTitle>
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
              
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  className="flex-1 rounded-full border-2 border-foreground"
                  onClick={() => {
                    setShowRatingPopup(false)
                    setSelectedRating(0)
                    setRatingComment('')
                  }}
                >
                  Cancel
                </Button>
                <Button 
                  className="flex-1 rounded-full"
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
                  className="rounded-full px-4"
                >
                  DISCARD
                </Button>
                <Button
                  className="rounded-full px-4"
                >
                  SAVE
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
                          <Button variant="outline" size="sm" className="mb-2">
                            Change Photo
                          </Button>
                          <p className="text-xs text-muted-foreground">JPG, PNG or GIF. Max size 5MB.</p>
                        </div>
                      </div>

                      {/* Name Fields */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium mb-2 block">First Name</label>
                          <input 
                            type="text" 
                            value={user.firstName}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">Last Name</label>
                          <input 
                            type="text" 
                            value={user.lastName}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                          />
                        </div>
                      </div>

                      {/* Email and Phone */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium mb-2 block">Email Address</label>
                          <input 
                            type="email" 
                            value={user.email}
                            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-500"
                            disabled
                          />
                          <p className="text-xs text-muted-foreground mt-1">Email cannot be changed</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">Phone Number</label>
                          <input 
                            type="tel" 
                            value={user.phone}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                          />
                        </div>
                      </div>

                      {/* Country */}
                      <div>
                        <label className="text-sm font-medium mb-2 block">Country</label>
                        <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent">
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
                        <label className="text-sm font-medium mb-2 block">Bio</label>
                        <textarea 
                          value={user.bio}
                          rows="4"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none"
                          placeholder="Tell us about yourself..."
                        />
                        <p className="text-xs text-muted-foreground mt-1">Brief description for your profile. This will be visible to experts.</p>
                      </div>

                      {/* Time Zone */}
                      <div>
                        <label className="text-sm font-medium mb-2 block">Time Zone</label>
                        <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent">
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

                      {/* Two-Factor Authentication */}
                      <div className="border-t pt-6">
                        <h4 className="text-md font-semibold mb-4">Two-Factor Authentication</h4>
                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <h5 className="font-medium text-sm">SMS Authentication</h5>
                            <p className="text-xs text-muted-foreground">Receive verification codes via SMS</p>
                          </div>
                          <Button variant="outline" size="sm">
                            Enable
                          </Button>
                        </div>
                      </div>

                      {/* Login Sessions */}
                      <div className="border-t pt-6">
                        <h4 className="text-md font-semibold mb-4">Active Sessions</h4>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-3 border rounded-lg">
                            <div>
                              <h5 className="font-medium text-sm">Current Session</h5>
                              <p className="text-xs text-muted-foreground">MacBook Pro • Chrome • San Francisco, CA</p>
                              <p className="text-xs text-muted-foreground">Last active: Now</p>
                            </div>
                            <Badge variant="secondary">Current</Badge>
                          </div>
                          <div className="flex items-center justify-between p-3 border rounded-lg">
                            <div>
                              <h5 className="font-medium text-sm">iPhone</h5>
                              <p className="text-xs text-muted-foreground">Safari • San Francisco, CA</p>
                              <p className="text-xs text-muted-foreground">Last active: 2 hours ago</p>
                            </div>
                            <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50">
                              Revoke
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {settingsTab === 'goals' && (
                  <div>
                    <h3 className="text-lg font-semibold mb-6">Goals & Interests</h3>
                    <div className="space-y-6">
                      {/* Primary Goals */}
                      <div>
                        <label className="text-sm font-medium mb-2 block">What are your primary goals?</label>
                        <textarea 
                          value={user.primaryGoals}
                          rows="4"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none"
                          placeholder="e.g., Start a new business, Improve leadership skills, Learn new technologies"
                        />
                        <p className="text-xs text-muted-foreground mt-1">Separate multiple goals with commas</p>
                      </div>

                      {/* Expertise Needed */}
                      <div>
                        <label className="text-sm font-medium mb-2 block">What type of expertise are you seeking?</label>
                        <textarea 
                          value={user.expertiseNeeded}
                          rows="4"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none"
                          placeholder="e.g., Product Strategy, Team Leadership, Technology Innovation"
                        />
                        <p className="text-xs text-muted-foreground mt-1">Separate multiple areas with commas</p>
                      </div>
                    </div>
                  </div>
                )}
                
                {settingsTab === 'billing' && (
                  <div>
                    <h3 className="text-lg font-semibold mb-6">Billing Information</h3>
                    <div className="space-y-6">
                      {/* Current Payment Methods */}
                      <div>
                        <h4 className="text-md font-semibold mb-4">Payment Methods</h4>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-4 border rounded-lg">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded text-white text-xs flex items-center justify-center font-bold">
                                VISA
                              </div>
                              <div>
                                <p className="font-medium text-sm">•••• •••• •••• 4242</p>
                                <p className="text-xs text-muted-foreground">Expires 12/2025</p>
                              </div>
                              <Badge variant="secondary" className="ml-2">Primary</Badge>
                            </div>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">Edit</Button>
                              <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50">Remove</Button>
                            </div>
                          </div>
                        </div>
                        
                        <Button variant="outline" className="mt-3" size="sm">
                          <Plus className="w-4 h-4 mr-2" />
                          Add Payment Method
                        </Button>
                      </div>

                      {/* Add New Payment Method */}
                      <div className="border-t pt-6">
                        <h4 className="text-md font-semibold mb-4">Add New Payment Method</h4>
                        
                        {/* Payment Method Selection */}
                        <div className="space-y-3 mb-6">
                          <label className="text-sm font-medium">Choose Payment Method</label>
                          <div className="space-y-3">
                            <label className={`flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50 ${
                              selectedPaymentMethod === 'card' ? 'border-gray-900 bg-gray-50' : 'border-gray-300'
                            }`}>
                              <input 
                                type="radio" 
                                name="paymentMethod" 
                                value="card" 
                                className="mr-3" 
                                checked={selectedPaymentMethod === 'card'}
                                onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                              />
                              <CreditCard className="w-5 h-5 mr-3 text-gray-600" />
                              <div>
                                <p className="font-medium text-sm">Credit/Debit Card</p>
                                <p className="text-xs text-muted-foreground">Visa, Mastercard, American Express</p>
                              </div>
                            </label>
                            
                            <label className={`flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50 ${
                              selectedPaymentMethod === 'apple' ? 'border-gray-900 bg-gray-50' : 'border-gray-300'
                            }`}>
                              <input 
                                type="radio" 
                                name="paymentMethod" 
                                value="apple" 
                                className="mr-3" 
                                checked={selectedPaymentMethod === 'apple'}
                                onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                              />
                              <div className="w-5 h-5 mr-3 bg-black rounded flex items-center justify-center">
                                <span className="text-white text-xs font-bold">🍎</span>
                              </div>
                              <div>
                                <p className="font-medium text-sm">Apple Pay</p>
                                <p className="text-xs text-muted-foreground">Pay with Touch ID or Face ID</p>
                              </div>
                            </label>
                            
                            <label className={`flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50 ${
                              selectedPaymentMethod === 'google' ? 'border-gray-900 bg-gray-50' : 'border-gray-300'
                            }`}>
                              <input 
                                type="radio" 
                                name="paymentMethod" 
                                value="google" 
                                className="mr-3" 
                                checked={selectedPaymentMethod === 'google'}
                                onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                              />
                              <div className="w-5 h-5 mr-3 flex items-center justify-center">
                                <span className="text-xs">G</span>
                              </div>
                              <div>
                                <p className="font-medium text-sm">Google Pay</p>
                                <p className="text-xs text-muted-foreground">Quick and secure payments</p>
                              </div>
                            </label>
                            
                            <label className={`flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50 ${
                              selectedPaymentMethod === 'bank' ? 'border-gray-900 bg-gray-50' : 'border-gray-300'
                            }`}>
                              <input 
                                type="radio" 
                                name="paymentMethod" 
                                value="bank" 
                                className="mr-3" 
                                checked={selectedPaymentMethod === 'bank'}
                                onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                              />
                              <Building className="w-5 h-5 mr-3 text-gray-600" />
                              <div>
                                <p className="font-medium text-sm">Bank Transfer</p>
                                <p className="text-xs text-muted-foreground">Direct bank account transfer</p>
                              </div>
                            </label>
                            
                            <label className={`flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50 ${
                              selectedPaymentMethod === 'paypal' ? 'border-gray-900 bg-gray-50' : 'border-gray-300'
                            }`}>
                              <input 
                                type="radio" 
                                name="paymentMethod" 
                                value="paypal" 
                                className="mr-3" 
                                checked={selectedPaymentMethod === 'paypal'}
                                onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                              />
                              <div className="w-5 h-5 mr-3 bg-blue-600 rounded flex items-center justify-center">
                                <span className="text-white text-xs font-bold">P</span>
                              </div>
                              <div>
                                <p className="font-medium text-sm">PayPal</p>
                                <p className="text-xs text-muted-foreground">Pay with your PayPal account</p>
                              </div>
                            </label>
                          </div>
                        </div>

                        {/* Conditional Forms */}
                        <div className="space-y-4">
                          {/* Conditional Payment Forms */}
                          {selectedPaymentMethod === 'card' && (
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
                          )}

                          {selectedPaymentMethod === 'apple' && (
                            <div className="text-center py-8 bg-gray-50 rounded-lg">
                              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl">🍎</span>
                              </div>
                              <h5 className="font-medium mb-2">Apple Pay</h5>
                              <p className="text-sm text-muted-foreground mb-4">
                                You'll be redirected to complete setup with Apple Pay
                              </p>
                              <Button className="bg-black hover:bg-gray-800 text-white">
                                Continue with Apple Pay
                              </Button>
                            </div>
                          )}

                          {selectedPaymentMethod === 'google' && (
                            <div className="text-center py-8 bg-gray-50 rounded-lg">
                              <div className="w-16 h-16 border-2 border-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-gray-600">G</span>
                              </div>
                              <h5 className="font-medium mb-2">Google Pay</h5>
                              <p className="text-sm text-muted-foreground mb-4">
                                Quick and secure payments with Google Pay
                              </p>
                              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                                Continue with Google Pay
                              </Button>
                            </div>
                          )}

                          {selectedPaymentMethod === 'bank' && (
                            <div className="space-y-4">
                              <div>
                                <label className="text-sm font-medium mb-2 block">Bank Account Type</label>
                                <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent">
                                  <option value="checking">Checking Account</option>
                                  <option value="savings">Savings Account</option>
                                </select>
                              </div>
                              <div>
                                <label className="text-sm font-medium mb-2 block">Account Holder Name</label>
                                <input 
                                  type="text" 
                                  placeholder="John Smith"
                                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                                />
                              </div>
                              <div>
                                <label className="text-sm font-medium mb-2 block">Routing Number</label>
                                <input 
                                  type="text" 
                                  placeholder="123456789"
                                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                                />
                              </div>
                              <div>
                                <label className="text-sm font-medium mb-2 block">Account Number</label>
                                <input 
                                  type="text" 
                                  placeholder="1234567890123"
                                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                                />
                              </div>
                            </div>
                          )}

                          {selectedPaymentMethod === 'paypal' && (
                            <div className="text-center py-8 bg-gray-50 rounded-lg">
                              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-xl font-bold">PayPal</span>
                              </div>
                              <h5 className="font-medium mb-2">PayPal</h5>
                              <p className="text-sm text-muted-foreground mb-4">
                                You'll be redirected to log in to your PayPal account
                              </p>
                              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                                Continue with PayPal
                              </Button>
                            </div>
                          )}

                          <Button className="w-full mt-4">
                            Add Payment Method
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {settingsTab === 'invoices' && (
                  <div>
                    <h3 className="text-lg font-semibold mb-6">Invoices</h3>
                    <div className="space-y-6">

                      {/* Filters */}
                      <div className="flex gap-4 items-center">
                        <select className="p-2 border border-gray-300 rounded-lg text-sm">
                          <option>All Invoices</option>
                          <option>Paid</option>
                          <option>Pending</option>
                          <option>Overdue</option>
                        </select>
                        <select className="p-2 border border-gray-300 rounded-lg text-sm">
                          <option>Last 12 months</option>
                          <option>Last 6 months</option>
                          <option>Last 3 months</option>
                          <option>This month</option>
                        </select>
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-2" />
                          Export All
                        </Button>
                      </div>

                      {/* Invoice List */}
                      <div className="space-y-3">
                        {[
                          {
                            id: 'INV-001',
                            date: 'Nov 1, 2024',
                            expert: 'Dr. Michael Chen',
                            session: 'Product Strategy Session',
                            amount: '$200',
                            status: 'Paid',
                            statusColor: 'bg-green-100 text-green-800'
                          },
                          {
                            id: 'INV-002',
                            date: 'Oct 28, 2024',
                            expert: 'Sarah Williams',
                            session: 'Leadership Coaching',
                            amount: '$180',
                            status: 'Paid',
                            statusColor: 'bg-green-100 text-green-800'
                          },
                          {
                            id: 'INV-003',
                            date: 'Oct 15, 2024',
                            expert: 'David Rodriguez',
                            session: 'Tech Innovation Workshop',
                            amount: '$250',
                            status: 'Pending',
                            statusColor: 'bg-yellow-100 text-yellow-800'
                          },
                          {
                            id: 'INV-004',
                            date: 'Oct 5, 2024',
                            expert: 'Dr. Emily Johnson',
                            session: 'Business Strategy Review',
                            amount: '$300',
                            status: 'Paid',
                            statusColor: 'bg-green-100 text-green-800'
                          },
                          {
                            id: 'INV-005',
                            date: 'Sep 22, 2024',
                            expert: 'Alex Thompson',
                            session: 'Marketing Consultation',
                            amount: '$150',
                            status: 'Paid',
                            statusColor: 'bg-green-100 text-green-800'
                          }
                        ].map((invoice) => (
                          <div key={invoice.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                            <div className="flex-1">
                              <div className="flex items-center gap-4">
                                <div>
                                  <p className="font-medium text-sm">{invoice.id}</p>
                                  <p className="text-xs text-muted-foreground">{invoice.date}</p>
                                </div>
                                <div className="flex-1">
                                  <p className="font-medium text-sm">{invoice.session}</p>
                                  <p className="text-xs text-muted-foreground">with {invoice.expert}</p>
                                </div>
                                <div className="text-right">
                                  <p className="font-semibold text-sm">{invoice.amount}</p>
                                  <Badge className={`text-xs ${invoice.statusColor}`}>
                                    {invoice.status}
                                  </Badge>
                                </div>
                              </div>
                            </div>
                            <div className="flex gap-2 ml-4">
                              <Button variant="outline" size="sm">
                                <Eye className="w-4 h-4 mr-1" />
                                View
                              </Button>
                              <Button variant="outline" size="sm">
                                <Download className="w-4 h-4 mr-1" />
                                PDF
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Pagination */}
                      <div className="flex items-center justify-between pt-4">
                        <p className="text-sm text-muted-foreground">Showing 5 of 12 invoices</p>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" disabled>
                            Previous
                          </Button>
                          <Button variant="outline" size="sm">
                            Next
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default UserDashboard