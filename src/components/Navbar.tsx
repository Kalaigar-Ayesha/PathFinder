
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu, X, User } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if user is logged in - in a real app this would check for auth token
    // For demo purposes, we'll consider the user logged in if they have completed profile setup
    const userProfile = localStorage.getItem('userProfile');
    setIsLoggedIn(!!userProfile || location.pathname === '/dashboard');
  }, [location.pathname]);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const isActive = (path: string) => location.pathname === path;
  
  const handleRoadmapClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isLoggedIn) {
      navigate('/roadmap');
    } else {
      navigate('/login', { state: { from: '/roadmap' } });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-slate-200 shadow-sm">
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
              <a 
                href="#" 
                onClick={handleRoadmapClick}
                className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/roadmap') ? 'text-pathfinder-primary' : 'text-gray-600 hover:text-pathfinder-primary'}`}
              >
                Personalized Roadmap
              </a>
              
              <div className="ml-4 flex items-center space-x-2">
                {isLoggedIn ? (
                  <div className="flex items-center space-x-2">
                    <Link to="/dashboard" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/dashboard') ? 'text-pathfinder-primary' : 'text-gray-600 hover:text-pathfinder-primary'}`}>
                      Dashboard
                    </Link>
                    <div className="relative group">
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        <User size={16} />
                        <span>Profile</span>
                      </Button>
                      <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 hidden group-hover:block">
                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                          <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            View Profile
                          </Link>
                          <Link to="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Dashboard
                          </Link>
                          <button 
                            onClick={() => {
                              // In a real app, this would log out the user
                              localStorage.removeItem('userProfile');
                              setIsLoggedIn(false);
                              navigate('/');
                            }} 
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Sign Out
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <Link to="/login">
                      <Button variant="outline" size="sm">Login</Button>
                    </Link>
                    <Link to="/signup">
                      <Button variant="default" size="sm">Sign Up</Button>
                    </Link>
                  </>
                )}
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
            <a 
              href="#" 
              onClick={(e) => {
                handleRoadmapClick(e);
                toggleMenu();
              }}
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/roadmap') ? 'text-pathfinder-primary' : 'text-gray-600 hover:text-pathfinder-primary'}`}
            >
              Personalized Roadmap
            </a>
            <div className="mt-4 flex flex-col space-y-2 px-3">
              {isLoggedIn ? (
                <>
                  <Link to="/dashboard" onClick={toggleMenu} className="w-full">
                    <Button variant="outline" className="w-full">Dashboard</Button>
                  </Link>
                  <Link to="/profile" onClick={toggleMenu} className="w-full">
                    <Button variant="default" className="w-full">Profile</Button>
                  </Link>
                  <Button 
                    variant="ghost" 
                    className="w-full" 
                    onClick={() => {
                      localStorage.removeItem('userProfile');
                      setIsLoggedIn(false);
                      toggleMenu();
                      navigate('/');
                    }}
                  >
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login" onClick={toggleMenu}>
                    <Button variant="outline" className="w-full">Login</Button>
                  </Link>
                  <Link to="/signup" onClick={toggleMenu}>
                    <Button variant="default" className="w-full">Sign Up</Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
