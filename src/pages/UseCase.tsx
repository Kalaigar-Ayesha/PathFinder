
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const UseCase = () => {
  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6 gradient-text">How Pathfinder Works</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Follow Alex's journey to becoming a full-stack developer with Pathfinder's AI-powered guidance.
          </p>
        </div>
        
        {/* Journey Timeline */}
        <div className="max-w-4xl mx-auto">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row mb-16">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <div className="bg-pathfinder-light text-pathfinder-primary rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                1
              </div>
              <h2 className="text-2xl font-semibold mt-4 mb-2">Creating an Account</h2>
              <p className="text-gray-600">
                Alex signs up and creates a Pathfinder account in less than a minute.
              </p>
            </div>
            <div className="md:w-2/3 md:pl-8">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gray-800 text-white p-2 text-xs">signup.pathfinder.ai</div>
                  <div className="p-6">
                    <div className="bg-white rounded-lg shadow-sm border p-4">
                      <h3 className="font-medium text-lg mb-2">Create Your Account</h3>
                      <div className="space-y-3">
                        <div>
                          <label className="block text-sm font-medium mb-1">Full Name</label>
                          <div className="h-10 bg-gray-100 rounded-md px-3 flex items-center">Alex Johnson</div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">Email</label>
                          <div className="h-10 bg-gray-100 rounded-md px-3 flex items-center">alex.johnson@example.com</div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">Password</label>
                          <div className="h-10 bg-gray-100 rounded-md px-3 flex items-center">••••••••••</div>
                        </div>
                        <div className="pt-2">
                          <div className="bg-pathfinder-primary text-white py-2 rounded-md text-center">Sign Up</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="flex flex-col md:flex-row mb-16">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <div className="bg-pathfinder-light text-pathfinder-primary rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                2
              </div>
              <h2 className="text-2xl font-semibold mt-4 mb-2">Profile Setup</h2>
              <p className="text-gray-600">
                Alex shares his current skills, learning preferences, and career goals.
              </p>
            </div>
            <div className="md:w-2/3 md:pl-8">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gray-800 text-white p-2 text-xs">pathfinder.ai/profile-setup</div>
                  <div className="p-6">
                    <div className="bg-white rounded-lg shadow-sm border p-4">
                      <h3 className="font-medium text-lg mb-2">Tell us about your skills</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">Preferred Language</label>
                          <div className="h-10 bg-gray-100 rounded-md px-3 flex items-center justify-between">
                            JavaScript
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">Resume Link</label>
                          <div className="h-10 bg-gray-100 rounded-md px-3 flex items-center">https://drive.google.com/file/d/1...</div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Your Skills</label>
                          <div className="flex flex-wrap gap-2">
                            <div className="bg-pathfinder-primary text-white text-sm py-1 px-3 rounded-full">HTML</div>
                            <div className="bg-pathfinder-primary text-white text-sm py-1 px-3 rounded-full">CSS</div>
                            <div className="bg-pathfinder-primary text-white text-sm py-1 px-3 rounded-full">JavaScript</div>
                            <div className="border border-gray-300 text-sm py-1 px-3 rounded-full">React</div>
                            <div className="border border-gray-300 text-sm py-1 px-3 rounded-full">Node.js</div>
                            <div className="border border-gray-300 text-sm py-1 px-3 rounded-full">SQL</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="flex flex-col md:flex-row mb-16">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <div className="bg-pathfinder-light text-pathfinder-primary rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                3
              </div>
              <h2 className="text-2xl font-semibold mt-4 mb-2">AI Analysis</h2>
              <p className="text-gray-600">
                Our AI analyzes Alex's skills and goals to create a personalized learning roadmap.
              </p>
            </div>
            <div className="md:w-2/3 md:pl-8">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gray-800 text-white p-2 text-xs">pathfinder.ai/analysis</div>
                  <div className="p-6">
                    <div className="bg-white rounded-lg shadow-sm border p-4">
                      <div className="flex items-center mb-4">
                        <div className="animate-pulse flex space-x-4 w-full">
                          <div className="flex-1 space-y-4 py-1">
                            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                            <div className="space-y-2">
                              <div className="h-4 bg-gray-200 rounded"></div>
                              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="border rounded-lg p-3">
                          <div className="text-sm font-medium">Skills Analysis</div>
                          <div className="mt-2 h-4 bg-green-500 rounded-full w-1/2"></div>
                        </div>
                        <div className="border rounded-lg p-3">
                          <div className="text-sm font-medium">Career Goals Alignment</div>
                          <div className="mt-2 h-4 bg-blue-500 rounded-full w-3/4"></div>
                        </div>
                        <div className="border rounded-lg p-3">
                          <div className="text-sm font-medium">Learning Path Generation</div>
                          <div className="mt-2 h-4 bg-purple-500 rounded-full w-4/5"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Step 4 */}
          <div className="flex flex-col md:flex-row mb-16">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <div className="bg-pathfinder-light text-pathfinder-primary rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                4
              </div>
              <h2 className="text-2xl font-semibold mt-4 mb-2">Personalized Dashboard</h2>
              <p className="text-gray-600">
                Alex receives a custom roadmap showing exactly what to learn and in what order.
              </p>
            </div>
            <div className="md:w-2/3 md:pl-8">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gray-800 text-white p-2 text-xs">pathfinder.ai/dashboard</div>
                  <div className="p-6">
                    <div className="bg-white rounded-lg shadow-sm border p-4">
                      <h3 className="font-medium text-lg mb-4">Your Full-Stack Developer Roadmap</h3>
                      <div className="space-y-3">
                        <div className="border rounded-lg p-3 bg-green-50 border-green-200">
                          <div className="flex items-center">
                            <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">✓</div>
                            <div>
                              <div className="font-medium">JavaScript Fundamentals</div>
                              <div className="text-xs text-gray-500">Completed</div>
                            </div>
                          </div>
                        </div>
                        <div className="border rounded-lg p-3">
                          <div className="flex items-center">
                            <div className="h-6 w-6 rounded-full border border-gray-300 flex items-center justify-center mr-3">2</div>
                            <div>
                              <div className="font-medium">React Basics</div>
                              <div className="text-xs text-gray-500">In Progress - 60%</div>
                            </div>
                          </div>
                          <div className="mt-2 bg-gray-200 rounded-full h-1.5">
                            <div className="bg-pathfinder-primary h-1.5 rounded-full" style={{ width: '60%' }}></div>
                          </div>
                        </div>
                        <div className="border rounded-lg p-3">
                          <div className="flex items-center">
                            <div className="h-6 w-6 rounded-full border border-gray-300 flex items-center justify-center mr-3">3</div>
                            <div>
                              <div className="font-medium">Node.js & Express</div>
                              <div className="text-xs text-gray-500">Upcoming</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Step 5 */}
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <div className="bg-pathfinder-light text-pathfinder-primary rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                5
              </div>
              <h2 className="text-2xl font-semibold mt-4 mb-2">AI Assistant Support</h2>
              <p className="text-gray-600">
                Alex gets stuck and asks the Pathfinder AI chatbot for help with a React concept.
              </p>
            </div>
            <div className="md:w-2/3 md:pl-8">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gray-800 text-white p-2 text-xs">pathfinder.ai/chat</div>
                  <div className="p-6">
                    <div className="bg-white rounded-lg shadow-sm border p-4">
                      <div className="mb-4 py-1 px-3 bg-gray-100 rounded-full inline-flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        <span className="text-xs font-medium">Pathfinder Assistant</span>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex">
                          <div className="bg-pathfinder-light rounded-lg p-3 max-w-[80%]">
                            <p className="text-sm">Hi Alex! How can I help you with your learning today?</p>
                          </div>
                        </div>
                        
                        <div className="flex justify-end">
                          <div className="bg-pathfinder-primary text-white rounded-lg p-3 max-w-[80%]">
                            <p className="text-sm">I'm confused about React hooks. Can you explain useState?</p>
                          </div>
                        </div>
                        
                        <div className="flex">
                          <div className="bg-pathfinder-light rounded-lg p-3 max-w-[80%]">
                            <p className="text-sm">
                              React's useState hook lets you add state to functional components. It returns a state value and a function to update it.
                              <br/><br/>
                              Here's a simple example:
                              <br/><br/>
                              <code className="bg-gray-100 px-1 py-0.5 rounded">
                                const [count, setCount] = useState(0);
                              </code>
                              <br/><br/>
                              Would you like me to show you a complete example with explanation?
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 flex">
                        <input 
                          type="text" 
                          placeholder="Type your question here..." 
                          className="flex-1 border rounded-l-md py-2 px-3"
                        />
                        <button className="bg-pathfinder-primary text-white py-2 px-4 rounded-r-md">Send</button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        {/* Final CTA */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Join thousands of developers like Alex who are accelerating their tech careers with personalized learning paths.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/signup">
              <Button size="lg">
                Create Your Path
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/subscription">
              <Button size="lg" variant="outline">View Pricing</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCase;
