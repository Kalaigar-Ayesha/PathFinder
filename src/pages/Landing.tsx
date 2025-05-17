
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pathfinder-primary via-[#7d68b3] to-pathfinder-secondary clip-path-slant pt-24 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
                Navigate Your Tech Career with AI-Powered Learning Paths
              </h1>
              <p className="text-lg mb-8 text-gray-100 max-w-lg">
                Stop wasting time on outdated resources. Pathfinder creates personalized tech learning roadmaps based on your goals, skills, and the latest industry demands.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/signup">
                  <Button size="lg" className="bg-white text-pathfinder-primary hover:bg-gray-100">
                    Get Started for Free
                  </Button>
                </Link>
                {/* <Link to="/login">
                  <Button size="lg" variant="outline" className="border-white text-pathfinder-primary hover:bg-white/10">
                    Login
                  </Button>
                </Link> */}
              </div>
            </div>
            <div className="hidden md:block">
              <div className="glass-card p-6 rounded-xl animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                  alt="Learning Path Visualization" 
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-6 gradient-text">The Problem with Learning Tech Today</h2>
            <p className="text-lg text-gray-600">
              Tech education is broken. Here's why so many aspiring developers and tech professionals struggle:
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Outdated Learning Paths</h3>
              <p className="text-gray-600">
                Existing resources often teach outdated skills that aren't aligned with what employers actually need in 2025.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Lack of Personalization</h3>
              <p className="text-gray-600">
                Generic "one-size-fits-all" learning plans ignore your existing skills, learning style, and career goals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Wasted Time & Energy</h3>
              <p className="text-gray-600">
                Without expert guidance, you waste months on unnecessary tutorials and courses that don't move you toward your goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-6 gradient-text">How Pathfinder Solves This</h2>
            <p className="text-lg text-gray-600">
              Our AI-powered platform creates personalized learning experiences that get results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="glass-card p-6 rounded-xl shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                alt="AI-Powered Platform" 
                className="rounded-lg w-full h-auto"
              />
            </div>
            
            <div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-pathfinder-primary mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Personalized Learning Roadmaps</h3>
                    <p className="text-gray-600">
                      Our AI analyzes your skills, goals, and learning style to create a customized learning path that focuses only on what you need.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-pathfinder-primary mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Smart AI Chatbot Assistant</h3>
                    <p className="text-gray-600">
                      Get 24/7 guidance, answer questions, and receive recommendations from our intelligent AI assistant that knows your learning journey.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-pathfinder-primary mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Industry-Relevant Skills</h3>
                    <p className="text-gray-600">
                      Stay ahead with learning paths that adapt to industry trends and focus on skills employers are actually hiring for right now.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-pathfinder-primary mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Progress Tracking</h3>
                    <p className="text-gray-600">
                      Visualize your learning progress, identify skill gaps, and celebrate milestones on your journey.
                    </p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-8">
                <Link to="/signup">
                  <Button size="lg">Start Your Personalized Path</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-pathfinder-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Perfect Tech Learning Path?</h2>
          <p className="text-lg mb-8 text-gray-100 max-w-2xl mx-auto">
            Join thousands of developers who have accelerated their tech careers with Pathfinder's AI-powered learning roadmaps.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/signup">
              <Button size="lg" className="bg-white text-pathfinder-primary hover:bg-gray-100">
                Get Started for Free
              </Button>
            </Link>
         <Link to="/use-case">
  <Button
    size="lg"
    variant="outline"
    className="bg-white text-pathfinder-primary hover:bg-white hover:text-purple-700 transition-colors duration-300"
  >
    See How It Works
  </Button>
</Link>


          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
