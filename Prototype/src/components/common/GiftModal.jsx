import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { X, Gift, Mail, CreditCard, ArrowRight, ArrowLeft, DollarSign } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const GiftModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1)
  const [voucherData, setVoucherData] = useState({
    amount: '',
    customAmount: '',
    message: '',
    recipientEmail: '',
    senderName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    billingEmail: ''
  })

  const presetAmounts = [100, 250, 500, 750, 1000]
  const maxMessageLength = 300

  const handleAmountSelect = (amount) => {
    setVoucherData(prev => ({
      ...prev,
      amount: amount.toString(),
      customAmount: ''
    }))
  }

  const handleCustomAmountChange = (value) => {
    setVoucherData(prev => ({
      ...prev,
      customAmount: value,
      amount: value ? 'custom' : ''
    }))
  }

  const handleInputChange = (field, value) => {
    setVoucherData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const getSelectedAmount = () => {
    return voucherData.amount === 'custom' ? voucherData.customAmount : voucherData.amount
  }

  const handleNextStep = () => {
    if (step === 1) {
      // Validate step 1
      if (!voucherData.amount || !voucherData.recipientEmail) {
        alert('Please select an amount and enter recipient email')
        return
      }
      setStep(2)
    }
  }

  const handlePrevStep = () => {
    setStep(1)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle gift voucher purchase logic here
    console.log('Gift Voucher Purchase:', {
      ...voucherData,
      finalAmount: getSelectedAmount()
    })
    // Reset form and close modal
    setVoucherData({
      amount: '',
      customAmount: '',
      message: '',
      recipientEmail: '',
      senderName: '',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      billingEmail: ''
    })
    setStep(1)
    onClose()
  }

  const handleModalClose = () => {
    setStep(1)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleModalClose}>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden bg-white">
        <button
          onClick={handleModalClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground z-10"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
        
        <div className="p-5">
          <DialogHeader className="mb-4">
            <div className="flex items-center justify-center mb-2">
              <Gift className="h-8 w-8 text-[#efffba] mr-2" />
            </div>
            <DialogTitle className="text-2xl font-semibold text-center">
              {step === 1 ? 'Gift a TapTime Voucher' : 'Payment Details'}
            </DialogTitle>
            <DialogDescription className="text-center text-base">
              {step === 1 
                ? 'Give the gift of expert knowledge and meaningful conversations'
                : 'Complete your gift voucher purchase'
              }
            </DialogDescription>
          </DialogHeader>

          <AnimatePresence mode="wait">
            {step === 1 ? (
              <motion.form
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {/* Voucher Amount Selection */}
                <div className="space-y-2">
                  <Label className="text-black text-sm">Select Amount</Label>
                  <div className="grid grid-cols-3 gap-2">
                    {presetAmounts.map((amount) => (
                      <Button
                        key={amount}
                        type="button"
                        variant={voucherData.amount === amount.toString() ? "default" : "outline"}
                        className={`h-10 rounded-lg border-2 transition-all text-sm ${
                          voucherData.amount === amount.toString()
                            ? 'bg-[#efffba] text-black border-[#efffba] hover:bg-black hover:text-white hover:border-black'
                            : 'border-gray-300 hover:border-black'
                        }`}
                        onClick={() => handleAmountSelect(amount)}
                      >
                        ${amount}
                      </Button>
                    ))}
                  </div>
                  
                  {/* Custom Amount */}
                  <div className="space-y-1 mt-2">
                    <Label className="text-black text-sm">Or enter custom amount</Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        type="number"
                        placeholder="Custom amount"
                        value={voucherData.customAmount}
                        onChange={(e) => handleCustomAmountChange(e.target.value)}
                        className="pl-10 border-2 border-gray-300 focus:border-black bg-white h-9"
                        min="1"
                        max="5000"
                      />
                    </div>
                  </div>
                </div>

                {/* Recipient Email */}
                <div className="space-y-1">
                  <Label htmlFor="recipientEmail" className="text-black text-sm">Recipient's Email *</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="recipientEmail"
                      type="email"
                      placeholder="Enter recipient's email"
                      value={voucherData.recipientEmail}
                      onChange={(e) => handleInputChange('recipientEmail', e.target.value)}
                      className="pl-10 border-2 border-gray-300 focus:border-black bg-white h-9"
                      required
                    />
                  </div>
                </div>

                {/* Your Name */}
                <div className="space-y-1">
                  <Label htmlFor="senderName" className="text-black text-sm">Your Name</Label>
                  <Input
                    id="senderName"
                    type="text"
                    placeholder="Enter your name"
                    value={voucherData.senderName}
                    onChange={(e) => handleInputChange('senderName', e.target.value)}
                    className="border-2 border-gray-300 focus:border-black bg-white h-9"
                  />
                </div>

                {/* Optional Message */}
                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <Label htmlFor="message" className="text-black text-sm">
                      Personal Message (Optional)
                    </Label>
                    <span className="text-xs text-gray-500">
                      {voucherData.message.length}/{maxMessageLength}
                    </span>
                  </div>
                  <Textarea
                    id="message"
                    placeholder="Add a personal message..."
                    value={voucherData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="border-2 border-gray-300 focus:border-black bg-white resize-none text-sm"
                    maxLength={maxMessageLength}
                    rows={2}
                  />
                </div>

                <Button
                  type="button"
                  onClick={handleNextStep}
                  className="w-full rounded-full bg-[#efffba] text-black border border-[#efffba] hover:bg-black hover:text-white hover:border-black transition-all h-10 mt-2"
                  disabled={!voucherData.recipientEmail || (!voucherData.amount && !voucherData.customAmount)}
                >
                  Continue to Payment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.form>
            ) : (
              <motion.form
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                {/* Order Summary */}
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h3 className="font-medium text-black mb-2">Order Summary</h3>
                  <div className="flex justify-between items-center">
                    <span>Gift Voucher Amount:</span>
                    <span className="font-semibold">${getSelectedAmount()}</span>
                  </div>
                  <div className="flex justify-between items-center mt-1">
                    <span>To:</span>
                    <span className="text-sm text-gray-600">{voucherData.recipientEmail}</span>
                  </div>
                </div>

                {/* Payment Information */}
                <div className="space-y-4">
                  <h3 className="font-medium text-black">Payment Information</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber" className="text-black">Card Number *</Label>
                    <div className="relative">
                      <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="cardNumber"
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        value={voucherData.cardNumber}
                        onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                        className="pl-10 border-2 border-gray-300 focus:border-black bg-white"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiryDate" className="text-black">Expiry Date *</Label>
                      <Input
                        id="expiryDate"
                        type="text"
                        placeholder="MM/YY"
                        value={voucherData.expiryDate}
                        onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                        className="border-2 border-gray-300 focus:border-black bg-white"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvv" className="text-black">CVV *</Label>
                      <Input
                        id="cvv"
                        type="text"
                        placeholder="123"
                        value={voucherData.cvv}
                        onChange={(e) => handleInputChange('cvv', e.target.value)}
                        className="border-2 border-gray-300 focus:border-black bg-white"
                        maxLength="4"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="billingEmail" className="text-black">Billing Email *</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="billingEmail"
                        type="email"
                        placeholder="Enter billing email"
                        value={voucherData.billingEmail}
                        onChange={(e) => handleInputChange('billingEmail', e.target.value)}
                        className="pl-10 border-2 border-gray-300 focus:border-black bg-white"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button
                    type="button"
                    onClick={handlePrevStep}
                    variant="outline"
                    className="flex-1 rounded-full border-2 border-gray-300 hover:border-black transition-all h-10"
                  >
                    <ArrowLeft className="mr-1 h-4 w-4" />
                    Back
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 rounded-full bg-black text-white hover:bg-gray-800 transition-all h-10"
                  >
                    Complete Purchase
                  </Button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default GiftModal