import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line, AreaChart, Area } from 'recharts'
import { 
  Home,
  Settings,
  Users,
  UserCheck,
  DollarSign,
  TrendingUp,
  FileText,
  ShieldCheck,
  Crown,
  Check,
  X,
  Eye,
  Download,
  Search,
  Filter,
  Plus,
  Edit,
  Trash2,
  Calendar,
  MapPin,
  Mail,
  Phone,
  Package,
  ChevronDown,
  ChevronRight,
  Star,
  Building,
  Target,
  ArrowUp,
  Clock,
  Video,
  MessageCircle,
  MoreHorizontal,
  Bell,
  ExternalLink,
  Camera,
  Instagram,
  Twitter,
  Linkedin
} from 'lucide-react'

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('stats')
  const [expertApprovalTab, setExpertApprovalTab] = useState('requests')
  const [selectedExpert, setSelectedExpert] = useState(null)
  const [showExpertDetail, setShowExpertDetail] = useState(false)
  const [showAddCategory, setShowAddCategory] = useState(false)
  const [withdrawalTab, setWithdrawalTab] = useState('pending')
  const [sessionTab, setSessionTab] = useState('upcoming')
  const [adminSettings, setAdminSettings] = useState({
    username: 'admin@taptime.com',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  })
  const [currentView, setCurrentView] = useState('main') // 'main', 'expert-detail', 'category-detail', 'withdrawal-detail'
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedWithdrawal, setSelectedWithdrawal] = useState(null)
  const [expertDetailTab, setExpertDetailTab] = useState('about') // 'about', 'packages', 'documents'

  // Enhanced sample data
  const platformStats = {
    totalUsers: 160,
    activeUsers: 40,
    meetingBooked: 160,
    totalAmount: 1000,
    netProfit: 200,
    totalExperts: 160,
    activeExperts: 160,
    totalMeetings: 308
  }

  const profitData = [
    { month: 'Jan', profit: 5, revenue: 12 },
    { month: 'Feb', profit: 8, revenue: 18 },
    { month: 'Mar', profit: 12, revenue: 25 },
    { month: 'Apr', profit: 15, revenue: 32 },
    { month: 'May', profit: 18, revenue: 38 },
    { month: 'Jun', profit: 22, revenue: 45 },
    { month: 'Jul', profit: 20, revenue: 42 },
    { month: 'Aug', profit: 25, revenue: 52 }
  ]

  const searchInsights = [
    { keyword: 'Top Expert', percentage: 55, color: '#22c55e' },
    { keyword: 'Charity Programs', percentage: 23, color: '#3b82f6' },
    { keyword: 'Meeting with best', percentage: 10, color: '#f59e0b' },
    { keyword: 'E-learning Sessions', percentage: 8, color: '#ef4444' },
    { keyword: 'Legal Advice', percentage: 5, color: '#8b5cf6' }
  ]

  const getApplicationQualityScore = (expert) => {
    let score = 0
    if (expert.verified) score += 1
    if (expert.documentsSubmitted.length >= 3) score += 1
    if (expert.portfolioUrl) score += 1
    if (expert.linkedinUrl) score += 1
    if (expert.charityWork) score += 1
    return score
  }

  // Sample packages/bundles data for experts
  const samplePackages = {
    1: [
      {
        id: 1,
        name: "Product Strategy Deep Dive",
        duration: "2 hours",
        price: 400,
        description: "Comprehensive product strategy session covering market analysis, competitive positioning, and roadmap planning.",
        includes: ["Market Analysis", "Competitive Review", "Strategic Roadmap", "Follow-up Notes"]
      },
      {
        id: 2,
        name: "Quick Strategy Consultation",
        duration: "1 hour", 
        price: 200,
        description: "Focused consultation on specific product strategy questions or challenges.",
        includes: ["Problem Analysis", "Strategic Recommendations", "Action Plan"]
      }
    ],
    2: [
      {
        id: 3,
        name: "Digital Marketing Audit",
        duration: "90 minutes",
        price: 225,
        description: "Complete review of your current digital marketing efforts with actionable recommendations.",
        includes: ["Current State Analysis", "Competitive Benchmarking", "Improvement Plan", "Tool Recommendations"]
      }
    ]
  }

  // Enhanced expert requests with full profile data
  const expertRequests = [
    {
      id: 1,
      name: 'Dr. Michael Chen',
      email: 'michael.chen@email.com',
      phone: '+1 (555) 987-6543',
      location: 'San Francisco, CA',
      hourlyRate: 200,
      title: 'Senior Product Strategy Consultant',
      company: 'Chen Consulting',
      industry: 'Technology Consulting',
      experience: '10+ years',
      avatar: '/api/placeholder/40/40',
      bio: 'Isabella is the Founder and CEO of TechNova, a B2B SaaS platform that she built from idea to $100M valuation in 4 years. She\'s raised over $50M in funding from top-tier VCs including Sequoia and a16z. With 12+ years in the startup ecosystem, Isabella has deep expertise in product-market fit, scaling teams, fundraising, and building sustainable growth engines. She\'s passionate about helping early-stage founders avoid common pitfalls and accelerate their path to success. Before TechNova, Isabella was VP of Product at DataSync (acquired by Salesforce) and started her career as a software engineer at Google.',
      expertise: ['Product Strategy', 'Team Leadership', 'Market Analysis', 'Roadmap Planning'],
      education: 'MBA Stanford, BS Computer Science MIT',
      languages: ['English', 'Mandarin'],
      languagePreference: 'English',
      gender: 'Female',
      timezone: 'PST (UTC-8)',
      linkedinUrl: 'https://linkedin.com/in/michaelchen',
      instagramUrl: null,
      twitterUrl: null,
      charityWork: 'Mentors underrepresented entrepreneurs through TechStars',
      charityLink: 'https://www.techstars.com/mentors',
      verified: true,
      documentsSubmitted: ['Resume.pdf', 'Portfolio.pdf', 'References.pdf'],
      applicationDate: '2024-03-15',
      status: 'pending'
    },
    {
      id: 2,
      name: 'Sarah Rodriguez',
      email: 'sarah.rodriguez@email.com',
      phone: '+1 (555) 123-7890',
      location: 'Austin, TX',
      hourlyRate: 150,
      title: 'Digital Marketing Director',
      company: 'Rodriguez Marketing',
      industry: 'Marketing & Advertising',
      experience: '8+ years',
      avatar: '/api/placeholder/40/40',
      bio: 'Results-driven marketing professional specializing in digital transformation and growth strategy. Helped 50+ companies scale their marketing operations.',
      expertise: ['Digital Marketing', 'Growth Strategy', 'Brand Development', 'Analytics'],
      education: 'MBA Marketing, University of Texas',
      languages: ['English', 'Spanish'],
      languagePreference: 'Spanish',
      gender: 'Female',
      timezone: 'CST (UTC-6)',
      linkedinUrl: 'https://linkedin.com/in/sarahrodriguez',
      instagramUrl: 'https://instagram.com/sarahmarketingpro',
      twitterUrl: null,
      charityWork: 'Provides free marketing consulting to local nonprofits',
      charityLink: 'https://www.nonprofithelp.org/sarah',
      verified: false,
      documentsSubmitted: ['Resume.pdf', 'Case_Studies.pdf'],
      applicationDate: '2024-03-12',
      status: 'pending'
    }
  ]

  // Enhanced categories
  const categories = [
    {
      id: 1,
      name: 'Business & Startups',
      subcategories: ['Scaling Startups', 'Exit Strategy', 'Fundraising', 'Business Planning'],
      expertCount: 45,
      sessionsCount: 234,
      createdDate: '2024-01-15',
      lastUpdated: '2024-03-10',
      image: '/api/placeholder/60/40',
      status: 'active',
      description: 'Expert guidance for entrepreneurs and business leaders'
    },
    {
      id: 2,
      name: 'Technology & Innovation',
      subcategories: ['AI & Machine Learning', 'Software Development', 'Cybersecurity', 'DevOps'],
      expertCount: 38,
      sessionsCount: 189,
      createdDate: '2024-01-20',
      lastUpdated: '2024-03-08',
      image: '/api/placeholder/60/40',
      status: 'active',
      description: 'Technical expertise and innovation guidance'
    },
    {
      id: 3,
      name: 'Marketing & Sales',
      subcategories: ['Digital Marketing', 'Content Strategy', 'Sales Funnel', 'Brand Development'],
      expertCount: 52,
      sessionsCount: 318,
      createdDate: '2024-01-18',
      lastUpdated: '2024-03-09',
      image: '/api/placeholder/60/40',
      status: 'active',
      description: 'Marketing strategies and sales optimization'
    },
    {
      id: 4,
      name: 'Design & User Experience',
      subcategories: ['UI/UX Design', 'Product Design', 'Brand Identity', 'Design Systems'],
      expertCount: 29,
      sessionsCount: 156,
      createdDate: '2024-01-25',
      lastUpdated: '2024-03-07',
      image: '/api/placeholder/60/40',
      status: 'active',
      description: 'Creative design and user experience guidance'
    },
    {
      id: 5,
      name: 'Finance & Investment',
      subcategories: ['Personal Finance', 'Investment Strategy', 'Corporate Finance', 'Financial Planning'],
      expertCount: 34,
      sessionsCount: 201,
      createdDate: '2024-02-01',
      lastUpdated: '2024-03-05',
      image: '/api/placeholder/60/40',
      status: 'active',
      description: 'Financial planning and investment expertise'
    },
    {
      id: 6,
      name: 'Career & Leadership',
      subcategories: ['Career Development', 'Leadership Skills', 'Team Management', 'Executive Coaching'],
      expertCount: 41,
      sessionsCount: 267,
      createdDate: '2024-02-05',
      lastUpdated: '2024-03-04',
      image: '/api/placeholder/60/40',
      status: 'active',
      description: 'Professional development and leadership coaching'
    },
    {
      id: 7,
      name: 'Health & Wellness',
      subcategories: ['Nutrition Coaching', 'Mental Health', 'Fitness Training', 'Work-Life Balance'],
      expertCount: 26,
      sessionsCount: 142,
      createdDate: '2024-02-10',
      lastUpdated: '2024-03-02',
      image: '/api/placeholder/60/40',
      status: 'active',
      description: 'Health, wellness, and lifestyle coaching'
    },
    {
      id: 8,
      name: 'Creative Arts',
      subcategories: ['Writing & Content', 'Music Production', 'Photography', 'Video Production'],
      expertCount: 22,
      sessionsCount: 98,
      createdDate: '2024-02-15',
      lastUpdated: '2024-03-01',
      image: '/api/placeholder/60/40',
      status: 'active',
      description: 'Creative arts and content creation expertise'
    }
  ]

  // Enhanced withdrawal requests
  const withdrawalRequests = [
    {
      id: '#WD001',
      expertName: 'Dr. Michael Chen',
      expertEmail: 'michael.chen@email.com',
      amount: 1250,
      bankName: 'Chase Bank',
      accountNumber: '****5678',
      routingNumber: '****1234',
      requestDate: '2024-03-01',
      processingDate: '2024-03-03',
      status: 'approved',
      note: 'Monthly earnings withdrawal',
      sessionsCompleted: 8,
      avatar: '/api/placeholder/40/40'
    },
    {
      id: '#WD002',
      expertName: 'Sarah Rodriguez',
      expertEmail: 'sarah.rodriguez@email.com',
      amount: 875,
      bankName: 'Bank of America',
      accountNumber: '****9012',
      routingNumber: '****5678',
      requestDate: '2024-03-05',
      processingDate: null,
      status: 'pending',
      note: 'Bi-weekly withdrawal request',
      sessionsCompleted: 6,
      avatar: '/api/placeholder/40/40'
    },
    {
      id: '#WD003',
      expertName: 'Isabella Martinez',
      expertEmail: 'isabella.martinez@email.com',
      amount: 2150,
      bankName: 'Wells Fargo',
      accountNumber: '****3456',
      routingNumber: '****9876',
      requestDate: '2024-03-08',
      processingDate: null,
      status: 'pending',
      note: 'Weekly earnings withdrawal',
      sessionsCompleted: 12,
      avatar: '/api/placeholder/40/40'
    },
    {
      id: '#WD004',
      expertName: 'James Wilson',
      expertEmail: 'james.wilson@email.com',
      amount: 750,
      bankName: 'Capital One',
      accountNumber: '****7890',
      routingNumber: '****4567',
      requestDate: '2024-03-06',
      processingDate: '2024-03-07',
      status: 'approved',
      note: 'Monthly withdrawal request',
      sessionsCompleted: 5,
      avatar: '/api/placeholder/40/40'
    },
    {
      id: '#WD005',
      expertName: 'Maria Garcia',
      expertEmail: 'maria.garcia@email.com',
      amount: 420,
      bankName: 'TD Bank',
      accountNumber: '****2468',
      routingNumber: '****1357',
      requestDate: '2024-03-04',
      processingDate: null,
      status: 'rejected',
      note: 'Bi-weekly withdrawal',
      sessionsCompleted: 3,
      avatar: '/api/placeholder/40/40'
    },
    {
      id: '#WD006',
      expertName: 'Robert Kim',
      expertEmail: 'robert.kim@email.com',
      amount: 1680,
      bankName: 'PNC Bank',
      accountNumber: '****8024',
      routingNumber: '****6789',
      requestDate: '2024-03-09',
      processingDate: null,
      status: 'pending',
      note: 'Weekly earnings withdrawal',
      sessionsCompleted: 9,
      avatar: '/api/placeholder/40/40'
    }
  ]

  const sidebar = [
    { id: 'stats', label: 'Dashboard', icon: Home },
    { id: 'experts', label: 'Expert Approval', icon: UserCheck },
    { id: 'categories', label: 'Categories', icon: Package },
    { id: 'withdrawals', label: 'Withdrawals', icon: DollarSign },
    { id: 'meetings', label: 'Sessions', icon: Video },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'reviews', label: 'Reviews', icon: Star },
    { id: 'settings', label: 'Settings', icon: Settings }
  ]

  // Sample session data for admin view
  const adminSessions = {
    upcoming: [
      {
        id: 1,
        expertName: 'Dr. Michael Chen',
        expertTitle: 'Product Strategy Expert',
        date: 'Tomorrow',
        time: '2:00 PM',
        duration: '60 min',
        topic: 'Product Roadmap Review',
        cost: '$200',
        avatar: '/api/placeholder/40/40',
        expertImage: '/api/placeholder/300/120',
        category: 'Strategy',
        userName: 'Sarah Johnson',
        userAvatar: '/api/placeholder/30/30'
      },
      {
        id: 2,
        expertName: 'Emily Rodriguez',
        expertTitle: 'UX Design Lead',
        date: 'Nov 8',
        time: '10:00 AM',
        duration: '90 min',
        topic: 'Design System Workshop',
        cost: '$270',
        avatar: '/api/placeholder/40/40',
        expertImage: '/api/placeholder/300/120',
        category: 'Design',
        userName: 'Mark Thompson',
        userAvatar: '/api/placeholder/30/30'
      },
      {
        id: 3,
        expertName: 'James Park',
        expertTitle: 'Technical Lead',
        date: 'Nov 10',
        time: '4:00 PM',
        duration: '45 min',
        topic: 'Code Review Session',
        cost: '$150',
        avatar: '/api/placeholder/40/40',
        expertImage: '/api/placeholder/300/120',
        category: 'Development',
        userName: 'Lisa Chen',
        userAvatar: '/api/placeholder/30/30'
      }
    ],
    past: [
      {
        id: 4,
        expertName: 'Dr. Amanda White',
        expertTitle: 'Business Strategy Consultant',
        date: 'Nov 2',
        duration: '60 min',
        topic: 'Market Analysis Discussion',
        cost: '$220',
        rating: 5.0,
        avatar: '/api/placeholder/40/40',
        expertImage: '/api/placeholder/300/120',
        category: 'Business',
        userName: 'David Wilson',
        userAvatar: '/api/placeholder/30/30'
      },
      {
        id: 5,
        expertName: 'Carlos Martinez',
        expertTitle: 'Marketing Expert',
        date: 'Oct 28',
        duration: '75 min',
        topic: 'Brand Strategy Session',
        cost: '$300',
        rating: 4.8,
        avatar: '/api/placeholder/40/40',
        expertImage: '/api/placeholder/300/120',
        category: 'Marketing',
        userName: 'Jessica Adams',
        userAvatar: '/api/placeholder/30/30'
      },
      {
        id: 6,
        expertName: 'Rachel Kim',
        expertTitle: 'Data Science Expert',
        date: 'Oct 25',
        duration: '90 min',
        topic: 'Analytics Implementation',
        cost: '$350',
        rating: 4.9,
        avatar: '/api/placeholder/40/40',
        expertImage: '/api/placeholder/300/120',
        category: 'Analytics',
        userName: 'Tom Rodriguez',
        userAvatar: '/api/placeholder/30/30'
      },
      {
        id: 7,
        expertName: 'Alex Turner',
        expertTitle: 'Financial Advisor',
        date: 'Oct 20',
        duration: '60 min',
        topic: 'Investment Strategy Review',
        cost: '$280',
        rating: 4.7,
        avatar: '/api/placeholder/40/40',
        expertImage: '/api/placeholder/300/120',
        category: 'Finance',
        userName: 'Emma Davis',
        userAvatar: '/api/placeholder/30/30'
      }
    ]
  }

  // Sample user data for admin management
  const adminUsers = [
    {
      id: 1,
      fullName: 'Sarah Johnson',
      email: 'sarah.johnson@email.com',
      avatar: '/api/placeholder/40/40',
      activeSince: 'Jan 15, 2024',
      sessionsCompleted: 12,
      billedAmount: 2400,
      status: 'active'
    },
    {
      id: 2,
      fullName: 'Mark Thompson',
      email: 'mark.thompson@email.com',
      avatar: '/api/placeholder/40/40',
      activeSince: 'Feb 3, 2024',
      sessionsCompleted: 8,
      billedAmount: 1680,
      status: 'active'
    },
    {
      id: 3,
      fullName: 'Lisa Chen',
      email: 'lisa.chen@email.com',
      avatar: '/api/placeholder/40/40',
      activeSince: 'Mar 22, 2024',
      sessionsCompleted: 15,
      billedAmount: 3200,
      status: 'active'
    },
    {
      id: 4,
      fullName: 'David Wilson',
      email: 'david.wilson@email.com',
      avatar: '/api/placeholder/40/40',
      activeSince: 'Dec 8, 2023',
      sessionsCompleted: 22,
      billedAmount: 4580,
      status: 'active'
    },
    {
      id: 5,
      fullName: 'Jessica Adams',
      email: 'jessica.adams@email.com',
      avatar: '/api/placeholder/40/40',
      activeSince: 'Apr 10, 2024',
      sessionsCompleted: 6,
      billedAmount: 1350,
      status: 'active'
    },
    {
      id: 6,
      fullName: 'Tom Rodriguez',
      email: 'tom.rodriguez@email.com',
      avatar: '/api/placeholder/40/40',
      activeSince: 'May 18, 2024',
      sessionsCompleted: 3,
      billedAmount: 720,
      status: 'inactive'
    },
    {
      id: 7,
      fullName: 'Emma Davis',
      email: 'emma.davis@email.com',
      avatar: '/api/placeholder/40/40',
      activeSince: 'Jun 5, 2024',
      sessionsCompleted: 9,
      billedAmount: 1980,
      status: 'active'
    },
    {
      id: 8,
      fullName: 'Michael Brown',
      email: 'michael.brown@email.com',
      avatar: '/api/placeholder/40/40',
      activeSince: 'Aug 14, 2024',
      sessionsCompleted: 4,
      billedAmount: 850,
      status: 'active'
    }
  ]

  // Sample review data for admin view
  const adminReviews = [
    {
      studentName: 'Harry Brooks',
      studentEmail: 'brooks@gmail.com',
      studentAvatar: '/api/placeholder/40/40',
      expertName: 'Dr. Michael Chen',
      expertTitle: 'Product Strategy Expert',
      expertAvatar: '/api/placeholder/30/30',
      rating: 5,
      review: 'The session was extremely insightful. The expert broke down complex topics into simple, actionable steps.',
      date: '3rd Nov 2024'
    },
    {
      studentName: 'Isabella Grace Harrington',
      studentEmail: 'isabell209@gmail.com',
      studentAvatar: '/api/placeholder/40/40',
      expertName: 'Emily Rodriguez',
      expertTitle: 'UX Design Lead',
      expertAvatar: '/api/placeholder/30/30',
      rating: 4,
      review: 'I really appreciated the patience and clarity. I left the call with a clear roadmap.',
      date: '4th Nov 2024'
    },
    {
      studentName: 'Sophia Martinez',
      studentEmail: 'martinez999@gmail.com',
      studentAvatar: '/api/placeholder/40/40',
      expertName: 'James Park',
      expertTitle: 'Technical Lead',
      expertAvatar: '/api/placeholder/30/30',
      rating: 4,
      review: 'Highly professional and knowledgeable. Definitely booking another session soon.',
      date: '5th Nov 2024'
    },
    {
      studentName: 'Robin Grace Harrington',
      studentEmail: 'grace007@gmail.com',
      studentAvatar: '/api/placeholder/40/40',
      expertName: 'Dr. Amanda White',
      expertTitle: 'Business Strategy Consultant',
      expertAvatar: '/api/placeholder/30/30',
      rating: 4,
      review: 'Felt like talking to a mentor who genuinely cared about my growth.',
      date: '5th Nov 2024'
    },
    {
      studentName: 'Emily Carter',
      studentEmail: 'emily456@gmail.com',
      studentAvatar: '/api/placeholder/40/40',
      expertName: 'Carlos Martinez',
      expertTitle: 'Marketing Expert',
      expertAvatar: '/api/placeholder/30/30',
      rating: 3,
      review: 'The expert gave me practical advice that I could apply the same day.',
      date: '6th Nov 2024'
    },
    {
      studentName: 'Sophie Grace Harrington',
      studentEmail: 'sophie889@gmail.com',
      studentAvatar: '/api/placeholder/40/40',
      expertName: 'Rachel Kim',
      expertTitle: 'Data Science Expert',
      expertAvatar: '/api/placeholder/30/30',
      rating: 5,
      review: 'Super easy to understand and very encouraging throughout the session.',
      date: '6th Nov 2024'
    },
    {
      studentName: 'Alex Johnson',
      studentEmail: 'alex.johnson@email.com',
      studentAvatar: '/api/placeholder/40/40',
      expertName: 'Alex Turner',
      expertTitle: 'Financial Advisor',
      expertAvatar: '/api/placeholder/30/30',
      rating: 5,
      review: 'Excellent insights on investment strategies. Very detailed and practical advice.',
      date: '7th Nov 2024'
    }
  ]

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()
  }

  const approveExpert = (expertId) => {
    console.log('Approving expert:', expertId)
    // Add approval logic here
  }

  const rejectExpert = (expertId) => {
    console.log('Rejecting expert:', expertId)
    // Add rejection logic here
  }

  const viewExpertProfile = (expert) => {
    setSelectedExpert(expert)
    setShowExpertDetail(true)
  }

  const approveWithdrawal = (withdrawalId) => {
    console.log('Approving withdrawal:', withdrawalId)
    // Add approval logic here
  }

  const rejectWithdrawal = (withdrawalId) => {
    console.log('Rejecting withdrawal:', withdrawalId)
    // Add rejection logic here
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
          {/* Sidebar Header */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center font-bold text-sm">
                T
              </div>
              <div>
                <h1 className="text-sm font-semibold text-black">TapTime</h1>
                <p className="text-xs text-gray-500">Admin Panel</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex-1 p-4">
            <nav className="space-y-1">
              {sidebar.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 ${
                      activeTab === item.id
                        ? 'bg-[#efffba] text-black font-medium shadow-sm'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-black'
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${activeTab === item.id ? 'text-black' : ''}`} />
                    <span>{item.label}</span>
                  </button>
                )
              })}
            </nav>
          </div>

          {/* Sidebar Footer - Admin Profile */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center gap-3">
              <Avatar className="w-9 h-9">
                <AvatarImage src="/api/placeholder/36/36" alt="Admin" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="text-sm font-medium text-black">Admin</p>
                <p className="text-xs text-gray-500">admin@taptime.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          {/* Expert Detail View - Matching Public Profile Style */}
          {currentView === 'expert-detail' && selectedExpert && (
            <div className="space-y-6">
              {/* Header with Decision Actions */}
              <div className="flex items-center justify-between">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setCurrentView('main')}
                >
                  ←
                </Button>
                
                <div className="flex items-center gap-3">
                  <Button 
                    className="bg-green-600 hover:bg-green-700"
                    onClick={() => {
                      approveExpert(selectedExpert.id)
                      setCurrentView('main')
                    }}
                  >
                    <Check className="w-4 h-4 mr-2" />
                    Approve Expert
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-red-200 text-red-600 hover:bg-red-50"
                    onClick={() => {
                      rejectExpert(selectedExpert.id)
                      setCurrentView('main')
                    }}
                  >
                    <X className="w-4 h-4 mr-2" />
                    Reject
                  </Button>
                  <Button variant="ghost" onClick={() => console.log('Request more info')}>
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Request Info
                  </Button>
                </div>
              </div>

              {/* Main Profile Section - Exact Public Profile Layout */}
              <section className="py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  
                  {/* Left Side - Photo */}
                  <div className="lg:col-span-1">
                    <div className="relative">
                      <div className="w-full aspect-square rounded-2xl overflow-hidden bg-gray-100 border">
                        <Avatar className="w-full h-full rounded-2xl">
                          <AvatarImage src={selectedExpert.avatar} alt={selectedExpert.name} className="object-cover" />
                          <AvatarFallback className="text-6xl font-medium text-gray-600 rounded-2xl">
                            {getInitials(selectedExpert.name)}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Info */}
                  <div className="lg:col-span-2 space-y-8">

                    {/* Name with Admin Badge */}
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h1 className="text-2xl md:text-3xl font-medium tracking-tight">{selectedExpert.name}</h1>
                        <Badge variant="outline" className="border-red-500 text-red-600 bg-red-50 px-2 py-1 rounded-full">
                          Admin Review
                        </Badge>
                      </div>
                      
                      {/* Title */}
                      <h2 className="text-lg text-muted-foreground font-normal mt-1">{selectedExpert.title}</h2>
                    </div>

                    {/* Rating Placeholder */}
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-gray-300 text-gray-300" />
                          <span className="text-sm font-medium text-gray-400">Pending approval</span>
                        </div>
                      </div>
                    </div>

                    {/* Details Table - Matching Public Profile */}
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-y-3 text-sm">
                        <div className="text-muted-foreground">Category</div>
                        <div>
                          <Badge variant="secondary" className="bg-gray-100 text-black">
                            {selectedExpert.industry}
                          </Badge>
                        </div>
                        
                        <div className="text-muted-foreground">Location</div>
                        <div>{selectedExpert.location}</div>
                        
                        <div className="text-muted-foreground">Languages</div>
                        <div>{selectedExpert.languages.join(', ')}</div>
                        
                        <div className="text-muted-foreground">Experience</div>
                        <div>{selectedExpert.experience}</div>
                        
                        <div className="text-muted-foreground">Donating to charity</div>
                        <div>
                          {selectedExpert.charityLink ? (
                            <a href={selectedExpert.charityLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm flex items-center gap-1">
                              Code for education
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          ) : (
                            <span className="text-sm">{selectedExpert.charityWork}</span>
                          )}
                        </div>
                        
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-3">
                      <div className="text-sm font-medium">Verification</div>
                      <div className="flex items-center gap-2">
                        {selectedExpert.linkedinUrl ? (
                          <a href={selectedExpert.linkedinUrl} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                            <Linkedin className="w-4 h-4 text-white" fill="currentColor" />
                          </a>
                        ) : (
                          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                            <Linkedin className="w-4 h-4 text-gray-500" fill="currentColor" />
                          </div>
                        )}
                        {selectedExpert.instagramUrl ? (
                          <a href={selectedExpert.instagramUrl} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                            <Instagram className="w-4 h-4 text-white" fill="currentColor" />
                          </a>
                        ) : (
                          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                            <Instagram className="w-4 h-4 text-gray-500" fill="currentColor" />
                          </div>
                        )}
                        {selectedExpert.twitterUrl ? (
                          <a href={selectedExpert.twitterUrl} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                            <Twitter className="w-4 h-4 text-white" fill="currentColor" />
                          </a>
                        ) : (
                          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                            <Twitter className="w-4 h-4 text-gray-500" fill="currentColor" />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-3 p-4 bg-gray-50 rounded-lg">
                      <div className="text-sm font-medium">Contact Information</div>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-muted-foreground" />
                          <span>{selectedExpert.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-muted-foreground" />
                          <span>{selectedExpert.phone}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Industries and Expertise */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-6 border-2 border-gray-200 rounded-2xl">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                            <Building className="w-4 h-4" />
                          </div>
                          <h3 className="text-lg font-semibold">Industries</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          Business & Startups, SaaS & Cloud Computing, Entrepreneurship
                        </p>
                      </div>
                      
                      <div className="p-6 border-2 border-gray-200 rounded-2xl">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                            <Target className="w-4 h-4" />
                          </div>
                          <h3 className="text-lg font-semibold">Expertise</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          Startup Strategy & Scaling, Product-Market Fit, Fundraising (Seed to Series C), Team Building & Hiring, Go-to-Market Strategy, SaaS Business Models, Product Development, Investor Relations
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Tab Navigation */}
              <div className="flex space-x-1 border-b">
                {[
                  { id: 'about', label: 'About' },
                  { id: 'packages', label: 'Packages' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setExpertDetailTab(tab.id)}
                    className={`px-6 py-3 font-medium transition-colors border-b-2 ${
                      expertDetailTab === tab.id
                        ? 'border-black text-foreground'
                        : 'border-transparent text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="py-6">
                {/* About Tab */}
                {expertDetailTab === 'about' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-medium mb-4">About</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {selectedExpert.bio}
                      </p>
                    </div>
                  </div>
                )}

                {/* Packages Tab */}
                {expertDetailTab === 'packages' && (
                  <div className="space-y-6">
                    {/* General Consultation Status */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">General Consultation</h4>
                          <p className="text-sm text-muted-foreground">Standard 1-hour consultation sessions</p>
                        </div>
                        <Badge variant="default" className="bg-green-100 text-green-800">
                          Enabled
                        </Badge>
                      </div>
                    </div>
                    
                    {/* Custom Packages */}
                    <div>
                      <h3 className="text-lg font-medium mb-4">Custom Packages</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {(samplePackages[selectedExpert.id] || []).map((pkg) => (
                          <div key={pkg.id} className="border rounded-lg p-6">
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <h4 className="font-semibold text-lg">{pkg.name}</h4>
                                <p className="text-sm text-muted-foreground">{pkg.duration}</p>
                              </div>
                              <div className="text-2xl font-bold">${pkg.price}</div>
                            </div>
                            
                            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{pkg.description}</p>
                            
                            <div>
                              <div className="text-sm font-medium mb-2">Includes:</div>
                              <ul className="text-sm space-y-1">
                                {pkg.includes.map((item, index) => (
                                  <li key={index} className="flex items-center gap-2">
                                    <Check className="w-3 h-3 text-green-600" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ))}
                        
                        {(!samplePackages[selectedExpert.id] || samplePackages[selectedExpert.id].length === 0) && (
                          <div className="col-span-2 text-center py-12 text-muted-foreground">
                            <Package className="w-12 h-12 mx-auto mb-3 opacity-50" />
                            <p>No custom packages submitted yet</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

              </div>

              {/* Decision Actions */}
              <div className="border-t pt-6">
                <div className="flex items-center justify-between bg-gray-50 p-6 rounded-lg">
                  <div>
                    <h3 className="font-semibold mb-1">Application Decision</h3>
                    <p className="text-sm text-muted-foreground">Review complete - ready to make decision</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button 
                      className="bg-green-600 hover:bg-green-700"
                      onClick={() => {
                        approveExpert(selectedExpert.id)
                        setCurrentView('main')
                      }}
                    >
                      <Check className="w-4 h-4 mr-2" />
                      Approve Expert
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-red-200 text-red-600 hover:bg-red-50"
                      onClick={() => {
                        rejectExpert(selectedExpert.id)
                        setCurrentView('main')
                      }}
                    >
                      <X className="w-4 h-4 mr-2" />
                      Reject
                    </Button>
                    <Button variant="ghost" onClick={() => console.log('Request more info')}>
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Request Info
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Main Dashboard Content */}
          {currentView === 'main' && (
            <>
              {/* Statistics Dashboard */}
              {activeTab === 'stats' && (
                <div className="space-y-8">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                  <p className="text-muted-foreground mt-1">Overview of your platform performance</p>
                </div>
                <div className="flex items-center gap-3">
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Export
                  </Button>
                  <Button size="sm">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Widget
                  </Button>
                </div>
              </div>
                
              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="border border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-muted-foreground">Total Users</p>
                        <div className="flex items-baseline gap-2">
                          <p className="text-3xl font-bold">{platformStats.totalUsers.toLocaleString()}</p>
                          <div className="flex items-center text-emerald-600">
                            <ArrowUp className="w-3 h-3" />
                            <span className="text-xs font-medium">12%</span>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground">+20 from yesterday</p>
                      </div>
                      <div className="p-2 bg-blue-50 rounded-lg">
                        <Users className="w-5 h-5 text-blue-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-muted-foreground">Active Experts</p>
                        <div className="flex items-baseline gap-2">
                          <p className="text-3xl font-bold">{platformStats.activeExperts.toLocaleString()}</p>
                          <div className="flex items-center text-emerald-600">
                            <ArrowUp className="w-3 h-3" />
                            <span className="text-xs font-medium">8%</span>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground">+12 from yesterday</p>
                      </div>
                      <div className="p-2 bg-purple-50 rounded-lg">
                        <Crown className="w-5 h-5 text-purple-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-muted-foreground">Total Sessions</p>
                        <div className="flex items-baseline gap-2">
                          <p className="text-3xl font-bold">{platformStats.totalMeetings.toLocaleString()}</p>
                          <div className="flex items-center text-emerald-600">
                            <ArrowUp className="w-3 h-3" />
                            <span className="text-xs font-medium">15%</span>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground">+47 from yesterday</p>
                      </div>
                      <div className="p-2 bg-green-50 rounded-lg">
                        <Video className="w-5 h-5 text-green-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-muted-foreground">Revenue</p>
                        <div className="flex items-baseline gap-2">
                          <p className="text-3xl font-bold">${platformStats.totalAmount}K</p>
                          <div className="flex items-center text-emerald-600">
                            <ArrowUp className="w-3 h-3" />
                            <span className="text-xs font-medium">22%</span>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground">+$2.4K from yesterday</p>
                      </div>
                      <div className="p-2 bg-orange-50 rounded-lg">
                        <DollarSign className="w-5 h-5 text-orange-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2 border border-border">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg font-semibold">Revenue Analytics</CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">Monthly revenue and profit trends</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        Last 8 months
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="h-72">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={profitData}>
                          <XAxis 
                            dataKey="month" 
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 12 }}
                            className="text-muted-foreground"
                          />
                          <YAxis 
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 12 }}
                            className="text-muted-foreground"
                          />
                          <Area 
                            type="monotone" 
                            dataKey="revenue" 
                            stackId="1" 
                            stroke="#3b82f6" 
                            fill="#3b82f6" 
                            fillOpacity={0.1}
                            strokeWidth={2}
                          />
                          <Area 
                            type="monotone" 
                            dataKey="profit" 
                            stackId="1" 
                            stroke="#22c55e" 
                            fill="#22c55e" 
                            fillOpacity={0.2}
                            strokeWidth={2}
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="flex items-center gap-6 mt-4 pt-4 border-t">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="text-sm font-medium">Revenue</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-sm font-medium">Profit</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-border">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg font-semibold">Experts by Category</CardTitle>
                    <p className="text-sm text-muted-foreground">Number of active experts per category</p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      {categories.map((category, index) => (
                        <div key={index} className="flex items-center justify-between group">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                            <span className="text-sm font-medium group-hover:text-foreground transition-colors">{category.name}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-20 h-1.5 bg-muted rounded-full overflow-hidden">
                              <div 
                                className="h-full rounded-full transition-all duration-500 bg-blue-500" 
                                style={{ width: `${(category.expertCount / Math.max(...categories.map(c => c.expertCount))) * 100}%` }}
                              ></div>
                            </div>
                            <span className="text-sm font-medium text-muted-foreground min-w-[3rem] text-right">{category.expertCount}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button variant="ghost" className="w-full mt-4 text-sm" size="sm">
                      View all categories
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card 
                  className="border border-border hover:shadow-md transition-shadow cursor-pointer" 
                  onClick={() => setActiveTab('experts')}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <UserCheck className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Expert Applications</h3>
                        <p className="text-sm text-muted-foreground">Review pending applications</p>
                        <Badge variant="secondary" className="mt-1">{expertRequests.length} pending</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card 
                  className="border border-border hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => setActiveTab('withdrawals')}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-green-50 rounded-lg">
                        <DollarSign className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Withdrawal Requests</h3>
                        <p className="text-sm text-muted-foreground">Process payment requests</p>
                        <Badge variant="secondary" className="mt-1">{withdrawalRequests.filter(w => w.status === 'pending').length} pending</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card 
                  className="border border-border hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => setActiveTab('categories')}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-purple-50 rounded-lg">
                        <Package className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Category Management</h3>
                        <p className="text-sm text-muted-foreground">Manage platform categories</p>
                        <Badge variant="secondary" className="mt-1">{categories.length} categories</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* Expert Approval */}
          {activeTab === 'experts' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">Expert Applications</h2>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary">{expertRequests.length} pending</Badge>
                  <Button onClick={() => console.log('Export list')}>
                    <Download className="w-4 h-4 mr-2" />
                    Export
                  </Button>
                </div>
              </div>

              {/* Status Tabs */}
              <div className="flex space-x-1">
                {['requests', 'approved', 'rejected'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setExpertApprovalTab(tab)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      expertApprovalTab === tab
                        ? 'bg-black text-white'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              {/* Expert Table */}
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Applications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b text-left">
                          <th className="pb-4 pt-2 font-semibold text-foreground w-1/4">Expert</th>
                          <th className="pb-4 pt-2 font-semibold text-foreground w-1/5">Title</th>
                          <th className="pb-4 pt-2 font-semibold text-foreground w-1/5">Industry</th>
                          <th className="pb-4 pt-2 font-semibold text-foreground w-1/6">Verification</th>
                          <th className="pb-4 pt-2 font-semibold text-foreground w-1/6">View</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        {expertRequests.map((expert) => (
                          <tr key={expert.id} className="hover:bg-gray-50/50 transition-colors">
                            <td className="py-5">
                              <div className="flex items-start gap-3">
                                <Avatar className="w-12 h-12 border">
                                  <AvatarImage src={expert.avatar} alt={expert.name} />
                                  <AvatarFallback className="font-semibold">{getInitials(expert.name)}</AvatarFallback>
                                </Avatar>
                                <div>
                                  <div className="font-semibold text-base">{expert.name}</div>
                                  <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                                    <MapPin className="w-3 h-3" />
                                    <span>{expert.location}</span>
                                  </div>
                                  <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                                    <Users className="w-3 h-3" />
                                    <span>{expert.gender} • {expert.languagePreference}</span>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="py-5">
                              <div>
                                <div className="font-medium text-sm mb-1">{expert.title}</div>
                                <p className="text-xs text-muted-foreground line-clamp-1">
                                  {expert.bio.length > 60 ? expert.bio.substring(0, 60) + '...' : expert.bio}
                                </p>
                              </div>
                            </td>
                            <td className="py-5">
                              <div className="text-sm">
                                <Badge variant="secondary" className="bg-gray-100 text-black">
                                  {expert.industry}
                                </Badge>
                              </div>
                            </td>
                            <td className="py-5">
                              <div className="flex items-center gap-2">
                                {expert.linkedinUrl ? (
                                  <a href={expert.linkedinUrl} target="_blank" rel="noopener noreferrer" className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700">
                                    <Linkedin className="w-4 h-4 text-white" fill="currentColor" />
                                  </a>
                                ) : (
                                  <div className="w-7 h-7 bg-gray-300 rounded-full flex items-center justify-center">
                                    <Linkedin className="w-4 h-4 text-gray-500" fill="currentColor" />
                                  </div>
                                )}
                                
                                {expert.instagramUrl ? (
                                  <a href={expert.instagramUrl} target="_blank" rel="noopener noreferrer" className="w-7 h-7 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700">
                                    <Instagram className="w-4 h-4 text-white" fill="currentColor" />
                                  </a>
                                ) : (
                                  <div className="w-7 h-7 bg-gray-300 rounded-full flex items-center justify-center">
                                    <Instagram className="w-4 h-4 text-gray-500" fill="currentColor" />
                                  </div>
                                )}
                              </div>
                            </td>
                            <td className="py-5">
                              <Button 
                                size="sm" 
                                variant="outline"
                                onClick={() => {
                                  setSelectedExpert(expert)
                                  setCurrentView('expert-detail')
                                }}
                              >
                                <Eye className="w-4 h-4 mr-2" />
                                View Profile
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Categories Management */}
          {activeTab === 'categories' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">Categories</h2>
                <Button onClick={() => setShowAddCategory(true)}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Category
                </Button>
              </div>

              {/* Categories List - Shopify Style */}

              <Card className="border-2">
                <CardContent className="p-0">
                  <div className="divide-y">
                    {categories.map((category) => (
                      <div key={category.id} className="flex items-center justify-between p-4 hover:bg-gray-50 group">
                        <div className="flex items-center gap-4 flex-1">
                          <div className="w-8 h-8 bg-gray-100 rounded border flex items-center justify-center text-xs font-medium text-gray-600">
                            {category.name.split(' ').map(word => word[0]).join('').toUpperCase()}
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-foreground">{category.name}</div>
                            <div className="text-sm text-muted-foreground">{category.expertCount} active experts</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => {
                              setSelectedCategory(category)
                              setCurrentView('category-detail')
                            }}
                          >
                            Manage
                          </Button>
                          <Button 
                            size="sm" 
                            variant="ghost"
                            onClick={() => console.log('Remove category:', category.id)}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Add subcategories note */}
              <div className="text-center py-8 text-muted-foreground text-sm">
                Click "Manage" next to any category to add or remove subcategories
              </div>
            </div>
          )}

          {/* Withdrawals */}
          {activeTab === 'withdrawals' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">Withdrawal Requests</h2>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary">{withdrawalRequests.filter(w => w.status === 'pending').length} pending</Badge>
                  <Button>
                    <Download className="w-4 h-4 mr-2" />
                    Export
                  </Button>
                </div>
              </div>

              {/* Status Tabs */}
              <div className="flex space-x-1">
                {['pending', 'approved', 'rejected'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setWithdrawalTab(tab)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      withdrawalTab === tab
                        ? 'bg-black text-white'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              {/* Withdrawals Table */}
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Withdrawal Requests</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b text-left">
                          <th className="pb-3 font-medium text-muted-foreground">Expert</th>
                          <th className="pb-3 font-medium text-muted-foreground">Amount</th>
                          <th className="pb-3 font-medium text-muted-foreground">Bank Details</th>
                          <th className="pb-3 font-medium text-muted-foreground">Request Date</th>
                          <th className="pb-3 font-medium text-muted-foreground">Status</th>
                          <th className="pb-3 font-medium text-muted-foreground text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        {withdrawalRequests.map((request) => (
                          <tr key={request.id} className="hover:bg-gray-50 cursor-pointer" onClick={() => {
                            setSelectedWithdrawal(request)
                            setCurrentView('withdrawal-detail')
                          }}>
                            <td className="py-4">
                              <div className="flex items-center gap-3">
                                <Avatar className="w-10 h-10">
                                  <AvatarImage src={request.avatar} alt={request.expertName} />
                                  <AvatarFallback>{getInitials(request.expertName)}</AvatarFallback>
                                </Avatar>
                                <div>
                                  <div className="font-medium">{request.expertName}</div>
                                  <div className="text-sm text-muted-foreground">{request.expertEmail}</div>
                                </div>
                              </div>
                            </td>
                            <td className="py-4">
                              <div className="font-semibold text-lg">${request.amount}</div>
                            </td>
                            <td className="py-4 text-sm">
                              <div>{request.bankName}</div>
                              <div className="text-muted-foreground">{request.accountNumber}</div>
                            </td>
                            <td className="py-4 text-sm">{new Date(request.requestDate).toLocaleDateString()}</td>
                            <td className="py-4">
                              <Badge 
                                variant={request.status === 'approved' ? 'default' : request.status === 'pending' ? 'secondary' : 'destructive'}
                                className={request.status === 'approved' ? 'bg-green-100 text-green-800' : request.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}
                              >
                                {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                              </Badge>
                            </td>
                            <td className="py-4 text-right">
                              <Button 
                                size="sm" 
                                variant="outline"
                                onClick={(e) => { 
                                  e.stopPropagation(); 
                                  setSelectedWithdrawal(request);
                                  setCurrentView('withdrawal-detail');
                                }}
                              >
                                <Eye className="w-4 h-4 mr-1" />
                                View
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Sessions Tab */}
          {activeTab === 'meetings' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">Sessions</h2>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary">{adminSessions.upcoming.length} upcoming</Badge>
                  <Badge variant="outline">{adminSessions.past.length} completed</Badge>
                </div>
              </div>

              {/* Session Tabs */}
              <div className="flex space-x-1">
                {[
                  { id: 'upcoming', label: 'Upcoming' },
                  { id: 'past', label: 'Past Sessions' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setSessionTab(tab.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      sessionTab === tab.id
                        ? 'bg-black text-white'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Sessions Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {(sessionTab === 'upcoming' ? adminSessions.upcoming : adminSessions.past).map((session) => (
                  <Card 
                    key={session.id} 
                    className="border-2 hover:shadow-lg transition-all duration-300 h-full"
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
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-white text-gray-800 border">
                          {session.category}
                        </Badge>
                      </div>

                      {sessionTab === 'past' && session.rating && (
                        <div className="absolute top-3 right-3">
                          <div className="flex items-center gap-1 bg-white/90 px-2 py-1 rounded-full">
                            <Star className="w-3 h-3 text-yellow-500 fill-current" />
                            <span className="text-xs font-medium">{session.rating}</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Session Content */}
                    <CardContent className="p-4 space-y-3">
                      {/* Expert Info */}
                      <div className="flex items-start gap-3">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={session.avatar} alt={session.expertName} />
                          <AvatarFallback>{session.expertName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-sm truncate">{session.expertName}</h3>
                          <p className="text-xs text-muted-foreground">{session.expertTitle}</p>
                        </div>
                      </div>

                      {/* Session Details */}
                      <div className="space-y-2">
                        <h4 className="font-medium text-sm line-clamp-2">{session.topic}</h4>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>{session.date}</span>
                          </div>
                          {sessionTab === 'upcoming' && (
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              <span>{session.time}</span>
                            </div>
                          )}
                          <div className="flex items-center gap-1">
                            <Video className="w-3 h-3" />
                            <span>{session.duration}</span>
                          </div>
                        </div>
                      </div>

                      {/* User Info */}
                      <div className="flex items-center gap-2 pt-2 border-t">
                        <Avatar className="w-6 h-6">
                          <AvatarImage src={session.userAvatar} alt={session.userName} />
                          <AvatarFallback className="text-xs">{session.userName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <span className="text-xs text-muted-foreground">with {session.userName}</span>
                        <div className="ml-auto text-xs font-medium">{session.cost}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Empty State */}
              {(sessionTab === 'upcoming' ? adminSessions.upcoming : adminSessions.past).length === 0 && (
                <div className="text-center py-12 text-muted-foreground">
                  <Video className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p>No {sessionTab} sessions found</p>
                </div>
              )}
            </div>
          )}

          {/* Users Tab */}
          {activeTab === 'users' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">User Management</h2>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary">{adminUsers.length} total users</Badge>
                  <Badge variant="outline">{adminUsers.filter(u => u.status === 'active').length} active</Badge>
                </div>
              </div>

              {/* Users Table */}
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Platform Users</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b text-left">
                          <th className="pb-3 font-medium text-muted-foreground">Full Name</th>
                          <th className="pb-3 font-medium text-muted-foreground">Email Address</th>
                          <th className="pb-3 font-medium text-muted-foreground">Active Since</th>
                          <th className="pb-3 font-medium text-muted-foreground">Sessions Completed</th>
                          <th className="pb-3 font-medium text-muted-foreground">Billed Amount</th>
                          <th className="pb-3 font-medium text-muted-foreground text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        {adminUsers.map((user) => (
                          <tr key={user.id} className="hover:bg-gray-50">
                            <td className="py-4">
                              <div className="flex items-center gap-3">
                                <Avatar className="w-10 h-10">
                                  <AvatarImage src={user.avatar} alt={user.fullName} />
                                  <AvatarFallback>{getInitials(user.fullName)}</AvatarFallback>
                                </Avatar>
                                <div>
                                  <div className="font-medium">{user.fullName}</div>
                                </div>
                              </div>
                            </td>
                            <td className="py-4 text-sm">{user.email}</td>
                            <td className="py-4 text-sm">{user.activeSince}</td>
                            <td className="py-4 text-center">
                              <div className="font-medium">{user.sessionsCompleted}</div>
                            </td>
                            <td className="py-4">
                              <div className="font-semibold text-lg">${user.billedAmount.toLocaleString()}</div>
                            </td>
                            <td className="py-4 text-right">
                              <Button 
                                size="sm" 
                                variant="ghost"
                                className="text-gray-600 hover:text-gray-700 hover:bg-gray-50"
                                onClick={() => {
                                  if (confirm(`Are you sure you want to delete ${user.fullName}?`)) {
                                    console.log('Deleting user:', user.id);
                                  }
                                }}
                              >
                                <MoreHorizontal className="w-4 h-4" />
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Reviews Tab */}
          {activeTab === 'reviews' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">Reviews</h2>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary">{adminReviews.length} total reviews</Badge>
                  <Badge variant="outline">
                    4.7 avg rating
                  </Badge>
                </div>
              </div>

              {/* Review Stats */}
              <div className="grid grid-cols-2 gap-6">
                {/* Total Reviews */}
                <Card className="border-2">
                  <CardContent className="p-6">
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Total Reviews</h3>
                    <div className="text-3xl font-bold text-green-600 mb-1">{adminReviews.length}</div>
                    <p className="text-sm text-muted-foreground">Number of reviews of all time</p>
                  </CardContent>
                </Card>
                {/* Average Ratings */}
                <Card className="border-2">
                  <CardContent className="p-6">
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Average ratings</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-3xl font-bold text-green-600">4.7</span>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-5 h-5 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">Based on all platform reviews</p>
                  </CardContent>
                </Card>
              </div>

              {/* Reviews Table */}
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Recent Reviews</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b text-left">
                          <th className="p-4 text-sm font-medium text-muted-foreground">Student</th>
                          <th className="p-4 text-sm font-medium text-muted-foreground">Expert</th>
                          <th className="p-4 text-sm font-medium text-muted-foreground">Ratings & Reviews</th>
                          <th className="p-4 text-sm font-medium text-muted-foreground">Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {adminReviews.map((review, index) => (
                          <tr key={index} className="border-b hover:bg-gray-50">
                            <td className="p-4">
                              <div className="flex items-center gap-3">
                                <Avatar className="w-10 h-10">
                                  <AvatarImage src={review.studentAvatar} alt={review.studentName} />
                                  <AvatarFallback>{getInitials(review.studentName)}</AvatarFallback>
                                </Avatar>
                                <div>
                                  <div className="font-medium">{review.studentName}</div>
                                  <div className="text-sm text-muted-foreground">{review.studentEmail}</div>
                                </div>
                              </div>
                            </td>
                            <td className="p-4">
                              <div className="flex items-center gap-3">
                                <Avatar className="w-8 h-8">
                                  <AvatarImage src={review.expertAvatar} alt={review.expertName} />
                                  <AvatarFallback>{getInitials(review.expertName)}</AvatarFallback>
                                </Avatar>
                                <div>
                                  <div className="font-medium text-sm">{review.expertName}</div>
                                  <div className="text-xs text-muted-foreground">{review.expertTitle}</div>
                                </div>
                              </div>
                            </td>
                            <td className="p-4 max-w-md">
                              <div className="flex items-center gap-2 mb-2">
                                {[...Array(5)].map((_, i) => (
                                  <Star 
                                    key={i} 
                                    className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                                  />
                                ))}
                                <span className="text-sm font-medium">{review.rating}.0</span>
                              </div>
                              <p className="text-sm text-muted-foreground leading-relaxed">{review.review}</p>
                            </td>
                            <td className="p-4 text-sm text-muted-foreground">{review.date}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">Settings</h2>
                <Badge variant="secondary">Admin Account</Badge>
              </div>

              {/* Account Settings */}
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Username */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">Username</label>
                    <div className="flex items-center gap-3">
                      <input 
                        type="text" 
                        value={adminSettings.username}
                        onChange={(e) => setAdminSettings({...adminSettings, username: e.target.value})}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                      />
                      <Button 
                        size="sm"
                        onClick={() => {
                          console.log('Updating username:', adminSettings.username);
                          // Add update logic here
                        }}
                      >
                        Update
                      </Button>
                    </div>
                  </div>

                  {/* Current Password */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">Current Password</label>
                    <div className="flex items-center gap-3">
                      <input 
                        type="password" 
                        value={adminSettings.currentPassword}
                        onChange={(e) => setAdminSettings({...adminSettings, currentPassword: e.target.value})}
                        placeholder="Enter current password"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* New Password */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">New Password</label>
                    <div className="flex items-center gap-3">
                      <input 
                        type="password" 
                        value={adminSettings.newPassword}
                        onChange={(e) => setAdminSettings({...adminSettings, newPassword: e.target.value})}
                        placeholder="Enter new password"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Confirm New Password */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">Confirm New Password</label>
                    <div className="flex items-center gap-3">
                      <input 
                        type="password" 
                        value={adminSettings.confirmPassword}
                        onChange={(e) => setAdminSettings({...adminSettings, confirmPassword: e.target.value})}
                        placeholder="Confirm new password"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 pt-4 border-t">
                    <Button 
                      className="bg-black hover:bg-gray-800"
                      onClick={() => {
                        if (adminSettings.newPassword !== adminSettings.confirmPassword) {
                          alert('New passwords do not match');
                          return;
                        }
                        console.log('Updating password');
                        setAdminSettings({
                          ...adminSettings,
                          currentPassword: '',
                          newPassword: '',
                          confirmPassword: ''
                        });
                        alert('Password updated successfully');
                      }}
                    >
                      Update Password
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => {
                        if (confirm('Are you sure you want to reset your password? This will send a reset link to your email.')) {
                          console.log('Sending password reset email');
                          alert('Password reset email sent to your registered email address');
                        }
                      }}
                    >
                      Reset Password
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Security Settings */}
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h3 className="font-medium">Two-Factor Authentication</h3>
                      <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                    </div>
                    <Badge variant="default" className="bg-green-100 text-green-800">Enabled</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h3 className="font-medium">Session Management</h3>
                      <p className="text-sm text-muted-foreground">Manage active sessions across devices</p>
                    </div>
                    <Button variant="outline" size="sm">
                      View Sessions
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Placeholder for other tabs */}
          {!['stats', 'experts', 'categories', 'withdrawals', 'meetings', 'users', 'reviews', 'settings'].includes(activeTab) && (
            <div className="text-center py-12">
              <div className="max-w-md mx-auto">
                <h2 className="text-2xl font-semibold mb-4">
                  {sidebar.find(item => item.id === activeTab)?.label}
                </h2>
                <p className="text-muted-foreground mb-6">
                  This section is under development. It will include comprehensive management tools for {sidebar.find(item => item.id === activeTab)?.label.toLowerCase()}.
                </p>
                <Button variant="outline">
                  <Plus className="w-4 h-4 mr-2" />
                  Coming Soon
                </Button>
              </div>
            </div>
              )}
            </>
          )}
          
          {/* Category Detail View */}
          {currentView === 'category-detail' && selectedCategory && (
            <div className="p-6 space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setCurrentView('main')}
                  >
                    ← Back
                  </Button>
                  <div>
                    <h2 className="text-2xl font-semibold">{selectedCategory.name}</h2>
                    <p className="text-muted-foreground">{selectedCategory.expertCount} active experts</p>
                  </div>
                </div>
                <Button onClick={() => console.log('Add subcategory')}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Subcategory
                </Button>
              </div>
              
              {/* Subcategories List */}
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Subcategories</CardTitle>
                  <p className="text-sm text-muted-foreground">Manage subcategories for {selectedCategory.name}</p>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y">
                    {selectedCategory.subcategories.map((subcategory, index) => (
                      <div key={index} className="flex items-center justify-between p-4 hover:bg-gray-50 group">
                        <div className="flex items-center gap-4 flex-1">
                          <div className="w-6 h-6 bg-gray-100 rounded border flex items-center justify-center text-xs font-medium text-gray-600">
                            {subcategory.split(' ').map(word => word[0]).join('').toUpperCase()}
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-foreground">{subcategory}</div>
                            <div className="text-sm text-muted-foreground">Active subcategory</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => console.log('Edit subcategory:', subcategory)}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button 
                            size="sm" 
                            variant="ghost"
                            onClick={() => console.log('Remove subcategory:', subcategory)}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Category Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="text-2xl font-bold">{selectedCategory.expertCount}</div>
                    <p className="text-sm text-muted-foreground">Active Experts</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="text-2xl font-bold">{selectedCategory.sessionsCount}</div>
                    <p className="text-sm text-muted-foreground">Total Sessions</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="text-2xl font-bold">{selectedCategory.subcategories.length}</div>
                    <p className="text-sm text-muted-foreground">Subcategories</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
          
          {/* Withdrawal Detail View */}
          {currentView === 'withdrawal-detail' && selectedWithdrawal && (
            <div className="p-6 space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setCurrentView('main')}
                  >
                    ← Back
                  </Button>
                  <div>
                    <h2 className="text-2xl font-semibold">Withdrawal Request</h2>
                    <p className="text-muted-foreground">{selectedWithdrawal.id} • {selectedWithdrawal.expertName}</p>
                  </div>
                </div>
                <Badge 
                  variant={selectedWithdrawal.status === 'approved' ? 'default' : selectedWithdrawal.status === 'pending' ? 'secondary' : 'destructive'}
                  className={selectedWithdrawal.status === 'approved' ? 'bg-green-100 text-green-800' : ''}
                >
                  {selectedWithdrawal.status.charAt(0).toUpperCase() + selectedWithdrawal.status.slice(1)}
                </Badge>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Expert & Amount Information */}
                <Card>
                  <CardHeader>
                    <CardTitle>Withdrawal Request</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center gap-4">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={selectedWithdrawal.avatar} alt={selectedWithdrawal.expertName} />
                        <AvatarFallback className="text-lg">{getInitials(selectedWithdrawal.expertName)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold text-xl">{selectedWithdrawal.expertName}</div>
                        <div className="text-muted-foreground">{selectedWithdrawal.expertEmail}</div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <label className="text-sm font-medium text-muted-foreground">Requested Amount</label>
                      <p className="text-3xl font-bold text-green-600 mt-1">${selectedWithdrawal.amount}</p>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Bank Details */}
                <Card>
                  <CardHeader>
                    <CardTitle>Bank Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Bank Name</label>
                      <p className="font-semibold">{selectedWithdrawal.bankName}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Account Number</label>
                      <p className="font-mono">{selectedWithdrawal.accountNumber}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Routing Number</label>
                      <p className="font-mono">{selectedWithdrawal.routingNumber}</p>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Request Details */}
                <Card>
                  <CardHeader>
                    <CardTitle>Request Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Request Date</label>
                      <p className="font-semibold">{new Date(selectedWithdrawal.requestDate).toLocaleDateString()}</p>
                    </div>
                    {selectedWithdrawal.processingDate && (
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Processing Date</label>
                        <p className="font-semibold">{new Date(selectedWithdrawal.processingDate).toLocaleDateString()}</p>
                      </div>
                    )}
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Notes</label>
                      <p className="text-muted-foreground">{selectedWithdrawal.note}</p>
                    </div>
                  </CardContent>
                </Card>
                
              </div>
              
              {/* Action Buttons */}
              <div>
                {selectedWithdrawal.status === 'pending' && (
                  <Card className="bg-gray-50 border-2 border-dashed">
                    <CardContent className="p-6">
                      <div className="text-center space-y-4">
                        <h3 className="font-semibold text-lg">Review Withdrawal Request</h3>
                        <p className="text-muted-foreground">Please review the details above and approve or reject this withdrawal request.</p>
                        <div className="flex gap-4 justify-center pt-2">
                          <Button 
                            size="lg"
                            className="bg-green-600 hover:bg-green-700 text-white px-8"
                            onClick={() => {
                              approveWithdrawal(selectedWithdrawal.id);
                              setCurrentView('main');
                            }}
                          >
                            <Check className="w-5 h-5 mr-2" />
                            Approve Withdrawal
                          </Button>
                          <Button 
                            size="lg"
                            variant="outline"
                            className="text-red-600 border-red-300 hover:bg-red-50 px-8"
                            onClick={() => {
                              rejectWithdrawal(selectedWithdrawal.id);
                              setCurrentView('main');
                            }}
                          >
                            <X className="w-5 h-5 mr-2" />
                            Reject Withdrawal
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
                
                {selectedWithdrawal.status !== 'pending' && (
                  <Card className="bg-gray-50">
                    <CardContent className="p-6 text-center">
                      <Badge 
                        variant={selectedWithdrawal.status === 'approved' ? 'default' : 'destructive'}
                        className={`text-lg px-4 py-2 ${
                          selectedWithdrawal.status === 'approved' ? 'bg-green-100 text-green-800' : ''
                        }`}
                      >
                        {selectedWithdrawal.status === 'approved' ? '✓ Approved' : '✗ Rejected'}
                      </Badge>
                      {selectedWithdrawal.processingDate && (
                        <p className="text-muted-foreground mt-2">
                          Processed on {new Date(selectedWithdrawal.processingDate).toLocaleDateString()}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Expert Detail Modal */}
      {showExpertDetail && selectedExpert && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">Expert Application Review</h2>
                <Button variant="ghost" size="icon" onClick={() => setShowExpertDetail(false)}>
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Expert Profile */}
                <div className="lg:col-span-1">
                  <Card className="border-2">
                    <CardContent className="p-6 text-center">
                      <Avatar className="w-24 h-24 mx-auto mb-4">
                        <AvatarImage src={selectedExpert.avatar} alt={selectedExpert.name} />
                        <AvatarFallback className="text-2xl">{getInitials(selectedExpert.name)}</AvatarFallback>
                      </Avatar>
                      <h3 className="text-xl font-semibold mb-2">{selectedExpert.name}</h3>
                      <p className="text-muted-foreground mb-4">{selectedExpert.title}</p>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-muted-foreground" />
                          <span>{selectedExpert.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-muted-foreground" />
                          <span>{selectedExpert.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-muted-foreground" />
                          <span>{selectedExpert.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Building className="w-4 h-4 text-muted-foreground" />
                          <span>{selectedExpert.company}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Detailed Information */}
                <div className="lg:col-span-2 space-y-6">
                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle>Professional Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Bio</label>
                        <p className="mt-1">{selectedExpert.bio}</p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">Industry</label>
                          <p className="mt-1">{selectedExpert.industry}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">Experience</label>
                          <p className="mt-1">{selectedExpert.experience}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">Hourly Rate</label>
                          <p className="mt-1">${selectedExpert.hourlyRate}/hour</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">Timezone</label>
                          <p className="mt-1">{selectedExpert.timezone}</p>
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Expertise Areas</label>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {selectedExpert.expertise.map((skill, index) => (
                            <Badge key={index} variant="secondary">{skill}</Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Education</label>
                        <p className="mt-1">{selectedExpert.education}</p>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Languages</label>
                        <p className="mt-1">{selectedExpert.languages.join(', ')}</p>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Charity Work</label>
                        <p className="mt-1">{selectedExpert.charityWork}</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle>Application Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">Application Date</label>
                          <p className="mt-1">{new Date(selectedExpert.applicationDate).toLocaleDateString()}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">Verification Status</label>
                          <Badge variant={selectedExpert.verified ? 'default' : 'secondary'} className="mt-1">
                            {selectedExpert.verified ? 'Verified' : 'Pending'}
                          </Badge>
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Submitted Documents</label>
                        <div className="space-y-2 mt-1">
                          {selectedExpert.documentsSubmitted.map((doc, index) => (
                            <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                              <div className="flex items-center gap-2">
                                <FileText className="w-4 h-4 text-muted-foreground" />
                                <span className="text-sm">{doc}</span>
                              </div>
                              <Button size="sm" variant="ghost">
                                <Download className="w-4 h-4" />
                              </Button>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">LinkedIn Profile</label>
                          <a href={selectedExpert.linkedinUrl} className="text-blue-600 hover:underline text-sm block mt-1">
                            View Profile
                          </a>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">Portfolio</label>
                          <a href={selectedExpert.portfolioUrl} className="text-blue-600 hover:underline text-sm block mt-1">
                            View Portfolio
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-4">
                    <Button 
                      className="flex-1"
                      onClick={() => {
                        approveExpert(selectedExpert.id)
                        setShowExpertDetail(false)
                      }}
                    >
                      <Check className="w-4 h-4 mr-2" />
                      Approve Expert
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => {
                        rejectExpert(selectedExpert.id)
                        setShowExpertDetail(false)
                      }}
                    >
                      <X className="w-4 h-4 mr-2" />
                      Reject Application
                    </Button>
                    <Button variant="ghost" onClick={() => console.log('Request more info')}>
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Request Info
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminDashboard