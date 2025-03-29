
import { Link } from 'react-router-dom';
import { Check, MapPin, Bed, Bath } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PropertyCardProps {
  id: number;
  title: string;
  location: string;
  price: number;
  source: string;
  sourceLabel?: string;
  beds: number;
  baths: number;
  sqft: number;
  isBestPrice?: boolean;
  image: string;
  className?: string;
}

const PropertyCard = ({
  id,
  title,
  location,
  price,
  source,
  sourceLabel,
  beds,
  baths,
  sqft,
  isBestPrice = false,
  image,
  className
}: PropertyCardProps) => {
  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString()}`;
  };

  return (
    <div className={cn("overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all hover:shadow-lg", className)}>
      <div className="relative h-48">
        <div className="absolute right-2 top-2 rounded-full bg-white px-3 py-1 text-xs font-medium shadow-sm">
          {sourceLabel || source}
        </div>
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>
      <div className="p-4">
        <div className="mb-2 flex items-center text-sm text-gray-600">
          <MapPin className="mr-1 h-4 w-4" />
          <span>{location}</span>
        </div>
        <h3 className="mb-2 text-lg font-semibold text-gray-800">{title}</h3>
        <div className="mb-3 flex items-center justify-between">
          <div className="font-medium">
            <span className="text-xl text-housing-navy">{formatPrice(price)}</span>
            <span className="text-sm text-gray-600">/month</span>
            {isBestPrice && (
              <span className="ml-2 flex items-center text-xs font-medium text-green-600">
                <Check className="mr-1 h-3 w-3" /> Best Price
              </span>
            )}
          </div>
          <div className="text-xs text-gray-600">from {source}</div>
        </div>
        <div className="mb-4 flex items-center justify-between border-t border-gray-100 pt-3 text-sm text-gray-600">
          <div className="flex items-center">
            <Bed className="mr-1 h-4 w-4" /> {beds} Beds
          </div>
          <div className="flex items-center">
            <Bath className="mr-1 h-4 w-4" /> {baths} Baths
          </div>
          <div>{sqft} sqft</div>
        </div>
        <Link 
          to={`/properties/${id}`}
          className="block rounded bg-housing-navy px-4 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-blue-800"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
