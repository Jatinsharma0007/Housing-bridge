import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  MapPin, Bed, Bath, CheckSquare, Home, Calendar, Tag, 
  ChevronRight, ChevronLeft, MessageCircle 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import { Property, allProperties, getBestPriceSource } from '@/data/properties';
import PriceTrendAnalysis from '@/components/PriceTrendAnalysis';
import { toast } from '@/hooks/use-toast';
import BookingModal from '@/components/BookingModal';

const PropertyDetailPage = () => {
  const { id } = useParams();
  const [property, setProperty] = useState<Property | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      const foundProperty = allProperties.find(p => p.id === Number(id));
      setProperty(foundProperty || null);
      setLoading(false);
    }, 500);
  }, [id]);

  const nextImage = () => {
    if (!property) return;
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    if (!property) return;
    setCurrentImageIndex((prev) => (prev === 0 ? property.images.length - 1 : prev - 1));
  };

  const handleBookingRequest = () => {
    setIsBookingModalOpen(true);
  };

  const handleContactLandlord = () => {
    toast({
      title: "Message Sent",
      description: "Your message has been sent to the landlord.",
      duration: 3000,
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-12">
          <div className="flex animate-pulse flex-col gap-6 md:flex-row">
            <div className="h-96 w-full rounded-lg bg-gray-200 md:w-2/3"></div>
            <div className="flex w-full flex-col gap-4 md:w-1/3">
              <div className="h-10 w-3/4 rounded bg-gray-200"></div>
              <div className="h-6 w-1/2 rounded bg-gray-200"></div>
              <div className="h-20 w-full rounded bg-gray-200"></div>
              <div className="h-10 w-1/3 rounded bg-gray-200"></div>
              <div className="h-40 w-full rounded bg-gray-200"></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!property) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="mb-4 text-2xl font-bold text-gray-800">Property Not Found</h1>
          <p className="mb-6 text-gray-600">The property you're looking for doesn't exist or has been removed.</p>
          <Link to="/properties">
            <Button>Back to Properties</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const bestPrice = getBestPriceSource(property);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-housing-navy">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/properties" className="hover:text-housing-navy">Properties</Link>
            <ChevronRight className="h-4 w-4" />
            <span>{property.location}</span>
          </div>
        </div>

        {/* Property details */}
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Left column: Images and details */}
          <div className="w-full lg:w-2/3">
            {/* Image gallery */}
            <div className="relative mb-6 overflow-hidden rounded-lg">
              <div className="aspect-w-16 aspect-h-9 relative h-96">
                <img 
                  src={property.images[currentImageIndex]} 
                  alt={property.title}
                  className="h-full w-full object-cover"
                />
                
                {property.images.length > 1 && (
                  <>
                    <button 
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button 
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                    <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                      {property.images.map((_, idx) => (
                        <span 
                          key={idx} 
                          className={`block h-2 w-2 rounded-full ${currentImageIndex === idx ? 'bg-white' : 'bg-white/50'}`}
                        ></span>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
            
            {/* Property title and location */}
            <h1 className="mb-2 text-3xl font-bold text-gray-800">{property.title}</h1>
            <div className="mb-6 flex items-center text-gray-600">
              <MapPin className="mr-1 h-5 w-5" />
              <span>{property.location}, {property.city}, {property.state}</span>
            </div>
            
            {/* Property highlights */}
            <div className="mb-8 grid grid-cols-3 gap-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col items-center">
                <Bed className="mb-2 h-6 w-6 text-housing-navy" />
                <span className="text-lg font-semibold">{property.beds} Beds</span>
              </div>
              <div className="flex flex-col items-center">
                <Bath className="mb-2 h-6 w-6 text-housing-navy" />
                <span className="text-lg font-semibold">{property.baths} Baths</span>
              </div>
              <div className="flex flex-col items-center">
                <Home className="mb-2 h-6 w-6 text-housing-navy" />
                <span className="text-lg font-semibold">{property.sqft} sqft</span>
              </div>
            </div>
            
            {/* Property description */}
            <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-semibold text-gray-800">About This Property</h2>
              <p className="text-gray-600">{property.description}</p>
            </div>
            
            {/* Amenities */}
            <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-semibold text-gray-800">Amenities</h2>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {property.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    <CheckSquare className="mr-2 h-5 w-5 text-housing-navy" />
                    <span className="text-gray-700">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Price Trend Analysis */}
            <div className="mb-8">
              <PriceTrendAnalysis property={property} />
            </div>
            
            {/* Platform comparison */}
            <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-semibold text-gray-800">Available On</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {Object.entries(property.price).map(([platform, price], index) => (
                  <div 
                    key={index} 
                    className={`flex items-center justify-between rounded-lg border ${platform === bestPrice.source ? 'border-green-200 bg-green-50' : 'border-gray-200'} p-4`}
                  >
                    <div className="flex items-center">
                      <img 
                        src={`/platform-logos/${platform.toLowerCase()}.png`} 
                        alt={platform} 
                        className="mr-3 h-6 w-auto"
                      />
                      <span className="font-medium">{platform}</span>
                    </div>
                    <div className={`text-lg font-semibold ${platform === bestPrice.source ? 'text-green-600' : 'text-gray-700'}`}>
                      ₹{price.toLocaleString()}
                      {platform === bestPrice.source && <span className="ml-2 text-xs">Best</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right column: Booking and contact */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-8 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-6">
                <h2 className="mb-1 text-2xl font-bold text-housing-navy">
                  ₹{bestPrice.price.toLocaleString()}<span className="text-base font-normal text-gray-600">/month</span>
                </h2>
                <div className="flex items-center text-sm text-gray-600">
                  <Tag className="mr-1 h-4 w-4" />
                  <span>Best price from {bestPrice.source}</span>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="mb-2 flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-housing-navy" />
                  <span className="font-medium">Available From</span>
                </div>
                <p className="text-gray-700">
                  {new Date(property.availableFrom).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
              
              <div className="mb-6">
                <div className="mb-2 flex items-center">
                  <Home className="mr-2 h-5 w-5 text-housing-navy" />
                  <span className="font-medium">Property Type</span>
                </div>
                <p className="text-gray-700">{property.propertyType}</p>
              </div>
              
              <div className="mb-6">
                <div className="mb-2 flex items-center">
                  <CheckSquare className="mr-2 h-5 w-5 text-housing-navy" />
                  <span className="font-medium">Condition</span>
                </div>
                <p className="text-gray-700">{property.condition}</p>
              </div>
              
              <div className="mb-6">
                <div className="mb-2 flex items-center">
                  <Home className="mr-2 h-5 w-5 text-housing-navy" />
                  <span className="font-medium">Furnished</span>
                </div>
                <p className="text-gray-700">{property.furnished ? 'Yes' : 'No'}</p>
              </div>
              
              <div className="space-y-3">
                <Button 
                  onClick={handleBookingRequest}
                  className="w-full bg-housing-orange text-white hover:bg-orange-600"
                >
                  Request Booking
                </Button>
                
                <Button 
                  onClick={handleContactLandlord}
                  variant="outline"
                  className="w-full border-housing-navy text-housing-navy hover:bg-housing-navy hover:text-white"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Contact Landlord
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Booking Modal */}
      {property && (
        <BookingModal
          open={isBookingModalOpen}
          onClose={() => setIsBookingModalOpen(false)}
          property={property}
        />
      )}
      
      <Footer />
      <ChatBot />
    </div>
  );
};

export default PropertyDetailPage;
