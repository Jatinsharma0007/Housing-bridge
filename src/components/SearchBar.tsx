
import { useState, useEffect, useRef } from 'react';
import { Search, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import { allProperties } from '@/data/properties';
import { Command, CommandList, CommandInput, CommandEmpty, CommandGroup, CommandItem } from '@/components/ui/command';

interface SearchBarProps {
  onSearch?: (query: string) => void;
  className?: string;
}

const SearchBar = ({ onSearch, className }: SearchBarProps) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const navigate = useNavigate();
  const commandRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (commandRef.current && !commandRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (query.length >= 2) {
      // Generate suggestions based on properties data
      const locationSuggestions = new Set<string>();
      const citySuggestions = new Set<string>();
      const amenitySuggestions = new Set<string>();
      
      allProperties.forEach(property => {
        if (property.location.toLowerCase().includes(query.toLowerCase())) {
          locationSuggestions.add(property.location);
        }
        if (property.city.toLowerCase().includes(query.toLowerCase())) {
          citySuggestions.add(property.city);
        }
        property.amenities.forEach(amenity => {
          if (amenity.toLowerCase().includes(query.toLowerCase())) {
            amenitySuggestions.add(amenity);
          }
        });
      });
      
      const allSuggestions = [
        ...Array.from(locationSuggestions), 
        ...Array.from(citySuggestions),
        ...Array.from(amenitySuggestions)
      ].slice(0, 6); // Limit to 6 suggestions
      
      setSuggestions(allSuggestions);
      setIsOpen(allSuggestions.length > 0);
    } else {
      setSuggestions([]);
      setIsOpen(false);
    }
  }, [query]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOpen(false);
    if (onSearch) {
      onSearch(query);
    } else {
      // If no onSearch callback provided, navigate to properties page with search query
      navigate(`/properties?search=${encodeURIComponent(query)}`);
    }
  };

  const handleSelectSuggestion = (value: string) => {
    setQuery(value);
    setIsOpen(false);
    if (onSearch) {
      onSearch(value);
    } else {
      navigate(`/properties?search=${encodeURIComponent(value)}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className={`flex w-full max-w-4xl ${className}`}>
      <div className="relative flex-1">
        <div className="absolute left-3 top-1/2 -translate-y-1/2">
          <MapPin className="h-5 w-5 text-gray-400" />
        </div>
        <Input
          type="text"
          placeholder="Enter city, locality, or landmark"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="h-12 rounded-l-lg border-r-0 pl-10 pr-4"
          autoComplete="off"
        />
        
        {/* Suggestions dropdown */}
        {isOpen && suggestions.length > 0 && (
          <div 
            ref={commandRef}
            className="absolute left-0 right-0 top-full z-10 mt-1 overflow-hidden rounded-md border border-gray-200 bg-white shadow-lg"
          >
            <Command>
              <CommandList>
                <CommandGroup>
                  {suggestions.map((suggestion, index) => (
                    <CommandItem 
                      key={index} 
                      onSelect={() => handleSelectSuggestion(suggestion)}
                      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                    >
                      {suggestion}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </div>
        )}
      </div>
      <Button
        type="submit"
        className="h-12 rounded-l-none rounded-r-lg bg-housing-orange px-8 font-medium text-white hover:bg-orange-600"
      >
        <Search className="mr-2 h-5 w-5" />
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
