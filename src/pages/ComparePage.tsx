
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, X, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import { allProperties, Property, getBestPriceSource } from '@/data/properties';

const ComparePage = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [selectedPropertyIds, setSelectedPropertyIds] = useState<number[]>([]);
  const [compareProperties, setCompareProperties] = useState<Property[]>([]);

  useEffect(() => {
    // Load properties for selection
    setProperties(allProperties);
  }, []);

  const handleSelectProperty = (propertyId: string) => {
    const id = parseInt(propertyId);
    
    // Don't select the same property twice
    if (selectedPropertyIds.includes(id)) return;
    
    // Only allow up to 3 properties for comparison
    if (selectedPropertyIds.length >= 3) {
      const newIds = [...selectedPropertyIds.slice(1), id];
      setSelectedPropertyIds(newIds);
    } else {
      setSelectedPropertyIds([...selectedPropertyIds, id]);
    }
  };

  const handleRemoveProperty = (propertyId: number) => {
    setSelectedPropertyIds(selectedPropertyIds.filter(id => id !== propertyId));
  };

  const handleCompare = () => {
    // Get full property objects for the selected IDs
    const propsToCompare = selectedPropertyIds.map(id => 
      properties.find(p => p.id === id)
    ).filter(p => p !== undefined) as Property[];
    
    setCompareProperties(propsToCompare);
  };

  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString()}`;
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
            <span>Compare Properties</span>
          </div>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Compare Properties</h1>
          <p className="text-gray-600">Compare features, prices and source listings side-by-side</p>
        </div>

        <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold text-gray-800">Add Properties to Compare</h2>
          <div className="flex flex-col items-center space-y-4 md:flex-row md:items-end md:space-x-4 md:space-y-0">
            <div className="w-full md:flex-1">
              <label className="mb-2 block text-sm font-medium text-gray-700">Select a property...</label>
              <Select onValueChange={handleSelectProperty}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a property..." />
                </SelectTrigger>
                <SelectContent>
                  {properties.map(property => (
                    <SelectItem key={property.id} value={property.id.toString()}>
                      {property.title} - {property.location}, {property.city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button 
              onClick={handleCompare} 
              className={`w-full md:w-auto ${selectedPropertyIds.length === 0 ? 'bg-gray-400' : 'bg-housing-navy hover:bg-blue-800'}`}
              disabled={selectedPropertyIds.length === 0}
            >
              Compare
            </Button>
          </div>
          
          {selectedPropertyIds.length > 0 && (
            <div className="mt-6">
              <h3 className="mb-3 text-sm font-medium text-gray-700">Selected Properties:</h3>
              <div className="flex flex-wrap gap-2">
                {selectedPropertyIds.map(id => {
                  const property = properties.find(p => p.id === id);
                  if (!property) return null;
                  
                  return (
                    <div 
                      key={id} 
                      className="flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm"
                    >
                      <span>{property.title}</span>
                      <button 
                        onClick={() => handleRemoveProperty(id)}
                        className="ml-2 flex h-4 w-4 items-center justify-center rounded-full bg-gray-400 text-white hover:bg-gray-600"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {compareProperties.length > 0 && (
          <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-sm">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="bg-gray-50">
                  <th className="py-4 pl-6 text-left text-sm font-semibold text-gray-700">Feature</th>
                  {compareProperties.map(property => (
                    <th key={property.id} className="p-4 text-left text-sm font-semibold text-gray-700">
                      <div className="mb-2">
                        <Link 
                          to={`/properties/${property.id}`} 
                          className="text-housing-navy hover:underline"
                        >
                          {property.title}
                        </Link>
                      </div>
                      <div className="mb-1 h-20 overflow-hidden rounded">
                        <img 
                          src={property.images[0]} 
                          alt={property.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-200">
                  <td className="py-4 pl-6 font-medium text-gray-700">Location</td>
                  {compareProperties.map(property => (
                    <td key={property.id} className="p-4 text-gray-600">
                      {property.location}, {property.city}
                    </td>
                  ))}
                </tr>
                <tr className="border-t border-gray-200 bg-gray-50">
                  <td className="py-4 pl-6 font-medium text-gray-700">Price (Best)</td>
                  {compareProperties.map(property => {
                    const bestPrice = getBestPriceSource(property);
                    return (
                      <td key={property.id} className="p-4">
                        <div className="font-semibold text-housing-navy">
                          {formatPrice(bestPrice.price)}<span className="text-gray-600">/month</span>
                        </div>
                        <div className="text-sm text-gray-600">from {bestPrice.source}</div>
                      </td>
                    );
                  })}
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="py-4 pl-6 font-medium text-gray-700">Property Type</td>
                  {compareProperties.map(property => (
                    <td key={property.id} className="p-4 text-gray-600">
                      {property.propertyType}
                    </td>
                  ))}
                </tr>
                <tr className="border-t border-gray-200 bg-gray-50">
                  <td className="py-4 pl-6 font-medium text-gray-700">Bedrooms</td>
                  {compareProperties.map(property => (
                    <td key={property.id} className="p-4 text-gray-600">
                      {property.beds}
                    </td>
                  ))}
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="py-4 pl-6 font-medium text-gray-700">Bathrooms</td>
                  {compareProperties.map(property => (
                    <td key={property.id} className="p-4 text-gray-600">
                      {property.baths}
                    </td>
                  ))}
                </tr>
                <tr className="border-t border-gray-200 bg-gray-50">
                  <td className="py-4 pl-6 font-medium text-gray-700">Area</td>
                  {compareProperties.map(property => (
                    <td key={property.id} className="p-4 text-gray-600">
                      {property.sqft} sqft
                    </td>
                  ))}
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="py-4 pl-6 font-medium text-gray-700">Furnished</td>
                  {compareProperties.map(property => (
                    <td key={property.id} className="p-4">
                      {property.furnished ? (
                        <div className="flex items-center text-green-600">
                          <Check className="mr-1 h-5 w-5" />
                          <span>Yes</span>
                        </div>
                      ) : (
                        <div className="flex items-center text-gray-600">
                          <X className="mr-1 h-5 w-5" />
                          <span>No</span>
                        </div>
                      )}
                    </td>
                  ))}
                </tr>
                <tr className="border-t border-gray-200 bg-gray-50">
                  <td className="py-4 pl-6 font-medium text-gray-700">Available From</td>
                  {compareProperties.map(property => (
                    <td key={property.id} className="p-4 text-gray-600">
                      {new Date(property.availableFrom).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </td>
                  ))}
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="py-4 pl-6 font-medium text-gray-700">Condition</td>
                  {compareProperties.map(property => (
                    <td key={property.id} className="p-4 text-gray-600">
                      {property.condition}
                    </td>
                  ))}
                </tr>
                <tr className="border-t border-gray-200 bg-gray-50">
                  <td className="py-4 pl-6 align-top font-medium text-gray-700">Amenities</td>
                  {compareProperties.map(property => (
                    <td key={property.id} className="p-4">
                      <ul className="space-y-2 text-gray-600">
                        {property.amenities.map((amenity, index) => (
                          <li key={index} className="flex items-center">
                            <Check className="mr-2 h-4 w-4 text-green-600" />
                            <span>{amenity}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="py-4 pl-6 align-top font-medium text-gray-700">Price Comparison</td>
                  {compareProperties.map(property => {
                    const bestPrice = getBestPriceSource(property);
                    return (
                      <td key={property.id} className="p-4">
                        <ul className="space-y-2">
                          {Object.entries(property.price).map(([source, price]) => (
                            <li key={source} className="flex items-center justify-between">
                              <span className="text-sm text-gray-600">{source}</span>
                              <span className={`font-medium ${
                                source === bestPrice.source 
                                  ? 'text-green-600'
                                  : 'text-gray-700'
                              }`}>
                                {formatPrice(price)}
                                {source === bestPrice.source && 
                                  <span className="ml-1 text-xs">(Best)</span>
                                }
                              </span>
                            </li>
                          ))}
                        </ul>
                      </td>
                    );
                  })}
                </tr>
                <tr className="border-t border-gray-200 bg-gray-50">
                  <td className="py-4 pl-6 font-medium text-gray-700"></td>
                  {compareProperties.map(property => (
                    <td key={property.id} className="p-4">
                      <Link to={`/properties/${property.id}`}>
                        <Button className="w-full bg-housing-navy text-white hover:bg-blue-800">
                          View Details
                        </Button>
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {compareProperties.length === 0 && selectedPropertyIds.length > 0 && (
          <div className="rounded-lg border border-gray-200 bg-white p-8 text-center shadow-sm">
            <h3 className="mb-2 text-lg font-medium">Ready to Compare</h3>
            <p className="mb-4 text-gray-600">
              You've selected {selectedPropertyIds.length} {selectedPropertyIds.length === 1 ? 'property' : 'properties'}.
              Click the Compare button above to view side-by-side comparison.
            </p>
            <Button 
              onClick={handleCompare}
              className="bg-housing-navy text-white hover:bg-blue-800"
            >
              Compare Properties
            </Button>
          </div>
        )}

        {compareProperties.length === 0 && selectedPropertyIds.length === 0 && (
          <div className="rounded-lg border border-gray-200 bg-white p-8 text-center shadow-sm">
            <h3 className="mb-2 text-xl font-medium">Select Properties to Compare</h3>
            <p className="mb-6 text-gray-600">
              Choose up to 3 properties to compare their features, prices and amenities side-by-side.
            </p>
            <div className="flex justify-center">
              <Link to="/properties">
                <Button className="bg-housing-navy text-white hover:bg-blue-800">
                  Browse Properties
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>

      <Footer />
      <ChatBot />
    </div>
  );
};

export default ComparePage;
