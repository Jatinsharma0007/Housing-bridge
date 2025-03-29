
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bell, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className="border-b border-gray-200 bg-white py-4 shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <h1 className="text-xl font-bold text-housing-navy">Housing Bridge</h1>
          </Link>
          <nav className="ml-8 hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="text-gray-600 hover:text-housing-navy">Home</Link>
              </li>
              <li>
                <Link to="/properties" className="text-gray-600 hover:text-housing-navy">Properties</Link>
              </li>
              <li>
                <Link to="/compare" className="text-gray-600 hover:text-housing-navy">Compare</Link>
              </li>
              <li>
                <Link to="/for-buyers" className="text-gray-600 hover:text-housing-navy">For Buyers</Link>
              </li>
              <li>
                <Link to="/for-sellers" className="text-gray-600 hover:text-housing-navy">For Sellers</Link>
              </li>
              <li>
                <Link to="/chat" className="text-gray-600 hover:text-housing-navy">Chat</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <>
              <button className="relative">
                <Bell className="h-5 w-5 text-gray-600" />
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                  1
                </span>
              </button>
              <Link to="/profile" className="h-8 w-8 overflow-hidden rounded-full bg-housing-navy text-white">
                <div className="flex h-full w-full items-center justify-center">U</div>
              </Link>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="outline" className="border-housing-navy text-housing-navy hover:bg-housing-navy hover:text-white">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-housing-orange text-white hover:bg-orange-500">
                  Sign Up
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
