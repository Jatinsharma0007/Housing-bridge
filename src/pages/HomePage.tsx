
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Check, Home, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';
import PropertyCard from '@/components/PropertyCard';
import PlatformLogos from '@/components/PlatformLogos';
import ChatBot from '@/components/ChatBot';
import { allProperties, Property, getBestPriceSource } from '@/data/properties';

const HomePage = () => {
  const [featuredProperties, setFeaturedProperties] = useState<Property[]>([]);
  const [activeTab, setActiveTab] = useState('All');

  useEffect(() => {
    // Get 6 random properties for featured display
    const randomProperties = [...allProperties]
      .sort(() => 0.5 - Math.random())
      .slice(0, 6);
    setFeaturedProperties(randomProperties);
  }, []);

  const filterPropertiesByType = (properties: Property[], type: string) => {
    if (type === 'All') return properties;
    return properties.filter(property => property.propertyType === type);
  };

  const getBestPrice = (property: Property) => {
    return getBestPriceSource(property);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <div className="relative bg-housing-navy py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Find Your Perfect Rental Home</h1>
            <p className="mb-8 text-lg">
              Housing Bridge helps you discover, compare, and apply for rental properties from
              multiple sources - all in one place.
            </p>
            <div className="flex justify-center">
              <SearchBar className="z-10 w-full" />
            </div>
          </div>
        </div>

        {/* Wave overlay */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="#F8F9FA">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </div>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-800">Why Choose Housing Bridge?</h2>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="p-6 transition-transform hover:translate-y-[-5px]">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-housing-orange">
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none">
                  <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="mb-3 text-center text-xl font-semibold text-gray-800">Comprehensive Listings</h3>
              <p className="text-center text-gray-600">Properties aggregated from 6 major platforms</p>
            </Card>

            <Card className="p-6 transition-transform hover:translate-y-[-5px]">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-housing-orange">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="mb-3 text-center text-xl font-semibold text-gray-800">Smart Price Comparison</h3>
              <p className="text-center text-gray-600">See how prices compare across platforms</p>
            </Card>

            <Card className="p-6 transition-transform hover:translate-y-[-5px]">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-housing-orange">
                <Check className="h-8 w-8" />
              </div>
              <h3 className="mb-3 text-center text-xl font-semibold text-gray-800">Application Tracking</h3>
              <p className="text-center text-gray-600">Track status of your rental applications</p>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/properties">
              <Button className="bg-housing-orange text-white hover:bg-orange-600">
                Browse Properties
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Data From Top Platforms */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-800">Data From Top Platforms</h2>
            <p className="mb-8 text-lg text-gray-600">
              We aggregate rental listings from 6 major platforms to give you the most comprehensive 
              property search experience
            </p>
          </div>
          
          <PlatformLogos />
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex flex-col items-center justify-between md:flex-row">
            <h2 className="mb-4 text-3xl font-bold text-gray-800 md:mb-0">Featured Properties</h2>
            <Link to="/properties" className="flex items-center text-housing-navy hover:underline">
              <span>View All Properties</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
          
          <p className="mb-6 text-gray-600">Handpicked properties across different platforms</p>
          
          {/* Property Type Tabs */}
          <div className="mb-8 overflow-x-auto">
            <div className="inline-flex space-x-1 rounded-lg bg-gray-100 p-1">
              {['All', 'Apartments', 'Houses', 'Villas', 'PG'].map((type) => (
                <button
                  key={type}
                  className={`px-4 py-2 text-sm font-medium rounded-md ${
                    activeTab === type
                      ? 'bg-white text-housing-navy shadow'
                      : 'text-gray-600 hover:text-housing-navy'
                  }`}
                  onClick={() => setActiveTab(type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
          
          {/* Property Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filterPropertiesByType(featuredProperties, activeTab).map((property) => {
              const bestPrice = getBestPrice(property);
              return (
                <PropertyCard
                  key={property.id}
                  id={property.id}
                  title={property.title}
                  location={`${property.location}, ${property.city}`}
                  price={bestPrice.price}
                  source={bestPrice.source}
                  beds={property.beds}
                  baths={property.baths}
                  sqft={property.sqft}
                  isBestPrice={true}
                  image={property.images[0]}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-800">How It Works</h2>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-housing-navy text-white">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="mb-3 text-center text-xl font-semibold text-gray-800">Search Properties</h3>
              <p className="text-center text-gray-600">
                Use our advanced filters to find properties matching your criteria
              </p>
            </div>
            
            <div className="rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-housing-navy text-white">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="mb-3 text-center text-xl font-semibold text-gray-800">Compare Listings</h3>
              <p className="text-center text-gray-600">
                Compare properties from different sources to get the best deal
              </p>
            </div>
            
            <div className="rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-housing-navy text-white">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="mb-3 text-center text-xl font-semibold text-gray-800">Apply Online</h3>
              <p className="text-center text-gray-600">
                Submit your rental application and upload documents digitally
              </p>
            </div>
            
            <div className="rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-housing-navy text-white">
                <span className="text-xl font-bold">4</span>
              </div>
              <h3 className="mb-3 text-center text-xl font-semibold text-gray-800">Track Status</h3>
              <p className="text-center text-gray-600">
                Monitor your application status in real-time through the dashboard
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-housing-navy py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold">Ready to Find Your Perfect Rental?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Start browsing thousands of rental properties from multiple sources, all in one place.
          </p>
          <div className="flex flex-col items-center justify-center space-x-0 space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            <Link to="/properties">
              <Button className="bg-housing-orange text-white hover:bg-orange-600">
                Browse Properties
              </Button>
            </Link>
            <Link to="/chat">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-housing-navy">
                Get Help
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <ChatBot />
    </div>
  );
};

export default HomePage;
