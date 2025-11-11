import { useState } from 'react'
import { motion } from 'framer-motion'
import { Twitter, Linkedin, Instagram, Facebook } from 'lucide-react'
import TapTimeLogo from '@/components/common/TapTimeLogo'
import navigationData from '@/data/navigation.json'
import styles from './Footer.module.scss'

const Footer = () => {
  const { footer } = navigationData
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    if (newsletterEmail.trim()) {
      console.log('Newsletter subscription for:', newsletterEmail)
      setNewsletterEmail('')
      setShowSuccessMessage(true)
      setTimeout(() => {
        setShowSuccessMessage(false)
      }, 5000)
    }
  }

  const socialIcons = [
    { Icon: Twitter, href: '#' },
    { Icon: Linkedin, href: '#' },
    { Icon: Instagram, href: '#' },
    { Icon: Facebook, href: '#' }
  ]

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Brand Section */}
          <motion.div 
            className={styles.brandSection}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className={styles.logo}>
              <TapTimeLogo />
            </div>
            <p className={styles.description}>
              {footer.description}
            </p>
            
            {/* Social Media Icons */}
            <div className={styles.socialLinks}>
              {socialIcons.map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  className={styles.socialLink}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Sections */}
          {footer.sections.map((section, sectionIndex) => (
            <motion.div 
              key={sectionIndex} 
              className={styles.section}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className={styles.sectionTitle}>
                {section.title}
              </h3>
              <ul className={styles.linksList}>
                {section.links.map((link, linkIndex) => (
                  <motion.li 
                    key={linkIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (sectionIndex * 0.1) + (linkIndex * 0.05) }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={link.href}
                      className={styles.link}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Newsletter Section */}
          <motion.div 
            className={styles.newsletterSection}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className={styles.sectionTitle}>
              Newsletter
            </h3>
            
            {showSuccessMessage ? (
              <motion.div 
                className={styles.successMessage}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                Welcome to the TapTime community! Stay tuned for our next insight issue in your inbox.
              </motion.div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className={styles.newsletterForm}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className={styles.newsletterInput}
                  required
                />
                <motion.button 
                  type="submit" 
                  className={styles.newsletterButton}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>

        <div className={styles.separator} />

        {/* Bottom Footer */}
        <motion.div 
          className={styles.bottomFooter}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className={styles.copyright}>
            {footer.copyright}
          </p>
          
          <div className={styles.legalLinks}>
            {footer.legal.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={styles.legalLink}
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer