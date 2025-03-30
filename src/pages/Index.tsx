
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PlatformLogos from '@/components/PlatformLogos';
import ChatBot from '@/components/ChatBot';

const Index = () => {
  const [isExploring, setIsExploring] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-housing-navy mb-6">
              Find Your Perfect Home with Housing Bridge
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Compare pricing across multiple platforms and find the best deals on rental properties
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/properties">
                <Button className="bg-housing-navy text-white hover:bg-blue-800 px-8 py-6 text-lg">
                  Browse Properties
                </Button>
              </Link>
              <Link to="/compare">
                <Button variant="outline" className="border-housing-navy text-housing-navy hover:bg-blue-100 px-8 py-6 text-lg">
                  Compare Properties
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-semibold text-center mb-6">Compare Prices Across Multiple Platforms</h2>
            <div className="mb-6 text-center text-gray-600">
              We aggregate listings from India's top property platforms so you don't have to browse multiple sites
            </div>
            <PlatformLogos />
            <div className="text-center mt-6">
              <Button 
                variant="outline" 
                onClick={() => setIsExploring(!isExploring)}
                className="border-housing-navy text-housing-navy"
              >
                {isExploring ? "Hide Platform Details" : "Explore How Integration Works"}
              </Button>
            </div>
            
            {isExploring && (
              <div className="mt-6 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold mb-3">How Our Platform Integration Works</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-housing-navy text-white flex items-center justify-center font-bold">1</div>
                    <div>
                      <p className="font-medium">Real-time Data Collection</p>
                      <p className="text-gray-600">We fetch property listings from multiple sources using their official APIs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-housing-navy text-white flex items-center justify-center font-bold">2</div>
                    <div>
                      <p className="font-medium">Price Comparison</p>
                      <p className="text-gray-600">Our algorithms identify matching properties across platforms and compare prices</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-housing-navy text-white flex items-center justify-center font-bold">3</div>
                    <div>
                      <p className="font-medium">Unified Booking</p>
                      <p className="text-gray-600">Book property viewings directly through our platform with any provider</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-housing-navy text-white flex items-center justify-center font-bold">4</div>
                    <div>
                      <p className="font-medium">Secure Payment Processing</p>
                      <p className="text-gray-600">Make deposits or payments through our integrated payment gateway</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-housing-navy">For Renters</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2 text-housing-navy">✓</span>
                  <span>Compare prices across multiple platforms</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-housing-navy">✓</span>
                  <span>Track your application status</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-housing-navy">✓</span>
                  <span>Get price suggestions based on location</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-housing-navy">✓</span>
                  <span>Chat with our property advisor</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-housing-navy">✓</span>
                  <span>Secure payment processing for bookings</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link to="/for-buyers">
                  <Button variant="outline" className="border-housing-navy text-housing-navy hover:bg-blue-100">
                    Renter Resources
                  </Button>
                </Link>
                <Link to="/properties" className="ml-3">
                  <Button className="bg-housing-navy text-white hover:bg-blue-800">
                    Find a Property
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-housing-navy">For Property Owners</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2 text-housing-navy">✓</span>
                  <span>List your property across multiple platforms</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-housing-navy">✓</span>
                  <span>Get competitive pricing suggestions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-housing-navy">✓</span>
                  <span>Manage rental applications</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-housing-navy">✓</span>
                  <span>Access market insights and analytics</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-housing-navy">✓</span>
                  <span>Receive payments securely through our system</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link to="/for-sellers">
                  <Button className="bg-housing-navy text-white hover:bg-blue-800">
                    List Your Property
                  </Button>
                </Link>
                <Link to="/for-sellers#resources" className="ml-3">
                  <Button variant="outline" className="border-housing-navy text-housing-navy hover:bg-blue-100">
                    Owner Resources
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
