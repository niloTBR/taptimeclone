import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Calendar } from '@/components/ui/calendar'
import { 
  Clock, 
  CalendarIcon,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  CreditCard,
  Check,
  Package,
  Zap,
  ChevronLeft
} from 'lucide-react'
import bookingData from '@/data/booking.json'

const BookingPage = () => {
  const { expert, sessionTypes, calendar, bookingSteps, bookingQuestions } = bookingData
  
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedSession, setSelectedSession] = useState(null)
  const [selectedDuration, setSelectedDuration] = useState(null)
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [calendarDate, setCalendarDate] = useState(new Date(2024, 10, 29))
  const [formData, setFormData] = useState({})
  const [selectedPaymentCard, setSelectedPaymentCard] = useState(1)
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
    if (selectedSession.type === 'flexible') {
      return selectedDuration ? selectedDuration.price : selectedSession.basePrice
    }
    if (selectedSession.type === 'bundle') {
      return selectedSession.bundlePrice
    }
    return selectedSession.price
  }

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase()
  }

  const simplifiedSteps = [
    { step: 1, title: 'Session' },
    { step: 2, title: 'Date' },
    { step: 3, title: 'Details' },
    { step: 4, title: 'Payment' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/browse" className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-6">
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to all experts
        </Link>

        {/* Simple Header with Avatar */}
        <div className="text-center mb-8">
          <Avatar className="h-16 w-16 mx-auto mb-4 border-2 border-white shadow-md">
            <AvatarImage src={expert.image} alt={expert.name} />
            <AvatarFallback className="bg-[#efffba] text-sm font-semibold">
              {getInitials(expert.name)}
            </AvatarFallback>
          </Avatar>
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">BOOKING SESSION</p>
          <h1 className="text-xl font-semibold mb-1">{expert.name}</h1>
          <p className="text-sm text-gray-600">{expert.title}</p>
        </div>

        {/* Progress Pills */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {simplifiedSteps.map((step, index) => (
            <div key={step.step} className="flex items-center">
              <div className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                currentStep === step.step 
                  ? 'bg-[#efffba] text-black font-medium shadow-sm' 
                  : currentStep > step.step
                  ? 'bg-gray-200 text-gray-600'
                  : 'bg-gray-100 text-gray-400'
              }`}>
                <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                  currentStep > step.step 
                    ? 'bg-green-500 text-white' 
                    : ''
                }`}>
                  {currentStep > step.step ? (
                    <Check className="w-3 h-3" />
                  ) : (
                    <span className="text-sm font-medium">{step.step}</span>
                  )}
                </div>
                <span className="text-sm">{step.title}</span>
              </div>
              {index < simplifiedSteps.length - 1 && (
                <div className="w-8 h-[2px] bg-gray-200 mx-1" />
              )}
            </div>
          ))}
        </div>

        {/* Main Card */}
        <Card className="bg-white shadow-sm">
          <CardContent className="p-6">
            {/* Step 1: Choose Session */}
            {currentStep === 1 && (
              <div>
                <h2 className="text-lg font-semibold mb-6">Choose Your Session</h2>
                
                <div className="space-y-3">
                  {/* General Consultation - First */}
                  <div
                    onClick={() => {
                      setSelectedSession({...sessionTypes.flexible, type: 'flexible'})
                      if (!selectedDuration) setSelectedDuration(sessionTypes.flexible.durations[0])
                    }}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedSession?.id === sessionTypes.flexible.id
                        ? 'border-black bg-[#efffba]/10'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-medium text-sm mb-1">{sessionTypes.flexible.title}</h3>
                        <p className="text-xs text-gray-600 mb-3">{sessionTypes.flexible.description}</p>
                        {selectedSession?.id === sessionTypes.flexible.id ? (
                          <select
                            value={selectedDuration?.duration || ''}
                            onChange={(e) => {
                              const duration = sessionTypes.flexible.durations.find(d => d.duration === e.target.value)
                              setSelectedDuration(duration)
                            }}
                            onClick={(e) => e.stopPropagation()}
                            className="px-3 py-1.5 rounded-lg border-2 border-gray-200 text-sm bg-white focus:border-black focus:outline-none"
                          >
                            {sessionTypes.flexible.durations.map((duration) => (
                              <option key={duration.duration} value={duration.duration}>
                                {duration.duration} - ${duration.price}
                              </option>
                            ))}
                          </select>
                        ) : (
                          <div className="text-xs text-gray-500">
                            <span className="font-semibold text-black">From ${sessionTypes.flexible.basePrice}</span>
                          </div>
                        )}
                      </div>
                      <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 ${
                        selectedSession?.id === sessionTypes.flexible.id
                          ? 'border-black bg-black'
                          : 'border-gray-300'
                      }`}>
                        {selectedSession?.id === sessionTypes.flexible.id && (
                          <Check className="w-3 h-3 text-white m-auto" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Product-Market Fit Deep Dive - Second */}
                  <div
                    onClick={() => setSelectedSession({...sessionTypes.structured[0], type: 'structured'})}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedSession?.id === sessionTypes.structured[0].id
                        ? 'border-black bg-[#efffba]/10'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-medium text-sm">{sessionTypes.structured[0].title}</h3>
                          {sessionTypes.structured[0].popular && (
                            <Badge className="bg-yellow-100 text-yellow-700 border-0 text-xs h-5">
                              Popular
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-gray-600 mb-2">{sessionTypes.structured[0].description}</p>
                        <div className="flex items-center gap-3 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {sessionTypes.structured[0].duration}
                          </span>
                          <span className="font-semibold text-black">${sessionTypes.structured[0].price}</span>
                        </div>
                      </div>
                      <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 ${
                        selectedSession?.id === sessionTypes.structured[0].id
                          ? 'border-black bg-black'
                          : 'border-gray-300'
                      }`}>
                        {selectedSession?.id === sessionTypes.structured[0].id && (
                          <Check className="w-3 h-3 text-white m-auto" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Startup Accelerator Package - Third */}
                  <div
                    onClick={() => setSelectedSession({...sessionTypes.bundles[0], type: 'bundle'})}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all relative ${
                      selectedSession?.id === sessionTypes.bundles[0].id
                        ? 'border-black bg-[#efffba]/10'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Badge className="absolute top-3 right-3 bg-green-100 text-green-700 border-0 text-xs">
                      Save ${sessionTypes.bundles[0].savings}
                    </Badge>
                    
                    <div className="flex items-start justify-between">
                      <div className="flex-1 pr-16">
                        <div className="flex items-center gap-2 mb-1">
                          <Package className="w-3 h-3 text-gray-600" />
                          <h3 className="font-medium text-sm">{sessionTypes.bundles[0].title}</h3>
                        </div>
                        <p className="text-xs text-gray-600 mb-2">{sessionTypes.bundles[0].description}</p>
                        <div className="flex items-center gap-2 text-xs">
                          <span className="text-gray-500">{sessionTypes.bundles[0].sessions} sessions</span>
                          <span className="text-gray-400 line-through">${sessionTypes.bundles[0].originalPrice}</span>
                          <span className="font-semibold text-black">${sessionTypes.bundles[0].bundlePrice}</span>
                        </div>
                      </div>
                      <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 ${
                        selectedSession?.id === sessionTypes.bundles[0].id
                          ? 'border-black bg-black'
                          : 'border-gray-300'
                      }`}>
                        {selectedSession?.id === sessionTypes.bundles[0].id && (
                          <Check className="w-3 h-3 text-white m-auto" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Price Display */}
                {selectedSession && (
                  <div className="mt-6 p-3 bg-[#efffba]/20 rounded-lg border border-[#efffba]">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Total Price</span>
                      <span className="font-bold text-lg">${getCurrentPrice()}</span>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Step 2: Pick Date & Time */}
            {currentStep === 2 && (
              <div>
                <h2 className="text-lg font-semibold mb-6">Select Date & Time</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Calendar */}
                  <div>
                    <label className="text-sm font-medium mb-3 block">Date</label>
                    <div className="border-2 border-gray-200 rounded-lg p-2">
                      <Calendar
                        mode="single"
                        selected={selectedDate ? new Date(selectedDate.date) : null}
                        onSelect={(date) => {
                          const slot = calendar.availableSlots.find(s => 
                            new Date(s.date).toDateString() === date?.toDateString()
                          )
                          if (slot) {
                            setSelectedDate(slot)
                            setSelectedTime(null)
                          }
                        }}
                        className="rounded-md"
                        month={calendarDate}
                        onMonthChange={setCalendarDate}
                        disabled={(date) => {
                          const dateStr = date.toISOString().split('T')[0]
                          return !calendar.availableSlots.some(slot => slot.date === dateStr)
                        }}
                      />
                    </div>
                  </div>

                  {/* Time Slots */}
                  <div>
                    <label className="text-sm font-medium mb-3 block">Time</label>
                    {selectedDate ? (
                      <div>
                        <p className="text-xs text-gray-500 mb-3">{selectedDate.displayDate}</p>
                        <div className="grid grid-cols-2 gap-2">
                          {selectedDate.slots.map((slot) => (
                            <button
                              key={slot.time}
                              onClick={() => setSelectedTime(slot)}
                              disabled={!slot.available}
                              className={`p-2 rounded-lg text-sm font-medium transition-all ${
                                selectedTime?.time === slot.time
                                  ? 'bg-[#efffba] text-black border-2 border-black'
                                  : slot.available
                                  ? 'bg-gray-50 hover:bg-gray-100 border-2 border-gray-200'
                                  : 'bg-gray-100 text-gray-400 cursor-not-allowed border-2 border-gray-100'
                              }`}
                            >
                              {slot.display}
                            </button>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="border-2 border-dashed border-gray-200 rounded-lg p-12 text-center">
                        <CalendarIcon className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                        <p className="text-sm text-gray-500">Select a date first</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Add Details */}
            {currentStep === 3 && (
              <div>
                <h2 className="text-lg font-semibold mb-6">Session Details</h2>
                
                <div className="space-y-4">
                  {bookingQuestions.map((question) => (
                    <div key={question.id}>
                      <label className="text-sm font-medium mb-2 block">
                        {question.question}
                        {question.required && <span className="text-red-500 ml-1">*</span>}
                      </label>
                      {question.type === 'textarea' ? (
                        <textarea
                          value={formData[question.id] || ''}
                          onChange={(e) => handleInputChange(question.id, e.target.value)}
                          placeholder={question.placeholder}
                          rows={4}
                          className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 focus:border-black focus:outline-none transition-colors resize-none text-sm"
                          required={question.required}
                        />
                      ) : question.type === 'file' ? (
                        <div className="border-2 border-dashed border-gray-200 rounded-lg p-4 text-center hover:border-gray-300 transition-colors">
                          <input
                            type="file"
                            accept={question.accepts}
                            onChange={(e) => handleInputChange(question.id, e.target.files[0])}
                            className="hidden"
                            id={`file-${question.id}`}
                          />
                          <label htmlFor={`file-${question.id}`} className="cursor-pointer">
                            <p className="text-sm text-gray-600">
                              {formData[question.id] ? formData[question.id].name : 'Click to upload file'}
                            </p>
                            <p className="text-xs text-gray-400 mt-1">{question.accepts}</p>
                          </label>
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Payment */}
            {currentStep === 4 && (
              <div>
                <h2 className="text-lg font-semibold mb-6">Payment</h2>
                
                <div className="space-y-3">
                  {savedCards.map((card) => (
                    <label
                      key={card.id}
                      className={`block cursor-pointer rounded-lg border-2 p-4 transition-all ${
                        selectedPaymentCard === card.id 
                          ? 'border-black bg-[#efffba]/10' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <input
                          type="radio"
                          name="payment"
                          value={card.id}
                          checked={selectedPaymentCard === card.id}
                          onChange={() => setSelectedPaymentCard(card.id)}
                          className="sr-only"
                        />
                        
                        <div className={`w-14 h-9 rounded bg-gradient-to-r ${card.gradient} flex items-center justify-center text-white text-xs font-medium`}>
                          {card.type}
                        </div>
                        
                        <div className="flex-1">
                          <p className="text-sm font-medium">•••• {card.last4}</p>
                          <p className="text-xs text-gray-500">Expires {card.expiry}</p>
                        </div>
                        
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          selectedPaymentCard === card.id 
                            ? 'border-black bg-black' 
                            : 'border-gray-300'
                        }`}>
                          {selectedPaymentCard === card.id && (
                            <Check className="w-3 h-3 text-white" />
                          )}
                        </div>
                      </div>
                    </label>
                  ))}
                  
                  <button className="w-full rounded-lg border-2 border-dashed border-gray-300 p-4 text-center hover:border-gray-400 transition-all">
                    <div className="flex items-center justify-center gap-2 text-gray-600">
                      <CreditCard className="w-4 h-4" />
                      <span className="text-sm">Add New Card</span>
                    </div>
                  </button>
                </div>

                {/* Final Price */}
                <div className="mt-6 p-4 bg-[#efffba]/20 rounded-lg border border-[#efffba]">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Session with {expert.name}</span>
                      <span className="text-sm">{selectedSession?.title}</span>
                    </div>
                    {selectedDate && selectedTime && (
                      <div className="flex justify-between items-center text-xs text-gray-600">
                        <span>{selectedDate.displayDate}</span>
                        <span>{selectedTime.display}</span>
                      </div>
                    )}
                    <div className="pt-2 border-t border-[#efffba]/30">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Total</span>
                        <span className="font-bold text-xl">${getCurrentPrice()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-8">
              <Button
                onClick={handleBack}
                variant="outline"
                disabled={currentStep === 1}
                className="border-gray-300"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              
              {currentStep < 4 ? (
                <Button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="bg-black text-white hover:bg-gray-900"
                >
                  Continue
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button
                  className="bg-[#efffba] text-black hover:bg-[#e5ff8a] border-2 border-black font-medium px-6"
                >
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Confirm Booking
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default BookingPage