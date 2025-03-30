
import { Property } from './properties';

export const additionalProperties: Property[] = [
  {
    id: 101,
    title: "Modern 2BHK Apartment with City View",
    description: "Stylish 2BHK apartment located in a premium tower with breathtaking city views. Features modern amenities and is close to all major conveniences.",
    location: "Bandra West",
    city: "Mumbai",
    state: "Maharashtra",
    price: {
      'Housing': 42000,
      '99acres': 43500,
      'MagicBricks': 42500,
      'NoBroker': 41800
    },
    bestSource: "NoBroker",
    beds: 2,
    baths: 2,
    sqft: 1100,
    amenities: ["Gym", "Swimming Pool", "24x7 Security", "Power Backup", "Lift", "Visitor Parking"],
    furnished: true,
    propertyType: "Apartment",
    availableFrom: "2023-07-10",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format&fit=crop"
    ],
    condition: "Excellent",
    latitude: 19.0596,
    longitude: 72.8295
  },
  {
    id: 102,
    title: "Spacious 3BHK Villa with Garden",
    description: "Beautiful 3BHK villa with a private garden, modern interiors, and premium amenities in a gated community.",
    location: "Jubilee Hills",
    city: "Hyderabad",
    state: "Telangana",
    price: {
      'Housing': 52000,
      '99acres': 53000,
      'MagicBricks': 51500,
      'Makaan': 52500
    },
    bestSource: "MagicBricks",
    beds: 3,
    baths: 3,
    sqft: 2200,
    amenities: ["Garden", "Modular Kitchen", "AC", "Gated Security", "Covered Parking", "Children's Play Area"],
    furnished: true,
    propertyType: "Villa",
    availableFrom: "2023-08-01",
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=800&auto=format&fit=crop"
    ],
    condition: "Excellent",
    latitude: 17.4143,
    longitude: 78.4096
  },
  {
    id: 103,
    title: "Budget 1BHK for Students",
    description: "Affordable 1BHK apartment ideal for students. Located close to major educational institutions and offers basic amenities.",
    location: "Koramangala",
    city: "Bangalore",
    state: "Karnataka",
    price: {
      'Housing': 15000,
      'OLX': 14500,
      'NoBroker': 14800,
      '99acres': 15200
    },
    bestSource: "OLX",
    beds: 1,
    baths: 1,
    sqft: 650,
    amenities: ["Water Supply", "Security", "Internet Ready", "Bike Parking"],
    furnished: false,
    propertyType: "Apartment",
    availableFrom: "2023-06-15",
    images: [
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1626178793926-22b28830aa30?w=800&auto=format&fit=crop"
    ],
    condition: "Good",
    latitude: 12.9346,
    longitude: 77.6205
  },
  {
    id: 104,
    title: "Luxury 4BHK Penthouse with Terrace",
    description: "Exclusive 4BHK penthouse featuring a private terrace, premium interiors, and panoramic views of the city skyline.",
    location: "Worli",
    city: "Mumbai",
    state: "Maharashtra",
    price: {
      'Housing': 120000,
      'MagicBricks': 125000,
      '99acres': 123000,
      'Makaan': 122000
    },
    bestSource: "Housing",
    beds: 4,
    baths: 4,
    sqft: 3200,
    amenities: ["Private Terrace", "Swimming Pool", "Gym", "Spa", "Home Theater", "Wine Cellar", "Private Elevator"],
    furnished: true,
    propertyType: "Apartment",
    availableFrom: "2023-09-01",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=800&auto=format&fit=crop"
    ],
    condition: "Excellent",
    latitude: 19.0178,
    longitude: 72.8478
  },
  {
    id: 105,
    title: "Cozy Studio Apartment",
    description: "Compact and well-designed studio apartment perfect for working professionals. Features smart storage solutions and modern amenities.",
    location: "Indiranagar",
    city: "Bangalore",
    state: "Karnataka",
    price: {
      'Housing': 18000,
      'NoBroker': 17500,
      'OLX': 18200,
      'Makaan': 18500
    },
    bestSource: "NoBroker",
    beds: 1,
    baths: 1,
    sqft: 450,
    amenities: ["Lift", "Security", "Power Backup", "Gym", "Cafeteria"],
    furnished: true,
    propertyType: "Apartment",
    availableFrom: "2023-07-05",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&auto=format&fit=crop"
    ],
    condition: "Good",
    latitude: 12.9784,
    longitude: 77.6408
  }
];
