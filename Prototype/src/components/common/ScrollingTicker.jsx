import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Briefcase, Laptop, Palette, TrendingUp, DollarSign, Heart, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const ScrollingTicker = ({ items, className = '', onCategoryClick }) => {
  const containerRef = useRef(null)

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

  const scroll = (direction) => {
    if (containerRef.current) {
      const container = containerRef.current
      const scrollAmount = 300
      const currentScroll = container.scrollLeft
      const maxScroll = container.scrollWidth - container.clientWidth

      let newScrollLeft
      
      if (direction === 'left') {
        newScrollLeft = currentScroll - scrollAmount
        // If we would scroll past the beginning, loop to the end
        if (newScrollLeft < 0) {
          newScrollLeft = maxScroll
        }
      } else {
        newScrollLeft = currentScroll + scrollAmount
        // If we would scroll past the end, loop to the beginning
        if (newScrollLeft > maxScroll) {
          newScrollLeft = 0
        }
      }
      
      container.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className={`relative px-16 ${className}`}>
      {/* Left Button - Always Visible */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-transparent border-2 border-gray-300 text-gray-500 hover:bg-gray-100 hover:border-gray-400 hover:text-gray-700 transition-all"
        onClick={() => scroll('left')}
      >
        <ChevronLeft className="w-5 h-5" />
      </Button>

      {/* Scrollable Container */}
      <div 
        ref={containerRef}
        className="overflow-x-auto scrollbar-hide"
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

      {/* Right Button - Always Visible */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-transparent border-2 border-gray-300 text-gray-500 hover:bg-gray-100 hover:border-gray-400 hover:text-gray-700 transition-all"
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