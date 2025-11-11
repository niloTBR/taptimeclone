import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Briefcase, Laptop, Palette, TrendingUp, DollarSign, Heart, ArrowRight } from 'lucide-react'

const ScrollingTicker = ({ items, className = '', onCategoryClick }) => {
  const tickerRef = useRef(null)

  // Icon mapping for categories
  const getIcon = (categoryName) => {
    const iconMap = {
      'Business & Startups': Briefcase,
      'Technology & Innovation': Laptop, 
      'Design & Creativity': Palette,
      'Marketing & Growth': TrendingUp,
      'Finance & Economics': DollarSign,
      'Health & Wellness': Heart
    }
    const IconComponent = iconMap[categoryName] || Briefcase
    return <IconComponent className="w-4 h-4" />
  }

  useEffect(() => {
    const ticker = tickerRef.current
    if (!ticker) return

    const tickerContent = ticker.querySelector('.ticker-content')
    if (!tickerContent) return

    // Clone content for seamless loop
    const clonedContent = tickerContent.cloneNode(true)
    clonedContent.classList.add('ticker-clone')
    ticker.appendChild(clonedContent)

    return () => {
      const clone = ticker.querySelector('.ticker-clone')
      if (clone) {
        clone.remove()
      }
    }
  }, [items])

  return (
    <div className={`overflow-hidden relative ${className}`}>
      <div 
        ref={tickerRef}
        className="flex animate-scroll"
      >
        <div className="ticker-content flex items-center min-w-max">
          {items.map((item, index) => (
            <Link 
              key={index} 
              to={`/browse?category=${encodeURIComponent(item.category)}`}
              className="group flex items-center gap-3 px-6 py-4 mx-2 whitespace-nowrap rounded-full hover:bg-[#efffba] hover:text-black transition-all duration-200 cursor-pointer"
              onClick={(e) => {
                if (onCategoryClick) {
                  e.preventDefault()
                  onCategoryClick(item.category)
                }
              }}
            >
              <div className="w-6 h-6 rounded-full bg-[#efffba] text-black flex items-center justify-center flex-shrink-0 group-hover:bg-black group-hover:text-[#efffba] transition-all duration-200">
                {getIcon(item.category)}
              </div>
              <span className="text-base font-medium select-none flex-shrink-0">
                {item.category}
              </span>
              <ArrowRight className="w-4 h-4 text-muted-foreground flex-shrink-0 ms-2" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ScrollingTicker