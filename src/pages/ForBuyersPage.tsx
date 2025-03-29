
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Home, Key, MapPin, Percent, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';
import ChatBot from '@/components/ChatBot';

const ForBuyersPage = () => {
  const [email, setEmail] = useState('');

  const featuredProperties = [
    {
      id: 1,
      title: "Luxury Waterfront Condo",
      location: "Marine Drive, Mumbai",
      price: 95000,
      beds: 3,
      baths: 2,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2, 
      title: "Modern Family Home",
      location: "HSR Layout, Bangalore",
      price: 75000,
      beds: 4,
      baths: 3,
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Cozy Garden Apartment",
      location: "Powai, Mumbai",
      price: 45000,
      beds: 2,
      baths: 1,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const guides = [
    {
      title: "First-Time Renter's Guide",
      description: "Everything you need to know about renting your first apartment.",
      icon: Key
    },
    {
      title: "Understanding Rental Locations",
      description: "How to evaluate neighborhoods and find the perfect location.",
      icon: MapPin
    },
    {
      title: "Negotiating Rental Prices",
      description: "Tips and strategies to get the best deal on your rental.",
      icon: Percent
    },
    {
      title: "Budgeting for Rent",
      description: "How to plan your finances for a sustainable rental agreement.",
      icon: Calculator
    }
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for subscribing with ${email}! You'll receive rental alerts soon.`);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-housing-navy py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-4 text-4xl font-bold">Find Your Perfect Rental Home</h1>
            <p className="mb-8 text-xl">Compare prices across multiple platforms and discover the best deals</p>
            
            <div className="mx-auto max-w-3xl rounded-lg bg-white p-4 shadow-lg">
              <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                <Input 
                  type="text" 
                  placeholder="Location, property type, or keyword" 
                  className="flex-grow"
                />
                <Link to="/properties">
                  <Button className="w-full bg-housing-orange hover:bg-orange-600 md:w-auto">
                    <Search className="mr-2 h-4 w-4" />
                    Find Rentals
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Resources Section */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-10 text-center text-3xl font-bold text-housing-navy">Resources for Renters</h2>
            
            <Tabs defaultValue="guides" className="mx-auto max-w-4xl">
              <TabsList className="mx-auto mb-8 w-full max-w-md grid grid-cols-3">
                <TabsTrigger value="guides">Renter Guides</TabsTrigger>
                <TabsTrigger value="tools">Tools & Calculators</TabsTrigger>
                <TabsTrigger value="faq">FAQs</TabsTrigger>
              </TabsList>
              
              <TabsContent value="guides">
                <div className="grid gap-6 md:grid-cols-2">
                  {guides.map((guide, index) => (
                    <div key={index} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-housing-navy">
                        <guide.icon className="h-6 w-6" />
                      </div>
                      <h3 className="mb-2 text-xl font-semibold">{guide.title}</h3>
                      <p className="text-gray-600">{guide.description}</p>
                      <Button variant="link" className="mt-4 p-0 text-housing-navy">
                        Read more
                      </Button>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="tools">
                <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
                  <h3 className="mb-6 text-2xl font-semibold">Rental Affordability Calculator</h3>
                  <p className="mb-4 text-gray-600">
                    Determine how much rent you can comfortably afford based on your income and expenses.
                  </p>
                  
                  <div className="mb-6 grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium">Monthly Income</label>
                      <Input type="number" placeholder="₹60,000" />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium">Monthly Expenses</label>
                      <Input type="number" placeholder="₹20,000" />
                    </div>
                  </div>
                  
                  <Button className="bg-housing-navy">Calculate Affordable Rent</Button>
                </div>
              </TabsContent>
              
              <TabsContent value="faq">
                <div className="space-y-6">
                  <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                    <h3 className="mb-2 text-xl font-semibold">What documents do I need to rent a property?</h3>
                    <p className="text-gray-600">
                      Generally, you'll need identity proof, address proof, income proof (such as salary slips or income tax returns), 
                      and sometimes references from previous landlords.
                    </p>
                  </div>
                  
                  <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                    <h3 className="mb-2 text-xl font-semibold">How much should I budget for a rental deposit?</h3>
                    <p className="text-gray-600">
                      In India, rental deposits typically range from 2-10 months' rent depending on the city. 
                      Mumbai and Bengaluru often have higher deposits (3-10 months), while Delhi NCR might require 2-3 months.
                    </p>
                  </div>
                  
                  <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                    <h3 className="mb-2 text-xl font-semibold">Can I negotiate the rent?</h3>
                    <p className="text-gray-600">
                      Yes, rent is often negotiable, especially for longer lease terms or during low-demand periods. 
                      When negotiating, be polite and prepared with market research on comparable properties.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        
        {/* Featured Properties Section */}
        <div className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-2 text-center text-3xl font-bold text-housing-navy">Featured Rental Properties</h2>
            <p className="mb-10 text-center text-lg text-gray-600">Handpicked properties with the best value</p>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {featuredProperties.map((property) => (
                <div key={property.id} className="overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:-translate-y-1">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={property.image} 
                      alt={property.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-semibold">{property.title}</h3>
                    <p className="mb-4 text-gray-600"><MapPin className="mr-1 inline h-4 w-4" />{property.location}</p>
                    <div className="mb-4 flex justify-between">
                      <span className="text-lg font-bold text-housing-navy">₹{property.price.toLocaleString()}/mo</span>
                      <span className="text-gray-600">{property.beds} beds • {property.baths} baths</span>
                    </div>
                    <Link to={`/properties/${property.id}`}>
                      <Button variant="outline" className="w-full border-housing-navy text-housing-navy hover:bg-housing-navy hover:text-white">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <Link to="/properties">
                <Button className="bg-housing-navy hover:bg-blue-800">
                  Browse All Properties
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Email Alerts Section */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl rounded-xl bg-housing-navy p-8 text-white shadow-lg">
              <h2 className="mb-4 text-center text-3xl font-bold">Get Rental Alerts</h2>
              <p className="mb-6 text-center">
                Be the first to know when new properties matching your criteria are listed
              </p>
              
              <form onSubmit={handleSubscribe} className="mx-auto flex max-w-md flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                <Input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow bg-white text-black"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button type="submit" className="bg-housing-orange hover:bg-orange-600">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <ChatBot />
    </div>
  );
};

export default ForBuyersPage;
