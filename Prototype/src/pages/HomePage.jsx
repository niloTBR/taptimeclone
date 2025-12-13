import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SearchBar from '@/components/common/SearchBar'
import ExpertCard from '@/components/common/ExpertCard'
import ScrollingTicker from '@/components/common/ScrollingTicker'
import SectionTitle from '@/components/common/SectionTitle'
import { ArrowRight, Users, Clock, Star, Globe, ChevronLeft, ChevronRight, ChevronUp, ChevronDown, Briefcase, Code, Palette, TrendingUp, DollarSign, Heart } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import homepageData from '@/data/homepage.json'
import styles from './HomePage.module.scss'

const HomePage = () => {
  const { hero, valuePropositions, featuredSection, categories, ctaSection, stats, reviews } = homepageData
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0)
  const [currentExpertPage, setCurrentExpertPage] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [showScrollIndicator, setShowScrollIndicator] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState(categories[0]?.name || null)
  const [currentCategoryPage, setCurrentCategoryPage] = useState(0)
  const heroRef = useRef(null)
  const categoryCarouselRef = useRef(null)
  
  // Reviews: 3 on desktop, 1.5 on mobile
  const getReviewsVisible = () => window.innerWidth >= 768 ? 3 : 1.5
  const reviewsPerPage = 1
  const maxReviewPages = Math.max(0, reviews.testimonials.length - Math.floor(getReviewsVisible()) + 1)
  const totalPages = maxReviewPages
  
  // Experts: 4.5 visible, move one at a time
  const getExpertsVisible = () => window.innerWidth >= 768 ? 4.5 : 1.5
  const expertsPerPage = 1
  const maxExpertPages = Math.max(0, featuredSection.experts.length - Math.floor(getExpertsVisible()) + 1)
  const expertTotalPages = maxExpertPages

  // Advanced parallax effect for hero background + back to top visibility
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.pageYOffset
        const rate = scrolled * -0.3
        const opacity = 1 - scrolled / window.innerHeight
        
        // Apply parallax transform to background
        heroRef.current.style.transform = `translate3d(0, ${rate}px, 0)`
        heroRef.current.style.opacity = Math.max(opacity, 0.1)
      }
      
      // Show back to top button after scrolling 300px
      setShowBackToTop(window.pageYOffset > 300)
      
      // Hide scroll indicator after scrolling 100px
      setShowScrollIndicator(window.pageYOffset < 100)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const nextReviews = () => {
    setCurrentReviewIndex((prev) => (prev + 1) % totalPages)
  }
  
  const prevReviews = () => {
    setCurrentReviewIndex((prev) => (prev - 1 + totalPages) % totalPages)
  }
  
  const getCurrentReviews = () => {
    const start = currentReviewIndex * reviewsPerPage
    return reviews.testimonials.slice(start, start + reviewsPerPage)
  }

  const nextExperts = () => {
    setCurrentExpertPage(prev => (prev + 1) % expertTotalPages)
  }
  
  const prevExperts = () => {
    setCurrentExpertPage(prev => (prev - 1 + expertTotalPages) % expertTotalPages)
  }

  const getCarouselTransform = () => {
    const isMobile = window.innerWidth < 768
    const cardsVisible = isMobile ? 1.5 : 4.5
    const cardsToMove = 1 // Move one card at a time for smooth navigation
    
    const cardWidth = 100 / cardsVisible
    const offset = currentExpertPage * cardWidth * cardsToMove
    return `translateX(-${offset}%)`
  }

  const handleSearch = (query) => {
    console.log('Searching for:', query)
    // Implementation for search functionality
  }

  const handleCategoryClick = (category) => {
    console.log('Category clicked:', category)
    // Implementation for category navigation
  }

  const handleExpertClick = (expert) => {
    console.log('Expert clicked:', expert)
    // Implementation for expert profile navigation
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className={styles.homepage}>
      {/* Hero Section */}
      <section className={`${styles.heroSection} ${styles.sectionPadding}`}>
        <div className="page-container"
        >
          <motion.div 
            className={styles.heroContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Hero Content */}
            <div className={styles.heroText}>
              <motion.h1 
                className={styles.heroTitle}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {hero.title}
              </motion.h1>
              <motion.p 
                className={styles.heroSubtitle}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {hero.subtitle}
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div 
              className={styles.ctaButtons}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/browse" className={styles.primaryButton}>
                  {hero.primaryCta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/join-expert" className={styles.secondaryButton}>
                  {hero.secondaryCta}
                </Link>
              </motion.div>
            </motion.div>

            {/* Massive Search Bar */}
            <motion.div 
              className={styles.searchContainer}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <SearchBar
                placeholder="I'm looking for..."
                animatedPlaceholders={[
                  "I'm looking for startup advice...",
                  "I'm looking for marketing strategy...",
                  "I'm looking for design feedback...",
                  "I'm looking for tech mentorship...",
                  "I'm looking for fundraising help...",
                  "I'm looking for product guidance..."
                ]}
                onSearch={handleSearch}
                size="lg"
                className="w-full"
              />
            </motion.div>

            {/* Simple Scroll Arrow with Faded Circle */}
            {showScrollIndicator && (
              <motion.div 
                className="fixed bottom-8 right-4 cursor-pointer z-10"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
              >
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors">
                  <ChevronDown className="w-6 h-6 text-white" />
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Browse Categories Ticker */}
      <section className={styles.tickerSection}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <ScrollingTicker 
            items={categories.map(cat => ({
              category: cat.name,
              count: cat.expertCount
            }))}
          />
        </motion.div>
      </section>

      {/* Featured Experts */}
      <section className="content-section section-padding">
        <div className="page-container">
          <motion.div 
            className="section-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Header */}
            <div className="section-header">
              <SectionTitle 
                miniTitle="Featured Experts"
                title={featuredSection.title}
                description={featuredSection.subtitle}
                className={styles.sectionTitle}
              />
            </div>

            {/* ACTUAL CAROUSEL */}
            <div className={styles.expertGrid}>
              <div 
                className={styles.expertContainer}
                style={{ transform: getCarouselTransform() }}
              >
                {featuredSection.experts.map((expert, index) => (
                  <motion.div 
                    key={expert.id} 
                    className={styles.expertItem}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index % expertsPerPage) * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <ExpertCard
                      expert={expert}
                      showActions={true}
                      showCrown={index === 0}
                      showCharity={index === 1}
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Pagination Controls */}
            <div className={styles.paginationControls}>
              <div className={styles.paginationArrows}>
                <button
                  onClick={() => {
                    console.log('PREV CLICKED', currentExpertPage)
                    prevExperts()
                  }}
                  className={styles.paginationArrow}
                  type="button"
                  style={{ zIndex: 999, pointerEvents: 'auto' }}
                >
                  <ChevronLeft />
                </button>
                <button
                  onClick={() => {
                    console.log('NEXT CLICKED', currentExpertPage)
                    nextExperts()
                  }}
                  className={styles.paginationArrow}
                  type="button"
                  style={{ zIndex: 999, pointerEvents: 'auto' }}
                >
                  <ChevronRight />
                </button>
              </div>
              <div className={styles.paginationDots}>
                {Array.from({ length: expertTotalPages }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      console.log('DOT CLICKED', i)
                      setCurrentExpertPage(i)
                    }}
                    className={`${styles.dot} ${i === currentExpertPage ? styles.active : ''}`}
                    style={{ zIndex: 999, pointerEvents: 'auto' }}
                  />
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* How It Works - Cool Carousel */}
      <section className="content-section-alternate section-padding">
        <div className="page-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className={styles.howItWorksHeader}>
              <SectionTitle 
                miniTitle="How It Works"
                title="Three simple steps to expert advice"
                description="Get connected with the right expert in minutes"
                className="mb-12"
              />
            </div>
            
            {/* Steps Carousel */}
            <div className={styles.stepsCarousel}>
              <div className={styles.stepsContainer}>
                {valuePropositions.map((prop, index) => (
                  <motion.div 
                    key={index} 
                    className={styles.stepCard}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {/* Image Placeholder */}
                    <div className={styles.stepImagePlaceholder}>
                    </div>
                    
                    {/* Step Content */}
                    <div className={styles.stepContent}>
                      <div className={styles.stepNumber}>
                        {prop.number}
                      </div>
                      <h3 className={styles.stepTitle}>
                        {prop.title}
                      </h3>
                      <p className={styles.stepDescription}>
                        {prop.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Top Experts Section - Category Carousel */}
      <section className="content-section section-padding bg-gray-50">
        <div className="page-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Header */}
            <div className="section-header mb-8">
              <SectionTitle 
                title="Top Experts"
                description=""
                className={styles.sectionTitle}
              />
            </div>
            
            {/* Category Cards Carousel */}
            <div className="relative px-12">
              {/* Left Arrow */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-transparent border-2 border-gray-300 text-gray-500 hover:bg-gray-100 hover:border-gray-400 hover:text-gray-700"
                onClick={() => {
                  if (categoryCarouselRef.current) {
                    categoryCarouselRef.current.scrollBy({ left: -280, behavior: 'smooth' })
                  }
                }}
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              
              {/* Scrollable Container */}
              <div 
                ref={categoryCarouselRef}
                className="overflow-x-auto scrollbar-hide flex gap-4 pb-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {categories.map((category, index) => {
                  const isSelected = selectedCategory === category.name
                  return (
                    <div 
                      key={index}
                      className="min-w-[260px] h-24 cursor-pointer transition-all"
                      onClick={() => setSelectedCategory(selectedCategory === category.name ? null : category.name)}
                    >
                      {/* Horizontal Compact Card - Fixed Height */}
                      <div className={`rounded-2xl border transition-all p-3 flex items-center gap-3 h-full ${
                        isSelected 
                          ? 'bg-[#081d34] border-[#081d34]' 
                          : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-md'
                      }`}>
                        {/* Small Image Placeholder */}
                        <div className="w-16 h-16 rounded-lg flex-shrink-0 bg-gradient-to-br from-gray-50 to-gray-100">
                        </div>
                        
                        {/* Category Info */}
                        <div className="flex-1 flex flex-col justify-center">
                          <h3 className={`font-medium text-sm mb-1 ${
                            isSelected ? 'text-white' : 'text-gray-900'
                          }`}>{category.name}</h3>
                          
                          {/* Expert Count with Arrow */}
                          <button 
                            className={`text-xs font-medium flex items-center gap-1 transition-colors ${
                              isSelected 
                                ? 'text-gray-300' 
                                : 'text-gray-600 hover:text-black'
                            }`}
                          >
                            {category.expertCount}+ experts
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
              
              {/* Right Arrow */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-transparent border-2 border-gray-300 text-gray-500 hover:bg-gray-100 hover:border-gray-400 hover:text-gray-700"
                onClick={() => {
                  if (categoryCarouselRef.current) {
                    categoryCarouselRef.current.scrollBy({ left: 280, behavior: 'smooth' })
                  }
                }}
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
            
            {/* Expanded Experts Grid */}
            {selectedCategory && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-8"
              >
                <div className="border-t pt-8">
                  <h4 className="text-lg font-semibold mb-4">
                    Top {selectedCategory} Experts
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {featuredSection.experts
                      .filter((expert, index) => index < 8) // Show max 8 experts
                      .map((expert) => (
                        <ExpertCard 
                          key={expert.id}
                          expert={expert}
                          variant="compact"
                        />
                      ))
                    }
                  </div>
                  <div className="text-center mt-6">
                    <Link to={`/browse?category=${encodeURIComponent(selectedCategory)}`}>
                      <Button className="rounded-full bg-black text-white hover:bg-gray-800 px-6">
                        View All {selectedCategory} Experts
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* CSS for hiding scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Reviews Section */}
      <section className="content-section section-padding">
        <div className="page-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Header */}
            <div className="section-header">
              <SectionTitle 
                miniTitle="What Our Users Say"
                title={reviews.title}
                description={reviews.subtitle}
                className={styles.sectionTitle}
              />
            </div>
            
            {/* Reviews Carousel - Same as Expert Carousel */}
            <div className={styles.reviewsCarousel}>
              <div 
                className={styles.reviewsContainer}
                style={{ transform: `translateX(-${currentReviewIndex * (100/getReviewsVisible())}%)` }}
              >
                {reviews.testimonials.map((testimonial, index) => (
                  <motion.div 
                    key={testimonial.id} 
                    className={styles.reviewCard}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: (index % 3) * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className={styles.reviewStars}>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-black text-black" />
                      ))}
                    </div>
                    <p className={styles.reviewText}>
                      "{testimonial.text}"
                    </p>
                    <div className={styles.reviewAuthor}>
                      <div className={styles.authorAvatar}>
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className={styles.authorInfo}>
                        <div className={styles.authorName}>{testimonial.name}</div>
                        <div className={styles.authorTitle}>{testimonial.title}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Reviews Pagination - Same as Expert Carousel */}
            <div className={styles.paginationControls} style={{ marginTop: '2rem' }}>
              <div className={styles.paginationArrows}>
                <button
                  onClick={() => {
                    console.log('PREV REVIEW CLICKED', currentReviewIndex)
                    prevReviews()
                  }}
                  className={styles.paginationArrow}
                  type="button"
                  style={{ zIndex: 999, pointerEvents: 'auto' }}
                >
                  <ChevronLeft />
                </button>
                <button
                  onClick={() => {
                    console.log('NEXT REVIEW CLICKED', currentReviewIndex)
                    nextReviews()
                  }}
                  className={styles.paginationArrow}
                  type="button"
                  style={{ zIndex: 999, pointerEvents: 'auto' }}
                >
                  <ChevronRight />
                </button>
              </div>
              <div className={styles.paginationDots}>
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      console.log('REVIEW DOT CLICKED', i)
                      setCurrentReviewIndex(i)
                    }}
                    className={`${styles.dot} ${i === currentReviewIndex ? styles.active : ''}`}
                    style={{ zIndex: 999, pointerEvents: 'auto' }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="content-section-alternate section-padding">
        <div className="page-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className={styles.statsGrid}>
              {[
                { icon: Users, value: stats.experts, label: "Verified Experts" },
                { icon: Clock, value: stats.sessions, label: "Sessions Completed" },
                { icon: Star, value: stats.satisfaction, label: "Average Rating" },
                { icon: Globe, value: stats.countries, label: "Countries Served" }
              ].map(({ icon: Icon, value, label }, index) => (
                <motion.div 
                  key={index}
                  className={styles.statItem}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className={styles.statIcon}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className={styles.statValue}>
                    {value}
                  </div>
                  <div className={styles.statLabel}>
                    {label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Sessions Section */}
      <section className="content-section section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="page-container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Header */}
            <div className="section-header">
              <SectionTitle 
                miniTitle="Top Sessions"
                title="Featured Sessions"
                description="Popular sessions from our expert mentors"
                className={styles.sectionTitle}
              />
            </div>

            {/* Sessions Grid - Different Card Style */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Sample Sessions - In real app, this would come from data */}
              {[
                {
                  id: 1,
                  title: "Scaling Your Startup",
                  expertName: "Sarah Chen",
                  expertInitials: "SC",
                  duration: "45 min",
                  price: "$150",
                  category: "Business",
                  description: "Learn proven strategies for scaling your startup from 0 to 1M users"
                },
                {
                  id: 2,
                  title: "Product Design Fundamentals",
                  expertName: "Alex Rivera",
                  expertInitials: "AR",
                  duration: "60 min",
                  price: "$200",
                  category: "Design",
                  description: "Master the core principles of product design and user experience"
                },
                {
                  id: 3,
                  title: "Advanced React Patterns",
                  expertName: "Mike Johnson",
                  expertInitials: "MJ",
                  duration: "90 min",
                  price: "$250",
                  category: "Technology",
                  description: "Deep dive into advanced React patterns and performance optimization"
                },
                {
                  id: 4,
                  title: "Marketing on a Budget",
                  expertName: "Emma Wilson",
                  expertInitials: "EW",
                  duration: "30 min",
                  price: "$100",
                  category: "Marketing",
                  description: "Effective marketing strategies for bootstrapped startups"
                },
                {
                  id: 5,
                  title: "Fundraising 101",
                  expertName: "David Park",
                  expertInitials: "DP",
                  duration: "60 min",
                  price: "$300",
                  category: "Finance",
                  description: "Everything you need to know about raising your first round"
                },
                {
                  id: 6,
                  title: "Building Your Personal Brand",
                  expertName: "Lisa Martinez",
                  expertInitials: "LM",
                  duration: "45 min",
                  price: "$175",
                  category: "Personal Development",
                  description: "Create a compelling personal brand that opens doors"
                }
              ].map((session) => (
                <Card 
                  key={session.id}
                  className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-gray-300"
                >
                  <CardContent className="p-0">
                    {/* Session Header with Category */}
                    <div className="p-4 pb-0">
                      <div className="flex justify-between items-start mb-3">
                        <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                          {session.category}
                        </span>
                        <span className="text-sm font-bold text-green-600">
                          {session.price}
                        </span>
                      </div>
                      
                      {/* Session Title */}
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors">
                        {session.title}
                      </h3>
                      
                      {/* Session Description */}
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                        {session.description}
                      </p>
                    </div>
                    
                    {/* Expert Info Bar */}
                    <div className="border-t bg-gray-50 p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {/* Expert Avatar Circle */}
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center font-semibold text-sm">
                          {session.expertInitials}
                        </div>
                        
                        {/* Expert Name and Duration */}
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {session.expertName}
                          </p>
                          <p className="text-xs text-gray-500 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {session.duration}
                          </p>
                        </div>
                      </div>
                      
                      {/* Book Button */}
                      <Button 
                        size="sm"
                        className="rounded-full bg-black text-white hover:bg-gray-800 px-4 h-8 text-xs"
                      >
                        Book Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* View All Sessions Button */}
            <div className="text-center mt-8">
              <Link to="/sessions">
                <Button className="rounded-full bg-black text-white hover:bg-gray-800 px-8">
                  View All Sessions
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sleek Footer CTA Bar */}
      <div className={styles.footerCta}>
        <div className={styles.footerCtaContent}>
          <div>
            <div className={styles.footerCtaText}>
              <h3 className={styles.footerCtaTitle}>Your Next Breakthrough Awaits</h3>
              <p className={styles.footerCtaSubtitle}>
                Join thousands of ambitious professionals who've accelerated their success with expert guidance. Stop wondering 'what if' and start making it happen.
              </p>
            </div>
            <Link to="/browse" className={styles.footerCtaButton}>
              Find Your Expert
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.button
          onClick={scrollToTop}
          className={styles.backToTop}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronUp />
        </motion.button>
      )}
    </div>
  )
}

export default HomePage