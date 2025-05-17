
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold font-heading gradient-text">Pathfinder</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <Link to="/" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/') ? 'text-pathfinder-primary' : 'text-gray-600 hover:text-pathfinder-primary'}`}>
                Home
              </Link>
              <Link to="/use-case" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/use-case') ? 'text-pathfinder-primary' : 'text-gray-600 hover:text-pathfinder-primary'}`}>
                Use Case
              </Link>
              <Link to="/subscription" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/subscription') ? 'text-pathfinder-primary' : 'text-gray-600 hover:text-pathfinder-primary'}`}>
                Plans
              </Link>
              
              <div className="ml-4 flex items-center space-x-2">
                <Link to="/login">
                  <Button variant="outline" size="sm">Login</Button>
                </Link>
                <Link to="/signup">
                  <Button variant="default" size="sm">Sign Up</Button>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-pathfinder-primary focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-b border-slate-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              onClick={toggleMenu}
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/') ? 'text-pathfinder-primary' : 'text-gray-600 hover:text-pathfinder-primary'}`}
            >
              Home
            </Link>
            <Link 
              to="/use-case" 
              onClick={toggleMenu}
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/use-case') ? 'text-pathfinder-primary' : 'text-gray-600 hover:text-pathfinder-primary'}`}
            >
              Use Case
            </Link>
            <Link 
              to="/subscription" 
              onClick={toggleMenu}
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/subscription') ? 'text-pathfinder-primary' : 'text-gray-600 hover:text-pathfinder-primary'}`}
            >
              Plans
            </Link>
            <div className="mt-4 flex flex-col space-y-2 px-3">
              <Link to="/login" onClick={toggleMenu}>
                <Button variant="outline" className="w-full">Login</Button>
              </Link>
              <Link to="/signup" onClick={toggleMenu}>
                <Button variant="default" className="w-full">Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
