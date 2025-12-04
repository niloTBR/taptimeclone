import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Crown, 
  User, 
  Mail, 
  Lock, 
  Phone, 
  MapPin, 
  Briefcase,
  GraduationCap,
  DollarSign,
  FileText,
  Upload,
  Check,
  ChevronRight,
  ArrowLeft,
  Globe,
  Award,
  Calendar as CalendarIcon,
  Heart,
  Plus,
  X,
  Clock,
  Zap,
  ArrowRight,
  Star,
  Target,
  Building,
  Trash2,
  Save
} from 'lucide-react'
import { Link } from 'react-router-dom'

const SignUpExpertPage = () => {
  const [currentStep, setCurrentStep] = useState(1)
  
  // Sessions state management
  const [sessions, setSessions] = useState([])
  const [savedSessions, setSavedSessions] = useState([])
  
  const [formData, setFormData] = useState({
    // Step 1: Account Info
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    location: '',
    language: '',
    gender: '',
    
    // Step 2: Professional & Expertise
    title: '',
    bio: '',
    about: '',
    industries: [],
    expertise: [],
    
    // Step 3: Availability
    timezone: '',
    availableDays: [],
    preferredHours: '',
    hourlyRate: 150,
    
    // Step 5: Giving
    charityName: '',
    charityWebsite: ''
  })

  const steps = [
    { step: 1, title: 'Account' },
    { step: 2, title: 'Expertise' },
    { step: 3, title: 'Your Sessions' },
    { step: 4, title: 'Availability' },
    { step: 5, title: 'Giving' }
  ]

  const industries = [
    'Technology', 'Finance', 'Healthcare', 'Marketing', 'Sales', 
    'Education', 'Consulting', 'Manufacturing', 'Retail', 'Legal',
    'Real Estate', 'Media', 'Non-profit', 'Government', 'Other'
  ]

  const expertiseAreas = [
    'Business Strategy', 'Product Management', 'Marketing', 'Sales',
    'Leadership', 'Engineering', 'Data Science', 'Design', 'Finance',
    'Operations', 'Human Resources', 'Legal', 'Fundraising', 'Growth'
  ]

  const sessionTypeOptions = [
    { id: 'consultation', name: '1-on-1 Consultation', icon: User },
    { id: 'mentoring', name: 'Career Mentoring', icon: Target },
    { id: 'review', name: 'Portfolio Review', icon: FileText },
    { id: 'strategy', name: 'Strategy Session', icon: Briefcase },
    { id: 'coaching', name: 'Executive Coaching', icon: Award }
  ]

  const timezones = [
    'PST (Pacific)', 'MST (Mountain)', 'CST (Central)', 'EST (Eastern)',
    'GMT (London)', 'CET (Central Europe)', 'JST (Japan)', 'AEST (Australia Eastern)'
  ]

  const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleArrayToggle = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }))
  }

  const nextStep = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1)
    } else {
      // Handle final submission
      setCurrentStep(7) // Show success screen
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

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

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-8 px-4">
      <div className="w-full max-w-lg">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center font-bold text-xl mx-auto mb-4">
              T
            </div>
          </Link>
          <h1 className="text-2xl font-bold text-black">Become an Expert</h1>
          <p className="text-sm text-gray-600 mt-1">Share your expertise and help others succeed</p>
        </div>

        {/* Progress Steps */}
        {currentStep < 7 && (
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center gap-2">
              {steps.map((step, index) => (
                <div key={step.step} className="flex items-center">
                  <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    currentStep >= step.step 
                      ? 'bg-[#efffba] text-black' 
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    {currentStep > step.step ? (
                      <Check className="w-3 h-3" />
                    ) : (
                      <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-[10px]">
                        {step.step}
                      </span>
                    )}
                    <span>{step.title}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <ChevronRight className="w-4 h-4 text-gray-400 mx-1" />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Form Card */}
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            
            {/* Step 1: Account Information */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                        placeholder="Enter your professional email"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Location *
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <select
                        value={formData.location}
                        onChange={(e) => handleInputChange('location', e.target.value)}
                        className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors appearance-none"
                      >
                        <option value="">Select your country</option>
                        <option value="United States">United States</option>
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
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Gender *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <select
                        value={formData.gender}
                        onChange={(e) => handleInputChange('gender', e.target.value)}
                        className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors appearance-none"
                      >
                        <option value="">Select gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                        <option value="Prefer not to say">Prefer not to say</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Language Preference *
                    </label>
                    <div className="relative">
                      <Check className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-500" />
                      <select
                        value={formData.language}
                        onChange={(e) => handleInputChange('language', e.target.value)}
                        className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors appearance-none"
                      >
                        <option value="">Select preferred language</option>
                        <option value="English">English</option>
                        <option value="Arabic">Arabic</option>
                        <option value="English & Arabic">English & Arabic</option>
                        <option value="Spanish">Spanish</option>
                        <option value="French">French</option>
                        <option value="German">German</option>
                        <option value="Chinese">Chinese</option>
                        <option value="Japanese">Japanese</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Password *
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="password"
                      value={formData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                      className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Professional & Expertise */}
            {currentStep === 2 && (
              <div className="space-y-5">
                {/* Professional Title */}
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Professional Title
                  </label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => handleInputChange('title', e.target.value)}
                      className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                      placeholder="e.g., Senior Product Manager, Marketing Director"
                    />
                  </div>
                </div>

                {/* Bio */}
                <div>
                  <label className="block text-sm font-medium text-black mb-1">
                    Bio <span className="text-xs text-gray-500">140 characters</span>
                  </label>
                  <div className="relative">
                    <FileText className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <textarea
                      value={formData.bio}
                      onChange={(e) => handleInputChange('bio', e.target.value)}
                      maxLength={140}
                      rows={2}
                      className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors resize-none"
                      placeholder="Quick bio that captures your essence in one line..."
                    />
                    <span className="absolute bottom-2 right-2 text-xs text-gray-400">
                      {formData.bio.length}/140
                    </span>
                  </div>
                </div>

                {/* About */}
                <div>
                  <label className="block text-sm font-medium text-black mb-1">
                    About <span className="text-xs text-gray-500">Up to 500 words</span>
                  </label>
                  <div className="relative">
                    <FileText className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <textarea
                      value={formData.about}
                      onChange={(e) => handleInputChange('about', e.target.value)}
                      rows={5}
                      className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors resize-none"
                      placeholder="Tell your story. What's your background? What unique insights do you bring? What can clients expect from working with you?"
                    />
                  </div>
                </div>

                {/* Industry */}
                <div>
                  <label className="block text-sm font-medium text-black mb-1">
                    Industry
                  </label>
                  <p className="text-xs text-gray-500 mb-3">Select all industries that apply to your work</p>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {['Education & Training', 'Real Estate', 'Legal & Consulting', 'Technology', 'Healthcare', 'Finance', 'Marketing', 'Other'].map(ind => (
                      <label key={ind} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.industries.includes(ind)}
                          onChange={() => handleArrayToggle('industries', ind)}
                          className="w-4 h-4 text-black border-gray-300 rounded focus:ring-0"
                        />
                        <span className="text-sm">{ind}</span>
                      </label>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Selected: {formData.industries.length} {formData.industries.length === 1 ? 'industry' : 'industries'}</p>
                </div>

                {/* Expertise */}
                <div>
                  <label className="block text-sm font-medium text-black mb-1">
                    Expertise
                  </label>
                  <p className="text-xs text-gray-500 mb-3">Select your expertise areas and specific skills</p>
                  
                  <div className="space-y-2">
                    {/* All Expertise Areas */}
                    <div className="bg-gray-50 rounded-lg p-3">
                      <label className="flex items-center gap-3 cursor-pointer font-medium">
                        <input
                          type="checkbox"
                          checked={formData.expertise.length === 6}
                          onChange={(e) => {
                            if (e.target.checked) {
                              handleInputChange('expertise', ['Business & Startups', 'Technology & Innovation', 'Design & Creativity', 'Marketing & Growth', 'Finance & Economics', 'Health & Wellness'])
                            } else {
                              handleInputChange('expertise', [])
                            }
                          }}
                          className="w-4 h-4 text-black border-gray-300 rounded focus:ring-0"
                        />
                        <span className="text-sm">All Expertise Areas</span>
                      </label>
                    </div>

                    {/* Individual Areas */}
                    <div className="ml-6 space-y-2">
                      {['Business & Startups', 'Technology & Innovation', 'Design & Creativity', 'Marketing & Growth', 'Finance & Economics', 'Health & Wellness'].map(area => (
                        <label key={area} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                          <span className="text-sm">{area}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">0 specific skills selected</p>
                </div>
              </div>
            )}

            {/* Step 3: Your Sessions */}
            {currentStep === 3 && (
              <div className="space-y-5">
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
                          placeholder="500"
                          className="w-32 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-black transition-colors"
                        />
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <span className="text-sm w-20">45 min</span>
                        <span className="text-lg font-medium">$</span>
                        <input
                          type="text"
                          placeholder="500"
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

            {/* Step 4: Availability */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="flex items-center gap-2 mb-2">
                  <CalendarIcon className="w-5 h-5" />
                  <h3 className="text-lg font-semibold">Set Your Availability</h3>
                </div>

                <div className="flex flex-col items-center justify-center py-12">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                    <CalendarIcon className="w-8 h-8 text-gray-500" />
                  </div>
                  
                  <h4 className="text-xl font-semibold text-black mb-3">Connect with Calendly</h4>
                  
                  <p className="text-gray-600 text-center mb-8">
                    Sync your availability with Calendly to manage your booking schedule
                  </p>

                  <Button 
                    type="button"
                    className="px-6 py-3 bg-white hover:bg-gray-50 text-black border-2 border-gray-300 rounded-lg flex items-center gap-3 transition-all"
                  >
                    <CalendarIcon className="w-5 h-5" />
                    Connect Calendly
                  </Button>
                </div>
              </div>
            )}

            {/* Step 5: Giving */}
            {currentStep === 5 && (
              <div className="space-y-6">
                <div className="flex items-center gap-2 mb-4">
                  <Heart className="w-5 h-5" />
                  <h3 className="text-lg font-semibold">Donate for charity (Optional)</h3>
                </div>

                <p className="text-gray-600 text-sm">
                  Inspire others by supporting a cause you love (You'll manage donations directly — TapTime doesn't handle transactions.)
                </p>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Charity Name
                    </label>
                    <input
                      type="text"
                      value={formData.charityName}
                      onChange={(e) => handleInputChange('charityName', e.target.value)}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                      placeholder="Charity Name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Charity Website URL
                    </label>
                    <input
                      type="text"
                      value={formData.charityWebsite}
                      onChange={(e) => handleInputChange('charityWebsite', e.target.value)}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                      placeholder="Charity Website URL"
                    />
                  </div>
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
              </div>
            )}

            {/* Step 6: Success */}
            {currentStep === 6 && (
              <div className="text-center py-12">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Check className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full animate-ping opacity-30"></div>
                </div>
                
                <h2 className="text-2xl font-bold text-black mb-3">Welcome to TapTime!</h2>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  Your application has been successfully submitted. Our team will review your profile within 48-72 hours.
                </p>

                {/* Reference Number */}
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 mb-8 border border-gray-200">
                  <p className="text-xs text-gray-500 mb-1">Application Reference</p>
                  <p className="font-mono text-2xl font-bold text-black tracking-wider">
                    EXP-{Math.random().toString(36).substr(2, 9).toUpperCase()}
                  </p>
                  <p className="text-xs text-gray-500 mt-2">Keep this for your records</p>
                </div>

                {/* Next Steps */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#efffba] flex items-center justify-center text-xs font-bold">1</div>
                    <p className="text-sm text-gray-700">Application under review</p>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-500">2</div>
                    <p className="text-sm text-gray-500">Email notification within 72 hours</p>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-500">3</div>
                    <p className="text-sm text-gray-500">Start accepting bookings</p>
                  </div>
                </div>

                <div className="pt-4">
                  <Link 
                    to="/"
                    className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors"
                  >
                    Return to Homepage
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            {currentStep < 6 && (
              <div className="flex gap-3 mt-6">
                {currentStep > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    className="flex-1 rounded-full border-2 border-gray-300 text-black hover:border-black transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                  </Button>
                )}
                
                <Button
                  type="button"
                  onClick={nextStep}
                  className="flex-1 rounded-full bg-[#efffba] text-black hover:bg-black hover:text-white transition-all"
                >
                  {currentStep === 6 ? 'Submit Application' : 'Continue'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Footer Links */}
        {currentStep < 6 && (
          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-black font-medium hover:underline">
                Log in
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default SignUpExpertPage