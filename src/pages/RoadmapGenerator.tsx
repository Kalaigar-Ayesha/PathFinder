
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle, MessageCircle, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

type Message = {
  id: string;
  type: 'user' | 'system';
  content: string;
  timestamp: Date;
};

const RoadmapGenerator = () => {
  const { toast } = useToast();
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'system',
      content: 'Welcome to the Roadmap Generator! Tell me about your experience and learning goals, and I\'ll create a personalized learning roadmap for you.',
      timestamp: new Date(),
    },
  ]);
  const [isGenerating, setIsGenerating] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!prompt.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: prompt,
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setPrompt('');
    setIsGenerating(true);
    
    // Simulate API delay
    setTimeout(() => {
      generateRoadmap(prompt);
    }, 1500);
  };
  
  const generateRoadmap = (userPrompt: string) => {
    // Simulate roadmap generation - in a real app, this would call an AI service
    let response = '';
    
    if (userPrompt.toLowerCase().includes('react')) {
      response = `Based on your interest in React, here's your personalized roadmap:

1. JavaScript Fundamentals (2 weeks)
   - Variables, data types, functions
   - Arrays, objects, and DOM manipulation
   - ES6+ features (arrow functions, destructuring, etc.)

2. React Basics (3 weeks)
   - Components and JSX
   - Props and state management
   - Hooks (useState, useEffect, useContext)
   - Handling events and forms

3. React Router (1 week)
   - Setting up routes
   - Dynamic routing
   - Protected routes

4. State Management (2 weeks)
   - Context API
   - Redux basics
   - Zustand or Jotai

5. API Integration (2 weeks)
   - Fetch API / Axios
   - React Query / SWR for data fetching
   - Working with REST APIs

6. Build Tools & Deployment (1 week)
   - Vite configuration
   - Build optimization
   - Deployment on Vercel, Netlify, or similar platforms

7. Testing (2 weeks)
   - Jest basics
   - React Testing Library
   - Component testing

8. Advanced Topics (3 weeks)
   - Performance optimization
   - Code splitting
   - Server components
   - React 19 features`;
    } else if (userPrompt.toLowerCase().includes('python')) {
      response = `Here's your personalized Python development roadmap:

1. Python Fundamentals (3 weeks)
   - Variables, data types, and basic operations
   - Control flow (if statements, loops)
   - Functions and modules
   - Error handling

2. Data Structures & Algorithms (3 weeks)
   - Lists, dictionaries, sets, tuples
   - Basic algorithms and problem-solving
   - Time and space complexity

3. Object-Oriented Programming (2 weeks)
   - Classes and objects
   - Inheritance and polymorphism
   - Encapsulation and abstraction

4. Web Development with Flask/Django (4 weeks)
   - Basics of HTTP and APIs
   - Creating RESTful APIs
   - Database integration
   - Authentication and authorization

5. Data Science Fundamentals (3 weeks)
   - NumPy and Pandas
   - Data visualization with Matplotlib
   - Statistical analysis

6. Machine Learning Basics (4 weeks)
   - Scikit-learn
   - Supervised and unsupervised learning
   - Model evaluation and improvement

7. DevOps for Python (2 weeks)
   - Virtual environments
   - Containerization with Docker
   - CI/CD pipelines

8. Advanced Python (2 weeks)
   - Async programming
   - Performance optimization
   - Design patterns
   - Testing strategies`;
    } else {
      response = `Based on your input, here's a general software development roadmap:

1. Programming Fundamentals (4 weeks)
   - Variables, data types, and operators
   - Control structures (conditionals, loops)
   - Functions and modules
   - Basic algorithms

2. Web Development Basics (3 weeks)
   - HTML & CSS
   - JavaScript essentials
   - DOM manipulation
   - Responsive design

3. Version Control (1 week)
   - Git basics
   - GitHub workflow
   - Branching and merging

4. Choose a Specialization Path:
   - Frontend development (React, Vue, or Angular)
   - Backend development (Node.js, Python, or Java)
   - Mobile development (React Native or Flutter)
   - Data Science (Python, R, SQL)

5. Database Concepts (2 weeks)
   - Relational vs. NoSQL
   - Database design
   - CRUD operations
   - SQL basics

6. API Development (2 weeks)
   - RESTful principles
   - Authentication and authorization
   - API documentation

7. Testing & Debugging (2 weeks)
   - Unit testing
   - Integration testing
   - Debugging techniques

8. DevOps Basics (2 weeks)
   - CI/CD
   - Containerization (Docker)
   - Cloud services (AWS, Azure, or GCP)

To refine this roadmap further, please share your specific interests or career goals.`;
    }
    
    // Add system response
    const systemMessage: Message = {
      id: Date.now().toString(),
      type: 'system',
      content: response,
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, systemMessage]);
    setIsGenerating(false);
    
    toast({
      title: "Roadmap generated!",
      description: "Your personalized learning path is ready.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold gradient-text mb-2">Roadmap Generator</h1>
        <p className="text-gray-600 mb-6">Describe your experience, goals, and interests to get a personalized learning roadmap</p>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Chat with Pathfinder AI</CardTitle>
            <CardDescription>
              Be specific about your current skills, experience level, and learning goals
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="h-[480px] overflow-y-auto p-4">
              {messages.map((message) => (
                <div 
                  key={message.id} 
                  className={`mb-4 p-4 rounded-lg flex ${
                    message.type === 'user' 
                      ? 'bg-blue-100 ml-12' 
                      : 'bg-white border border-gray-200 mr-12'
                  }`}
                >
                  <div className="mr-3 mt-1">
                    {message.type === 'user' ? (
                      <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center text-white">
                        U
                      </div>
                    ) : (
                      <div className="bg-pathfinder-primary rounded-full w-8 h-8 flex items-center justify-center text-white">
                        <MessageCircle size={18} />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-500 mb-1">
                      {message.type === 'user' ? 'You' : 'Pathfinder AI'} • {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                    <div className="whitespace-pre-line">{message.content}</div>
                  </div>
                </div>
              ))}
              {isGenerating && (
                <div className="flex items-center text-gray-500 italic mb-4">
                  <div className="dot-typing"></div>
                  <span className="ml-2">Generating your roadmap...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </CardContent>
          <CardFooter className="border-t">
            <form onSubmit={handleSubmit} className="w-full">
              <div className="flex space-x-2">
                <Textarea 
                  placeholder="Describe your experience and goals (e.g., 'I know JavaScript basics and want to learn React')"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="flex-grow"
                  disabled={isGenerating}
                />
                <Button 
                  type="submit" 
                  className="self-end"
                  disabled={isGenerating || !prompt.trim()}
                >
                  {isGenerating ? (
                    <div className="flex items-center">
                      <div className="animate-spin mr-2">
                        <div className="h-4 w-4 border-2 border-t-transparent border-white rounded-full"></div>
                      </div>
                      <span>Generating</span>
                    </div>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      <span>Send</span>
                    </>
                  )}
                </Button>
              </div>
            </form>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Tips for better roadmap generation</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                <span>Mention your current skill level (beginner, intermediate, advanced)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                <span>Specify technologies you already know</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                <span>Share your ultimate career or learning goal</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                <span>Indicate how much time you can dedicate to learning per week</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                <span>Ask for specific recommendations on courses or resources</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
      <style jsx>{`
        .dot-typing {
          position: relative;
          left: -9999px;
          width: 10px;
          height: 10px;
          border-radius: 5px;
          background-color: #9b87f5;
          color: #9b87f5;
          box-shadow: 9984px 0 0 0 #9b87f5, 9999px 0 0 0 #9b87f5, 10014px 0 0 0 #9b87f5;
          animation: dotTyping 1.5s infinite linear;
        }

        @keyframes dotTyping {
          0% {
            box-shadow: 9984px 0 0 0 #9b87f5, 9999px 0 0 0 #9b87f5, 10014px 0 0 0 #9b87f5;
          }
          16.667% {
            box-shadow: 9984px -10px 0 0 #9b87f5, 9999px 0 0 0 #9b87f5, 10014px 0 0 0 #9b87f5;
          }
          33.333% {
            box-shadow: 9984px 0 0 0 #9b87f5, 9999px 0 0 0 #9b87f5, 10014px 0 0 0 #9b87f5;
          }
          50% {
            box-shadow: 9984px 0 0 0 #9b87f5, 9999px -10px 0 0 #9b87f5, 10014px 0 0 0 #9b87f5;
          }
          66.667% {
            box-shadow: 9984px 0 0 0 #9b87f5, 9999px 0 0 0 #9b87f5, 10014px 0 0 0 #9b87f5;
          }
          83.333% {
            box-shadow: 9984px 0 0 0 #9b87f5, 9999px 0 0 0 #9b87f5, 10014px -10px 0 0 #9b87f5;
          }
          100% {
            box-shadow: 9984px 0 0 0 #9b87f5, 9999px 0 0 0 #9b87f5, 10014px 0 0 0 #9b87f5;
          }
        }
      `}</style>
    </div>
  );
};

export default RoadmapGenerator;
