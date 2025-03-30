// Mock data for properties
export interface Property {
  id: number;
  title: string;
  description: string;
  location: string;
  city: string;
  state: string;
  price: {
    [key: string]: number;
  };
  bestSource: string;
  beds: number;
  baths: number;
  sqft: number;
  amenities: string[];
  furnished: boolean;
  propertyType: 'Apartment' | 'House' | 'Villa' | 'PG';
  availableFrom: string; // ISO date string
  images: string[];
  condition: 'Excellent' | 'Good' | 'Average' | 'Needs Maintenance';
  latitude: number;
  longitude: number;
  priceHistory?: {
    date: string;
    price: number;
  }[];
}

const placeholderImages = [
  'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1170&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1626178793926-22b28830aa30?q=80&w=1170&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1170&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1170&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1170&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1175&auto=format&fit=crop'
];

export const properties: Property[] = [
  {
    id: 1,
    title: 'Modern 3BHK Villa with Garden',
    description: 'Luxury 3BHK villa with spacious rooms, modern amenities, and a beautiful garden. Perfect for families looking for a comfortable living space.',
    location: 'Whitefield',
    city: 'Bangalore',
    state: 'Karnataka',
    price: {
      'Housing': 35000,
      '99acres': 36000,
      'OLX': 34000,
      'MagicBricks': 36500
    },
    bestSource: 'OLX',
    beds: 3,
    baths: 3,
    sqft: 2200,
    amenities: ['Garden', 'Parking', 'Security', 'Power Backup', 'Gym', 'Swimming Pool'],
    furnished: true,
    propertyType: 'Villa',
    availableFrom: '2023-06-01',
    images: [placeholderImages[0], placeholderImages[1], placeholderImages[2]],
    condition: 'Excellent',
    latitude: 12.9698,
    longitude: 77.7499
  },
  {
    id: 2,
    title: 'Cozy 2BHK in Residential Area',
    description: 'Well-maintained 2BHK apartment in a quiet residential area. Features modern interiors and comes with essential amenities.',
    location: 'Indiranagar',
    city: 'Bangalore',
    state: 'Karnataka',
    price: {
      'Housing': 17000,
      '99acres': 18000,
      'OLX': 16000,
      'NoBroker': 16500
    },
    bestSource: 'OLX',
    beds: 2,
    baths: 2,
    sqft: 1100,
    amenities: ['Parking', 'Security', 'Power Backup', 'Lift'],
    furnished: false,
    propertyType: 'Apartment',
    availableFrom: '2023-05-15',
    images: [placeholderImages[2], placeholderImages[0], placeholderImages[1]],
    condition: 'Good',
    latitude: 12.9784,
    longitude: 77.6408
  },
  {
    id: 3,
    title: 'Spacious 2BHK Apartment with Balcony',
    description: 'Beautiful 2BHK apartment with a large balcony offering scenic views. Features modern interiors and is located in a well-connected area.',
    location: 'Koramangala',
    city: 'Bangalore',
    state: 'Karnataka',
    price: {
      'Housing': 18000,
      'MagicBricks': 19000,
      'NoBroker': 17500,
      'Makaan': 18500
    },
    bestSource: 'NoBroker',
    beds: 2,
    baths: 2,
    sqft: 1200,
    amenities: ['Balcony', 'Parking', 'Security', 'Gym'],
    furnished: true,
    propertyType: 'Apartment',
    availableFrom: '2023-06-10',
    images: [placeholderImages[1], placeholderImages[2], placeholderImages[0]],
    condition: 'Excellent',
    latitude: 12.9352,
    longitude: 77.6245
  },
  {
    id: 4,
    title: 'Budget 1BHK near Tech Park',
    description: 'Affordable 1BHK apartment ideal for working professionals. Located near major tech parks and offers basic amenities.',
    location: 'Electronic City',
    city: 'Bangalore',
    state: 'Karnataka',
    price: {
      'Housing': 12000,
      '99acres': 12500,
      'NoBroker': 11500,
      'OLX': 12200
    },
    bestSource: 'NoBroker',
    beds: 1,
    baths: 1,
    sqft: 650,
    amenities: ['Parking', 'Security', 'Water Supply'],
    furnished: false,
    propertyType: 'Apartment',
    availableFrom: '2023-05-20',
    images: [placeholderImages[0], placeholderImages[1]],
    condition: 'Good',
    latitude: 12.8458,
    longitude: 77.6692
  },
  {
    id: 5,
    title: 'Elegant 3BHK in Gated Community',
    description: 'Luxurious 3BHK apartment in a premium gated community with top-notch amenities and serene surroundings.',
    location: 'HSR Layout',
    city: 'Bangalore',
    state: 'Karnataka',
    price: {
      'Housing': 28000,
      'MagicBricks': 29500,
      '99acres': 28500,
      'Makaan': 29000
    },
    bestSource: 'Housing',
    beds: 3,
    baths: 3,
    sqft: 1800,
    amenities: ['Swimming Pool', 'Gym', 'Clubhouse', 'Children\'s Play Area', 'Security', 'Power Backup'],
    furnished: true,
    propertyType: 'Apartment',
    availableFrom: '2023-06-15',
    images: [placeholderImages[2], placeholderImages[0]],
    condition: 'Excellent',
    latitude: 12.9116,
    longitude: 77.6474
  },
  {
    id: 6,
    title: 'Newly Built 4BHK Independent House',
    description: 'Spacious 4BHK independent house with modern design and premium finishes. Perfect for large families seeking privacy and comfort.',
    location: 'JP Nagar',
    city: 'Bangalore',
    state: 'Karnataka',
    price: {
      'Housing': 45000,
      '99acres': 46000,
      'MagicBricks': 44500,
      'OLX': 45500
    },
    bestSource: 'MagicBricks',
    beds: 4,
    baths: 4,
    sqft: 2600,
    amenities: ['Garden', 'Parking', 'Security', 'Power Backup', 'Rain Water Harvesting'],
    furnished: false,
    propertyType: 'House',
    availableFrom: '2023-07-01',
    images: [placeholderImages[1], placeholderImages[0], placeholderImages[2]],
    condition: 'Excellent',
    latitude: 12.9105,
    longitude: 77.5857
  },
  {
    id: 7,
    title: 'Compact 1BHK with City View',
    description: 'Well-designed 1BHK apartment offering great city views. Ideal for bachelors or young couples starting out.',
    location: 'Marathahalli',
    city: 'Bangalore',
    state: 'Karnataka',
    price: {
      'Housing': 13500,
      'NoBroker': 13000,
      'OLX': 14000,
      'Makaan': 13800
    },
    bestSource: 'NoBroker',
    beds: 1,
    baths: 1,
    sqft: 700,
    amenities: ['Lift', 'Security', 'Power Backup'],
    furnished: true,
    propertyType: 'Apartment',
    availableFrom: '2023-05-25',
    images: [placeholderImages[0], placeholderImages[2]],
    condition: 'Good',
    latitude: 12.9569,
    longitude: 77.7011
  },
  {
    id: 8,
    title: 'Premium 3BHK with Terrace Garden',
    description: 'Luxurious 3BHK penthouse with a private terrace garden. Offers premium amenities and is located in an upscale neighborhood.',
    location: 'Sadashivanagar',
    city: 'Bangalore',
    state: 'Karnataka',
    price: {
      'Housing': 55000,
      'MagicBricks': 57000,
      '99acres': 56000,
      'Makaan': 56500
    },
    bestSource: 'Housing',
    beds: 3,
    baths: 3,
    sqft: 2400,
    amenities: ['Terrace Garden', 'Swimming Pool', 'Gym', 'Clubhouse', 'Security', 'Parking', 'Power Backup'],
    furnished: true,
    propertyType: 'Apartment',
    availableFrom: '2023-07-15',
    images: [placeholderImages[1], placeholderImages[0]],
    condition: 'Excellent',
    latitude: 13.0023,
    longitude: 77.5716
  },
  {
    id: 9,
    title: 'Stylish 2BHK in Central Location',
    description: 'Modern 2BHK apartment in the heart of the city. Features contemporary design and is close to all major amenities.',
    location: 'MG Road',
    city: 'Bangalore',
    state: 'Karnataka',
    price: {
      'Housing': 22000,
      '99acres': 23000,
      'MagicBricks': 22500,
      'NoBroker': 21500
    },
    bestSource: 'NoBroker',
    beds: 2,
    baths: 2,
    sqft: 1100,
    amenities: ['Lift', 'Security', 'Power Backup', 'Gym'],
    furnished: true,
    propertyType: 'Apartment',
    availableFrom: '2023-06-05',
    images: [placeholderImages[2], placeholderImages[1]],
    condition: 'Good',
    latitude: 12.9719,
    longitude: 77.6412
  },
  {
    id: 10,
    title: 'Affordable PG Accommodation',
    description: 'Clean and well-maintained PG accommodation with shared facilities. Ideal for students or working professionals on a budget.',
    location: 'BTM Layout',
    city: 'Bangalore',
    state: 'Karnataka',
    price: {
      'Housing': 7000,
      'OLX': 6500,
      'NoBroker': 7200,
      '99acres': 7500
    },
    bestSource: 'OLX',
    beds: 1,
    baths: 1,
    sqft: 300,
    amenities: ['Wi-Fi', 'Food', 'Laundry', 'Common Area'],
    furnished: true,
    propertyType: 'PG',
    availableFrom: '2023-05-10',
    images: [placeholderImages[0]],
    condition: 'Average',
    latitude: 12.9166,
    longitude: 77.6101
  },
];

import { additionalProperties } from './additionalProperties';

export const generateProperties = (): Property[] => {
  const allProperties: Property[] = [...properties, ...additionalProperties];
  
  const cities = ['Bangalore', 'Mumbai', 'Delhi', 'Hyderabad', 'Chennai', 'Pune'];
  const states = ['Karnataka', 'Maharashtra', 'Delhi', 'Telangana', 'Tamil Nadu', 'Maharashtra'];
  const locations = [
    'Whitefield', 'Indiranagar', 'Koramangala', 'Electronic City', 'HSR Layout',
    'Bandra', 'Andheri', 'Powai', 'Juhu', 'Malad',
    'Connaught Place', 'Vasant Kunj', 'Dwarka', 'Rohini', 'Saket',
    'Hitech City', 'Gachibowli', 'Banjara Hills', 'Jubilee Hills', 'Madhapur',
    'T. Nagar', 'Adyar', 'Velachery', 'Anna Nagar', 'Mylapore',
    'Kothrud', 'Hinjewadi', 'Viman Nagar', 'Koregaon Park', 'Baner'
  ];
  
  while (allProperties.length < 100) {
    const originalIndex = allProperties.length % properties.length;
    const original = properties[originalIndex];
    
    const cityIndex = allProperties.length % cities.length;
    
    const priceVariation = Math.floor(Math.random() * 5000) - 2000;
    const sqftVariation = Math.floor(Math.random() * 200) - 100;
    
    const newProperty: Property = {
      ...original,
      id: allProperties.length + 1,
      location: locations[allProperties.length % locations.length],
      city: cities[cityIndex],
      state: states[cityIndex],
      sqft: Math.max(300, original.sqft + sqftVariation),
      price: {
        'Housing': Math.max(5000, original.price['Housing'] + priceVariation),
        '99acres': Math.max(5000, original.price['99acres'] + priceVariation + 500),
        'OLX': Math.max(5000, original.price['OLX'] + priceVariation - 300),
        'MagicBricks': Math.max(5000, (original.price['MagicBricks'] || original.price['Housing']) + priceVariation + 200),
        'NoBroker': Math.max(5000, (original.price['NoBroker'] || original.price['Housing']) + priceVariation - 500),
        'Makaan': Math.max(5000, (original.price['Makaan'] || original.price['Housing']) + priceVariation + 100)
      },
      bestSource: ['Housing', '99acres', 'OLX', 'MagicBricks', 'NoBroker', 'Makaan'][allProperties.length % 6],
      images: [
        placeholderImages[allProperties.length % placeholderImages.length],
        placeholderImages[(allProperties.length + 1) % placeholderImages.length],
      ],
      furnished: allProperties.length % 3 === 0,
      condition: ['Excellent', 'Good', 'Average', 'Needs Maintenance'][allProperties.length % 4] as any,
      latitude: original.latitude + (Math.random() * 0.1 - 0.05),
      longitude: original.longitude + (Math.random() * 0.1 - 0.05)
    };
    
    const today = new Date();
    const priceHistory = [];
    const basePrice = Math.max(5000, original.price['Housing'] + priceVariation);
    
    for (let i = 0; i < 12; i++) {
      const pastDate = new Date(today);
      pastDate.setMonth(today.getMonth() - (11 - i));
      
      const historicalVariation = Math.floor(Math.random() * 2000) - 1000;
      const historicalPrice = basePrice + historicalVariation;
      
      priceHistory.push({
        date: pastDate.toISOString().split('T')[0],
        price: Math.max(4000, historicalPrice)
      });
    }
    
    newProperty.priceHistory = priceHistory;
    
    allProperties.push(newProperty);
  }
  
  return allProperties;
};

export const allProperties = generateProperties();

export const getBestPriceSource = (property: Property): {source: string, price: number} => {
  let bestSource = '';
  let lowestPrice = Number.MAX_SAFE_INTEGER;
  
  for (const [source, price] of Object.entries(property.price)) {
    if (price < lowestPrice) {
      lowestPrice = price;
      bestSource = source;
    }
  }
  
  return {source: bestSource, price: lowestPrice};
};

export interface FilterOptions {
  location?: string;
  city?: string;
  priceMin?: number;
  priceMax?: number;
  beds?: number;
  baths?: number;
  furnished?: boolean;
  propertyType?: string;
  dataSources?: string[];
  priceHistoryAvailable?: boolean;
  keyword?: string;
}

export const filterProperties = (options: FilterOptions): Property[] => {
  return allProperties.filter(property => {
    if (options.location && 
       !(property.location.toLowerCase().includes(options.location.toLowerCase()) || 
         property.city.toLowerCase().includes(options.location.toLowerCase()))) {
      return false;
    }
    
    if (options.city && property.city.toLowerCase() !== options.city.toLowerCase()) {
      return false;
    }
    
    const bestPrice = getBestPriceSource(property).price;
    if (options.priceMin && bestPrice < options.priceMin) return false;
    if (options.priceMax && bestPrice > options.priceMax) return false;
    
    if (options.beds && property.beds < options.beds) return false;
    
    if (options.baths && property.baths < options.baths) return false;
    
    if (options.furnished === true && !property.furnished) return false;
    
    if (options.propertyType && property.propertyType !== options.propertyType) return false;
    
    if (options.dataSources && options.dataSources.length > 0) {
      let isInSelectedSource = false;
      for (const source of options.dataSources) {
        if (property.price[source]) {
          isInSelectedSource = true;
          break;
        }
      }
      if (!isInSelectedSource) return false;
    }
    
    if (options.priceHistoryAvailable && !property.priceHistory) {
      return false;
    }
    
    if (options.keyword && !(
      property.title.toLowerCase().includes(options.keyword.toLowerCase()) ||
      property.description.toLowerCase().includes(options.keyword.toLowerCase()) ||
      property.location.toLowerCase().includes(options.keyword.toLowerCase()) ||
      property.city.toLowerCase().includes(options.keyword.toLowerCase()) ||
      property.amenities.some(amenity => amenity.toLowerCase().includes(options.keyword.toLowerCase()))
    )) {
      return false;
    }
    
    return true;
  });
};

export const getPriceTrend = (property: Property): {trend: 'up' | 'down' | 'stable', percentage: number} => {
  if (!property.priceHistory || property.priceHistory.length < 2) {
    return { trend: 'stable', percentage: 0 };
  }
  
  const firstPrice = property.priceHistory[0].price;
  const lastPrice = property.priceHistory[property.priceHistory.length - 1].price;
  const difference = lastPrice - firstPrice;
  const percentage = Math.round((difference / firstPrice) * 100 * 10) / 10;
  
  let trend: 'up' | 'down' | 'stable' = 'stable';
  if (percentage > 1) {
    trend = 'up';
  } else if (percentage < -1) {
    trend = 'down';
  }
  
  return { trend, percentage: Math.abs(percentage) };
};

export const getLowestHistoricalPrice = (property: Property): {price: number, date: string} | null => {
  if (!property.priceHistory || property.priceHistory.length === 0) {
    return null;
  }
  
  let lowestPrice = property.priceHistory[0];
  
  property.priceHistory.forEach(entry => {
    if (entry.price < lowestPrice.price) {
      lowestPrice = entry;
    }
  });
  
  return { price: lowestPrice.price, date: lowestPrice.date };
};
