
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-housing-navy py-8 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold">Housing Bridge</h3>
            <p className="text-sm text-gray-300">
              Find your perfect rental home with our comprehensive platform featuring properties from multiple sources.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/properties" className="text-gray-300 hover:text-white">Properties</Link></li>
              <li><Link to="/compare" className="text-gray-300 hover:text-white">Compare</Link></li>
              <li><Link to="/for-buyers" className="text-gray-300 hover:text-white">For Buyers</Link></li>
              <li><Link to="/for-sellers" className="text-gray-300 hover:text-white">For Sellers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Discover</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/areas" className="text-gray-300 hover:text-white">Popular Areas</Link></li>
              <li><Link to="/featured" className="text-gray-300 hover:text-white">Featured Properties</Link></li>
              <li><Link to="/help" className="text-gray-300 hover:text-white">Help & Support</Link></li>
              <li><Link to="/applications" className="text-gray-300 hover:text-white">Track Applications</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: contact@housingbridge.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Real Estate Avenue, Property City, 12345</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Housing Bridge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
