import { useState, useEffect } from 'react'

const TapTimeLogo = ({ className = '' }) => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check initial theme
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'))
    }
    
    checkTheme()

    // Watch for theme changes
    const observer = new MutationObserver(checkTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })

    return () => observer.disconnect()
  }, [])

  return (
    <img 
      src={isDark ? "/taptime-logo-dark.svg" : "/taptime-logo.svg"}
      alt="TapTime" 
      loading="lazy"
      className={className}
    />
  )
}

export default TapTimeLogo