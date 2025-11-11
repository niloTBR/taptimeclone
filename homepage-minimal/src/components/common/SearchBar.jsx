import { useState, useEffect } from 'react'
import { Button } from '../ui/button'
import { Search, Mic, Sparkles } from 'lucide-react'

const SearchBar = ({ 
  placeholder = "Search...", 
  onSearch,
  className = "",
  showVoiceSearch = true,
  showAIMatch = true,
  size = "default",
  animatedPlaceholders = []
}) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPlaceholder, setCurrentPlaceholder] = useState('')
  const [placeholderIndex, setPlaceholderIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const [currentText, setCurrentText] = useState('')

  // Typing animation effect
  useEffect(() => {
    if (animatedPlaceholders.length > 0 && searchQuery === '') {
      const fullText = animatedPlaceholders[placeholderIndex]
      let currentIndex = 0
      let isDeleting = false
      let timeoutId

      const typeEffect = () => {
        if (!isDeleting) {
          // Typing forward
          if (currentIndex <= fullText.length) {
            setCurrentText(fullText.substring(0, currentIndex))
            currentIndex++
            timeoutId = setTimeout(typeEffect, 80) // Consistent typing speed
          } else {
            // Pause at end, then start deleting
            timeoutId = setTimeout(() => {
              isDeleting = true
              typeEffect()
            }, 2000)
          }
        } else {
          // Deleting backward
          if (currentIndex > 0) {
            currentIndex--
            setCurrentText(fullText.substring(0, currentIndex))
            timeoutId = setTimeout(typeEffect, 40) // Faster deletion
          } else {
            // Move to next placeholder
            setPlaceholderIndex((prev) => (prev + 1) % animatedPlaceholders.length)
            isDeleting = false
            currentIndex = 0
          }
        }
      }

      // Start typing after a small delay
      timeoutId = setTimeout(typeEffect, 300)
      
      return () => {
        if (timeoutId) {
          clearTimeout(timeoutId)
        }
      }
    } else if (searchQuery === '') {
      setCurrentText(placeholder)
    }
  }, [placeholderIndex, animatedPlaceholders, placeholder, searchQuery])

  useEffect(() => {
    setCurrentPlaceholder(currentText)
  }, [currentText])

  const handleSearch = (e) => {
    e.preventDefault()
    if (onSearch) {
      onSearch(searchQuery)
    }
  }

  const handleVoiceSearch = () => {
    // Voice search implementation would go here
    console.log('Voice search activated')
  }

  const handleAIMatch = () => {
    // AI matching implementation would go here
    console.log('AI matching activated')
  }

  const sizeClasses = {
    sm: "min-h-[4rem]",
    default: "min-h-[5rem]", 
    lg: "min-h-[6rem]"
  }

  const paddingClasses = {
    sm: "p-4 pb-12",
    default: "p-4 pb-12", 
    lg: "p-6 pb-16"
  }

  const fontClasses = {
    sm: "text-sm",
    default: "text-base", 
    lg: "text-lg"
  }

  return (
    <form onSubmit={handleSearch} className={`relative ${className}`}>
      <div className="relative">
        <textarea
          placeholder={currentPlaceholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={`${paddingClasses[size]} ${sizeClasses[size]} ${fontClasses[size]} rounded-3xl transition-all duration-300 placeholder:font-normal placeholder:text-base resize-none border border-gray-200 focus:border-gray-300 focus:outline-none w-full`}
          rows={2}
        />
        <div className="absolute bottom-3 right-3 flex gap-2">
          {showVoiceSearch && (
            <Button
              type="button"
              size="sm"
              variant="ghost"
              onClick={handleVoiceSearch}
              className="h-10 w-10 p-0 rounded-full bg-gray-100 hover:bg-black hover:text-white transition-colors"
            >
              <Mic className="w-4 h-4" />
            </Button>
          )}
          <Button
            type="submit"
            size="sm"
            className="h-10 px-3 rounded-full bg-gray-100 hover:bg-black hover:text-white text-black transition-colors"
          >
            <Search className="w-4 h-4" />
          </Button>
          {showAIMatch && (
            <Button
              type="button"
              size="sm"
              variant="ghost"
              onClick={handleAIMatch}
              className="h-10 px-3 rounded-full text-xs bg-gray-100 text-black hover:bg-[#efffba] hover:text-black transition-all"
            >
              <Sparkles className="w-3 h-3 mr-1 text-black animate-pulse" />
              Match with AI
            </Button>
          )}
        </div>
      </div>
    </form>
  )
}

export default SearchBar