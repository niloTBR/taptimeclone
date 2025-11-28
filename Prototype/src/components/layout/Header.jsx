import { Button } from '@/components/ui/button'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Menu, X, LogOut, Bell } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import TapTimeLogo from '@/components/common/TapTimeLogo'
import LoginModal from '@/components/auth/LoginModal'
import SignupModal from '@/components/auth/SignupModal'
import navigationData from '@/data/navigation.json'
import styles from './Header.module.scss'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOnDarkSection, setIsOnDarkSection] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isSignupOpen, setIsSignupOpen] = useState(false)
  const [signupType, setSignupType] = useState('individual')
  const location = useLocation()
  const { header } = navigationData

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
      
      // Check if header is over a dark section
      const darkSections = document.querySelectorAll('.content-section-alternate')
      const headerHeight = 80 // Approximate header height
      
      let onDarkSection = false
      darkSections.forEach(section => {
        const rect = section.getBoundingClientRect()
        // Check if header overlaps with dark section
        if (rect.top <= headerHeight && rect.bottom >= 0) {
          onDarkSection = true
        }
      })
      
      setIsOnDarkSection(onDarkSection)
    }
    
    window.addEventListener('scroll', handleScroll)
    // Call initially to set correct state
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const isActiveLink = (href) => {
    return location.pathname === href
  }

  // Check if user is on a dashboard page
  const isDashboardPage = location.pathname.includes('/dashboard') || 
                          location.pathname.includes('/user/') || 
                          location.pathname.includes('/expert/') || 
                          location.pathname.includes('/admin/')

  // Mock user data for dashboard
  const user = {
    firstName: 'John',
    lastName: 'Smith', 
    avatar: '/portrait-1.avif'
  }

  const getInitials = () => {
    return (user.firstName[0] + user.lastName[0]).toUpperCase()
  }

  return (
    <motion.header 
      className={`${styles.header} ${isScrolled ? styles.scrolled : ''} ${isOnDarkSection ? styles.onDarkSection : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link to="/" className={styles.logo}>
              <TapTimeLogo />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className={styles.navigation}>
            {header.links.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={link.href}
                  className={`${styles.navLink} ${isActiveLink(link.href) ? styles.active : ''}`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className={styles.actions}>
            {isDashboardPage ? (
              // Dashboard: Show profile section
              <>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Button 
                    size="sm" 
                    className="rounded-full w-10 h-10 p-0 bg-[#efffba] text-black hover:bg-black hover:text-white transition-colors"
                  >
                    <Bell className="w-4 h-4" />
                  </Button>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-3"
                >
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={user.avatar} alt={`${user.firstName} ${user.lastName}`} />
                    <AvatarFallback className="text-sm">{getInitials()}</AvatarFallback>
                  </Avatar>
                  <div className="hidden md:block text-left">
                    <p className="text-sm font-medium">{user.firstName} {user.lastName}</p>
                  </div>
                  <Button 
                    size="sm" 
                    className="rounded-full gap-2 bg-[#efffba] text-black hover:bg-black hover:text-white transition-colors px-4"
                  >
                    <LogOut className="w-4 h-4" />
                    <span className="hidden sm:block">Logout</span>
                  </Button>
                </motion.div>
              </>
            ) : (
              // Regular pages: Show login/signup
              <>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="sm"
                    className={location.pathname === '/join-expert' || 
                              location.pathname === '/how-it-works' ||
                              location.pathname === '/' ||
                              isOnDarkSection
                      ? "rounded-full border-2 border-white text-white bg-transparent hover:bg-white hover:text-black transition-all px-4"
                      : "rounded-full border-2 border-black text-black bg-transparent hover:bg-black hover:text-white transition-all px-4"}
                    onClick={() => setIsLoginOpen(true)}
                  >
                    Log In
                  </Button>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="sm"
                    className="rounded-full bg-[#efffba] text-black border border-[#efffba] hover:bg-black hover:text-white hover:border-black transition-all px-4"
                    onClick={() => setIsSignupOpen(true)}
                  >
                    Sign up
                  </Button>
                </motion.div>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className={styles.mobileMenuButton}
            onClick={toggleMobileMenu}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className={styles.mobileMenu}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <nav className={styles.mobileNav}>
                {header.links.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.href}
                      className={`${styles.mobileNavLink} ${isActiveLink(link.href) ? styles.active : ''}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                
                <div className={styles.mobileActions}>
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: header.links.length * 0.05 }}
                  >
                    <Button
                      size="sm"
                      className="justify-start w-full rounded-full border-2 border-black text-black bg-transparent hover:bg-black hover:text-white transition-colors"
                      onClick={() => {
                        setIsMobileMenuOpen(false)
                        setIsLoginOpen(true)
                      }}
                    >
                      Log In
                    </Button>
                  </motion.div>
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: (header.links.length + 1) * 0.05 }}
                  >
                    <Button
                      size="sm"
                      className="justify-start w-full rounded-full bg-[#efffba] text-black hover:bg-black hover:text-white transition-colors"
                      onClick={() => {
                        setIsMobileMenuOpen(false)
                        setIsSignupOpen(true)
                      }}
                    >
                      Sign up
                    </Button>
                  </motion.div>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Auth Modals */}
      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)}
        onOpenSignup={() => {
          setIsLoginOpen(false)
          setIsSignupOpen(true)
        }}
      />
      <SignupModal 
        isOpen={isSignupOpen} 
        onClose={() => setIsSignupOpen(false)}
        onOpenLogin={() => {
          setIsSignupOpen(false)
          setIsLoginOpen(true)
        }}
        defaultType={signupType}
      />
    </motion.header>
  )
}

export default Header