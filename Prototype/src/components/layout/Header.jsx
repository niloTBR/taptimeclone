import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle from '@/components/common/ThemeToggle'
import TapTimeLogo from '@/components/common/TapTimeLogo'
import navigationData from '@/data/navigation.json'
import styles from './Header.module.scss'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOnDarkSection, setIsOnDarkSection] = useState(false)
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
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <ThemeToggle />
            </motion.div>
            {header.actions.map((action, index) => {
              // Determine button class based on label
              const buttonClass = action.label.toLowerCase().includes('log') 
                ? 'login' 
                : action.label.toLowerCase().includes('sign') 
                  ? 'signup' 
                  : 'default';
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="default"
                    size="sm"
                    className={`ios-button ${buttonClass}`}
                    asChild
                  >
                    <Link to={action.href}>{action.label}</Link>
                  </Button>
                </motion.div>
              );
            })}
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
                  {header.actions.map((action, index) => {
                    // Determine button class based on label
                    const buttonClass = action.label.toLowerCase().includes('log') 
                      ? 'login' 
                      : action.label.toLowerCase().includes('sign') 
                        ? 'signup' 
                        : 'default';
                    
                    return (
                      <motion.div
                        key={index}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: (header.links.length + index) * 0.05 }}
                      >
                        <Button
                          variant="default"
                          size="sm"
                          className={`justify-start w-full ios-button ${buttonClass}`}
                          asChild
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <Link to={action.href}>{action.label}</Link>
                        </Button>
                      </motion.div>
                    );
                  })}
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default Header