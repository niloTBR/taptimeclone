import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { Calendar } from '@/components/ui/calendar'
import SectionTitle from '@/components/common/SectionTitle'
import { 
  Star, 
  Clock, 
  CalendarIcon,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  CreditCard,
  FileText,
  Upload,
  Shield,
  MessageSquare,
  Crown,
  Package,
  Zap
} from 'lucide-react'
import bookingData from '@/data/booking.json'

const BookingPage = () => {
  const { expert, sessionTypes, calendar, bookingSteps, bookingQuestions, policies } = bookingData
  
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedSession, setSelectedSession] = useState(null)
  const [selectedDuration, setSelectedDuration] = useState(null)
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [calendarDate, setCalendarDate] = useState(new Date(2024, 10, 29)) // Start at November 29, 2024
  const [formData, setFormData] = useState({})
  const [selectedPaymentCard, setSelectedPaymentCard] = useState(1)
  const [showAddCard, setShowAddCard] = useState(false)
  const [savedCards] = useState([
    { 
      id: 1, 
      type: 'VISA', 
      last4: '4242', 
      expiry: '12/2025',
      gradient: 'from-blue-600 to-purple-600'
    },
    { 
      id: 2, 
      type: 'MSTR', 
      last4: '8888', 
      expiry: '08/2026',
      gradient: 'from-red-500 to-orange-500'
    }
  ])

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase()
  }

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleInputChange = (questionId, value) => {
    setFormData(prev => ({
      ...prev,
      [questionId]: value
    }))
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        if (!selectedSession) return false
        if (selectedSession.type === 'flexible' && !selectedDuration) return false
        return true
      case 2:
        return selectedDate !== null && selectedTime !== null
      case 3:
        return bookingQuestions
          .filter(q => q.required)
          .every(q => formData[q.id])
      default:
        return true
    }
  }

  const getCurrentPrice = () => {
    if (!selectedSession) return 0
    if (selectedSession.type === 'flexible' && selectedDuration) {
      return selectedDuration.price
    }
    if (selectedSession.type === 'bundle') {
      return selectedSession.bundlePrice
    }
    return selectedSession.price || 0
  }

  return (
    <div className="min-h-screen bg-background pt-32">
      {/* White Top Bar */}
      <div className="bg-white border-b shadow-sm">
        <div className="container mx-auto max-w-6xl px-4 py-4">
          <div className="flex items-center gap-4">
            <div 
              className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center cursor-pointer transition-colors"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-base leading-tight">
                  {expert.name}
                </h3>
                {expert.badges && expert.badges.includes('Verified') && (
                  <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" className="w-5 h-5">
                      <g>
                        <path d="M12 1.5c-.5 0-1 .2-1.4.6L9.2 3.5c-.3.3-.7.4-1.1.4H6.5c-.8 0-1.5.7-1.5 1.5v1.6c0 .4-.1.8-.4 1.1L3.2 9.5c-.8.8-.8 2 0 2.8l1.4 1.4c.3.3.4.7.4 1.1V16.5c0 .8.7 1.5 1.5 1.5h1.6c.4 0 .8.1 1.1.4l1.4 1.4c.8.8 2 .8 2.8 0l1.4-1.4c.3-.3.7-.4 1.1-.4h1.6c.8 0 1.5-.7 1.5-1.5v-1.6c0-.4.1-.8.4-1.1l1.4-1.4c.8-.8.8-2 0-2.8l-1.4-1.4c-.3-.3-.4-.7-.4-1.1V5.5c0-.8-.7-1.5-1.5-1.5h-1.6c-.4 0-.8-.1-1.1-.4L13.4 2.1c-.4-.4-.9-.6-1.4-.6z" fill="#1d9bf0"/>
                        <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                      </g>
                    </svg>
                  </div>
                )}
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                {expert.title}
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* Minimal Progress */}
      <section className="py-4 px-4 border-b">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-center gap-8">
            {bookingSteps.map((step, index) => (
              <div key={step.step} className="flex items-center gap-2">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                  currentStep >= step.step 
                    ? 'bg-foreground text-background' 
                    : 'bg-gray-200 text-muted-foreground'
                }`}>
                  {currentStep > step.step ? '✓' : step.step}
                </div>
                <span className={`text-sm ${
                  currentStep >= step.step ? 'text-foreground' : 'text-muted-foreground'
                }`}>
                  {step.title}
                </span>
                {index < bookingSteps.length - 1 && (
                  <div className="w-8 h-px bg-gray-200 ml-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Booking Flow */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Step 1: Choose Session Type */}
              {currentStep === 1 && (
                <Card className="border-2 border-foreground">
                  <CardHeader>
                    <CardTitle>Choose Session Type</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {/* Expert's structured sessions */}
                    {sessionTypes.structured.map((session) => (
                      <div
                        key={session.id}
                        onClick={() => setSelectedSession({...session, type: 'structured'})}
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all hover:shadow-md ${
                          selectedSession?.id === session.id
                            ? 'border-foreground bg-white text-foreground shadow-md'
                            : 'border-gray-200 hover:border-gray-300 bg-gray-50 text-gray-600'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h3 className="font-medium text-sm mb-1">{session.title}</h3>
                            <p className="text-xs opacity-75 line-clamp-2">{session.description}</p>
                          </div>
                          <div className="ml-4 text-right">
                            <div className="font-semibold text-sm">${session.price}</div>
                            <div className="text-xs opacity-75">{session.duration}</div>
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Flexible duration option */}
                    <div
                      onClick={() => {
                        setSelectedSession({...sessionTypes.flexible, type: 'flexible'})
                        if (!selectedDuration) setSelectedDuration(sessionTypes.flexible.durations[0])
                      }}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all hover:shadow-md ${
                        selectedSession?.id === sessionTypes.flexible.id
                          ? 'border-foreground bg-white text-foreground shadow-md'
                          : 'border-gray-200 hover:border-gray-300 bg-gray-50 text-gray-600'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="font-medium text-sm mb-1">General Consultation</h3>
                          <p className="text-xs opacity-75 line-clamp-2">Open discussion about your business challenges</p>
                        </div>
                        <div className="ml-4 text-right">
                          <div className="font-semibold text-sm">
                            {selectedDuration ? `$${selectedDuration.price}` : 'From $500'}
                          </div>
                          {selectedSession?.id === sessionTypes.flexible.id ? (
                            <select
                              value={selectedDuration?.duration || ''}
                              onChange={(e) => {
                                const duration = sessionTypes.flexible.durations.find(d => d.duration === e.target.value)
                                setSelectedDuration(duration)
                              }}
                              onClick={(e) => e.stopPropagation()}
                              className={`text-xs mt-1 px-2 py-1 border rounded ${
                                selectedSession?.id === sessionTypes.flexible.id
                                  ? 'border-gray-300 bg-gray-50 text-foreground'
                                  : 'border-gray-300 bg-white'
                              }`}
                            >
                              <option value="">Choose duration</option>
                              {sessionTypes.flexible.durations.map((duration) => (
                                <option key={duration.duration} value={duration.duration}>
                                  {duration.duration}
                                </option>
                              ))}
                            </select>
                          ) : (
                            <div className="text-xs opacity-75">Choose duration</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 2: Pick Date & Time */}
              {currentStep === 2 && (
                <Card className="border-2 border-foreground">
                  <CardHeader>
                    <CardTitle>Pick Date & Time</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Calendar */}
                      <div>
                        <h4 className="font-medium mb-3">Select Date</h4>
                        <Calendar
                          mode="single"
                          selected={calendarDate}
                          onSelect={(date) => {
                            setCalendarDate(date)
                            // Find corresponding slot data
                            const dateStr = date?.toISOString().split('T')[0]
                            const availableDay = calendar.availableSlots.find(day => day.date === dateStr)
                            setSelectedDate(availableDay || null)
                            setSelectedTime(null) // Reset time when date changes
                          }}
                          disabled={(date) => {
                            // Disable dates without availability
                            const dateStr = date.toISOString().split('T')[0]
                            const hasAvailability = calendar.availableSlots.some(day => day.date === dateStr)
                            return !hasAvailability
                          }}
                          month={new Date(2024, 10, 1)} // Show November 2024
                          fromMonth={new Date(2024, 10, 1)} // Allow navigation from November
                          toMonth={new Date(2024, 11, 31)} // Allow navigation to December
                          className="rounded-md border"
                        />
                      </div>

                      {/* Time Slots */}
                      <div>
                        <h4 className="font-medium mb-3">
                          {selectedDate ? `Available Times - ${selectedDate.displayDate}` : 'Select a date first'}
                        </h4>
                        {selectedDate && selectedDate.slots && (
                          <div className="grid grid-cols-2 gap-2">
                            {selectedDate.slots.map((slot) => (
                              <button
                                key={`${selectedDate.date}-${slot.time}`}
                                onClick={() => setSelectedTime(slot)}
                                disabled={!slot.available}
                                className={`p-3 text-sm rounded border-2 transition-colors ${
                                  selectedTime?.time === slot.time
                                    ? 'border-foreground bg-white text-foreground shadow-md'
                                    : slot.available
                                    ? 'border-gray-200 hover:border-gray-300 bg-gray-50'
                                    : 'border-gray-100 bg-gray-50 text-gray-400 cursor-not-allowed'
                                }`}
                              >
                                {slot.display}
                              </button>
                            ))}
                          </div>
                        )}
                        {!selectedDate && (
                          <div className="text-center py-8 text-gray-400">
                            <CalendarIcon className="w-12 h-12 mx-auto mb-2 opacity-50" />
                            <p className="text-sm">Please select a date to see available times</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 3: Add Details */}
              {currentStep === 3 && (
                <Card className="border-2 border-foreground">
                  <CardHeader>
                    <CardTitle>Session Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {bookingQuestions.map((question) => (
                      <div key={question.id}>
                        <label className="block text-sm font-medium mb-2">
                          {question.question}
                          {question.required && <span className="text-red-500 ml-1">*</span>}
                        </label>
                        
                        {question.type === 'select' && (
                          <select
                            value={formData[question.id] || ''}
                            onChange={(e) => handleInputChange(question.id, e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg"
                          >
                            <option value="">Select an option</option>
                            {question.options.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        )}
                        
                        {question.type === 'textarea' && (
                          <textarea
                            value={formData[question.id] || ''}
                            onChange={(e) => handleInputChange(question.id, e.target.value)}
                            placeholder={question.placeholder}
                            rows={4}
                            className="w-full p-3 border border-gray-300 rounded-lg"
                          />
                        )}
                        
                        {question.type === 'file' && (
                          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                            <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                            <p className="text-sm text-gray-600">
                              Drop files here or click to upload
                            </p>
                            <p className="text-xs text-gray-400 mt-1">
                              Supports: PDF, DOC, DOCX, PPT, PPTX
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )}

              {/* Step 4: Payment */}
              {currentStep === 4 && (
                <Card className="border-2 border-foreground">
                  <CardHeader>
                    <CardTitle>Payment</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="w-4 h-4 text-foreground" />
                        <span className="text-sm font-medium">Secure Payment</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Your payment is protected by 256-bit SSL encryption
                      </p>
                    </div>
                    
                    {/* Saved Cards */}
                    <div>
                      <h4 className="text-sm font-medium mb-4">Select Payment Method</h4>
                      <div className="space-y-3">
                        {savedCards.map((card) => (
                          <label
                            key={card.id}
                            className={`flex items-center gap-4 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                              selectedPaymentCard === card.id
                                ? 'border-black bg-gray-50'
                                : 'border-gray-200 hover:border-gray-400'
                            }`}
                          >
                            <input
                              type="radio"
                              name="paymentCard"
                              value={card.id}
                              checked={selectedPaymentCard === card.id}
                              onChange={() => setSelectedPaymentCard(card.id)}
                              className="w-4 h-4 text-black"
                            />
                            <div className={`w-12 h-8 bg-gradient-to-r ${card.gradient} rounded text-white text-xs flex items-center justify-center font-bold`}>
                              {card.type}
                            </div>
                            <div className="flex-1">
                              <p className="font-medium text-sm">•••• •••• •••• {card.last4}</p>
                              <p className="text-xs text-gray-500">Expires {card.expiry}</p>
                            </div>
                          </label>
                        ))}
                        
                        {/* Add New Card Option */}
                        <button
                          onClick={() => setShowAddCard(!showAddCard)}
                          type="button"
                          className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 transition-colors flex items-center justify-center gap-2 text-gray-600"
                        >
                          <CreditCard className="w-5 h-5" />
                          <span className="text-sm font-medium">Add New Card</span>
                        </button>
                      </div>
                    </div>
                    
                    {/* Add New Card Form (Hidden by default) */}
                    {showAddCard && (
                      <div className="space-y-4 p-4 border rounded-lg bg-gray-50">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-2">Card Number</label>
                            <input 
                              type="text" 
                              placeholder="1234 5678 9012 3456"
                              className="w-full p-3 border border-gray-300 rounded-lg focus:border-black focus:outline-none"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">Expiry Date</label>
                            <input 
                              type="text" 
                              placeholder="MM/YY"
                              className="w-full p-3 border border-gray-300 rounded-lg focus:border-black focus:outline-none"
                            />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-2">CVV</label>
                            <input 
                              type="text" 
                              placeholder="123"
                              className="w-full p-3 border border-gray-300 rounded-lg focus:border-black focus:outline-none"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">Cardholder Name</label>
                            <input 
                              type="text" 
                              placeholder="John Doe"
                              className="w-full p-3 border border-gray-300 rounded-lg focus:border-black focus:outline-none"
                            />
                          </div>
                        </div>
                        
                        <label className="flex items-center gap-2 text-sm">
                          <input type="checkbox" className="rounded border-gray-300" />
                          <span>Save this card for future payments</span>
                        </label>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between">
                <Button 
                  variant="outline" 
                  onClick={handleBack}
                  disabled={currentStep === 1}
                  className="rounded-full px-6 border-2 border-gray-300 text-gray-700 hover:border-black hover:bg-black hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
                
                <Button 
                  onClick={handleNext}
                  disabled={!canProceed()}
                  variant="outline"
                  className="rounded-full px-6 border-2 border-black text-black hover:bg-black hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {currentStep === 4 ? (
                    <>
                      <CreditCard className="w-4 h-4 mr-2" />
                      Complete Booking
                    </>
                  ) : (
                    <>
                      Next
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </div>
            </div>

            {/* Sidebar - Booking Summary */}
            <div className="lg:col-span-1">
              <Card className="border-2 border-foreground sticky top-4">
                <CardHeader>
                  <CardTitle>Booking Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Expert Info */}
                  <div>
                    <h4 className="font-semibold text-sm">{expert.name}</h4>
                    <p className="text-xs text-muted-foreground">{expert.title}</p>
                  </div>

                  <div className="border-t my-3" />

                  {/* Session Details */}
                  {selectedSession && (
                    <div>
                      <h5 className="font-medium text-sm mb-3">Session Details</h5>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                          <div className="font-medium text-sm">{selectedSession.title}</div>
                          <div className="text-xs text-muted-foreground mt-1">
                            {selectedSession.type === 'flexible' && selectedDuration 
                              ? selectedDuration.duration
                              : selectedSession.type === 'bundle' 
                              ? selectedSession.totalDuration
                              : selectedSession.duration}
                          </div>
                        </div>
                        <div className="font-semibold text-sm">${getCurrentPrice()}</div>
                      </div>
                    </div>
                  )}

                  {selectedDate && selectedTime && (
                    <>
                      <div className="border-t my-3" />
                      <div>
                        <h5 className="font-medium text-sm mb-2">Date & Time</h5>
                        <div className="flex items-center gap-2 text-sm">
                          <CalendarIcon className="w-4 h-4" />
                          <span>{selectedDate.displayDate}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm mt-1">
                          <Clock className="w-4 h-4" />
                          <span>{selectedTime.display}</span>
                        </div>
                      </div>
                    </>
                  )}

                  {selectedSession && (
                    <>
                      <div className="border-t my-3" />
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Session Price</span>
                          <span className="font-semibold text-xl">${getCurrentPrice()}</span>
                        </div>
                      </div>
                    </>
                  )}

                  <div className="border-t my-3" />

                  {/* Policies */}
                  <div className="space-y-2">
                    <h5 className="font-medium text-sm">Booking Policies</h5>
                    <div className="space-y-0.5 text-xs text-muted-foreground" style={{ fontSize: '10px' }}>
                      <p>• {policies.cancellation}</p>
                      <p>• {policies.rescheduling}</p>
                      <p>• {policies.preparation}</p>
                      <button className="text-blue-600 hover:text-blue-700 underline block mt-1">
                        View Full Policy
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BookingPage