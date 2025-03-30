
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CreditCard, Calendar, AlertCircle, Check } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface PaymentGatewayProps {
  amount: number;
  onSuccess?: () => void;
  onCancel?: () => void;
}

const PaymentGateway = ({ amount, onSuccess, onCancel }: PaymentGatewayProps) => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [upiId, setUpiId] = useState('');
  const [processing, setProcessing] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Format card number with spaces every 4 digits
    const value = e.target.value.replace(/\s/g, '');
    const formattedValue = value
      .replace(/[^\dA-Z]/g, '')
      .replace(/(.{4})/g, '$1 ')
      .trim();
    setCardNumber(formattedValue);
  };

  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Format expiry date as MM/YY
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 2) {
      setExpiryDate(value);
    } else {
      setExpiryDate(`${value.slice(0, 2)}/${value.slice(2, 4)}`);
    }
  };

  const validateCardPayment = () => {
    // Simple validation for demonstration
    if (cardNumber.length < 16) {
      toast({
        title: "Invalid Card Number",
        description: "Please enter a valid card number",
        variant: "destructive"
      });
      return false;
    }
    
    if (!cardName) {
      toast({
        title: "Missing Name",
        description: "Please enter the cardholder name",
        variant: "destructive"
      });
      return false;
    }
    
    if (expiryDate.length < 5) {
      toast({
        title: "Invalid Expiry Date",
        description: "Please enter a valid expiry date (MM/YY)",
        variant: "destructive"
      });
      return false;
    }
    
    if (cvv.length < 3) {
      toast({
        title: "Invalid CVV",
        description: "Please enter a valid CVV code",
        variant: "destructive"
      });
      return false;
    }
    
    return true;
  };

  const validateUpiPayment = () => {
    // Simple UPI validation for demonstration
    const upiRegex = /^[\w.-]+@[\w.-]+$/;
    if (!upiRegex.test(upiId)) {
      toast({
        title: "Invalid UPI ID",
        description: "Please enter a valid UPI ID (example: name@upi)",
        variant: "destructive"
      });
      return false;
    }
    return true;
  };

  const processPayment = () => {
    let isValid = false;
    
    if (paymentMethod === 'card') {
      isValid = validateCardPayment();
    } else if (paymentMethod === 'upi') {
      isValid = validateUpiPayment();
    }
    
    if (isValid) {
      setProcessing(true);
      
      // Simulate payment processing
      setTimeout(() => {
        setProcessing(false);
        setPaymentComplete(true);
        
        toast({
          title: "Payment Successful",
          description: `Your payment of ₹${amount.toLocaleString()} has been processed successfully.`,
          variant: "default",
        });
        
        // Call success callback after showing the completion state for a moment
        setTimeout(() => {
          if (onSuccess) onSuccess();
        }, 2000);
      }, 2000);
    }
  };

  if (paymentComplete) {
    return (
      <Card className="w-full max-w-md">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="mb-2 text-2xl font-bold">Payment Successful</h3>
            <p className="mb-6 text-gray-600">
              Your payment of ₹{amount.toLocaleString()} has been processed successfully.
            </p>
            <Button onClick={onSuccess}>Continue</Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Complete Your Payment</CardTitle>
        <CardDescription>
          Amount to pay: ₹{amount.toLocaleString()}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="card" onValueChange={setPaymentMethod} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="card">Credit/Debit Card</TabsTrigger>
            <TabsTrigger value="upi">UPI</TabsTrigger>
          </TabsList>
          
          <TabsContent value="card">
            <div className="space-y-4 py-2">
              <div className="space-y-2">
                <Label htmlFor="card-number">Card Number</Label>
                <div className="relative">
                  <Input
                    id="card-number"
                    placeholder="1234 5678 9012 3456"
                    value={cardNumber}
                    onChange={handleCardNumberChange}
                    maxLength={19}
                    className="pl-10"
                  />
                  <CreditCard className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="card-name">Cardholder Name</Label>
                <Input
                  id="card-name"
                  placeholder="John Doe"
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry-date">Expiry Date</Label>
                  <div className="relative">
                    <Input
                      id="expiry-date"
                      placeholder="MM/YY"
                      value={expiryDate}
                      onChange={handleExpiryDateChange}
                      maxLength={5}
                      className="pl-10"
                    />
                    <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="cvv">CVV</Label>
                  <Input
                    id="cvv"
                    placeholder="123"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').slice(0, 4))}
                    maxLength={4}
                    type="password"
                  />
                </div>
              </div>
              
              <div className="flex items-center rounded-md bg-blue-50 p-3 text-sm">
                <AlertCircle className="mr-2 h-4 w-4 text-blue-500" />
                <span className="text-blue-600">
                  For demo purposes, you can enter any valid-looking details.
                </span>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="upi">
            <div className="space-y-4 py-2">
              <div className="space-y-2">
                <Label htmlFor="upi-id">UPI ID</Label>
                <Input
                  id="upi-id"
                  placeholder="yourname@upi"
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                />
              </div>
              
              <div className="flex items-center rounded-md bg-blue-50 p-3 text-sm">
                <AlertCircle className="mr-2 h-4 w-4 text-blue-500" />
                <span className="text-blue-600">
                  For demo purposes, enter any valid-looking UPI ID in the format name@upi.
                </span>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex flex-col space-y-2 sm:flex-row sm:justify-between sm:space-x-2 sm:space-y-0">
        <Button 
          variant="outline" 
          onClick={onCancel}
          disabled={processing}
          className="w-full sm:w-auto"
        >
          Cancel
        </Button>
        <Button 
          onClick={processPayment} 
          disabled={processing}
          className="w-full sm:w-auto"
        >
          {processing ? 'Processing...' : 'Pay Now'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PaymentGateway;
