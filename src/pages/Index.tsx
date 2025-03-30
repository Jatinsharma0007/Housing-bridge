
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
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
            <h2 className="text-2xl font-semibold text-center mb-6">Compare Prices Across Multiple Platforms</h2>
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
        </div>
      </main>

      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
