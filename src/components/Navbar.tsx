
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu, X, User, LogOut } from 'lucide-react';

interface NavbarProps {
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isAuthenticated, setIsAuthenticated }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userProfile, setUserProfile] = useState<any>(null);
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Get user profile from localStorage
    const storedProfile = localStorage.getItem('userProfile');
    if (storedProfile) {
      setUserProfile(JSON.parse(storedProfile));
    }
  }, [isAuthenticated]);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const isActive = (path: string) => location.pathname === path;
  
  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem('userProfile');
    // Update authentication state
    setIsAuthenticated(false);
    setUserProfile(null);
    // Dispatch a logout event
    window.dispatchEvent(new Event('logout'));
    // Navigate to home
    navigate('/');
  };
  
  const handleRoadmapClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isAuthenticated) {
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
                {isAuthenticated ? (
                  <div className="flex items-center space-x-2">
                    <Link to="/dashboard" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/dashboard') ? 'text-pathfinder-primary' : 'text-gray-600 hover:text-pathfinder-primary'}`}>
                      Dashboard
                    </Link>
                    <div className="relative group">
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        <User size={16} />
                        <span>{userProfile?.name || 'Profile'}</span>
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
                            onClick={handleLogout} 
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            <div className="flex items-center">
                              <LogOut size={14} className="mr-2" />
                              <span>Sign Out</span>
                            </div>
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
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/') ? 'text-pathfinder-primary' : 'text-gray-600 hover:text-pathfinder-primary'}`}
            >
              Home
            </Link>
            <Link 
              to="/use-case" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/use-case') ? 'text-pathfinder-primary' : 'text-gray-600 hover:text-pathfinder-primary'}`}
            >
              Use Case
            </Link>
            <Link 
              to="/subscription" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/subscription') ? 'text-pathfinder-primary' : 'text-gray-600 hover:text-pathfinder-primary'}`}
            >
              Plans
            </Link>
            <a 
              href="#" 
              onClick={(e) => {
                handleRoadmapClick(e);
              }}
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/roadmap') ? 'text-pathfinder-primary' : 'text-gray-600 hover:text-pathfinder-primary'}`}
            >
              Personalized Roadmap
            </a>
            <div className="mt-4 flex flex-col space-y-2 px-3">
              {isAuthenticated ? (
                <>
                  <Link to="/dashboard" className="w-full">
                    <Button variant="outline" className="w-full">Dashboard</Button>
                  </Link>
                  <Link to="/profile" className="w-full">
                    <Button variant="default" className="w-full">Profile</Button>
                  </Link>
                  <Button 
                    variant="ghost" 
                    className="w-full flex items-center justify-center" 
                    onClick={handleLogout}
                  >
                    <LogOut size={16} className="mr-2" />
                    <span>Sign Out</span>
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login" className="w-full">
                    <Button variant="outline" className="w-full">Login</Button>
                  </Link>
                  <Link to="/signup" className="w-full">
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
