import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line } from 'recharts'
import ExpertCard from '@/components/common/ExpertCard'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
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
  Send,
  FileText,
  Briefcase,
  Package,
  DollarSign,
  Trash2,
  Save,
  Heart
} from 'lucide-react'

const ExpertDashboard = () => {
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
  const [paymentSubTab, setPaymentSubTab] = useState('details')
  
  // Sessions state management
  const [sessions, setSessions] = useState([])
  const [savedSessions, setSavedSessions] = useState([])
  const [editingSession, setEditingSession] = useState(null)

  // Session management functions
  const addNewSession = () => {
    const newSession = {
      id: Date.now(),
      title: '',
      duration: '15 min',
      price: '',
      description: ''
    }
    setSessions([...sessions, newSession])
    setEditingSession(newSession.id)
  }

  const updateSession = (sessionId, field, value) => {
    setSessions(sessions.map(session => 
      session.id === sessionId 
        ? { ...session, [field]: value }
        : session
    ))
  }

  const deleteSession = (sessionId) => {
    setSessions(sessions.filter(session => session.id !== sessionId))
    if (editingSession === sessionId) {
      setEditingSession(null)
    }
  }

  const saveSession = (sessionId) => {
    const sessionToSave = sessions.find(session => session.id === sessionId)
    if (sessionToSave && sessionToSave.title && sessionToSave.price) {
      setSavedSessions([...savedSessions, sessionToSave])
      setSessions(sessions.filter(session => session.id !== sessionId))
    }
  }

  const deleteSavedSession = (sessionId) => {
    setSavedSessions(savedSessions.filter(session => session.id !== sessionId))
  }

  // Handle setting primary card
  const setPrimaryCard = (cardId) => {
    setSavedCards(cards => cards.map(card => ({
      ...card,
      isPrimary: card.id === cardId
    })))
  }

  // Mock user data from onboarding
  const user = {
    firstName: 'Michael',
    lastName: 'Chen',
    email: 'michael.chen@email.com',
    phone: '+1 (555) 987-6543',
    bio: 'Helping companies build products that customers love through strategic planning and data-driven decisions.',
    location: 'San Francisco, CA',
    avatar: '/portrait-1.avif',
    memberSince: 'January 2024',
    title: 'Product Strategy Expert',
    expertise: 'Product Strategy & Leadership',
    industries: 'Technology Consulting',
    hourlyRate: '$200/hour',
    rating: 4.9,
    reviewCount: 43,
    isVerified: true,
    isTopExpert: true
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
      clientName: 'John Doe',
      clientLocation: 'San Francisco, CA',
      date: 'Tomorrow',
      time: '2:00 PM',
      duration: '60 min',
      topic: 'Product Roadmap Review',
      summary: 'Review your current product strategy and identify areas for improvement. We\'ll discuss market positioning and competitive analysis.',
      cost: '$200',
      avatar: '/portrait-3.avif',
      category: 'Strategy',
      paymentStatus: 'paid'
    }
  ]

  const pastSessions = [
    {
      id: 1,
      sessionNumber: '#5',
      clientName: 'Emily Rodriguez',
      clientLocation: 'New York, NY',
      date: 'Mar 18',
      rating: 5,
      topic: 'Design System Consultation',
      duration: '60 min',
      cost: '$180',
      feedback: 'Excellent insights on building scalable design systems. Very actionable advice.',
      hasReview: false,
      avatar: '/portrait-4.avif',
      category: 'Design',
      paymentStatus: 'paid'
    },
    {
      id: 2,
      sessionNumber: '#4',
      clientName: 'James Wilson',
      clientLocation: 'Austin, TX',
      date: 'Mar 10',
      rating: 4,
      topic: 'Business Planning Strategy',
      duration: '75 min',
      cost: '$200',
      feedback: 'Great strategic guidance. Helped clarify our business direction.',
      hasReview: true,
      avatar: '/portrait-5.avif',
      category: 'Business',
      paymentStatus: 'paid'
    },
    {
      id: 3,
      sessionNumber: '#3',
      clientName: 'Anna Taylor',
      clientLocation: 'Seattle, WA',
      date: 'Mar 5',
      rating: null,
      topic: 'Product Roadmap Planning',
      duration: '60 min',
      cost: '$160',
      feedback: 'Amazing session! Clear roadmap and priorities established.',
      hasReview: true,
      avatar: '/portrait-1.avif',
      category: 'Product',
      paymentStatus: 'paid'
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

  // Mock reviews data
  const reviews = [
    {
      id: 1,
      reviewerName: "Alex Thompson",
      reviewerTitle: "Founder at DataFlow",
      reviewerImage: "/portrait-2.webp",
      rating: 5,
      date: "2 days ago",
      sessionTopic: "Product Strategy Session",
      review: "Dr. Chen's insights were game-changing. He helped me identify exactly why our growth was plateauing and gave me a clear roadmap to achieve true PMF. The frameworks he shared are gold."
    },
    {
      id: 2,
      reviewerName: "Sarah Kim",
      reviewerTitle: "CEO at HealthTech Solutions",
      reviewerImage: "/portrait-3.avif",
      rating: 5,
      date: "1 week ago",
      sessionTopic: "Business Strategy",
      review: "Incredible session. Dr. Chen reviewed our business model and gave specific, actionable feedback that transformed our approach. We've seen 40% growth since implementing his suggestions."
    },
    {
      id: 3,
      reviewerName: "Marcus Rodriguez",
      reviewerTitle: "Founder at EdTech Labs",
      reviewerImage: "/portrait-4.avif",
      rating: 5,
      date: "2 weeks ago",
      sessionTopic: "Scaling Strategy",
      review: "Dr. Chen understands the challenges of scaling a product. His advice on team structure and processes helped us scale from 10 to 50 customers without losing quality."
    },
    {
      id: 4,
      reviewerName: "Jennifer Liu",
      reviewerTitle: "Product Manager at AI Startup",
      reviewerImage: "/portrait-5.avif",
      rating: 4,
      date: "3 weeks ago",
      sessionTopic: "Product Development",
      review: "As a first-time product manager, Dr. Chen's guidance was invaluable. He helped me prioritize features and build a sustainable product development process. Highly recommend!"
    },
    {
      id: 5,
      reviewerName: "David Park",
      reviewerTitle: "CTO at FinTech Co",
      reviewerImage: "/portrait-1.avif",
      rating: 5,
      date: "1 month ago",
      sessionTopic: "Technical Architecture",
      review: "Dr. Chen's technical expertise combined with business acumen is rare. He helped us redesign our architecture to support 10x growth. Worth every penny!"
    },
    {
      id: 6,
      reviewerName: "Emily Watson",
      reviewerTitle: "VP Product at SaaS Company",
      reviewerImage: "/portrait-2.webp",
      rating: 5,
      date: "1 month ago",
      sessionTopic: "Product Strategy",
      review: "The session exceeded my expectations. Dr. Chen quickly understood our challenges and provided practical solutions. We're already seeing improvements in our product metrics."
    }
  ]

  const tabs = [
    { id: 'upcoming', label: 'Upcoming', count: upcomingSessions.length },
    { id: 'past', label: 'Past Sessions', count: pastSessions.length },
    { id: 'favourites', label: 'Favourites', count: favouriteExperts.length },
    { id: 'reviews', label: 'Reviews', count: reviews.length }
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Monthly Earnings */}
            <Card className="border-0 bg-white/95 backdrop-blur-sm hover:bg-white hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer force-black-text">
              <CardContent className="p-4">
                <div className="flex gap-4 h-20">
                  <div className="flex items-center justify-center w-12 h-12 bg-emerald-50 rounded-lg flex-shrink-0 self-center">
                    <span className="text-xl font-bold text-emerald-500">$</span>
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <p className="text-2xl font-bold analytics-number">$8,640</p>
                        <p className="text-sm font-medium force-gray-text">Monthly Earnings</p>
                      </div>
                      <div className="text-green-500">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="mt-auto">
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div className="bg-emerald-400 h-1.5 rounded-full transition-all duration-300" style={{width: '75%'}}></div>
                      </div>
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
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <p className="text-2xl font-bold analytics-number">12</p>
                        <p className="text-sm font-medium force-gray-text">Average Sessions</p>
                      </div>
                      <div className="text-green-500">
                        <TrendingUp className="w-4 h-4" />
                      </div>
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

            {/* Average Rating */}
            <Card className="border-0 bg-white/95 backdrop-blur-sm hover:bg-white hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer force-black-text">
              <CardContent className="p-4">
                <div className="flex gap-4 h-20">
                  <div className="flex items-center justify-center w-12 h-12 bg-amber-50 rounded-lg flex-shrink-0 self-center">
                    <Star className="w-6 h-6 text-amber-500" />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <p className="text-2xl font-bold analytics-number">4.9</p>
                        <p className="text-sm font-medium force-gray-text">Average Rating</p>
                      </div>
                      <div className="text-orange-500">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="mt-auto">
                      <p className="text-xs text-gray-500 mb-1">Based on 43 sessions</p>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className={`w-3 h-3 ${star <= 4 ? 'fill-amber-300 text-amber-300' : 'text-gray-300'}`} />
                        ))}
                      </div>
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
                <Avatar className="w-16 h-16">
                  <AvatarImage src={user.avatar} alt={`${user.firstName} ${user.lastName}`} />
                  <AvatarFallback className="text-lg">{getInitials()}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-lg">Dr. {user.firstName} {user.lastName}</h3>
                    {user.isVerified && (
                      <div className="w-5 h-5">
                        <svg viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="9" fill="#1DA1F2"/>
                          <path d="M8.5 12.5L10.5 14.5L15.5 9.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    )}
                  </div>
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
                      <span className="text-muted-foreground">{user.location}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                <span className="font-semibold text-sm">{user.rating}</span>
                <span className="text-xs text-gray-500">({user.reviewCount})</span>
                {user.isTopExpert && (
                  <Badge className="bg-[#efffba] text-black border-0 text-xs px-2 py-1">
                    <Crown className="w-3 h-3 mr-1" />
                    Top Expert
                  </Badge>
                )}
              </div>
              
              <div className="space-y-4 text-sm mb-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Professional Title</h4>
                  <p className="text-gray-600">{user.title}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Bio</h4>
                  <p className="text-gray-600">{user.bio}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Expertise</h4>
                  <p className="text-gray-600">{user.expertise}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Industries</h4>
                  <p className="text-gray-600">{user.industries}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Hourly Rate</h4>
                  <p className="text-gray-600">{user.hourlyRate}</p>
                </div>
              </div>
              
              <Button 
                className="w-full rounded-full mb-3 bg-black text-white hover:bg-gray-800 flex items-center justify-center gap-2"
                onClick={() => setShowSettings(true)}
              >
                <Settings className="w-4 h-4" />
                Profile & Payment Settings
              </Button>
              
              <Button 
                variant="outline"
                className="w-full rounded-full border-2 border-gray-300 hover:bg-gray-100 flex items-center justify-center gap-2"
                onClick={() => window.location.href = 'http://localhost:5173/expert/michael-chen'}
              >
                <Eye className="w-4 h-4" />
                View Public Profile
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
                  <CardContent className="p-6 flex flex-col min-h-0">
                    <div className="flex-1 space-y-5 text-left">
                      {/* Profile Picture and Client Info */}
                      <div className="flex items-center gap-4">
                        <Avatar className="w-16 h-16">
                          <AvatarImage src={session.avatar} alt={session.clientName} />
                          <AvatarFallback className="text-base font-semibold">{getInitials(session.clientName)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg leading-tight text-left text-black">
                            {session.clientName}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-1 text-left flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {session.clientLocation}
                          </p>
                        </div>
                      </div>
                      
                      {/* Session Title and Client Response */}
                      <div className="space-y-3">
                        <h4 className="font-bold text-sm text-black">{session.topic}</h4>
                        <p className="text-sm text-gray-600 italic">
                          "I'm struggling with user retention in my SaaS product. Our churn rate is 15% monthly and I need strategies to improve engagement."
                        </p>
                        <div className="space-y-1 text-xs text-muted-foreground">
                          <p>📅 {session.date} at {session.time}</p>
                          <p>⏱️ {session.duration}</p>
                          <p className="text-gray-900 font-semibold">{session.cost}</p>
                        </div>
                      </div>
                      
                      {/* Attachments */}
                      <div>
                        <button className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors border border-gray-300">
                          <Download className="w-3 h-3 text-gray-600" />
                          <span className="text-xs text-gray-600">3 attachments</span>
                        </button>
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
                              Join Session
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
                  <CardContent className="p-6 flex flex-col min-h-0">
                    <div className="flex-1 space-y-5 text-left">
                      {/* Profile Picture and Client Info */}
                      <div className="flex items-center gap-4">
                        <Avatar className="w-16 h-16">
                          <AvatarImage src={session.avatar} alt={session.clientName} />
                          <AvatarFallback className="text-base font-semibold">{getInitials(session.clientName)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg leading-tight text-left text-black">
                            {session.clientName}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-1 text-left flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {session.clientLocation}
                          </p>
                        </div>
                      </div>
                      
                      {/* Session Title and Client Response */}
                      <div className="space-y-3">
                        <h4 className="font-bold text-sm text-black">{session.topic}</h4>
                        <p className="text-sm text-gray-600 italic line-clamp-2">
                          "{session.feedback}"
                        </p>
                        {/* Rating */}
                        <div className="flex items-center gap-1">
                          {session.rating ? (
                            [...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`w-3 h-3 ${i < session.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                              />
                            ))
                          ) : (
                            <span className="text-xs text-gray-500">No rating yet</span>
                          )}
                        </div>
                        <div className="space-y-1 text-xs text-muted-foreground">
                          <p>📅 {session.date} • Session {session.sessionNumber}</p>
                          <p>⏱️ {session.duration}</p>
                          <p className="text-gray-900 font-semibold">{session.cost}</p>
                        </div>
                      </div>
                      
                      {/* Attachments */}
                      <div>
                        <button className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors border border-gray-300">
                          <Download className="w-3 h-3 text-gray-600" />
                          <span className="text-xs text-gray-600">2 attachments</span>
                        </button>
                      </div>
                    </div>

                    {/* Actions - Always at Bottom */}
                    <div className="mt-auto flex-shrink-0 pt-4">
                      <div className="flex justify-between items-center">
                        <div className="flex gap-2 w-full">
                          <Button 
                            size="sm" 
                            variant="outline"
                            className="rounded-full border border-black px-4 text-black hover:bg-black hover:text-white transition-all text-sm font-medium w-full"
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

          {activeTab === 'reviews' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reviews.map((review) => (
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
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < review.rating ? 'fill-black text-black' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {review.review}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{review.date}</span>
                    <span className="text-xs font-medium text-gray-700">{review.sessionTopic}</span>
                  </div>
                </div>
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
                
                {/* Client Info with Photo - Moved above tabs */}
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={selectedSession.avatar} alt={selectedSession.clientName} />
                    <AvatarFallback>{getInitials(selectedSession.clientName)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm truncate">{selectedSession.clientName}</h4>
                    <p className="text-xs text-muted-foreground truncate flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {selectedSession.clientLocation}
                    </p>
                  </div>
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
                    { id: 'professional', label: 'Expertise', icon: Briefcase },
                    { id: 'consultation', label: 'Your Sessions', icon: DollarSign },
                    { id: 'availability', label: 'Availability', icon: Calendar },
                    { id: 'giving', label: 'Giving', icon: Heart },
                    { id: 'verification', label: 'Verification', icon: CheckCircle },
                    { id: 'payments', label: 'Payments', icon: CreditCard }
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
                          <label className="text-sm font-semibold text-gray-700 mb-3 block">First Name *</label>
                          <input 
                            type="text" 
                            placeholder="Enter your first name"
                            defaultValue={user.firstName}
                            className="w-full p-4 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent focus:bg-white transition-all placeholder-gray-400"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-semibold text-gray-700 mb-3 block">Last Name *</label>
                          <input 
                            type="text" 
                            placeholder="Enter your last name"
                            defaultValue={user.lastName}
                            className="w-full p-4 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent focus:bg-white transition-all placeholder-gray-400"
                          />
                        </div>
                      </div>

                      {/* Email and Location */}
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label className="text-sm font-semibold text-gray-700 mb-3 block">Email Address *</label>
                          <div className="relative">
                            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input 
                              type="email" 
                              placeholder="Enter your professional email"
                              defaultValue={user.email}
                              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent focus:bg-white transition-all placeholder-gray-400"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-semibold text-gray-700 mb-3 block">Location *</label>
                          <div className="relative">
                            <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <select className="w-full pl-12 pr-10 py-4 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent focus:bg-white transition-all appearance-none cursor-pointer">
                              <option value="">Select your country</option>
                              <option value="United States" selected>United States</option>
                              <option value="Canada">Canada</option>
                              <option value="United Kingdom">United Kingdom</option>
                              <option value="Australia">Australia</option>
                              <option value="Germany">Germany</option>
                              <option value="France">France</option>
                              <option value="India">India</option>
                              <option value="Brazil">Brazil</option>
                              <option value="Mexico">Mexico</option>
                              <option value="Japan">Japan</option>
                              <option value="China">China</option>
                              <option value="Other">Other</option>
                            </select>
                            <ChevronRight className="absolute right-4 top-1/2 transform -translate-y-1/2 rotate-90 w-5 h-5 text-gray-400 pointer-events-none" />
                          </div>
                        </div>
                      </div>

                      {/* Gender and Language */}
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label className="text-sm font-semibold text-gray-700 mb-3 block">Gender *</label>
                          <div className="relative">
                            <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <select className="w-full pl-12 pr-10 py-4 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent focus:bg-white transition-all appearance-none cursor-pointer">
                              <option value="">Select gender</option>
                              <option value="Male" selected>Male</option>
                              <option value="Female">Female</option>
                              <option value="Other">Other</option>
                              <option value="Prefer not to say">Prefer not to say</option>
                            </select>
                            <ChevronRight className="absolute right-4 top-1/2 transform -translate-y-1/2 rotate-90 w-5 h-5 text-gray-400 pointer-events-none" />
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-semibold text-gray-700 mb-3 block">Language Preference *</label>
                          <div className="relative">
                            <Check className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-500" />
                            <select className="w-full pl-12 pr-10 py-4 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent focus:bg-white transition-all appearance-none cursor-pointer">
                              <option value="English" selected>English</option>
                              <option value="Arabic">Arabic</option>
                              <option value="English & Arabic">English & Arabic</option>
                              <option value="Spanish">Spanish</option>
                              <option value="French">French</option>
                              <option value="German">German</option>
                              <option value="Chinese">Chinese</option>
                              <option value="Japanese">Japanese</option>
                            </select>
                            <ChevronRight className="absolute right-4 top-1/2 transform -translate-y-1/2 rotate-90 w-5 h-5 text-gray-400 pointer-events-none" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {settingsTab === 'professional' && (
                  <div>
                    <h3 className="text-lg font-semibold mb-6">Professional & Expertise</h3>
                    <div className="space-y-6">
                      {/* Professional Title */}
                      <div>
                        <label className="text-sm font-semibold text-gray-700 mb-3 block">Professional Title</label>
                        <div className="relative">
                          <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input 
                            type="text" 
                            placeholder="e.g., Senior Product Manager, Marketing Director"
                            className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent focus:bg-white transition-all"
                            defaultValue="Product Strategy Expert"
                          />
                        </div>
                      </div>

                      {/* Short Bio */}
                      <div>
                        <label className="text-sm font-semibold text-gray-700 mb-2 block">Bio <span className="text-xs font-normal text-gray-500">140 characters</span></label>
                        <div className="relative">
                          <FileText className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                          <textarea 
                            rows="2"
                            maxLength="140"
                            className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent focus:bg-white transition-all resize-none"
                            placeholder="Quick bio that captures your essence in one line..."
                            defaultValue="Helping companies build products that customers love through strategic planning and data-driven decisions."
                            onChange={(e) => {
                              const charCount = e.target.value.length;
                              const counter = e.target.parentElement.querySelector('.char-counter');
                              if (counter) counter.textContent = `${charCount}/140`;
                            }}
                          />
                          <span className="char-counter absolute bottom-2 right-3 text-xs text-gray-500">107/140</span>
                        </div>
                      </div>

                      {/* About */}
                      <div>
                        <label className="text-sm font-semibold text-gray-700 mb-2 block">About <span className="text-xs font-normal text-gray-500">Up to 500 words</span></label>
                        <div className="relative">
                          <FileText className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                          <textarea 
                            rows="6"
                            className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent focus:bg-white transition-all resize-none"
                            placeholder="Tell your story. What's your background? What unique insights do you bring? What can clients expect from working with you?"
                            defaultValue="Helping companies build products that customers love through strategic planning and data-driven decisions. 15+ years of experience in product strategy and leadership across startups and Fortune 500 companies. Specializing in product-market fit, go-to-market strategies, and building high-performing product teams."
                          />
                        </div>
                      </div>

                      {/* Primary Industry */}
                      <div>
                        <label className="text-sm font-semibold text-gray-700 mb-2 block">Primary Industry</label>
                        <p className="text-xs text-gray-500 mb-4">Choose your main industry focus</p>
                        <select 
                          defaultValue="Technology"
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5 transition-all bg-white"
                        >
                          <option value="">Choose primary industry...</option>
                          <option value="Technology">Technology</option>
                          <option value="Education & Training">Education & Training</option>
                          <option value="Real Estate">Real Estate</option>
                          <option value="Legal & Consulting">Legal & Consulting</option>
                          <option value="Healthcare">Healthcare</option>
                          <option value="Finance">Finance</option>
                          <option value="Marketing">Marketing</option>
                          <option value="Design">Design</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      {/* Other Industries */}
                      <div>
                        <label className="text-sm font-semibold text-gray-700 mb-2 block">Other Industries</label>
                        <p className="text-xs text-gray-500 mb-4">Select additional industries that apply to your work</p>
                        <div className="space-y-3">
                          <label className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                            <input type="checkbox" className="w-4 h-4 text-black border-gray-300 rounded focus:ring-0" />
                            <span className="text-sm">Education & Training</span>
                          </label>
                          <label className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                            <input type="checkbox" className="w-4 h-4 text-black border-gray-300 rounded focus:ring-0" />
                            <span className="text-sm">Real Estate</span>
                          </label>
                          <label className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                            <input type="checkbox" className="w-4 h-4 text-black border-gray-300 rounded focus:ring-0" />
                            <span className="text-sm">Legal & Consulting</span>
                          </label>
                          <label className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                            <input type="checkbox" className="w-4 h-4 text-black border-gray-300 rounded focus:ring-0" defaultChecked disabled />
                            <span className="text-sm text-gray-400">Technology (Primary Industry)</span>
                          </label>
                          <label className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                            <input type="checkbox" className="w-4 h-4 text-black border-gray-300 rounded focus:ring-0" />
                            <span className="text-sm">Healthcare</span>
                          </label>
                          <label className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                            <input type="checkbox" className="w-4 h-4 text-black border-gray-300 rounded focus:ring-0" />
                            <span className="text-sm">Finance</span>
                          </label>
                          <label className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                            <input type="checkbox" className="w-4 h-4 text-black border-gray-300 rounded focus:ring-0" />
                            <span className="text-sm">Other</span>
                          </label>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">Selected: 0 additional industries</p>
                      </div>

                      {/* Expertise */}
                      <div>
                        <label className="text-sm font-semibold text-gray-700 mb-2 block">Expertise</label>
                        <p className="text-xs text-gray-500 mb-4">Select your expertise areas and specific skills</p>
                        
                        {/* All Expertise Areas - Main Checkbox */}
                        <div className="bg-gray-50 rounded-lg p-4 mb-3">
                          <label className="flex items-center gap-3 cursor-pointer font-medium">
                            <input type="checkbox" className="w-4 h-4 text-black border-gray-300 rounded focus:ring-0" defaultChecked />
                            <span className="text-sm">All Expertise Areas</span>
                          </label>
                        </div>
                        
                        {/* Individual Areas with Expand */}
                        <div className="space-y-2 ml-6">
                          <div className="space-y-2">
                            <label className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                              <ChevronRight className="w-4 h-4 text-gray-400" />
                              <span className="text-sm">Business & Startups</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                              <ChevronRight className="w-4 h-4 text-gray-400" />
                              <span className="text-sm">Technology & Innovation</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                              <ChevronRight className="w-4 h-4 text-gray-400" />
                              <span className="text-sm">Design & Creativity</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                              <ChevronRight className="w-4 h-4 text-gray-400" />
                              <span className="text-sm">Marketing & Growth</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                              <ChevronRight className="w-4 h-4 text-gray-400" />
                              <span className="text-sm">Finance & Economics</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                              <ChevronRight className="w-4 h-4 text-gray-400" />
                              <span className="text-sm">Health & Wellness</span>
                            </label>
                          </div>
                        </div>
                        <p className="text-xs text-gray-500 mt-3">0 specific skills selected</p>
                      </div>
                    </div>
                  </div>
                )}

                {settingsTab === 'consultation' && (
                  <div>
                    <div className="flex items-center gap-2 mb-6">
                      <DollarSign className="w-5 h-5" />
                      <h3 className="text-lg font-semibold">Your Sessions</h3>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-6">
                      Create the session types that clients will see when booking with you. You can always modify these later.
                    </p>

                    {/* General Consultation */}
                    <div className="mb-8">
                      <h4 className="text-base font-semibold mb-4">General Consultation</h4>
                      <p className="text-sm text-gray-600 mb-4">
                        Open-ended consultation where clients choose the duration
                      </p>

                      <div className="bg-white border border-gray-200 rounded-lg p-6">
                        <label className="flex items-center gap-3 mb-4">
                          <input
                            type="checkbox"
                            defaultChecked
                            className="w-4 h-4 text-black border-gray-300 rounded focus:ring-0"
                          />
                          <span className="text-sm font-medium">Enable general consultation</span>
                        </label>

                        <p className="text-sm font-medium text-black mb-4">
                          Set pricing for each duration:
                        </p>

                        <div className="space-y-3">
                          <div className="flex items-center gap-4">
                            <span className="text-sm w-20">15 min</span>
                            <span className="text-lg font-medium">$</span>
                            <input
                              type="text"
                              placeholder="500"
                              className="w-32 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-black transition-colors"
                            />
                          </div>
                          
                          <div className="flex items-center gap-4">
                            <span className="text-sm w-20">30 min</span>
                            <span className="text-lg font-medium">$</span>
                            <input
                              type="text"
                              placeholder="1000"
                              className="w-32 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-black transition-colors"
                            />
                          </div>
                          
                          <div className="flex items-center gap-4">
                            <span className="text-sm w-20">45 min</span>
                            <span className="text-lg font-medium">$</span>
                            <input
                              type="text"
                              placeholder="1500"
                              className="w-32 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-black transition-colors"
                            />
                          </div>
                          
                          <div className="flex items-center gap-4">
                            <span className="text-sm w-20">60 min</span>
                            <span className="text-lg font-medium">$</span>
                            <input
                              type="text"
                              placeholder="2000"
                              className="w-32 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-black transition-colors"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Structured Sessions */}
                    <div className="mb-8">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-base font-semibold">Structured Sessions</h4>
                        <button 
                          onClick={addNewSession}
                          className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                          Add Session
                        </button>
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-4">
                        Pre-defined consultation types with specific topics and durations
                      </p>

                      {/* Saved Session Cards */}
                      {savedSessions.length > 0 && (
                        <div className="space-y-4 mb-6">
                          {savedSessions.map((session) => (
                            <div
                              key={session.id}
                              className="p-4 rounded-lg border-2 border-gray-200 bg-white relative"
                            >
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <h3 className="font-medium text-sm mb-1">{session.title}</h3>
                                  {session.description && (
                                    <p className="text-xs text-gray-600 mb-2">{session.description}</p>
                                  )}
                                  <div className="flex items-center gap-3 text-xs text-gray-500">
                                    <span className="flex items-center gap-1">
                                      <Clock className="w-3 h-3" />
                                      {session.duration}
                                    </span>
                                    <span className="font-semibold text-black">${session.price}</span>
                                  </div>
                                </div>
                                <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex-shrink-0">
                                </div>
                              </div>
                              
                              <button 
                                onClick={() => deleteSavedSession(session.id)}
                                className="absolute top-2 right-2 text-gray-400 hover:text-red-600 transition-colors bg-white rounded-full p-1 shadow-sm"
                                title="Delete session"
                              >
                                <X className="w-3 h-3" />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Editing Session Cards */}
                      <div className="space-y-4">
                        {sessions.map((session) => (
                          <div key={session.id} className="bg-white border border-gray-200 rounded-lg p-6">
                            <div className="flex items-center justify-between mb-4">
                              <h5 className="text-sm font-medium">Session Details</h5>
                              <button 
                                onClick={() => deleteSession(session.id)}
                                className="text-gray-400 hover:text-red-600 transition-colors"
                                title="Delete session"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>

                            <div className="grid grid-cols-3 gap-4 mb-4">
                              <div className="col-span-1">
                                <label className="block text-sm font-medium text-black mb-2">
                                  Session Title*
                                </label>
                                <input
                                  type="text"
                                  value={session.title}
                                  onChange={(e) => updateSession(session.id, 'title', e.target.value)}
                                  placeholder="Product Strategy Review"
                                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-black transition-colors"
                                />
                              </div>
                              
                              <div>
                                <label className="block text-sm font-medium text-black mb-2">
                                  Duration
                                </label>
                                <select 
                                  value={session.duration}
                                  onChange={(e) => updateSession(session.id, 'duration', e.target.value)}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-black transition-colors"
                                >
                                  <option>15 min</option>
                                  <option>30 min</option>
                                  <option>45 min</option>
                                  <option>60 min</option>
                                </select>
                              </div>
                              
                              <div>
                                <label className="block text-sm font-medium text-black mb-2">
                                  Price ($)
                                </label>
                                <input
                                  type="text"
                                  value={session.price}
                                  onChange={(e) => updateSession(session.id, 'price', e.target.value)}
                                  placeholder="500"
                                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-black transition-colors"
                                />
                              </div>
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-black mb-2">
                                Description
                              </label>
                              <textarea
                                rows={3}
                                value={session.description}
                                onChange={(e) => updateSession(session.id, 'description', e.target.value)}
                                placeholder="Get clarity on whether you've achieved PMF and what to focus on next"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-black transition-colors resize-none"
                              />
                              
                              <button 
                                onClick={() => saveSession(session.id)}
                                className="mt-3 px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                                disabled={!session.title || !session.price}
                              >
                                Add
                              </button>
                            </div>
                          </div>
                        ))}
                        
                        {sessions.length === 0 && savedSessions.length === 0 && (
                          <div className="text-center py-8 text-gray-500">
                            <p className="text-sm">No sessions created yet.</p>
                            <p className="text-xs mt-1">Click "Add Session" to create your first session type.</p>
                          </div>
                        )}
                      </div>
                    </div>


                    {/* Platform Fee */}
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="text-sm font-medium text-black mb-2">Platform Fee</h4>
                      <p className="text-sm text-gray-600">
                        TapTime charges a 20% platform fee on all sessions. This includes payment processing, support, and platform maintenance.
                      </p>
                    </div>
                  </div>
                )}
                
                {settingsTab === 'availability' && (
                  <div>
                    <div className="flex items-center gap-2 mb-6">
                      <Calendar className="w-5 h-5" />
                      <h3 className="text-lg font-semibold">Set Your Availability</h3>
                    </div>

                    {/* Timezone */}
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-black mb-2">
                        Timezone
                      </label>
                      <select
                        defaultValue="America/New_York"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5 transition-all bg-white"
                      >
                        <option value="America/Los_Angeles">Pacific Time (PT)</option>
                        <option value="America/Denver">Mountain Time (MT)</option>
                        <option value="America/Chicago">Central Time (CT)</option>
                        <option value="America/New_York">Eastern Time (ET)</option>
                        <option value="Europe/London">GMT/BST (London)</option>
                        <option value="Europe/Paris">CET/CEST (Paris)</option>
                        <option value="Asia/Dubai">GST (Dubai)</option>
                        <option value="Asia/Singapore">SGT (Singapore)</option>
                        <option value="Asia/Tokyo">JST (Tokyo)</option>
                        <option value="Australia/Sydney">AEDT/AEST (Sydney)</option>
                      </select>
                    </div>

                    <div className="flex flex-col items-center justify-center py-16">
                      <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-8">
                        <Calendar className="w-10 h-10 text-gray-500" />
                      </div>
                      
                      <h4 className="text-2xl font-semibold text-black mb-4">Connect with Calendly</h4>
                      
                      <p className="text-gray-600 text-center mb-10 max-w-md">
                        Sync your availability with Calendly to manage your booking schedule
                      </p>

                      <Button 
                        type="button"
                        className="px-8 py-3 bg-white hover:bg-gray-50 text-black border-2 border-gray-300 rounded-lg flex items-center gap-3 transition-all"
                      >
                        <Calendar className="w-5 h-5" />
                        Connect Calendly
                      </Button>
                    </div>
                  </div>
                )}
                
                {settingsTab === 'giving' && (
                  <div>
                    <div className="flex items-center gap-2 mb-6">
                      <Heart className="w-5 h-5" />
                      <h3 className="text-lg font-semibold">Donate for charity (Optional)</h3>
                    </div>

                    <p className="text-gray-600 text-sm mb-8">
                      Inspire others by supporting a cause you love (You'll manage donations directly — TapTime doesn't handle transactions.)
                    </p>

                    <div className="space-y-6 max-w-2xl">
                      <div>
                        <label className="block text-sm font-medium text-black mb-2">
                          Charity Name
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                          placeholder="Charity Name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-black mb-2">
                          Charity Website URL
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                          placeholder="Charity Website URL"
                        />
                      </div>

                      <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-start gap-3">
                          <Heart className="w-5 h-5 text-gray-400 mt-0.5" />
                          <div className="text-sm text-gray-600">
                            <p className="font-medium mb-1">About Charity Support</p>
                            <p>Adding a charity to your profile shows clients that you support meaningful causes. Clients can choose to donate directly to your chosen charity.</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Button 
                          className="px-6 py-2 bg-[#efffba] text-black hover:bg-black hover:text-white rounded-lg transition-colors"
                        >
                          Save Charity
                        </Button>
                        <Button 
                          variant="outline"
                          className="px-6 py-2 border-gray-300 rounded-lg"
                        >
                          Remove Charity
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
                
                {settingsTab === 'verification' && (
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Verification</h3>
                    <p className="text-gray-600 text-sm mb-8">
                      Show your audience you're real. Share your booking link, tag us, and we'll verify you fast.
                    </p>

                    <div className="space-y-8 max-w-3xl">
                      {/* Step 1 */}
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <span className="text-green-600 font-semibold">Step 1:</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-800">
                            Add your booking link in at least one social media channel - LinkedIn / X / Threads / TikTok / Instagram
                          </p>
                        </div>
                      </div>

                      {/* Step 2 */}
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <span className="text-green-600 font-semibold">Step 2:</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-800">
                            Tag us @taptime.ai
                          </p>
                        </div>
                      </div>

                      {/* Step 3 */}
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <span className="text-green-600 font-semibold">Step 3:</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-800">
                            You will be verified within 72 hours
                          </p>
                        </div>
                      </div>

                      {/* Step 4 */}
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <span className="text-green-600 font-semibold">Step 4:</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-800 mb-4">
                            Share your post here
                          </p>
                          <input
                            type="text"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                            placeholder="Paste your post link here..."
                          />
                        </div>
                      </div>

                      <div className="pt-4">
                        <Button 
                          className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                        >
                          Submit for Verification
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
                
                {settingsTab === 'payments' && (
                  <div>
                    <h3 className="text-lg font-semibold mb-6">Payment Overview</h3>
                    
                    {/* Current Balance */}
                    <div className="border border-gray-200 rounded-xl p-6 mb-6">
                      <p className="text-sm text-gray-600 mb-2">Current Balance</p>
                      <h2 className="text-4xl font-bold text-green-600 mb-3">$800</h2>
                      <p className="text-sm text-green-600">Sufficient Balance. You can withdraw now</p>
                    </div>

                    {/* Sub-tabs */}
                    <div className="flex gap-4 mb-6">
                      <button
                        onClick={() => setPaymentSubTab('details')}
                        className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${
                          paymentSubTab === 'details' 
                            ? 'bg-black text-white' 
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        Payment Details
                      </button>
                      <button
                        onClick={() => setPaymentSubTab('withdrawal')}
                        className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${
                          paymentSubTab === 'withdrawal' 
                            ? 'bg-black text-white' 
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        Withdrawal request
                      </button>
                      <button
                        onClick={() => setPaymentSubTab('history')}
                        className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${
                          paymentSubTab === 'history' 
                            ? 'bg-black text-white' 
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        Withdrawal history
                      </button>
                    </div>

                    {/* Payment Details Tab */}
                    {paymentSubTab === 'details' && (
                      <div>
                        <h4 className="text-lg font-semibold mb-6">Bank information</h4>
                        <div className="space-y-6">
                          <div className="grid grid-cols-2 gap-6">
                            <div>
                              <label className="block text-sm font-medium text-black mb-2">
                                Bank account*
                              </label>
                              <input
                                type="text"
                                placeholder="0000 0000 0000 0000"
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-black mb-2">
                                Account Number*
                              </label>
                              <input
                                type="text"
                                placeholder="0000 0000 0000 0000"
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-6">
                            <div>
                              <label className="block text-sm font-medium text-black mb-2">
                                IBAN
                              </label>
                              <input
                                type="text"
                                placeholder="Type here..."
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-black mb-2">
                                Bank Name
                              </label>
                              <input
                                type="text"
                                placeholder="Type here..."
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-3 gap-6">
                            <div>
                              <label className="block text-sm font-medium text-black mb-2">
                                Routing Number
                              </label>
                              <input
                                type="text"
                                placeholder="City"
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-black mb-2">
                                Branch
                              </label>
                              <input
                                type="text"
                                placeholder="State"
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-black mb-2">
                                Country
                              </label>
                              <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors">
                                <option>Select Country</option>
                                <option>United States</option>
                                <option>Canada</option>
                                <option>United Kingdom</option>
                                <option>Australia</option>
                              </select>
                            </div>
                          </div>

                          <div className="flex justify-end gap-3 pt-4">
                            <Button 
                              variant="outline"
                              className="px-6 py-2 border-gray-300 rounded-lg"
                            >
                              Cancel
                            </Button>
                            <Button 
                              className="px-6 py-2 bg-[#efffba] text-black hover:bg-black hover:text-white rounded-lg transition-colors"
                            >
                              Save Bank Details
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Withdrawal Request Tab */}
                    {paymentSubTab === 'withdrawal' && (
                      <div>
                        <h4 className="text-lg font-semibold mb-6">Request Withdrawal</h4>
                        <div className="space-y-6">
                          <div>
                            <label className="block text-sm font-medium text-black mb-2">
                              Withdrawal Amount
                            </label>
                            <div className="relative">
                              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                              <input
                                type="text"
                                placeholder="Enter amount"
                                className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                              />
                            </div>
                            <p className="text-sm text-gray-600 mt-2">Available balance: $800</p>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-black mb-2">
                              Bank Account
                            </label>
                            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors">
                              <option>•••• •••• •••• 4242 (Primary)</option>
                            </select>
                          </div>

                          <div className="bg-gray-50 rounded-lg p-4">
                            <h5 className="text-sm font-medium mb-2">Processing Time</h5>
                            <p className="text-sm text-gray-600">
                              Withdrawals are processed within 3-5 business days. You'll receive an email confirmation once the transfer is initiated.
                            </p>
                          </div>

                          <Button 
                            className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                          >
                            Request Withdrawal
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* Withdrawal History Tab */}
                    {paymentSubTab === 'history' && (
                      <div>
                        <h4 className="text-lg font-semibold mb-6">Withdrawal History</h4>
                        <div className="space-y-3">
                          {[
                            { amount: '$500', date: 'Nov 15, 2024', status: 'Completed', bank: '•••• 4242' },
                            { amount: '$350', date: 'Oct 28, 2024', status: 'Completed', bank: '•••• 4242' },
                            { amount: '$800', date: 'Oct 10, 2024', status: 'Completed', bank: '•••• 4242' },
                            { amount: '$200', date: 'Sep 22, 2024', status: 'Completed', bank: '•••• 4242' }
                          ].map((withdrawal, index) => (
                            <div key={index} className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
                              <div>
                                <p className="font-semibold text-lg">{withdrawal.amount}</p>
                                <p className="text-sm text-gray-600">{withdrawal.date}</p>
                                <p className="text-xs text-gray-500">To: {withdrawal.bank}</p>
                              </div>
                              <Badge 
                                variant="secondary"
                                className="bg-green-100 text-green-800 border-green-200"
                              >
                                {withdrawal.status}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
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
      <Footer />
    </div>
  )
}

export default ExpertDashboard