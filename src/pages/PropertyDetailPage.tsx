
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronRight, Check, MapPin, Bed, Bath, Home, Calendar, Building2, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import PropertyCard from '@/components/PropertyCard';
import { allProperties, Property } from '@/data/properties';

const PropertyDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<Property | null>(null);
  const [similarProperties, setSimilarProperties] = useState<Property[]>([]);
  const [selectedImage, setSelectedImage] = useState<string>('');

  useEffect(() => {
    if (id) {
      const foundProperty = allProperties.find(p => p.id === parseInt(id));
      if (foundProperty) {
        setProperty(foundProperty);
        setSelectedImage(foundProperty.images[0]);

        // Find similar properties (same location or similar price)
        const similar = allProperties
          .filter(p => 
            p.id !== foundProperty.id && 
            (p.location === foundProperty.location || 
             Math.abs(Object.values(p.price)[0] - Object.values(foundProperty.price)[0]) < 5000)
          )
          .slice(0, 3);
        setSimilarProperties(similar);
      }
    }
  }, [id]);

  if (!property) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto flex min-h-[500px] items-center justify-center px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800">Property not found</h2>
            <p className="mb-6 text-gray-600">The property you're looking for doesn't exist or has been removed.</p>
            <Link to="/properties">
              <Button className="bg-housing-navy text-white hover:bg-blue-800">
                Browse Other Properties
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Format price with commas
  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString()}`;
  };

  // Get the best price source and value
  const getBestPrice = () => {
    let lowestSource = '';
    let lowestPrice = Number.MAX_SAFE_INTEGER;

    Object.entries(property.price).forEach(([source, price]) => {
      if (price < lowestPrice) {
        lowestPrice = price;
        lowestSource = source;
      }
    });

    return { source: lowestSource, price: lowestPrice };
  };

  const bestPrice = getBestPrice();

  // Get price difference percentage for different sources
  const getPriceDifference = (price: number) => {
    const diff = ((price - bestPrice.price) / bestPrice.price) * 100;
    return diff.toFixed(1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-housing-navy">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/properties" className="hover:text-housing-navy">Properties</Link>
            <ChevronRight className="h-4 w-4" />
            <span>{property.title}</span>
          </div>
        </div>

        {/* Property Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">{property.title}</h1>
          <div className="mt-2 flex flex-wrap items-center gap-3 text-gray-600">
            <div className="flex items-center">
              <MapPin className="mr-1 h-4 w-4" />
              <span>{property.location}, {property.city}, {property.state}</span>
            </div>
            <Badge className="bg-housing-navy">{property.propertyType}</Badge>
            {property.furnished && (
              <Badge className="bg-green-600">Furnished</Badge>
            )}
            <Badge className="bg-gray-500">Condition: {property.condition}</Badge>
          </div>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Image Gallery */}
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-lg bg-white shadow-md">
              <div className="relative h-[400px]">
                <img 
                  src={selectedImage} 
                  alt={property.title}
                  className="h-full w-full object-cover" 
                />
              </div>
              <div className="flex overflow-x-auto p-2">
                {property.images.map((image, index) => (
                  <div 
                    key={index}
                    className={`mr-2 h-20 w-20 flex-shrink-0 cursor-pointer rounded-md border-2 ${
                      selectedImage === image ? 'border-housing-navy' : 'border-transparent'
                    }`}
                    onClick={() => setSelectedImage(image)}
                  >
                    <img 
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="h-full w-full rounded-md object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Price Comparison */}
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-4 text-xl font-semibold text-gray-800">Price Comparison</h2>
            
            <div className="mb-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-600">Best Price</span>
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-housing-navy">{formatPrice(bestPrice.price)}</span>
                  <span className="ml-1 text-gray-600">/month</span>
                </div>
              </div>
              <div className="mt-1 flex items-center justify-between text-sm">
                <div className="flex items-center text-green-600">
                  <Check className="mr-1 h-4 w-4" />
                  <span>Lowest on {bestPrice.source}</span>
                </div>
                <Link 
                  to="#" 
                  className="flex items-center text-housing-navy hover:underline"
                >
                  <span>Visit Source</span>
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </div>

            <div className="mb-6 space-y-2">
              {Object.entries(property.price)
                .filter(([source]) => source !== bestPrice.source)
                .map(([source, price]) => (
                  <div key={source} className="flex items-center justify-between rounded-lg border border-gray-100 p-3">
                    <div>
                      <span className="text-sm font-medium">{source}</span>
                      <div className="text-xs text-red-500">
                        +{getPriceDifference(price)}% higher
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">{formatPrice(price)}</div>
                      <Link 
                        to="#" 
                        className="text-xs text-housing-navy hover:underline"
                      >
                        Visit
                      </Link>
                    </div>
                  </div>
                ))}
            </div>

            <div className="space-y-4">
              <Button className="w-full bg-housing-orange text-white hover:bg-orange-600">
                Apply Now
              </Button>
              <Button variant="outline" className="w-full border-housing-navy text-housing-navy hover:bg-gray-50">
                Schedule Viewing
              </Button>
            </div>
          </div>
        </div>

        {/* Property Details Tabs */}
        <div className="mb-8">
          <Tabs defaultValue="details">
            <TabsList className="mb-4">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="amenities">Amenities</TabsTrigger>
            </TabsList>
            
            <TabsContent value="details" className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-semibold text-gray-800">Property Details</h2>
              <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex items-center">
                  <Bed className="mr-3 h-5 w-5 text-housing-navy" />
                  <div>
                    <p className="text-sm text-gray-600">Bedrooms</p>
                    <p className="font-medium">{property.beds}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Bath className="mr-3 h-5 w-5 text-housing-navy" />
                  <div>
                    <p className="text-sm text-gray-600">Bathrooms</p>
                    <p className="font-medium">{property.baths}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Home className="mr-3 h-5 w-5 text-housing-navy" />
                  <div>
                    <p className="text-sm text-gray-600">Area</p>
                    <p className="font-medium">{property.sqft} sqft</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Building2 className="mr-3 h-5 w-5 text-housing-navy" />
                  <div>
                    <p className="text-sm text-gray-600">Property Type</p>
                    <p className="font-medium">{property.propertyType}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Calendar className="mr-3 h-5 w-5 text-housing-navy" />
                  <div>
                    <p className="text-sm text-gray-600">Available From</p>
                    <p className="font-medium">
                      {new Date(property.availableFrom).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Check className="mr-3 h-5 w-5 text-housing-navy" />
                  <div>
                    <p className="text-sm text-gray-600">Furnished</p>
                    <p className="font-medium">{property.furnished ? 'Yes' : 'No'}</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="description" className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-semibold text-gray-800">Description</h2>
              <p className="text-gray-600">{property.description}</p>
            </TabsContent>
            
            <TabsContent value="amenities" className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-semibold text-gray-800">Amenities</h2>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2 md:grid-cols-3">
                {property.amenities.map((amenity, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-600" />
                    <span>{amenity}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
          </Tabs>
        </div>

        {/* Similar Properties */}
        <div className="mb-8">
          <h2 className="mb-6 text-2xl font-bold text-gray-800">Similar Properties</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {similarProperties.map(prop => {
              const bestPrice = getBestPrice();
              return (
                <PropertyCard
                  key={prop.id}
                  id={prop.id}
                  title={prop.title}
                  location={`${prop.location}, ${prop.city}`}
                  price={Object.values(prop.price)[0]}
                  source={Object.keys(prop.price)[0]}
                  beds={prop.beds}
                  baths={prop.baths}
                  sqft={prop.sqft}
                  image={prop.images[0]}
                />
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
      <ChatBot />
    </div>
  );
};

export default PropertyDetailPage;
