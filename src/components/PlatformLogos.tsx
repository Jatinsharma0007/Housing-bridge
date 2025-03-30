import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { toast } from '@/hooks/use-toast';

// Simulating a backend call to fetch platform data
const fetchPlatformData = async () => {
  // In a real app, this would be an API call
  return [
    { 
      name: 'MagicBricks', 
      logo: '/platform-logos/magicbricks.png',
      url: 'https://www.magicbricks.com/',
      propertyCount: 120450
    },
    { 
      name: '99acres', 
      logo: '/platform-logos/99acres.png',
      url: 'https://www.99acres.com/',
      propertyCount: 98760
    },
    { 
      name: 'Housing', 
      logo: '/platform-logos/housing.png',
      url: 'https://housing.com/',
      propertyCount: 87500
    },
    { 
      name: 'Makaan', 
      logo: '/platform-logos/makaan.png',
      url: 'https://www.makaan.com/',
      propertyCount: 75600
    },
    { 
      name: 'NoBroker', 
      logo: '/platform-logos/nobroker.png',
      url: 'https://www.nobroker.in/',
      propertyCount: 63200
    },
    { 
      name: 'OLX', 
      logo: '/platform-logos/olx.png',
      url: 'https://www.olx.in/real-estate',
      propertyCount: 50800
    }
  ];
};

const PlatformLogos = () => {
  const { data: platforms = [], isLoading, isError } = useQuery({
    queryKey: ['platforms'],
    queryFn: fetchPlatformData
  });

  const handleConnect = (platform: string) => {
    // Simulating connection to platform
    toast({
      title: "Connecting to platform",
      description: `Successfully connected to ${platform}. Now syncing properties...`,
      duration: 3000,
    });
  };

  if (isLoading) {
    return (
      <div className="my-10">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="flex h-32 animate-pulse items-center justify-center rounded-lg bg-gray-200 p-6" />
          ))}
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="my-10 text-center">
        <p className="text-red-500">Failed to load platform data</p>
        <Button 
          onClick={() => window.location.reload()}
          variant="outline" 
          className="mt-2"
        >
          Retry
        </Button>
      </div>
    );
  }

  return (
    <div className="my-10">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
        {platforms.map((platform) => (
          <TooltipProvider key={platform.name}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                  <div className="mb-3 flex h-10 items-center justify-center">
                    <img 
                      src={platform.logo} 
                      alt={`${platform.name} logo`} 
                      className="h-10 w-auto object-contain" 
                    />
                  </div>
                  <div className="mt-2 text-center">
                    <p className="text-xs text-gray-500">{platform.propertyCount.toLocaleString()} properties</p>
                    <div className="mt-3 flex items-center justify-center space-x-2">
                      <a 
                        href={platform.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs text-housing-navy hover:underline"
                      >
                        <ExternalLink className="mr-1 inline h-3 w-3" />
                        Visit
                      </a>
                      <button
                        onClick={() => handleConnect(platform.name)}
                        className="text-xs text-housing-navy hover:underline"
                      >
                        Connect
                      </button>
                    </div>
                  </div>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Connect with {platform.name} to import properties</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  );
};

export default PlatformLogos;
