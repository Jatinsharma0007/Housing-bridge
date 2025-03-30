
const PlatformLogos = () => {
  const platforms = [
    { name: 'MagicBricks', logo: 'https://play-lh.googleusercontent.com/O_gRuQ8fzI3-VGMA7wiXXWX8BfCiJ8Xd9xX5107LL-LrA_9jEO6_TNsdIBm6NfAY6Q8=w240-h480-rw' },
    { name: '99acres', logo: 'https://is1-3.housingcdn.com/4f2250e8/e96cb0e2270547d61a7920651054eb83/v0/logo_housing_com-3.png' },
    { name: 'Housing', logo: 'https://play-lh.googleusercontent.com/yCgUMdHJqkjn_Z5dPd3GvECSP8mT8nCY-B7KbhDEHY8wGrJis66a1NdmFnGPcr29LbCi=w240-h480-rw' },
    { name: 'Makaan', logo: 'https://play-lh.googleusercontent.com/rrwGcdFQsTpm4iUfZwULpzVQdukUD3hBk_DdXlYK4tpgddQCzdYxP8bBpXRBotG0OYE=w240-h480-rw' },
    { name: 'NoBroker', logo: 'https://play-lh.googleusercontent.com/DJs9itDSC0vz7-eauXxuMvTZ0xAtjYT0QrBRrKBjX0BotXTAqnOQ6BjKNOHIIGkl1w=w240-h480-rw' },
    { name: 'OLX', logo: 'https://play-lh.googleusercontent.com/H_E_ZI9U-HYh1c6Y_4_E-Mnr_5DRzs0Y3JO2UmZVDoqjOPRvBGUe-0t9HVQnTMCxig=w240-h480-rw' }
  ];

  return (
    <div className="my-10">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
        {platforms.map((platform) => (
          <div 
            key={platform.name} 
            className="flex items-center justify-center rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
          >
            <img 
              src={platform.logo} 
              alt={`${platform.name} logo`} 
              className="h-10 w-auto object-contain" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlatformLogos;
