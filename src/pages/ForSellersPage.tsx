
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from 'react';
import { Building, MessageSquare, Users, TrendingUp, UserPlus, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import ChatBot from '@/components/ChatBot';

const ForSellersPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    address: '',
    description: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for submitting your property! Our team will contact you shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      propertyType: '',
      address: '',
      description: '',
    });
  };

  const features = [
    {
      icon: <Building className="h-10 w-10 text-housing-navy" />,
      title: "List Once, Appear Everywhere",
      description: "List your property with us, and we'll publish it across multiple platforms automatically."
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-housing-navy" />,
      title: "Unified Communication",
      description: "Manage all inquiries from different platforms in one centralized inbox."
    },
    {
      icon: <Users className="h-10 w-10 text-housing-navy" />,
      title: "Tenant Verification",
      description: "We provide thorough background checks for potential tenants."
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-housing-navy" />,
      title: "Market Analytics",
      description: "Get pricing suggestions based on current market trends and comparable properties."
    }
  ];

  const plans = [
    {
      name: "Basic",
      price: "Free",
      features: [
        "List on 2 platforms",
        "Basic property page",
        "Email support",
        "30-day listing"
      ],
      recommended: false
    },
    {
      name: "Standard",
      price: "₹1,999",
      features: [
        "List on 5 platforms",
        "Enhanced property page",
        "Professional photos",
        "90-day listing",
        "Priority email support"
      ],
      recommended: true
    },
    {
      name: "Premium",
      price: "₹4,999",
      features: [
        "List on all platforms",
        "Featured property placement",
        "Professional photos & 3D tour",
        "Unlimited listing duration",
        "Dedicated account manager",
        "Legal document assistance"
      ],
      recommended: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-housing-navy py-20">
          <div className="absolute -right-64 -top-64 h-96 w-96 rounded-full bg-blue-500 opacity-20"></div>
          <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-blue-500 opacity-10"></div>
          
          <div className="container relative mx-auto px-4 text-center text-white">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">List Your Property with Housing Bridge</h1>
            <p className="mx-auto mb-8 max-w-2xl text-xl">
              List once and get exposure across multiple property platforms, reaching more potential tenants
            </p>
            <div className="mx-auto flex max-w-md flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button size="lg" className="bg-housing-orange hover:bg-orange-600">
                List Your Property
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-housing-navy">
                Learn More
              </Button>
            </div>
          </div>
        </div>
        
        {/* Benefits Section */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-4 text-center text-3xl font-bold text-housing-navy">Why List with Us?</h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
              Housing Bridge provides property owners with tools and services to maximize rental potential
            </p>
            
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <div key={index} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Pricing Plans */}
        <div className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-4 text-center text-3xl font-bold text-housing-navy">Choose Your Plan</h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
              Select the plan that best suits your needs and budget
            </p>
            
            <div className="grid gap-8 md:grid-cols-3">
              {plans.map((plan, index) => (
                <div 
                  key={index} 
                  className={`relative rounded-lg ${plan.recommended ? 'border-2 border-housing-orange' : 'border border-gray-200'} bg-white shadow-sm transition-all hover:shadow-md`}
                >
                  {plan.recommended && (
                    <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-housing-orange px-4 py-1 text-sm font-medium text-white">
                      Recommended
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="mb-2 text-center text-2xl font-bold">{plan.name}</h3>
                    <div className="mb-6 text-center">
                      <span className="text-4xl font-bold text-housing-navy">{plan.price}</span>
                      {plan.price !== "Free" && <span className="text-gray-600">/listing</span>}
                    </div>
                    
                    <ul className="mb-8 space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <Check className="mr-2 h-5 w-5 text-green-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className={`w-full ${plan.recommended ? 'bg-housing-orange hover:bg-orange-600' : 'bg-housing-navy hover:bg-blue-800'}`}
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Listing Form & Resources */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="list-property" className="mx-auto max-w-4xl">
              <TabsList className="mx-auto mb-8 grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="list-property">List Your Property</TabsTrigger>
                <TabsTrigger value="resources">Landlord Resources</TabsTrigger>
              </TabsList>
              
              <TabsContent value="list-property">
                <Card>
                  <CardHeader>
                    <CardTitle>Property Listing Form</CardTitle>
                    <CardDescription>Fill out the details below to list your property on our platform</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit}>
                      <div className="grid gap-6">
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="space-y-2">
                            <label className="text-sm font-medium" htmlFor="name">
                              Full Name
                            </label>
                            <Input 
                              id="name" 
                              name="name" 
                              value={formData.name} 
                              onChange={handleInputChange}
                              required 
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium" htmlFor="email">
                              Email
                            </label>
                            <Input 
                              id="email" 
                              name="email" 
                              type="email" 
                              value={formData.email} 
                              onChange={handleInputChange}
                              required 
                            />
                          </div>
                        </div>
                        
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="space-y-2">
                            <label className="text-sm font-medium" htmlFor="phone">
                              Phone Number
                            </label>
                            <Input 
                              id="phone" 
                              name="phone" 
                              value={formData.phone} 
                              onChange={handleInputChange}
                              required 
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium" htmlFor="propertyType">
                              Property Type
                            </label>
                            <select 
                              id="propertyType" 
                              name="propertyType" 
                              value={formData.propertyType}
                              onChange={handleInputChange}
                              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                              required
                            >
                              <option value="">Select Property Type</option>
                              <option value="apartment">Apartment</option>
                              <option value="house">House</option>
                              <option value="villa">Villa</option>
                              <option value="pg">PG/Hostel</option>
                              <option value="commercial">Commercial Space</option>
                            </select>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <label className="text-sm font-medium" htmlFor="address">
                            Property Address
                          </label>
                          <Input 
                            id="address" 
                            name="address" 
                            value={formData.address} 
                            onChange={handleInputChange}
                            required 
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <label className="text-sm font-medium" htmlFor="description">
                            Property Description
                          </label>
                          <Textarea 
                            id="description" 
                            name="description" 
                            rows={4}
                            value={formData.description} 
                            onChange={handleInputChange}
                            required 
                          />
                        </div>
                      </div>
                      
                      <Button type="submit" className="mt-6 w-full bg-housing-navy">
                        Submit Property
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="resources">
                <div className="space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Landlord Guides</CardTitle>
                      <CardDescription>Essential resources for property owners</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="grid gap-4 md:grid-cols-2">
                        <li>
                          <Link to="#" className="flex items-start rounded-lg border border-gray-200 p-4 hover:bg-gray-50">
                            <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                              <UserPlus className="h-6 w-6 text-housing-navy" />
                            </div>
                            <div>
                              <h4 className="mb-1 font-semibold">Tenant Screening Guide</h4>
                              <p className="text-sm text-gray-600">How to find reliable tenants for your property</p>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="flex items-start rounded-lg border border-gray-200 p-4 hover:bg-gray-50">
                            <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                              <TrendingUp className="h-6 w-6 text-housing-navy" />
                            </div>
                            <div>
                              <h4 className="mb-1 font-semibold">Rental Price Optimization</h4>
                              <p className="text-sm text-gray-600">Strategies to maximize your rental income</p>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="flex items-start rounded-lg border border-gray-200 p-4 hover:bg-gray-50">
                            <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                              <Building className="h-6 w-6 text-housing-navy" />
                            </div>
                            <div>
                              <h4 className="mb-1 font-semibold">Property Maintenance</h4>
                              <p className="text-sm text-gray-600">Tips for keeping your property in top condition</p>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="flex items-start rounded-lg border border-gray-200 p-4 hover:bg-gray-50">
                            <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                              <MessageSquare className="h-6 w-6 text-housing-navy" />
                            </div>
                            <div>
                              <h4 className="mb-1 font-semibold">Communication Templates</h4>
                              <p className="text-sm text-gray-600">Professional templates for tenant communication</p>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full border-housing-navy text-housing-navy">
                        View All Resources
                      </Button>
                    </CardFooter>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Free Webinars</CardTitle>
                      <CardDescription>Learn from property management experts</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="rounded-lg border border-gray-200 p-4">
                          <p className="mb-1 text-sm font-medium text-housing-navy">July 15, 2023 • 4:00 PM</p>
                          <h4 className="mb-1 font-semibold">Tax Strategies for Rental Property Owners</h4>
                          <p className="mb-3 text-sm text-gray-600">Learn how to optimize your tax planning for rental income</p>
                          <Button variant="outline" size="sm" className="border-housing-navy text-housing-navy">
                            Register Now
                          </Button>
                        </div>
                        
                        <div className="rounded-lg border border-gray-200 p-4">
                          <p className="mb-1 text-sm font-medium text-housing-navy">July 22, 2023 • 5:00 PM</p>
                          <h4 className="mb-1 font-semibold">Property Photography 101</h4>
                          <p className="mb-3 text-sm text-gray-600">Tips for taking attractive photos that attract quality tenants</p>
                          <Button variant="outline" size="sm" className="border-housing-navy text-housing-navy">
                            Register Now
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-4 text-center text-3xl font-bold text-housing-navy">Landlord Success Stories</h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
              See what other property owners are saying about Housing Bridge
            </p>
            
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-lg bg-gray-50 p-6 shadow-sm">
                <div className="mb-4 flex items-center">
                  <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-gray-300">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" alt="Avatar" />
                  </div>
                  <div>
                    <p className="font-semibold">Priya Sharma</p>
                    <p className="text-sm text-gray-600">Property Owner, Mumbai</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "I was struggling to find tenants through traditional channels. Housing Bridge helped me list on multiple platforms and I found a tenant within a week!"
                </p>
              </div>
              
              <div className="rounded-lg bg-gray-50 p-6 shadow-sm">
                <div className="mb-4 flex items-center">
                  <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-gray-300">
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" alt="Avatar" />
                  </div>
                  <div>
                    <p className="font-semibold">Rahul Mishra</p>
                    <p className="text-sm text-gray-600">Property Investor, Bangalore</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "The market analytics feature helped me price my properties competitively. I'm now getting 15% more rental income compared to last year."
                </p>
              </div>
              
              <div className="rounded-lg bg-gray-50 p-6 shadow-sm">
                <div className="mb-4 flex items-center">
                  <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-gray-300">
                    <img src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" alt="Avatar" />
                  </div>
                  <div>
                    <p className="font-semibold">Anita Desai</p>
                    <p className="text-sm text-gray-600">Property Manager, Delhi</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "Managing multiple properties became so much easier with Housing Bridge. The unified communication system saves me hours every week."
                </p>
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

export default ForSellersPage;
