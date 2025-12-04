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
  Building
} from 'lucide-react'
import { Link } from 'react-router-dom'

const SignUpExpertPage = () => {
  const [currentStep, setCurrentStep] = useState(1)
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
    
    // Step 4: Documents
    resume: null,
    certifications: []
  })

  const steps = [
    { step: 1, title: 'Account' },
    { step: 2, title: 'Professional & Expertise' },
    { step: 3, title: 'Availability' },
    { step: 4, title: 'Documents' }
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
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1)
    } else {
      // Handle final submission
      setCurrentStep(6) // Show success screen
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
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
        {currentStep < 6 && (
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

            {/* Step 3: Availability */}
            {currentStep === 3 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Time Zone
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <select
                      value={formData.timezone}
                      onChange={(e) => handleInputChange('timezone', e.target.value)}
                      className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors appearance-none"
                    >
                      <option value="">Select timezone</option>
                      {timezones.map(tz => (
                        <option key={tz} value={tz}>{tz}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-3">
                    Available Days
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {weekDays.map(day => (
                      <label key={day} className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.availableDays.includes(day)}
                          onChange={() => handleArrayToggle('availableDays', day)}
                          className="w-4 h-4 text-black border-gray-300 rounded focus:ring-0"
                        />
                        <span className="text-sm text-gray-700">{day}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Preferred Hours
                  </label>
                  <select
                    value={formData.preferredHours}
                    onChange={(e) => handleInputChange('preferredHours', e.target.value)}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors appearance-none"
                  >
                    <option value="">Select hours</option>
                    <option value="morning">Morning (6 AM - 12 PM)</option>
                    <option value="afternoon">Afternoon (12 PM - 6 PM)</option>
                    <option value="evening">Evening (6 PM - 10 PM)</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-3">
                    Hourly Rate: ${formData.hourlyRate}
                  </label>
                  <input
                    type="range"
                    min="50"
                    max="500"
                    step="25"
                    value={formData.hourlyRate}
                    onChange={(e) => handleInputChange('hourlyRate', parseInt(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>$50</span>
                    <span>$250</span>
                    <span>$500</span>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Documents */}
            {currentStep === 4 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-black mb-3">
                    Upload Resume/CV
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                    <p className="text-sm text-gray-600 mb-2">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-gray-500">
                      PDF, DOC up to 10MB
                    </p>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      onChange={(e) => handleInputChange('resume', e.target.files[0])}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-3">
                    Certifications (Optional)
                  </label>
                  <div className="space-y-2">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-gray-400 transition-colors">
                      <Plus className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">
                        Add certification
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-gray-400 mt-0.5" />
                    <div className="text-sm text-gray-600">
                      <p className="font-medium mb-1">Verification Process</p>
                      <p>Your application will be reviewed within 2-3 business days. We'll verify your credentials and notify you via email.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Success */}
            {currentStep === 5 && (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-[#efffba] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-black" />
                </div>
                
                <h2 className="text-xl font-semibold text-black mb-2">Application Submitted!</h2>
                <p className="text-gray-600 mb-8">
                  Thank you for applying to become a TapTime expert. We'll review your application and get back to you within 2-3 business days.
                </p>

                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <h3 className="font-medium text-black mb-3">What happens next?</h3>
                  <div className="space-y-2 text-sm text-left">
                    <div className="flex items-start gap-2">
                      <span className="text-[#efffba] mt-0.5">•</span>
                      <span className="text-gray-600">Our team will review your application</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#efffba] mt-0.5">•</span>
                      <span className="text-gray-600">You'll receive an email with the decision</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#efffba] mt-0.5">•</span>
                      <span className="text-gray-600">Once approved, you can start accepting sessions</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button 
                    className="w-full rounded-full bg-[#efffba] text-black hover:bg-black hover:text-white transition-all"
                    onClick={() => window.location.href = '/'}
                  >
                    Back to Homepage
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
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
                  {currentStep === 5 ? 'Submit Application' : 'Continue'}
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