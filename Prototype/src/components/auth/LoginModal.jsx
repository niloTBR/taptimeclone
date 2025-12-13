import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { X, Mail, Lock, ArrowRight } from 'lucide-react'
import { FaGoogle, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const LoginModal = ({ isOpen, onClose, onOpenSignup }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Login:', { email, password })
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden bg-white">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground z-10"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
        
        <div className="p-6">
          <DialogHeader className="mb-6">
            <DialogTitle className="text-2xl font-semibold text-center">Welcome back</DialogTitle>
            <DialogDescription className="text-center text-base">
              Log in to connect with industry experts
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-black">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 border-2 border-gray-300 focus:border-black bg-white"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="password" className="text-black">Password</Label>
                <Link to="/forgot-password" className="text-sm text-black/70 hover:text-black">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 border-2 border-gray-300 focus:border-black bg-white"
                  required
                />
              </div>
            </div>
            
            <Button
              type="submit"
              className="w-full rounded-full bg-[#efffba] text-black border border-[#efffba] hover:bg-black hover:text-white hover:border-black transition-all"
            >
              Log In
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
          
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-500">Or continue with</span>
            </div>
          </div>
          
          <div className="flex justify-center gap-4">
            <Button
              type="button"
              variant="outline"
              className="w-12 h-12 rounded-full border-2 border-gray-300 hover:border-black p-0 flex items-center justify-center transition-all"
              aria-label="Sign in with Google"
            >
              <FaGoogle className="w-5 h-5" />
            </Button>
            <Button
              type="button"
              variant="outline"
              className="w-12 h-12 rounded-full border-2 border-gray-300 hover:border-black p-0 flex items-center justify-center transition-all"
              aria-label="Sign in with LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </Button>
          </div>
          
          <p className="text-center text-sm text-gray-600 mt-6">
            Don't have an account?{' '}
            <button
              onClick={() => {
                onClose()
                onOpenSignup()
              }}
              className="font-semibold text-black hover:underline"
            >
              Sign up
            </button>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default LoginModal