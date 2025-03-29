
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Search, BarChart3, Building2, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PlatformLogos from '@/components/PlatformLogos';
import ChatBot from '@/components/ChatBot';

const Index = () => {
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
            <h2 className="text-2xl font-semibold text-center mb-2">Compare Prices Across Multiple Platforms</h2>
            <p className="text-center text-gray-600 mb-6">We integrate with all major property listing platforms to find you the best deals</p>
            <PlatformLogos />
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
              </ul>
              <div className="mt-6">
                <Link to="/properties">
                  <Button variant="outline" className="border-housing-navy text-housing-navy hover:bg-blue-100">
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
              </ul>
              <div className="mt-6">
                <Link to="/for-sellers">
                  <Button variant="outline" className="border-housing-navy text-housing-navy hover:bg-blue-100">
                    List Your Property
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-semibold text-center mb-8">Why Choose Housing Bridge?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="mx-auto mb-4 h-12 w-12 flex items-center justify-center rounded-full bg-blue-100">
                  <Search className="h-6 w-6 text-housing-navy" />
                </div>
                <h3 className="text-lg font-medium mb-2">Comprehensive Search</h3>
                <p className="text-gray-600">Search across all major platforms with a single click</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="mx-auto mb-4 h-12 w-12 flex items-center justify-center rounded-full bg-blue-100">
                  <BarChart3 className="h-6 w-6 text-housing-navy" />
                </div>
                <h3 className="text-lg font-medium mb-2">Price Intelligence</h3>
                <p className="text-gray-600">Find the best deals with our price comparison engine</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="mx-auto mb-4 h-12 w-12 flex items-center justify-center rounded-full bg-blue-100">
                  <Building2 className="h-6 w-6 text-housing-navy" />
                </div>
                <h3 className="text-lg font-medium mb-2">Verified Listings</h3>
                <p className="text-gray-600">All properties are verified for authenticity</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="mx-auto mb-4 h-12 w-12 flex items-center justify-center rounded-full bg-blue-100">
                  <ShieldCheck className="h-6 w-6 text-housing-navy" />
                </div>
                <h3 className="text-lg font-medium mb-2">Secure Transactions</h3>
                <p className="text-gray-600">Secure payment gateways for all transactions</p>
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
