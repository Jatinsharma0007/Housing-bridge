
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Property } from '@/data/properties';
import PaymentGateway from './PaymentGateway';

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
  property: Property;
}

type BookingStep = 'details' | 'payment' | 'confirmation';

const BookingModal = ({ open, onClose, property }: BookingModalProps) => {
  const [currentStep, setCurrentStep] = useState<BookingStep>('details');

  const handleProceedToPayment = () => {
    setCurrentStep('payment');
  };

  const handlePaymentSuccess = () => {
    setCurrentStep('confirmation');
  };

  const handleClose = () => {
    // Reset steps and close modal
    setCurrentStep('details');
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>
            {currentStep === 'details' && 'Book Property'}
            {currentStep === 'payment' && 'Complete Payment'}
            {currentStep === 'confirmation' && 'Booking Confirmed!'}
          </DialogTitle>
        </DialogHeader>

        {currentStep === 'details' && (
          <div className="py-4">
            <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
              <div className="md:w-1/3">
                <img 
                  src={property.images[0]} 
                  alt={property.title}
                  className="h-full w-full rounded-lg object-cover"
                />
              </div>
              
              <div className="flex-1 space-y-4">
                <h3 className="text-xl font-semibold">{property.title}</h3>
                <p className="text-gray-600">{property.location}, {property.city}</p>
                
                <div className="rounded-lg bg-gray-50 p-4">
                  <h4 className="mb-2 font-medium">Booking Summary</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Monthly Rent</span>
                      <span className="font-medium">₹{property.price[property.bestSource].toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Security Deposit (2 months)</span>
                      <span className="font-medium">₹{(property.price[property.bestSource] * 2).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Booking Fee</span>
                      <span className="font-medium">₹2,000</span>
                    </div>
                    <div className="border-t border-gray-200 pt-2"></div>
                    <div className="flex justify-between font-semibold">
                      <span>Amount to Pay Now</span>
                      <span>₹2,000</span>
                    </div>
                    <div className="flex justify-between text-gray-500 text-xs">
                      <span>Remaining (at the time of agreement)</span>
                      <span>₹{(property.price[property.bestSource] * 2).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2 pt-4">
                  <Button onClick={handleProceedToPayment} className="w-full">
                    Proceed to Payment
                  </Button>
                  <Button variant="outline" onClick={handleClose} className="w-full">
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentStep === 'payment' && (
          <PaymentGateway 
            amount={2000} 
            onSuccess={handlePaymentSuccess} 
            onCancel={handleClose}
          />
        )}

        {currentStep === 'confirmation' && (
          <div className="flex flex-col items-center py-8 text-center">
            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-green-100">
              <svg className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="mb-2 text-2xl font-bold">Booking Confirmed!</h3>
            <p className="mb-6 max-w-md text-gray-600">
              Your booking fee has been received. The property owner will contact you within 24 hours to proceed with the rental agreement.
            </p>
            <div className="rounded-lg bg-gray-50 p-4 text-left w-full max-w-md">
              <h4 className="mb-3 font-medium">Booking Details</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Property</span>
                  <span>{property.title}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Location</span>
                  <span>{property.location}, {property.city}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Booking ID</span>
                  <span>BK{Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Amount Paid</span>
                  <span>₹2,000</span>
                </div>
              </div>
            </div>
            <Button onClick={handleClose} className="mt-6">
              Done
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
