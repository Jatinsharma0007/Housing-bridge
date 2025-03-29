
const PlatformLogos = () => {
  const platforms = [
    { name: 'MagicBricks', logo: '/lovable-uploads/ef5ef61f-2d88-42d2-92c1-59c6dfb9070f.png' },
    { name: '99acres', logo: '/lovable-uploads/9d674b63-eb68-4082-9d65-bf824bc039b1.png' },
    { name: 'Housing', logo: '/lovable-uploads/2cf5f289-0de3-44de-9b01-a7a4f51b9b5d.png' },
    { name: 'Makaan', logo: '/lovable-uploads/3df2b7f8-bc54-40c5-ab79-97ef7adeed4d.png' },
    { name: 'NoBroker', logo: '/lovable-uploads/cf9f6227-0d8d-4570-9acc-e1499c92a3b0.png' },
    { name: 'OLX', logo: '/lovable-uploads/a9d1c74b-6292-41a0-b977-c3d0c64484d2.png' }
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
