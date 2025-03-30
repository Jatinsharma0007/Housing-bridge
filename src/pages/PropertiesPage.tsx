
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PropertyCard from '@/components/PropertyCard';
import PropertyFilters, { FilterValues } from '@/components/PropertyFilters';
import ChatBot from '@/components/ChatBot';
import { allProperties, filterProperties, getBestPriceSource, Property } from '@/data/properties';

const PropertiesPage = () => {
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [isFilterVisible, setIsFilterVisible] = useState(true);

  useEffect(() => {
    // Initialize with all properties
    setFilteredProperties(allProperties.slice(0, 20)); // Just show a subset initially for better performance
  }, []);

  const handleApplyFilters = (filters: FilterValues) => {
    const filtered = filterProperties({
      location: filters.location,
      priceMin: filters.priceRange[0],
      priceMax: filters.priceRange[1],
      beds: filters.bedrooms !== 'Any' ? parseInt(filters.bedrooms) : undefined,
      furnished: filters.furnished,
      dataSources: filters.dataSources,
    });
    setFilteredProperties(filtered);
  };

  const toggleFilters = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-housing-navy">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span>Rental Properties</span>
          </div>
          <h1 className="mt-2 text-3xl font-bold text-gray-800">Rental Properties</h1>
          <p className="mt-1 text-gray-600">{filteredProperties.length} properties found</p>
        </div>

        <div className="lg:flex lg:space-x-6">
          {/* Filters */}
          <div className={`mb-6 lg:mb-0 lg:w-1/4 ${isFilterVisible ? 'block' : 'hidden lg:block'}`}>
            <PropertyFilters onApplyFilters={handleApplyFilters} />
          </div>

          {/* Toggle filters button for mobile */}
          <div className="mb-4 block lg:hidden">
            <Button
              onClick={toggleFilters}
              variant="outline"
              className="w-full border-housing-navy text-housing-navy"
            >
              {isFilterVisible ? 'Hide Filters' : 'Show Filters'}
            </Button>
          </div>

          {/* Property listings */}
          <div className="flex-1">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredProperties.length > 0 ? (
                filteredProperties.map((property) => {
                  const bestPrice = getBestPriceSource(property);
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
                })
              ) : (
                <div className="col-span-full my-12 text-center">
                  <h3 className="mb-2 text-xl font-medium text-gray-700">No properties found</h3>
                  <p className="text-gray-600">Try adjusting your filters to see more results</p>
                  <Button 
                    onClick={() => setFilteredProperties(allProperties)}
                    className="mt-4 bg-housing-navy text-white hover:bg-blue-800"
                  >
                    Reset Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <ChatBot />
    </div>
  );
};

export default PropertiesPage;
