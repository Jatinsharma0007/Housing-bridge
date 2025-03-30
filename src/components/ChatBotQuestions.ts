
export interface ChatQuestion {
  id: string;
  question: string;
  answer: string;
}

export const chatQuestions: ChatQuestion[] = [
  {
    id: 'best-areas',
    question: 'What are the best areas to rent in Bangalore?',
    answer: 'The most popular areas to rent in Bangalore include HSR Layout, Indiranagar, Koramangala, Whitefield, Electronic City, and Marathahalli. Each area offers different advantages in terms of proximity to tech parks, lifestyle amenities, and rental ranges.'
  },
  {
    id: 'rental-agreement',
    question: 'What documents do I need for a rental agreement?',
    answer: 'Typically, you\'ll need ID proof (Aadhaar, PAN, Passport), address proof, income proof (salary slips or ITR), and sometimes references from previous landlords. It\'s also common to provide passport-sized photographs. Most landlords require a security deposit equivalent to 2-10 months of rent depending on the city.'
  },
  {
    id: 'security-deposit',
    question: 'How much security deposit is normal?',
    answer: 'Security deposit norms vary by city. In Bangalore and Mumbai, it\'s typically 5-10 months of rent, while in Delhi NCR it\'s usually 2-3 months. Chennai, Hyderabad, and Pune generally require 3-6 months of deposit. Our platform shows the typical deposit amounts for each location.'
  },
  {
    id: 'negotiate-rent',
    question: 'Can I negotiate the rent?',
    answer: 'Yes, rent is often negotiable, especially for longer lease terms. Based on our data, tenants successfully negotiate a 5-10% reduction in advertised rents. Factors that strengthen your position include longer lease commitments, upfront payments, and renting during lean seasons (monsoons in many cities).'
  },
  {
    id: 'best-time',
    question: 'What\'s the best time to look for rentals?',
    answer: 'The best time to find rentals is typically between January-February and July-August when many leases expire. You\'ll find more options during these periods. Rental rates are often more negotiable during monsoon season (June-September) in most Indian cities when demand is lower.'
  },
  {
    id: 'price-trend',
    question: 'How are rental prices trending?',
    answer: 'Based on our data analysis, rental prices in major Indian cities have increased 8-15% over the past year, with metropolitan areas seeing the highest jumps. Bangalore, Mumbai, and Gurgaon have experienced 12-15% increases, while tier-2 cities show more moderate 5-8% rises. Our price trend analysis tool can show you specific trends for your areas of interest.'
  },
  {
    id: 'listing-property',
    question: 'How can I list my property for rent?',
    answer: 'To list your property, visit our "For Sellers" page and complete the property listing form. You\'ll need to provide details about your property, upload photos, and specify your rental terms. Our platform automatically distributes your listing across multiple rental websites to maximize visibility.'
  },
  {
    id: 'tenant-verification',
    question: 'How does tenant verification work?',
    answer: 'Our tenant verification process includes identity verification using government IDs, employment verification through employer contacts or salary slips, credit history checks (with tenant\'s consent), and previous rental history verification where available. This comprehensive approach helps landlords make informed decisions.'
  },
  {
    id: 'rental-yield',
    question: 'What is the average rental yield in India?',
    answer: 'Residential rental yields in India typically range from 2-4%. Mumbai and Bangalore tend to have yields around 3-3.5%, while Delhi NCR is closer to 2-3%. Pune and Hyderabad often show slightly higher yields of 3.5-4%. Commercial properties generally offer higher yields of 4-8% depending on location and property type.'
  },
  {
    id: 'broker-fees',
    question: 'What are the typical broker fees?',
    answer: 'Broker fees typically range from 15 days to one month\'s rent. In metros like Mumbai and Delhi, it\'s commonly one month\'s rent, while in some other cities it may be half a month\'s rent. Our platform helps you identify properties that don\'t require broker fees, potentially saving you significant costs.'
  },
  {
    id: 'furnished-unfurnished',
    question: 'Should I rent furnished or unfurnished?',
    answer: 'This depends on your specific needs. Furnished properties are typically 15-30% more expensive but save you the upfront cost of buying furniture. They\'re ideal for short-term stays (1-2 years) or relocations. Unfurnished properties offer more customization and are often more economical for longer stays. Semi-furnished options provide essential fixtures and appliances without full furnishings.'
  },
  {
    id: 'rental-agreement-termination',
    question: 'How can I terminate a rental agreement early?',
    answer: 'Most rental agreements include an early termination clause requiring 1-3 months\' notice. You may forfeit a portion of your security deposit. Check your specific agreement for notice periods and penalties. Some agreements have a "lock-in period" (typically 6-11 months) during which early termination incurs higher penalties.'
  },
  {
    id: 'maintenance-responsibility',
    question: 'Who is responsible for property maintenance?',
    answer: 'Typically, major structural repairs are the landlord\'s responsibility, while day-to-day maintenance falls to the tenant. Appliance maintenance depends on the rental agreement terms. For properties in housing societies, maintenance charges may be separately billed or included in the rent. Always clarify these responsibilities in your rental agreement.'
  },
  {
    id: 'platform-differences',
    question: 'What\'s the difference between all the rental platforms?',
    answer: 'Each platform has different strengths. MagicBricks and 99acres have the largest inventory. NoBroker specializes in broker-free listings. Housing.com offers high-quality photographs and virtual tours. OLX has more individual listings. Makaan.com provides detailed neighborhood information. Our platform aggregates listings from all these sources, letting you compare prices and features in one place.'
  }
];
