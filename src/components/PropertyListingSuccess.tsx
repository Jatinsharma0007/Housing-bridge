
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface PropertyListingSuccessProps {
  propertyName?: string;
}

const PropertyListingSuccess: React.FC<PropertyListingSuccessProps> = ({ propertyName = "Your property" }) => {
  return (
    <div className="text-center py-8">
      <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-green-100">
        <CheckCircle className="h-10 w-10 text-green-600" />
      </div>
      
      <h2 className="text-2xl font-bold mb-2">Listing Successful!</h2>
      <p className="text-gray-600 mb-6">
        {propertyName} has been successfully listed across our partner platforms.
        Our team will review your listing and it will be live within 24 hours.
      </p>
      
      <div className="space-y-3">
        <Link to="/properties">
          <Button className="bg-housing-navy w-full sm:w-auto">
            Browse Properties
          </Button>
        </Link>
        
        <p className="text-sm text-gray-500">
          You'll receive an email confirmation shortly with more details.
        </p>
      </div>
    </div>
  );
};

export default PropertyListingSuccess;
