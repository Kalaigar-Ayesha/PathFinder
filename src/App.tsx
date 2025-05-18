
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';

import Navbar from "./components/Navbar";
import Chatbot from "./components/Chatbot";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProfileSetup from "./pages/ProfileSetup";
import Dashboard from "./pages/Dashboard";
import UseCase from "./pages/UseCase";
import Subscription from "./pages/Subscription";
import NotFound from "./pages/NotFound";
import RoadmapGenerator from "./pages/RoadmapGenerator";
import ProfilePage from "./pages/ProfilePage";

const queryClient = new QueryClient();

// Auth protected route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = !!localStorage.getItem('userProfile');
  const location = useLocation();
  
  if (!isAuthenticated) {
    // Save the location the user was trying to access
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }
  return <>{children}</>;
};

const App = () => {
  // Track authentication state globally
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  
  // Check for authentication on load and storage changes
  useEffect(() => {
    // Check if user is logged in
    const checkAuth = () => {
      const userProfile = localStorage.getItem('userProfile');
      setIsAuthenticated(!!userProfile);
    };

    // Check on component mount
    checkAuth();

    // Add listener for localStorage changes and custom events
    window.addEventListener('storage', checkAuth);
    window.addEventListener('login', checkAuth);
    window.addEventListener('logout', checkAuth);
    
    return () => {
      window.removeEventListener('storage', checkAuth);
      window.removeEventListener('login', checkAuth);
      window.removeEventListener('logout', checkAuth);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
          <main className="pt-16"> {/* Added padding top to account for navbar */}
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route 
                path="/profile-setup" 
                element={
                  <ProtectedRoute>
                    <ProfileSetup />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/dashboard" 
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/profile" 
                element={
                  <ProtectedRoute>
                    <ProfilePage />
                  </ProtectedRoute>
                } 
              />
              <Route path="/use-case" element={<UseCase />} />
              <Route path="/subscription" element={<Subscription />} />
              <Route 
                path="/roadmap" 
                element={
                  <ProtectedRoute>
                    <RoadmapGenerator />
                  </ProtectedRoute>
                } 
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Chatbot />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
