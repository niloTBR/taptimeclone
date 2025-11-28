import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  User, 
  Mail, 
  Lock, 
  Phone, 
  MapPin, 
  Target,
  Check,
  ChevronRight,
  ArrowLeft,
  Globe,
  ArrowRight
} from 'lucide-react'
import { Link } from 'react-router-dom'

const SignUpUserPage = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Step 1: Account Info
    firstName: '',
    lastName: '',  
    email: '',
    password: '',
    confirmPassword: '',
    
    // Step 2: Profile Info
    phone: '',
    country: '',
    bio: '',
    
    // Step 3: Goals
    primaryGoals: [],
    expertiseNeeded: [],
    budgetRange: 200
  })

  const steps = [
    { step: 1, title: 'Account' },
    { step: 2, title: 'Profile' },
    { step: 3, title: 'Goals' }
  ]

  const countries = [
    'United States', 'Canada', 'United Kingdom', 'Australia', 'Germany', 'France',
    'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Switzerland', 'Singapore',
    'Japan', 'South Korea', 'India', 'Brazil', 'Mexico', 'Spain', 'Italy'
  ]

  const primaryGoals = [
    'Start a new business',
    'Grow my existing business', 
    'Advance my career',
    'Learn new skills',
    'Get expert advice on a project',
    'Network with professionals'
  ]

  const expertiseAreas = [
    'Business Strategy', 'Marketing & Growth', 'Product Development', 'Fundraising',
    'Sales', 'Leadership', 'Technology', 'Design', 'Finance', 'Operations'
  ]

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
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    } else {
      // Handle final submission
      setCurrentStep(4) // Show success screen
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
          <h1 className="text-2xl font-bold text-black">Create your account</h1>
          <p className="text-sm text-gray-600 mt-1">Join TapTime to connect with experts</p>
        </div>

        {/* Progress Steps */}
        {currentStep < 4 && (
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
                      First Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                        placeholder="John"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Password
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

                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="password"
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                      className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Profile Information */}
            {currentStep === 2 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Country
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <select
                      value={formData.country}
                      onChange={(e) => handleInputChange('country', e.target.value)}
                      className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors appearance-none"
                    >
                      <option value="">Select your country</option>
                      {countries.map(country => (
                        <option key={country} value={country}>{country}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    About You
                  </label>
                  <textarea
                    value={formData.bio}
                    onChange={(e) => handleInputChange('bio', e.target.value)}
                    rows={4}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors resize-none"
                    placeholder="Tell us about yourself and what you're looking to achieve..."
                  />
                </div>
              </div>
            )}

            {/* Step 3: Goals and Interests */}
            {currentStep === 3 && (
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-black mb-3">
                    What are your primary goals?
                  </label>
                  <div className="space-y-2">
                    {primaryGoals.map(goal => (
                      <label key={goal} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.primaryGoals.includes(goal)}
                          onChange={() => handleArrayToggle('primaryGoals', goal)}
                          className="w-4 h-4 text-black border-gray-300 rounded focus:ring-0"
                        />
                        <span className="text-sm text-gray-700">{goal}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-3">
                    Areas of expertise you need
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {expertiseAreas.map(area => (
                      <button
                        key={area}
                        type="button"
                        onClick={() => handleArrayToggle('expertiseNeeded', area)}
                        className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                          formData.expertiseNeeded.includes(area)
                            ? 'bg-[#efffba] text-black'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        {area}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-3">
                    Session budget: ${formData.budgetRange} per session
                  </label>
                  <input
                    type="range"
                    min="50"
                    max="500"
                    step="50"
                    value={formData.budgetRange}
                    onChange={(e) => handleInputChange('budgetRange', parseInt(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>$50</span>
                    <span>$250</span>
                    <span>$500+</span>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Success */}
            {currentStep === 4 && (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-[#efffba] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-black" />
                </div>
                
                <h2 className="text-xl font-semibold text-black mb-2">Welcome to TapTime!</h2>
                <p className="text-gray-600 mb-8">
                  Your account has been created successfully. Start browsing experts to get personalized advice.
                </p>

                <div className="space-y-3">
                  <Button 
                    className="w-full rounded-full bg-[#efffba] text-black hover:bg-black hover:text-white transition-all"
                    onClick={() => window.location.href = '/user/dashboard'}
                  >
                    Go to Dashboard
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button 
                    variant="outline"
                    className="w-full rounded-full border-2 border-black text-black hover:bg-black hover:text-white transition-all"
                    onClick={() => window.location.href = '/browse'}
                  >
                    Browse Experts
                  </Button>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            {currentStep < 4 && (
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
                  {currentStep === 3 ? 'Create Account' : 'Continue'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Footer Links */}
        {currentStep < 4 && (
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

export default SignUpUserPage