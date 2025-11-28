import { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { X, Mail, Lock, User, ArrowRight } from 'lucide-react'
import { FaGoogle, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const SignupModal = ({ isOpen, onClose, onOpenLogin, defaultType = 'individual' }) => {
  const [signupType, setSignupType] = useState(defaultType) // 'individual' or 'expert'
  
  // Update signup type when defaultType changes
  useEffect(() => {
    setSignupType(defaultType)
  }, [defaultType])
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle signup logic here
    console.log('Signup:', formData)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground z-10"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
        
        <div className="p-6">
          <div className="text-center mb-6">
            <div className="text-xs uppercase tracking-wider text-gray-500 mb-4">Sign Up</div>
          </div>
          
          {/* Signup Type Selection */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button
              type="button"
              onClick={() => setSignupType('individual')}
              className={`p-4 rounded-lg border-2 transition-all ${
                signupType === 'individual'
                  ? 'border-black bg-gray-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="text-center">
                <div className="font-semibold mb-1">Join as Individual</div>
                <div className="text-xs text-gray-600">Connect with experts for guidance</div>
              </div>
            </button>
            <button
              type="button"
              onClick={() => setSignupType('expert')}
              className={`p-4 rounded-lg border-2 transition-all ${
                signupType === 'expert'
                  ? 'border-black bg-gray-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="text-center">
                <div className="font-semibold mb-1">Apply as Expert</div>
                <div className="text-xs text-gray-600">Share your expertise & earn</div>
              </div>
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-black">First Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="pl-10 border-2 border-gray-300 focus:border-black bg-white"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-black">Last Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="pl-10 border-2 border-gray-300 focus:border-black bg-white"
                    required
                  />
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-black">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="pl-10 border-2 border-gray-300 focus:border-black bg-white"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="text-black">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                  className="pl-10 border-2 border-gray-300 focus:border-black bg-white"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-black">Confirm Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="pl-10 border-2 border-gray-300 focus:border-black bg-white"
                  required
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="terms"
                className="rounded border-gray-300"
                required
              />
              <Label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the{' '}
                <Link to="/terms" className="text-black hover:underline">
                  Terms of Service
                </Link>
                {' '}and{' '}
                <Link to="/privacy" className="text-black hover:underline">
                  Privacy Policy
                </Link>
              </Label>
            </div>
            
            <Button
              type="submit"
              className="w-full rounded-full bg-[#efffba] text-black border border-[#efffba] hover:bg-black hover:text-white hover:border-black transition-all"
            >
              {signupType === 'expert' ? 'Apply as Expert' : 'Sign Up'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
          
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-500">Or sign up with</span>
            </div>
          </div>
          
          <div className="flex justify-center gap-4">
            <Button
              type="button"
              variant="outline"
              className="w-12 h-12 rounded-full border-2 border-gray-300 hover:border-black p-0 flex items-center justify-center transition-all"
              aria-label="Sign up with Google"
            >
              <FaGoogle className="w-5 h-5" />
            </Button>
            <Button
              type="button"
              variant="outline"
              className="w-12 h-12 rounded-full border-2 border-gray-300 hover:border-black p-0 flex items-center justify-center transition-all"
              aria-label="Sign up with LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </Button>
          </div>
          
          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{' '}
            <button
              onClick={() => {
                onClose()
                onOpenLogin()
              }}
              className="font-semibold text-black hover:underline"
            >
              Log in
            </button>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default SignupModal