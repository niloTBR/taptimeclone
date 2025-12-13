import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Briefcase, Laptop, Palette, TrendingUp, DollarSign, Heart, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const ScrollingTicker = ({ items, className = '', onCategoryClick }) => {
  const containerRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

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

  const checkScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
    }
  }

  useEffect(() => {
    checkScroll()
    window.addEventListener('resize', checkScroll)
    return () => window.removeEventListener('resize', checkScroll)
  }, [items])

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = 300
      const newScrollLeft = containerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount)
      containerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      })
      setTimeout(checkScroll, 300)
    }
  }

  return (
    <div className={`relative ${className}`}>
      {/* Left Button */}
      <Button
        variant="outline"
        size="icon"
        className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white border-2 shadow-md transition-all ${
          canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } hover:bg-[#efffba] hover:border-[#efffba]`}
        onClick={() => scroll('left')}
      >
        <ChevronLeft className="w-5 h-5" />
      </Button>

      {/* Scrollable Container */}
      <div 
        ref={containerRef}
        className="overflow-x-auto scrollbar-hide mx-12"
        onScroll={checkScroll}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="flex items-center gap-2 px-4 py-2">
          {items.map((item, index) => (
            <Link 
              key={index} 
              to={`/browse?category=${encodeURIComponent(item.category)}`}
              className="group flex items-center gap-3 px-6 py-4 whitespace-nowrap rounded-full hover:bg-[#efffba] hover:text-black transition-all duration-200 cursor-pointer flex-shrink-0"
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

      {/* Right Button */}
      <Button
        variant="outline"
        size="icon"
        className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white border-2 shadow-md transition-all ${
          canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } hover:bg-[#efffba] hover:border-[#efffba]`}
        onClick={() => scroll('right')}
      >
        <ChevronRight className="w-5 h-5" />
      </Button>

      {/* CSS to hide scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}

export default ScrollingTicker