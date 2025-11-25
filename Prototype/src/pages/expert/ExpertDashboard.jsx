import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line } from 'recharts'
import { 
  Calendar,
  Clock,
  Star,
  DollarSign,
  TrendingUp,
  Video,
  Bell,
  Plus,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  Award,
  Target,
  Users,
  Edit,
  Mail,
  Phone,
  MapPin,
  Building,
  Eye,
  ArrowUp,
  CreditCard,
  Download,
  Receipt,
  Shield,
  ShieldCheck,
  AlertCircle,
  Building2,
  Settings,
  User,
  Heart,
  Share2,
  Check,
  Globe,
  ChevronDown,
  ChevronRight,
  X,
  Crown,
  Package,
  Trash2,
  CalendarDays,
  FileText,
  BookOpen,
  Send,
  LogOut,
  Menu
} from 'lucide-react'

const ExpertDashboard = () => {
  const [activeTab, setActiveTab] = useState('upcoming')
  const [showSessionDetail, setShowSessionDetail] = useState(false)
  const [selectedSession, setSelectedSession] = useState(null)
  const [selectedSessionType, setSelectedSessionType] = useState(null)
  const [sessionDetailTab, setSessionDetailTab] = useState('summary')
  const [showVerificationModal, setShowVerificationModal] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [settingsTab, setSettingsTab] = useState('basic')
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('card')
  const [billingTab, setBillingTab] = useState('withdrawal')

  // Mock expert data from onboarding
  const expert = {
    name: 'Dr. Michael Chen',
    title: 'Product Strategy Expert',
    email: 'michael.chen@email.com',
    phone: '+1 (555) 987-6543',
    location: 'San Francisco, CA',
    company: 'Chen Consulting',
    industry: 'Technology Consulting',
    experience: '10+ years',
    avatar: '/api/placeholder/40/40',
    joinDate: 'August 2023',
    verified: true,
    hourlyRate: 200,
    specialization: 'Product Strategy & Leadership',
    bio: 'Helping companies build products that customers love through strategic planning and data-driven decisions.',
    expertise: ['Product Strategy', 'Team Leadership', 'Market Analysis', 'Roadmap Planning']
  }

  const stats = {
    thisMonth: {
      earnings: 8640,
      sessions: 43,
      students: 38,
      rating: 4.9
    },
    growth: {
      earnings: +12,
      sessions: +8,
      students: +15,
      rating: +0.1
    }
  }

  const earningsData = [
    { month: 'Jan', earnings: 6200 },
    { month: 'Feb', earnings: 7400 },
    { month: 'Mar', earnings: 8640 }
  ]

  const sessionsData = [
    { month: 'Jan', sessions: 32 },
    { month: 'Feb', sessions: 38 },
    { month: 'Mar', sessions: 43 }
  ]

  const upcomingSessions = [
    {
      id: 1,
      clientName: 'Sarah Johnson',
      clientTitle: 'Product Manager at TechCorp',
      clientLocation: 'New York, NY',
      date: 'Tomorrow',
      time: '2:00 PM',
      duration: '60 min',
      topic: 'Product Roadmap Review',
      summary: 'Review current product strategy and identify areas for improvement. Discuss market positioning and competitive analysis.',
      cost: '$200',
      avatar: '/api/placeholder/40/40',
      category: 'Business',
      rating: 4.8,
      reviewCount: 24,
      paymentStatus: 'paid'
    },
    {
      id: 2,
      clientName: 'David Thompson',
      clientTitle: 'Startup Founder',
      clientLocation: 'Austin, TX',
      date: 'March 25',
      time: '10:00 AM',
      duration: '90 min',
      topic: 'Startup Strategy Deep Dive',
      summary: 'Comprehensive strategy session covering product-market fit, go-to-market strategy, and scaling plans.',
      cost: '$300',
      avatar: '/api/placeholder/40/40',
      category: 'Strategy',
      rating: 4.9,
      reviewCount: 31,
      paymentStatus: 'pending'
    }
  ]

  const pastSessions = [
    {
      id: 1,
      clientName: 'Emily Rodriguez',
      clientTitle: 'Head of Product',
      clientLocation: 'Seattle, WA',
      date: 'Mar 18',
      rating: 5,
      topic: 'Team Leadership Workshop',
      duration: '75 min',
      cost: '$250',
      feedback: 'Incredible insights on building high-performing product teams. Michael provided actionable frameworks we immediately implemented.',
      avatar: '/api/placeholder/40/40',
      category: 'Leadership',
      clientRating: 4.9,
      reviewCount: 18,
      sessionNumber: 3,
      clientRatedUs: 5
    },
    {
      id: 2,
      clientName: 'James Wilson',
      clientTitle: 'VP Product',
      clientLocation: 'Boston, MA',
      date: 'Mar 15',
      rating: 5,
      topic: 'Product Strategy Session',
      duration: '60 min',
      cost: '$200',
      feedback: 'Exceptional strategic guidance. Helped us pivot our roadmap and focus on what truly matters for our customers.',
      avatar: '/api/placeholder/40/40',
      category: 'Strategy',
      clientRating: 4.7,
      reviewCount: 22,
      sessionNumber: 1,
      clientRatedUs: null
    }
  ]

  const conversations = [
    {
      id: 1,
      clientName: 'Sarah Johnson',
      lastMessage: 'Thank you for the session prep materials!',
      time: '1 hour ago',
      unread: 2,
      avatar: '/api/placeholder/40/40'
    },
    {
      id: 2,
      clientName: 'David Thompson',
      lastMessage: 'Looking forward to our deep dive tomorrow.',
      time: '3 hours ago',
      unread: 0,
      avatar: '/api/placeholder/40/40'
    }
  ]

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()
  }

  const formatGrowth = (value) => {
    const prefix = value > 0 ? '+' : ''
    return `${prefix}${value}%`
  }

  const getGrowthColor = (value) => {
    return value > 0 ? 'text-green-600' : value < 0 ? 'text-red-600' : 'text-gray-500'
  }

  const tabs = [
    { id: 'upcoming', label: 'Upcoming', count: upcomingSessions.length },
    { id: 'past', label: 'Past Sessions', count: pastSessions.length },
    { id: 'reviews', label: 'Reviews', count: 0 }
  ]




  return (
    <div className="min-h-screen bg-white">
      <style jsx>{`
        .force-black-text * {
          color: #000000 !important;
        }
        .force-gray-text {
          color: #666666 !important;
        }
      `}</style>
      
      {/* Header Component - Same as UserDashboard */}
      <header className="fixed top-4 z-50 backdrop-filter blur-40 saturate-180 bg-white/10 border border-white/20 rounded-2xl shadow-lg inset-0 left-4 right-4 w-calc-100-minus-2rem">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-foreground text-background rounded-lg flex items-center justify-center font-bold">
                T
              </div>
              <h1 className="text-lg font-semibold">Expert Dashboard</h1>
            </div>
            
            {/* Actions */}
            <div className="flex items-center gap-3">
              <Button className="rounded-full bg-[#efffba] text-black hover:bg-black hover:text-white transition-colors px-4 py-2 text-sm">
                <Plus className="w-4 h-4 mr-2" />
                Add Availability
              </Button>
              
              <Button size="sm" className="rounded-full w-10 h-10 p-0 bg-[#efffba] text-black hover:bg-black hover:text-white transition-colors">
                <Bell className="w-4 h-4" />
              </Button>
              
              {/* Expert Profile */}
              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="/portrait-1.avif" alt={expert.name} />
                  <AvatarFallback className="text-sm">{getInitials(expert.name)}</AvatarFallback>
                </Avatar>
                <div className="hidden md:block text-left">
                  <p className="text-sm font-medium">{expert.name}</p>
                </div>
                <Button size="sm" className="rounded-full gap-2 bg-[#efffba] text-black hover:bg-black hover:text-white transition-colors px-4">
                  <LogOut className="w-4 h-4" />
                  <span className="hidden sm:block">Logout</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Analytics Header Section with Background */}
      <section className="relative bg-gradient-to-r from-slate-900 to-blue-900 text-white px-6 py-20 pt-32 content-section-alternate" style={{backgroundImage: "url('/yianni-mathioudakis-clhGuYYPJpE-unsplash.jpg')", backgroundSize: "cover", backgroundPosition: "center"}}>
        <div className="absolute inset-0 bg-[#48768c]/80"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Welcome Text */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold">Welcome back, Dr. {expert.name.split(' ')[1]}!</h1>
          </div>

          {/* Analytics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-start">
            {/* Monthly Earnings */}
            <Card className="border-0 bg-white/95 backdrop-blur-sm hover:bg-white hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer force-black-text">
              <CardContent className="p-4">
                <div className="flex gap-4 h-20">
                  <div className="flex items-center justify-center w-12 h-12 bg-emerald-50 rounded-lg flex-shrink-0 self-center">
                    <DollarSign className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex-1">
                      <p className="text-2xl font-bold analytics-number">${stats.thisMonth.earnings.toLocaleString()}</p>
                      <p className="text-sm font-medium force-gray-text">Monthly Earnings</p>
                    </div>
                    <div className="h-8 w-full mt-auto">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={earningsData}>
                          <Line dataKey="earnings" stroke="#86efac" strokeWidth={2} dot={false} />
                        </LineChart>
                      </ResponsiveContainer>
                      <div className="w-full h-px bg-gray-200"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Average Sessions */}
            <Card className="border-0 bg-white/95 backdrop-blur-sm hover:bg-white hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer force-black-text">
              <CardContent className="p-4">
                <div className="flex gap-4 h-20">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-50 rounded-lg flex-shrink-0 self-center">
                    <BookOpen className="w-6 h-6 text-blue-500" />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex-1">
                      <p className="text-2xl font-bold analytics-number">12</p>
                      <p className="text-sm font-medium force-gray-text">Average Sessions</p>
                    </div>
                    <div className="h-8 w-full mt-auto">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={sessionsData}>
                          <Bar dataKey="sessions" fill="#8bb8ff" radius={[2, 2, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                      <div className="w-full h-px bg-gray-200"></div>
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
                      <p className="text-2xl font-bold analytics-number">{stats.thisMonth.rating}</p>
                      <p className="text-sm font-medium force-gray-text">Average Rating</p>
                    </div>
                    <div className="flex gap-1 mt-auto">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className={`w-3 h-3 ${star <= Math.floor(stats.thisMonth.rating) ? 'fill-amber-300 text-amber-300' : 'text-gray-300'}`} />
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
      <div className="max-w-7xl mx-auto flex gap-6 p-6">
        {/* Sidebar */}
        <div className="w-80 space-y-6">
          {/* Expert Profile Card */}
          <Card className="border border-gray-200 hover:shadow-lg transition-all duration-300 rounded-xl">
            <CardContent className="p-4">
              <div className="flex gap-4 mb-4">
                <div className="relative">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={expert.avatar} alt={expert.name} />
                    <AvatarFallback className="text-lg">{getInitials(expert.name)}</AvatarFallback>
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
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-lg">{expert.name}</h3>
                    {expert.verified && (
                      <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                        <svg viewBox="0 0 24 24" className="w-5 h-5">
                          <g>
                            <path d="M12 1.5c-.5 0-1 .2-1.4.6L9.2 3.5c-.3.3-.7.4-1.1.4H6.5c-.8 0-1.5.7-1.5 1.5v1.6c0 .4-.1.8-.4 1.1L3.2 9.5c-.8.8-.8 2 0 2.8l1.4 1.4c.3.3.4.7.4 1.1V16.5c0 .8.7 1.5 1.5 1.5h1.6c.4 0 .8.1 1.1.4l1.4 1.4c.8.8 2 .8 2.8 0l1.4-1.4c.3-.3.7-.4 1.1-.4h1.6c.8 0 1.5-.7 1.5-1.5v-1.6c0-.4.1-.8.4-1.1l1.4-1.4c.8-.8.8-2 0-2.8l-1.4-1.4c-.3-.3-.4-.7-.4-1.1V5.5c0-.8-.7-1.5-1.5-1.5h-1.6c-.4 0-.8-.1-1.1-.4L13.4 2.1c-.4-.4-.9-.6-1.4-.6z" fill="#1d9bf0"/>
                            <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                          </g>
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="space-y-1 text-xs">
                    <div className="flex items-center gap-2">
                      <Mail className="w-3 h-3 text-muted-foreground" />
                      <span className="text-muted-foreground truncate">{expert.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-3 h-3 text-muted-foreground" />
                      <span className="text-muted-foreground">{expert.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3 h-3 text-muted-foreground" />
                      <span className="text-muted-foreground">{expert.location}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 fill-black text-black" />
                  <span className="font-medium">{stats.thisMonth.rating}</span>
                  <span className="text-xs text-muted-foreground">({stats.thisMonth.sessions})</span>
                </div>
                <Badge variant="outline" className="text-xs border-yellow-500 text-yellow-600 bg-yellow-50 px-2 py-1 rounded-full inline-flex items-center gap-1">
                  <Crown className="w-3 h-3" />
                  Top Expert
                </Badge>
              </div>
              
              
              <div className="space-y-3 text-xs">
                <div>
                  <h4 className="font-medium mb-1 text-sm">Professional Title</h4>
                  <p className="text-muted-foreground">{expert.title}</p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-1 text-sm">Bio</h4>
                  <p className="text-muted-foreground">{expert.bio}</p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-1 text-sm">Expertise</h4>
                  <p className="text-muted-foreground">{expert.specialization}</p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-1 text-sm">Industries</h4>
                  <p className="text-muted-foreground">{expert.industry}</p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-1 text-sm">Hourly Rate</h4>
                  <p className="text-muted-foreground font-medium">${expert.hourlyRate}/hour</p>
                </div>
              </div>
              
              <div className="space-y-2 mt-4">
                <Button 
                  className="w-full rounded-full bg-[#efffba] text-black hover:bg-black hover:text-white transition-colors text-sm"
                  onClick={() => setShowSettings(true)}
                >
                  <Settings className="w-3 h-3 mr-2" />
                  Profile & Payment Settings
                </Button>
                
                <Button 
                  variant="outline"
                  className="w-full rounded-full text-sm border border-gray-300 hover:bg-gray-50"
                >
                  <Eye className="w-3 h-3 mr-2" />
                  View Public Profile
                </Button>
              </div>
            </CardContent>
          </Card>

        </div>
        
        {/* Main Content Area */}
        <div className="flex-1">
          {/* Navigation Tabs */}
          <div className="border-b mb-6">
            <div className="flex space-x-8">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 ${
                    activeTab === tab.id
                      ? 'border-foreground text-foreground'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
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
          
          {/* Content */}
          {activeTab === 'upcoming' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingSessions.map((session) => (
                <Card 
                  key={session.id} 
                  className="group hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 hover:border-foreground cursor-pointer h-full relative"
                  onClick={() => {
                    setSelectedSession(session)
                    setSelectedSessionType('upcoming')
                    setSessionDetailTab('chat')
                    setShowSessionDetail(true)
                  }}
                >
                  {/* Client Photo Header */}
                  <div className="relative h-32 overflow-hidden rounded-t-lg bg-gray-100">
                    <img 
                      src={session.avatar} 
                      alt={session.clientName}
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
                    <div className="flex-1 space-y-4 text-left">
                      {/* Rating and Verification Row */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-black text-black" />
                            <span className="text-sm font-medium">{session.rating}</span>
                          </div>
                          <span className="text-xs text-muted-foreground">
                            ({session.reviewCount})
                          </span>
                        </div>
                      </div>

                      {/* Client Name and Title */}
                      <div>
                        <h3 className="font-semibold text-base leading-tight text-left">
                          {session.clientName}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-1 text-left">
                          {session.clientTitle}
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
                              className="rounded-full px-3 py-1 text-xs h-8 flex-1"
                            >
                              Start Session
                            </Button>
                          ) : (
                            <Button 
                              size="sm" 
                              variant="outline"
                              className="rounded-full px-3 py-1 text-xs h-8 flex-1 border-2 border-gray-300 text-gray-400 bg-gray-100 cursor-not-allowed"
                              onClick={(e) => {
                                e.stopPropagation()
                                setShowPaymentMessage(true)
                              }}
                            >
                              Payment Required
                            </Button>
                          )}
                          
                          <Button 
                            size="sm" 
                            variant="outline"
                            className="rounded-full border-2 border-foreground px-3 py-1 text-xs h-8"
                          >
                            View
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))})
            </div>
          )}
          
          {activeTab === 'past' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastSessions.map((session) => (
                <Card 
                  key={session.id} 
                  className="group hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 hover:border-foreground cursor-pointer h-full relative"
                  onClick={() => {
                    setSelectedSession(session)
                    setSelectedSessionType('past')
                    setSessionDetailTab('summary')
                    setShowSessionDetail(true)
                  }}
                >
                  {/* Client Photo Header */}
                  <div className="relative h-32 overflow-hidden rounded-t-lg bg-gray-100">
                    <img 
                      src={session.avatar} 
                      alt={session.clientName}
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
                    <div className="flex-1 space-y-4 text-left">
                      {/* Rating and Verification Row */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-black text-black" />
                            <span className="text-sm font-medium">{session.clientRating}</span>
                          </div>
                          <span className="text-xs text-muted-foreground">
                            ({session.reviewCount})
                          </span>
                        </div>
                      </div>

                      {/* Client Name and Title */}
                      <div>
                        <h3 className="font-semibold text-base leading-tight text-left">
                          {session.clientName}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-1 text-left">
                          {session.clientTitle}
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
                          {session.clientRatedUs ? (
                            <>
                              <span>Client rating:</span>
                              <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star 
                                    key={i} 
                                    className={`w-3 h-3 ${i < session.clientRatedUs ? 'fill-black text-black' : 'text-gray-300'}`} 
                                  />
                                ))}
                              </div>
                            </>
                          ) : (
                            <span className="text-orange-600">Waiting for client rating</span>
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
                            className="rounded-full px-3 py-1 text-xs h-8 flex-1"
                            onClick={() => console.log(`Contact ${session.clientName} again`)}
                          >
                            💰 Earned {session.cost}
                          </Button>
                          
                          <div className="relative">
                            <Button 
                              size="sm" 
                              variant="outline"
                              className="rounded-full border-2 border-foreground px-3 py-1 text-xs h-8"
                            >
                              View
                            </Button>
                            {!session.clientRatedUs && (
                              <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))})
            </div>
          )}
          
          
          {activeTab === 'meetings' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">All Meetings</h2>
                <div className="flex gap-2">
                  <Button 
                    variant={activeTab === 'meetings' ? 'default' : 'outline'} 
                    size="sm"
                    className="rounded-full"
                  >
                    Upcoming meeting
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="rounded-full"
                  >
                    Completed meeting
                  </Button>
                </div>
              </div>

              {/* All Meetings Table */}
              <Card className="border-2">
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="border-b">
                        <tr className="text-left">
                          <th className="p-4 text-sm font-medium text-muted-foreground">Name</th>
                          <th className="p-4 text-sm font-medium text-muted-foreground">Email</th>
                          <th className="p-4 text-sm font-medium text-muted-foreground">Date</th>
                          <th className="p-4 text-sm font-medium text-muted-foreground">Time</th>
                          <th className="p-4 text-sm font-medium text-muted-foreground">Duration</th>
                          <th className="p-4 text-sm font-medium text-muted-foreground">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {upcomingSessions.concat(pastSessions.map(session => ({
                          ...session,
                          clientName: session.clientName,
                          clientTitle: session.clientTitle,
                          date: session.date,
                          time: '10:00 AM',
                          duration: session.duration,
                          email: `${session.clientName.toLowerCase().replace(' ', '.')}@email.com`
                        }))).map((session, index) => (
                          <tr key={index} className="border-b hover:bg-gray-50">
                            <td className="p-4">
                              <div>
                                <div className="font-medium text-sm">{session.clientName}</div>
                              </div>
                            </td>
                            <td className="p-4 text-sm text-muted-foreground">
                              {session.email || `${session.clientName.toLowerCase().replace(' ', '.')}@email.com`}
                            </td>
                            <td className="p-4 text-sm">{session.date}</td>
                            <td className="p-4 text-sm">{session.time}</td>
                            <td className="p-4 text-sm">{session.duration}</td>
                            <td className="p-4">
                              <Button 
                                size="sm" 
                                className="text-green-600 hover:text-green-700 bg-transparent hover:bg-green-50 border-none shadow-none p-2"
                              >
                                Join →
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  {/* Pagination */}
                  <div className="flex items-center justify-between px-4 py-4 border-t">
                    <div className="text-sm text-muted-foreground">
                      Total: {upcomingSessions.length + pastSessions.length}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">Lines per page</span>
                      <select className="border rounded px-2 py-1 text-sm">
                        <option>10</option>
                        <option>25</option>
                        <option>50</option>
                      </select>
                      <div className="flex items-center gap-1">
                        <Button variant="outline" size="sm" disabled>
                          ←
                        </Button>
                        <Button variant="default" size="sm" className="bg-green-500 hover:bg-green-600">
                          1
                        </Button>
                        <Button variant="outline" size="sm">
                          2
                        </Button>
                        <span className="text-sm px-2">...</span>
                        <Button variant="outline" size="sm">
                          4
                        </Button>
                        <Button variant="outline" size="sm">
                          5
                        </Button>
                        <Button variant="outline" size="sm">
                          →
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Reviews</h2>
              
              <div className="grid grid-cols-2 gap-6">
                {/* Total Reviews */}
                <Card className="border-2">
                  <CardContent className="p-6">
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Total Reviews</h3>
                    <div className="text-3xl font-bold text-green-600 mb-1">160</div>
                    <p className="text-sm text-muted-foreground">Number of reviews of all time</p>
                  </CardContent>
                </Card>

                {/* Average Ratings */}
                <Card className="border-2">
                  <CardContent className="p-6">
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Average ratings</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-3xl font-bold text-green-600">4.8</span>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < 4 ? 'fill-green-500 text-green-500' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Rating Breakdown */}
              <Card className="border-2">
                <CardContent className="p-6">
                  <h3 className="font-medium mb-4">Rating Breakdown</h3>
                  <div className="space-y-3">
                    {[
                      { stars: 5, count: 120, percentage: 75 },
                      { stars: 4, count: 25, percentage: 16 },
                      { stars: 3, count: 7, percentage: 4 },
                      { stars: 2, count: 5, percentage: 3 },
                      { stars: 1, count: 3, percentage: 2 }
                    ].map((rating) => (
                      <div key={rating.stars} className="flex items-center gap-4">
                        <div className="flex items-center gap-1 w-12">
                          <Star className="w-3 h-3 fill-green-500 text-green-500" />
                          <span className="text-sm">{rating.stars}</span>
                        </div>
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-green-500 rounded-full" 
                            style={{ width: `${rating.percentage}%` }}
                          />
                        </div>
                        <span className="text-sm text-muted-foreground w-8">{rating.count}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Review from users */}
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Review from users</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="border-b">
                        <tr className="text-left">
                          <th className="p-4 text-sm font-medium text-muted-foreground">Name</th>
                          <th className="p-4 text-sm font-medium text-muted-foreground">Ratings & Reviews</th>
                          <th className="p-4 text-sm font-medium text-muted-foreground">Date</th>
                          <th className="p-4 text-sm font-medium text-muted-foreground">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            name: 'Harry Brooks',
                            email: 'brooks@gmail.com',
                            rating: 5,
                            review: 'The session was extremely insightful. The expert broke down complex topics into simple, actionable steps.',
                            date: '3rd Sep 2025',
                            avatar: '/api/placeholder/40/40'
                          },
                          {
                            name: 'Isabella Grace Harrington',
                            email: 'isabell209@gmail.com',
                            rating: 4,
                            review: 'I really appreciated the patience and clarity. I left the call with a clear roadmap.',
                            date: '4th Sep 2025',
                            avatar: '/api/placeholder/40/40'
                          },
                          {
                            name: 'Sophia Martinez',
                            email: 'martinez999@gmail.com',
                            rating: 4,
                            review: 'Highly professional and knowledgeable. Definitely booking another session soon.',
                            date: '5th Sep 2025',
                            avatar: '/api/placeholder/40/40'
                          },
                          {
                            name: 'Robin Grace Harrington',
                            email: 'grace007@gmail.com',
                            rating: 4,
                            review: 'Felt like talking to a mentor who genuinely cared about my growth.',
                            date: '5th Sep 2025',
                            avatar: '/api/placeholder/40/40'
                          },
                          {
                            name: 'Emily Carter',
                            email: 'emily456@gmail.com',
                            rating: 3,
                            review: 'The expert gave me practical advice that I could apply the same day.',
                            date: '6th Sep 2025',
                            avatar: '/api/placeholder/40/40'
                          },
                          {
                            name: 'Sophie Grace Harrington',
                            email: 'sophie889@gmail.com',
                            rating: 3,
                            review: 'Super easy to understand and very encouraging throughout the session.',
                            date: '6th Sep 2025',
                            avatar: '/api/placeholder/40/40'
                          }
                        ].map((review, index) => (
                          <tr key={index} className="border-b hover:bg-gray-50">
                            <td className="p-4">
                              <div className="flex items-center gap-3">
                                <Avatar className="w-10 h-10">
                                  <AvatarImage src={review.avatar} alt={review.name} />
                                  <AvatarFallback>{getInitials(review.name)}</AvatarFallback>
                                </Avatar>
                                <div>
                                  <div className="font-medium text-sm">{review.name}</div>
                                  <div className="text-xs text-muted-foreground">{review.email}</div>
                                </div>
                              </div>
                            </td>
                            <td className="p-4 max-w-md">
                              <div className="flex items-center gap-1 mb-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star 
                                    key={i} 
                                    className={`w-3 h-3 ${i < review.rating ? 'fill-green-500 text-green-500' : 'text-gray-300'}`} 
                                  />
                                ))}
                                <span className="text-sm font-medium ml-1">{review.rating}</span>
                              </div>
                              <p className="text-sm text-muted-foreground">{review.review}</p>
                            </td>
                            <td className="p-4 text-sm">{review.date}</td>
                            <td className="p-4">
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm" className="w-8 h-8 p-0">
                                  <Eye className="w-4 h-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  {/* Pagination */}
                  <div className="flex items-center justify-between px-4 py-4 border-t">
                    <div className="text-sm text-muted-foreground">
                      Total: 6
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">Lines per page</span>
                      <select className="border rounded px-2 py-1 text-sm">
                        <option>10</option>
                        <option>25</option>
                        <option>50</option>
                      </select>
                      <div className="flex items-center gap-1">
                        <Button variant="outline" size="sm" disabled>
                          ←
                        </Button>
                        <Button variant="default" size="sm" className="bg-green-500 hover:bg-green-600">
                          1
                        </Button>
                        <Button variant="outline" size="sm">
                          2
                        </Button>
                        <span className="text-sm px-2">...</span>
                        <Button variant="outline" size="sm">
                          4
                        </Button>
                        <Button variant="outline" size="sm">
                          5
                        </Button>
                        <Button variant="outline" size="sm">
                          →
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === 'analytics_disabled' && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Analytics</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="text-lg">Revenue Trend</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer config={{ earnings: { color: '#10b981' } }} className="h-48">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={earningsData}>
                          <XAxis dataKey="month" />
                          <YAxis />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Line 
                            type="monotone" 
                            dataKey="earnings" 
                            stroke="#10b981" 
                            strokeWidth={3}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                </Card>
                
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="text-lg">Session Volume</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer config={{ sessions: { color: '#3b82f6' } }} className="h-48">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={sessionsData}>
                          <XAxis dataKey="month" />
                          <YAxis />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Bar dataKey="sessions" fill="#3b82f6" radius={4} />
                        </BarChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {activeTab === 'billing_disabled' && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Billing & Payouts</h2>
              
              {/* Verification Status */}
              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="p-4 border rounded-lg bg-yellow-50 border-yellow-200">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertCircle className="w-4 h-4 text-yellow-600" />
                      <span className="font-medium text-sm text-yellow-800">Verification Pending</span>
                    </div>
                    <p className="text-xs text-yellow-700 mb-2">
                      Your bank details are being verified. This usually takes 1-2 business days.
                    </p>
                    <Button variant="outline" size="sm" className="text-xs border-yellow-300 text-yellow-700">
                      View Status
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Bank Details */}
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle>Bank Account</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="p-3 border rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-sm">Chase Bank</p>
                          <p className="text-xs text-muted-foreground">••••••4242</p>
                          <p className="text-xs text-muted-foreground">Routing: ••••••1234</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <Shield className="w-4 h-4 text-yellow-500" />
                          <span className="text-xs text-yellow-600">Pending</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full mt-4 text-sm">
                      <Edit className="w-4 h-4 mr-2" />
                      Update Bank Details
                    </Button>
                  </CardContent>
                </Card>
                
                {/* Payout Schedule */}
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle>Payout Schedule</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="p-3 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm">Next Payout</span>
                        <span className="font-medium text-sm">$2,640</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">Expected Date</span>
                        <span className="text-xs text-muted-foreground">April 1, 2024</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Recent Payments */}
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Recent Payments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded border">
                      <div>
                        <p className="font-medium text-sm">Payout #PAY-001</p>
                        <p className="text-xs text-muted-foreground">Mar 1, 2024 • $2,140</p>
                      </div>
                      <Badge variant="secondary" className="text-xs bg-green-100 text-green-700">
                        Completed
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded border">
                      <div>
                        <p className="font-medium text-sm">Payout #PAY-002</p>
                        <p className="text-xs text-muted-foreground">Feb 1, 2024 • $1,880</p>
                      </div>
                      <Badge variant="secondary" className="text-xs bg-green-100 text-green-700">
                        Completed
                      </Badge>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4 text-sm">
                    <Receipt className="w-4 h-4 mr-2" />
                    View All Payments
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}
          
        </div>
      </div>

      {/* Expert Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-6xl max-h-[90vh] overflow-hidden">
            {/* Settings Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-xl font-semibold">Profile & Payment Settings</h2>
              <div className="flex items-center gap-2">
                <Button variant="outline" onClick={() => setShowSettings(false)} className="rounded-full px-4">
                  DISCARD
                </Button>
                <Button className="rounded-full px-4">SAVE</Button>
              </div>
            </div>
            
            <div className="flex">
              {/* Settings Sidebar */}
              <div className="w-64 bg-gray-50 p-6 border-r">
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-600 mb-4">SETTINGS</h3>
                </div>
                
                <nav className="space-y-2">
                  {[
                    { id: 'basic', label: 'Basic Information', icon: User },
                    { id: 'professional', label: 'Professional Profile', icon: Award },
                    { id: 'sessions', label: 'Session Types', icon: Package },
                    { id: 'availability', label: 'Availability', icon: CalendarDays },
                    { id: 'verification', label: 'Verification', icon: ShieldCheck },
                    { id: 'billing', label: 'Billing & Payments', icon: CreditCard },
                    { id: 'charity', label: 'Charity', icon: Heart }
                  ].map(tab => {
                    const Icon = tab.icon
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setSettingsTab(tab.id)}
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                          settingsTab === tab.id
                            ? 'bg-white shadow-sm font-medium'
                            : 'hover:bg-gray-100 text-gray-600'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span className="text-sm">{tab.label}</span>
                      </button>
                    )
                  })}
                </nav>
              </div>
              
              {/* Settings Content */}
              <div className="flex-1 p-6 overflow-y-auto max-h-[90vh]">
                {settingsTab === 'basic' && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold">Basic Information</h3>
                    
                    {/* Profile Picture Upload */}
                    <div className="flex flex-col items-center space-y-4">
                      <div className="relative">
                        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center border-2 border-dashed border-gray-300 hover:border-gray-400 transition-colors">
                          <User className="w-8 h-8 text-gray-400" />
                        </div>
                        <button className="absolute -bottom-1 -right-1 w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
                          <Edit className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-medium text-gray-700 mb-1">Update Profile Picture</p>
                        <p className="text-xs text-gray-500">JPG, PNG or GIF (max 5MB)</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">First Name</label>
                        <input 
                          type="text" 
                          defaultValue="Isabella"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Last Name</label>
                        <input 
                          type="text" 
                          defaultValue="Grace"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Email</label>
                        <input 
                          type="email" 
                          defaultValue={expert.email}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Location*</label>
                        <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900">
                          <option value="US">United States</option>
                          <option value="CA">Canada</option>
                          <option value="GB">United Kingdom</option>
                          <option value="DE">Germany</option>
                          <option value="FR">France</option>
                          <option value="AU">Australia</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Gender*</label>
                        <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900">
                          <option value="">Select gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="non-binary">Non-binary</option>
                          <option value="prefer-not-say">Prefer not to say</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Language Preference*</label>
                        <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900">
                          <option value="">Select language</option>
                          <option value="english">English</option>
                          <option value="arabic">Arabic</option>
                          <option value="both">English & Arabic</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Password</label>
                        <input 
                          type="password" 
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                          placeholder="Enter new password"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Confirm Password</label>
                        <input 
                          type="password" 
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                          placeholder="Confirm new password"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {settingsTab === 'professional' && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold">Professional Profile</h3>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">Title*</label>
                      <input 
                        type="text" 
                        defaultValue={expert.title}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                        placeholder="Founder & CEO of TechNova"
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Short Description*
                        <span className="text-xs text-gray-500 ml-2">100 characters</span>
                      </label>
                      <textarea
                        defaultValue={expert.bio}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 h-24 resize-none"
                        placeholder="Brief description of expertise..."
                        maxLength={100}
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">Industry*</label>
                      <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900">
                        <option value="">Select Industry</option>
                        <option value="business-startup">Business & Startups</option>
                        <option value="career-professional">Career & Professional</option>
                        <option value="marketing-brand">Marketing & Brand</option>
                        <option value="tech-product">Tech & Product</option>
                        <option value="wellness-mental">Wellness & Mental</option>
                        <option value="finance-investment">Finance & Investment</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Expertise* (Select multiple)</label>
                      <div className="space-y-2">
                        {['Leadership & Team Building', 'Scaling Startups', 'Fundraising & Pitching', 'Exit Strategy & M&A', 'Product Strategy', 'Market Analysis', 'Business Development', 'Strategic Planning'].map(expertise => (
                          <label
                            key={expertise}
                            className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition-all border-gray-200 hover:border-gray-400"
                          >
                            <input
                              type="checkbox"
                              className="w-4 h-4 text-gray-900 border-gray-300 rounded focus:ring-gray-900"
                              defaultChecked={expert.expertise.includes(expertise)}
                            />
                            <span className="text-sm">{expertise}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {settingsTab === 'sessions' && (
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-semibold">Session Types & Pricing</h3>
                      <p className="text-sm text-gray-600 mt-2">
                        Create the session types that clients will see when booking with you. You can always modify these later.
                      </p>
                    </div>
                    
                    {/* Structured Sessions */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium">Structured Sessions</h3>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          className="border-2 border-gray-300 hover:border-gray-900"
                        >
                          <Plus className="w-4 h-4 mr-2" />
                          Add Session
                        </Button>
                      </div>
                      <p className="text-sm text-gray-600">
                        Pre-defined consultation types with specific topics and durations
                      </p>
                      
                      <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-lg">
                        <Clock className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                        <p className="text-sm text-gray-500">No structured sessions yet</p>
                        <p className="text-xs text-gray-400">Add pre-defined consultation types</p>
                      </div>
                    </div>

                    {/* General Consultation */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">General Consultation</h3>
                      <p className="text-sm text-gray-600">
                        Open-ended consultation where clients choose the duration
                      </p>
                      
                      <Card className="border border-gray-200">
                        <CardContent className="p-4 space-y-4">
                          <div className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              defaultChecked={true}
                              className="w-4 h-4 text-gray-900 border-gray-300 rounded focus:ring-gray-900"
                            />
                            <label className="text-sm font-medium">Enable general consultation</label>
                          </div>
                          
                          <div className="space-y-3">
                            <label className="text-sm font-medium block">Set pricing for each duration:</label>
                            {[
                              { duration: '15 min', price: '500' },
                              { duration: '30 min', price: '1000' },
                              { duration: '45 min', price: '1500' },
                              { duration: '60 min', price: '2000' }
                            ].map((duration) => (
                              <div key={duration.duration} className="flex items-center gap-4">
                                <span className="text-sm w-16">{duration.duration}</span>
                                <div className="flex items-center">
                                  <span className="text-lg font-medium mr-2">$</span>
                                  <input
                                    type="number"
                                    defaultValue={duration.price}
                                    className="w-24 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-center"
                                    placeholder="500"
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Platform Fee Info */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-sm mb-2">Platform Fee</h4>
                      <p className="text-xs text-gray-600">
                        TapTime charges a 20% platform fee on all sessions. This includes payment processing, support, and platform maintenance.
                      </p>
                    </div>
                  </div>
                )}

                {settingsTab === 'availability' && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold">Set Your Availability</h3>
                    
                    <div className="flex flex-col items-center justify-center py-12">
                      <Calendar className="w-16 h-16 text-gray-400 mb-4" />
                      <h3 className="text-lg font-medium mb-2">Connect with Calendly</h3>
                      <p className="text-sm text-gray-600 mb-6 text-center">
                        Sync your availability with Calendly to manage your booking schedule
                      </p>
                      <Button 
                        variant="outline" 
                        className="border-2 border-gray-300 hover:border-gray-900 px-6"
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        Connect Calendly
                      </Button>
                    </div>
                  </div>
                )}

                {settingsTab === 'verification' && (
                  <div className="space-y-8">
                    <h3 className="text-xl font-semibold">Verification</h3>
                    
                    {/* Main Verification Header */}
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Check className="w-8 h-8 text-green-600" />
                      </div>
                      <h2 className="text-2xl font-semibold text-green-700 mb-3">Get Verified on Taptime</h2>
                      <p className="text-gray-600 max-w-md mx-auto">
                        Show your audience you're real. Share your booking link, tag us, and we'll verify you fast.
                      </p>
                    </div>

                    {/* Steps Section */}
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h4 className="font-medium text-lg mb-6">Follow the steps to get verified</h4>
                      
                      <div className="space-y-6">
                        <div className="flex gap-4">
                          <span className="text-sm font-semibold text-green-600 min-w-[60px]">Step 1:</span>
                          <span className="text-sm text-gray-700">
                            Add your booking link in at least one social media channel - LinkedIn / X / Threads / TikTok / Instagram
                          </span>
                        </div>
                        
                        <hr className="border-gray-200" />
                        
                        <div className="flex gap-4">
                          <span className="text-sm font-semibold text-green-600 min-w-[60px]">Step 2:</span>
                          <span className="text-sm text-gray-700">
                            Tag us @taptime.ai
                          </span>
                        </div>
                        
                        <hr className="border-gray-200" />
                        
                        <div className="flex gap-4">
                          <span className="text-sm font-semibold text-green-600 min-w-[60px]">Step 3:</span>
                          <span className="text-sm text-gray-700">
                            You will be verified within 72 hours
                          </span>
                        </div>
                        
                        <hr className="border-gray-200" />
                        
                        <div className="flex gap-4">
                          <span className="text-sm font-semibold text-green-600 min-w-[60px]">Step 4:</span>
                          <span className="text-sm text-gray-700">
                            Share your post here
                          </span>
                        </div>
                        
                        <div className="mt-6">
                          <input 
                            type="url" 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900" 
                            placeholder="Paste your post link here..."
                          />
                        </div>
                        
                        <div className="flex justify-end pt-4">
                          <Button className="bg-green-600 hover:bg-green-700 text-white px-6">
                            Submit for Verification
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {settingsTab === 'billing' && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold">Billing & Payments</h3>
                    
                    {/* Payment Overview */}
                    <div className="space-y-6">
                      <h4 className="text-lg font-medium">Payment Overview</h4>
                      
                      {/* Current Balance Card */}
                      <div className="bg-white border-2 border-gray-200 rounded-lg p-6 max-w-sm">
                        <div className="border-b border-gray-200 pb-3 mb-3">
                          <h5 className="text-sm text-gray-600">Current Balance</h5>
                        </div>
                        <div className="text-3xl font-bold text-green-600 mb-2">$800</div>
                        <div className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded inline-block">
                          Sufficient Balance. You can withdraw now
                        </div>
                      </div>
                      
                      {/* Tab Navigation */}
                      <div className="flex gap-2">
                        {[
                          { id: 'payment', label: 'Payment Details' },
                          { id: 'withdrawal', label: 'Withdrawal request' },
                          { id: 'history', label: 'Withdrawal history' }
                        ].map(tab => (
                          <button
                            key={tab.id}
                            onClick={() => setBillingTab(tab.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                              billingTab === tab.id
                                ? 'bg-gray-900 text-white'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                          >
                            {tab.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Payment Details Tab */}
                    {billingTab === 'payment' && (
                      <div className="space-y-6">
                        <h4 className="text-lg font-medium">Bank information</h4>
                        
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="text-sm font-medium mb-2 block">Bank account*</label>
                              <input 
                                type="text" 
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                                placeholder="0000 0000 0000 0000"
                              />
                            </div>
                            <div>
                              <label className="text-sm font-medium mb-2 block">Account Number*</label>
                              <input 
                                type="text" 
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                                placeholder="0000 0000 0000 0000"
                              />
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="text-sm font-medium mb-2 block">IBAN</label>
                              <input 
                                type="text" 
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                                placeholder="Type here..."
                              />
                            </div>
                            <div>
                              <label className="text-sm font-medium mb-2 block">Bank Name</label>
                              <input 
                                type="text" 
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                                placeholder="Type here..."
                              />
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-3 gap-4">
                            <div>
                              <label className="text-sm font-medium mb-2 block">Routing Number</label>
                              <input 
                                type="text" 
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                                placeholder="City"
                              />
                            </div>
                            <div>
                              <label className="text-sm font-medium mb-2 block">Branch</label>
                              <input 
                                type="text" 
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                                placeholder="State"
                              />
                            </div>
                            <div>
                              <label className="text-sm font-medium mb-2 block">Country</label>
                              <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900">
                                <option>Select Country</option>
                                <option>United States</option>
                                <option>Canada</option>
                                <option>United Kingdom</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Withdrawal Request Tab */}
                    {billingTab === 'withdrawal' && (
                      <div className="space-y-6">
                        <h4 className="text-lg font-medium">Withdrawal Details</h4>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium mb-2 block">Amount to Withdraw*</label>
                            <input 
                              type="text" 
                              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                              placeholder="Type Here..."
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium mb-2 block">Payment method*</label>
                            <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900">
                              <option>Bank transfer</option>
                              <option>PayPal</option>
                              <option>UPI</option>
                            </select>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium mb-2 block">Account Details Preview</label>
                            <button className="w-full p-3 border border-gray-300 rounded-lg text-left hover:bg-gray-50 flex items-center justify-between">
                              <span>Update Payment Information</span>
                              <ArrowRight className="w-4 h-4" />
                            </button>
                          </div>
                          <div>
                            <label className="text-sm font-medium mb-2 block">Notes (Optional)</label>
                            <textarea 
                              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 h-12 resize-none"
                              placeholder="Type here..."
                            />
                          </div>
                        </div>
                        
                        <div className="flex justify-end">
                          <Button className="bg-green-600 hover:bg-green-700 text-white px-6">
                            Request Withdrawal
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* Withdrawal History Tab */}
                    {billingTab === 'history' && (
                      <div className="space-y-6">
                        <h4 className="text-lg font-medium">Recent Transactions</h4>
                        
                        <div className="overflow-x-auto">
                          <table className="w-full">
                            <thead className="border-b border-gray-200">
                              <tr className="text-left">
                                <th className="py-3 text-sm font-medium text-gray-700">Transaction ID</th>
                                <th className="py-3 text-sm font-medium text-gray-700">Date</th>
                                <th className="py-3 text-sm font-medium text-gray-700">Amount</th>
                                <th className="py-3 text-sm font-medium text-gray-700">Payment Method</th>
                                <th className="py-3 text-sm font-medium text-gray-700">Reference/UTR No.</th>
                                <th className="py-3 text-sm font-medium text-gray-700">Actions</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                              {[
                                { id: 'TXN-001', date: '22 Sep 2025', amount: '₹5,000', method: 'Bank Transfer', ref: 'UTR12345' },
                                { id: 'TXN-002', date: '19 Sep 2025', amount: '₹2,500', method: 'PayPal', ref: 'UTR98765' },
                                { id: 'TXN-003', date: '15 Sep 2025', amount: '₹7,200', method: 'UPI (GPay)', ref: 'UTR12345' },
                                { id: 'TXN-004', date: '12 Sep 2025', amount: '₹10,000', method: 'Bank Transfer', ref: 'UTR98765' },
                                { id: 'TXN-005', date: '10 Sep 2025', amount: '₹3,000', method: 'Payoneer', ref: 'UTR12345' }
                              ].map((transaction) => (
                                <tr key={transaction.id} className="hover:bg-gray-50">
                                  <td className="py-3 text-sm">{transaction.id}</td>
                                  <td className="py-3 text-sm">{transaction.date}</td>
                                  <td className="py-3 text-sm font-medium">{transaction.amount}</td>
                                  <td className="py-3 text-sm">{transaction.method}</td>
                                  <td className="py-3 text-sm">{transaction.ref}</td>
                                  <td className="py-3">
                                    <div className="flex gap-2">
                                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                        <Eye className="w-4 h-4" />
                                      </Button>
                                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                        <Download className="w-4 h-4" />
                                      </Button>
                                    </div>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {settingsTab === 'charity' && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold">Charity Support</h3>
                    <p className="text-sm text-gray-600">
                      Inspire others by supporting a cause you love (You'll manage donations directly — TapTime doesn't handle transactions.)
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Charity Name</label>
                        <input 
                          type="text" 
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                          placeholder="Enter charity name"
                        />
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium mb-2 block">Charity Website URL</label>
                        <input 
                          type="url" 
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                          placeholder="https://charity-website.org"
                        />
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="flex justify-end gap-3 mt-8 pt-6 border-t">
                  <Button variant="outline" onClick={() => setShowSettings(false)}>
                    Cancel
                  </Button>
                  <Button>
                    Save Changes
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Verification Modal */}
      {showVerificationModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="w-full max-w-md mx-4 border-2 border-foreground">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle>Get Verified on Taptime</CardTitle>
              <p className="text-sm text-muted-foreground">
                Show your audience you're real. Share your booking link, tag us, and we'll verify you fast.
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium mb-4">Follow the steps for get verified</h3>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <span className="text-sm font-medium text-green-600">Step 1:</span>
                    <span className="text-sm">Add your booking link in atleast one social media channel - LinkedIn / X / Threads / TikTok / Instagram</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-sm font-medium text-green-600">Step 2:</span>
                    <span className="text-sm">Tag us @taptime.ai</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-sm font-medium text-green-600">Step 3:</span>
                    <span className="text-sm">You will be verified within 72 hours</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-sm font-medium text-green-600">Step 4:</span>
                    <span className="text-sm">Share your post here - INPUT LINK FIELD</span>
                  </div>
                </div>
              </div>
              
              <div>
                <input 
                  type="url" 
                  className="w-full p-3 border-2 border-gray-200 rounded-lg" 
                  placeholder="Paste Here..."
                />
              </div>
              
              <div className="flex gap-3 pt-4">
                <Button 
                  variant="outline" 
                  className="flex-1 border-2 border-foreground"
                  onClick={() => setShowVerificationModal(false)}
                >
                  Cancel
                </Button>
                <Button 
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white"
                  onClick={() => setShowVerificationModal(false)}
                >
                  Get Verified
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

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
                    onClick={() => setSessionDetailTab('details')}
                    className={`pb-2 px-1 text-sm font-medium border-b-2 transition-colors ${
                      sessionDetailTab === 'details'
                        ? 'border-foreground text-foreground'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Details
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
                {/* Client Info with Photo */}
                <div 
                  className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                  onClick={() => console.log(`View ${selectedSession.clientName} profile`)}
                >
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={selectedSession.avatar} alt={selectedSession.clientName} />
                    <AvatarFallback>{getInitials(selectedSession.clientName)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm truncate">{selectedSession.clientName}</h4>
                    <p className="text-xs text-muted-foreground truncate">{selectedSession.clientLocation}</p>
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

                {/* Earnings */}
                <div className="border-t my-3" />
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm">Session fee</span>
                    <span className="text-sm">{selectedSession.cost}</span>
                  </div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm">Platform fee</span>
                    <span className="text-sm">-$5</span>
                  </div>
                  <div className="border-t my-2" />
                  <div className="flex justify-between items-center font-semibold">
                    <span>Your Earnings</span>
                    <span className="text-green-600">${parseInt(selectedSession.cost.replace('$', '')) - 5}</span>
                  </div>
                </div>

                {/* Actions based on session status */}
                <div className="border-t my-3" />
                {selectedSessionType === 'upcoming' ? (
                  <div className="space-y-3">
                    {/* Primary Action - Start Session */}
                    <Button className="w-full rounded-full bg-black hover:bg-gray-800 text-white py-3 text-base font-semibold">
                      <Video className="w-5 h-5 mr-2" />
                      Start Session
                    </Button>
                    
                    {/* Secondary Actions */}
                    <div className="grid grid-cols-2 gap-3">
                      <Button 
                        variant="outline" 
                        className="rounded-full border-2 border-foreground"
                      >
                        Reschedule
                      </Button>
                      <Button 
                        variant="outline" 
                        className="rounded-full border-2 border-orange-500 text-orange-600 hover:bg-orange-50"
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
                      onClick={() => console.log(`Contact ${selectedSession.clientName} again`)}
                    >
                      Contact Again
                    </Button>
                    
                    {selectedSession.clientRatedUs ? (
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <p className="text-sm text-muted-foreground mb-2">Client Rating</p>
                        <div className="flex justify-center gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star 
                              key={star}
                              className={`h-4 w-4 ${
                                star <= selectedSession.clientRatedUs 
                                  ? 'fill-yellow-400 text-yellow-400' 
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="text-center p-3 bg-orange-50 rounded-lg">
                        <p className="text-sm text-orange-600">Waiting for client rating</p>
                      </div>
                    )}
                  </div>
                )}
                </div>
                )}

                {sessionDetailTab === 'details' && (
                  <div className="space-y-4">
                    {/* Challenge Description */}
                    <div>
                      <h5 className="font-medium text-sm mb-3">What specific challenge would you like to discuss?</h5>
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-700 leading-relaxed">
                          Our product roadmap feels scattered and we're struggling to prioritize features based on actual customer impact. We have multiple stakeholders with conflicting opinions and need a framework for making strategic decisions that align with business goals.
                        </p>
                      </div>
                    </div>

                    {/* Supporting Documents */}
                    <div>
                      <h5 className="font-medium text-sm mb-3">Supporting Documents</h5>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                          <FileText className="w-4 h-4 text-red-600 flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-sm truncate">Current_Product_Roadmap_Q1_2024.pdf</div>
                            <div className="text-xs text-muted-foreground">2.3 MB</div>
                          </div>
                          <Button 
                            size="sm" 
                            variant="outline"
                            className="rounded-full border-2 border-foreground px-3 py-1 text-xs h-8 flex-shrink-0"
                            onClick={() => console.log('Download Current_Product_Roadmap_Q1_2024.pdf')}
                          >
                            <Download className="w-3 h-3 mr-1" />
                            Download
                          </Button>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                          <FileText className="w-4 h-4 text-red-600 flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-sm truncate">Customer_Feedback_Analysis.pdf</div>
                            <div className="text-xs text-muted-foreground">1.8 MB</div>
                          </div>
                          <Button 
                            size="sm" 
                            variant="outline"
                            className="rounded-full border-2 border-foreground px-3 py-1 text-xs h-8 flex-shrink-0"
                            onClick={() => console.log('Download Customer_Feedback_Analysis.pdf')}
                          >
                            <Download className="w-3 h-3 mr-1" />
                            Download
                          </Button>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                          <FileText className="w-4 h-4 text-red-600 flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-sm truncate">Competitive_Analysis_Report.pdf</div>
                            <div className="text-xs text-muted-foreground">3.1 MB</div>
                          </div>
                          <Button 
                            size="sm" 
                            variant="outline"
                            className="rounded-full border-2 border-foreground px-3 py-1 text-xs h-8 flex-shrink-0"
                            onClick={() => console.log('Download Competitive_Analysis_Report.pdf')}
                          >
                            <Download className="w-3 h-3 mr-1" />
                            Download
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {sessionDetailTab === 'chat' && (
                  <div className="space-y-4">
                    {/* Chat Header with Client Info */}
                    <div className="flex items-center gap-3 pb-3 border-b">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={selectedSession.avatar} alt={selectedSession.clientName} />
                        <AvatarFallback>{getInitials(selectedSession.clientName)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold text-sm">{selectedSession.clientName}</h4>
                        <p className="text-xs text-muted-foreground">{selectedSession.clientLocation}</p>
                      </div>
                    </div>

                    {selectedSessionType === 'upcoming' ? (
                      <div>
                        {/* Conversation History */}
                        <div className="space-y-3 max-h-96 overflow-y-auto">
                          {/* Previous messages */}
                          <div className="p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-sm font-medium">{selectedSession.clientName}</span>
                              <span className="text-xs text-muted-foreground">Yesterday 3:20 PM</span>
                            </div>
                            <p className="text-sm">Looking forward to our session tomorrow! I have a few questions about market strategy.</p>
                          </div>
                          
                          <div className="p-3 bg-blue-50 rounded-lg ml-6">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-sm font-medium">You</span>
                              <span className="text-xs text-muted-foreground">Yesterday 4:15 PM</span>
                            </div>
                            <p className="text-sm">Perfect! I've prepared some materials that will help with your questions. Thanks for booking with me.</p>
                          </div>
                          
                          <div className="p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-sm font-medium">{selectedSession.clientName}</span>
                              <span className="text-xs text-muted-foreground">Today 9:30 AM</span>
                            </div>
                            <p className="text-sm">Great! I've reviewed the materials you sent. Ready for our session today.</p>
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
    </div>
  )
}

export default ExpertDashboard