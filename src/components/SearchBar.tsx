
import { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface SearchBarProps {
  onSearch?: (query: string) => void;
  className?: string;
}

const SearchBar = ({ onSearch, className }: SearchBarProps) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
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
        />
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

const MapPin = (props: any) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      {...props}
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
};

export default SearchBar;
