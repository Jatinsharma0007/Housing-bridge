
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Filter } from 'lucide-react';

interface PropertyFiltersProps {
  onApplyFilters: (filters: FilterValues) => void;
}

export interface FilterValues {
  location: string;
  priceRange: [number, number];
  bedrooms: string;
  furnished: boolean;
  dataSources: string[];
}

const PropertyFilters = ({ onApplyFilters }: PropertyFiltersProps) => {
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100000]);
  const [bedrooms, setBedrooms] = useState('Any');
  const [furnished, setFurnished] = useState(false);
  const [dataSources, setDataSources] = useState<string[]>([
    'MagicBricks',
    '99acres',
    'Housing',
    'Makaan',
    'NoBroker',
    'OLX'
  ]);

  const handleSourceToggle = (source: string) => {
    if (dataSources.includes(source)) {
      setDataSources(dataSources.filter(s => s !== source));
    } else {
      setDataSources([...dataSources, source]);
    }
  };

  const handleApplyFilters = () => {
    onApplyFilters({
      location,
      priceRange,
      bedrooms,
      furnished,
      dataSources
    });
  };

  const handleClear = () => {
    setLocation('');
    setPriceRange([0, 100000]);
    setBedrooms('Any');
    setFurnished(false);
    setDataSources(['MagicBricks', '99acres', 'Housing', 'Makaan', 'NoBroker', 'OLX']);
  };

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800">Filters</h3>
        <Filter className="h-5 w-5 text-housing-navy" />
      </div>

      <div className="space-y-6">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">Location</label>
          <Input
            type="text"
            placeholder="City, locality, or landmark"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Price Range (₹{priceRange[0].toLocaleString()} - ₹{priceRange[1].toLocaleString()})
          </label>
          <Slider
            defaultValue={priceRange}
            max={100000}
            step={1000}
            onValueChange={(values) => setPriceRange([values[0], values[1]])}
            className="py-4"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">Bedrooms</label>
          <select
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
            className="w-full rounded-md border border-gray-300 p-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="Any">Any</option>
            <option value="1">1 BHK</option>
            <option value="2">2 BHK</option>
            <option value="3">3 BHK</option>
            <option value="4">4+ BHK</option>
          </select>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="furnished"
            checked={furnished}
            onCheckedChange={() => setFurnished(!furnished)}
          />
          <label
            htmlFor="furnished"
            className="text-sm font-medium text-gray-700 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Furnished Only
          </label>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">Data Sources</label>
          <div className="space-y-2">
            {['MagicBricks', '99acres', 'Housing', 'Makaan', 'NoBroker', 'OLX'].map((source) => (
              <div key={source} className="flex items-center space-x-2">
                <Checkbox
                  id={`source-${source}`}
                  checked={dataSources.includes(source)}
                  onCheckedChange={() => handleSourceToggle(source)}
                />
                <label
                  htmlFor={`source-${source}`}
                  className="text-sm font-medium text-gray-700 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {source}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Button
            onClick={handleClear}
            variant="outline"
            className="w-full border-housing-navy text-housing-navy"
          >
            Clear
          </Button>
          <Button 
            onClick={handleApplyFilters} 
            className="w-full bg-housing-navy text-white hover:bg-blue-800"
          >
            Apply Filters
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyFilters;
