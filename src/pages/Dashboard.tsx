
import { useState } from 'react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, Calendar, Book } from 'lucide-react';
import ProfileEditor from '@/components/ProfileEditor';

// Dummy data for the learning roadmap
const roadmapItems = [
  {
    id: 1,
    title: "JavaScript Fundamentals",
    description: "Learn the core concepts of JavaScript including variables, data types, functions, and control flow.",
    progress: 100,
    completed: true,
    type: "course",
    duration: "2 weeks",
    resources: [
      { name: "MDN JavaScript Guide", url: "#" },
      { name: "JavaScript.info", url: "#" }
    ]
  },
  {
    id: 2,
    title: "React Basics",
    description: "Understand React components, JSX, props, and state management.",
    progress: 75,
    completed: false,
    type: "course",
    duration: "3 weeks",
    resources: [
      { name: "React Official Docs", url: "#" },
      { name: "React for Beginners", url: "#" }
    ],
    currentModule: "Component Lifecycle"
  },
  {
    id: 3,
    title: "State Management with Redux",
    description: "Learn how to manage application state using Redux and connect it with React.",
    progress: 20,
    completed: false,
    type: "course",
    duration: "2 weeks",
    resources: [
      { name: "Redux Documentation", url: "#" },
      { name: "Egghead.io Redux Course", url: "#" }
    ],
    currentModule: "Actions and Reducers"
  },
  {
    id: 4,
    title: "Build a Weather App",
    description: "Apply your React and state management knowledge by creating a weather application.",
    progress: 0,
    completed: false,
    type: "project",
    duration: "1 week",
    resources: [
      { name: "Weather API Documentation", url: "#" },
      { name: "React Project Structure Guide", url: "#" }
    ]
  },
  {
    id: 5,
    title: "Advanced React Patterns",
    description: "Master advanced React patterns including hooks, context API, and performance optimization.",
    progress: 0,
    completed: false,
    type: "course",
    duration: "3 weeks",
    resources: [
      { name: "Advanced React Patterns", url: "#" },
      { name: "React Performance Optimization", url: "#" }
    ]
  }
];

// User stats
const userStats = {
  daysActive: 24,
  coursesCompleted: 1,
  currentStreak: 5
};

const Dashboard = () => {
  const [expandedItemId, setExpandedItemId] = useState<number | null>(null);
  const [showProfileEditor, setShowProfileEditor] = useState(false);

  const toggleItemExpand = (id: number) => {
    setExpandedItemId(expandedItemId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold gradient-text">Your Learning Dashboard</h1>
            <p className="text-gray-600 mt-2">Track your progress and follow your personalized roadmap</p>
          </div>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Button 
              variant="outline"
              onClick={() => setShowProfileEditor(!showProfileEditor)}
            >
              {showProfileEditor ? "View Dashboard" : "Edit Profile"}
            </Button>
            
          </div>
        </div>
        
        {showProfileEditor ? (
          <ProfileEditor />
        ) : (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <Card>
                <CardContent className="py-6 flex items-center">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Calendar className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Days Active</p>
                    <p className="text-2xl font-bold">{userStats.daysActive}</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="py-6 flex items-center">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Courses Completed</p>
                    <p className="text-2xl font-bold">{userStats.coursesCompleted}</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="py-6 flex items-center">
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <Book className="h-6 w-6 text-pathfinder-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Day Streak</p>
                    <p className="text-2xl font-bold">{userStats.currentStreak}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Learning Roadmap */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Your React Developer Roadmap</CardTitle>
                <CardDescription>Based on your skills and goals, we've created this personalized learning path</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {roadmapItems.map((item) => (
                    <div 
                      key={item.id} 
                      className={`border rounded-lg overflow-hidden transition-all ${expandedItemId === item.id ? 'shadow-md' : ''}`}
                    >
                      <div 
                        className={`p-4 flex justify-between items-center cursor-pointer ${
                          item.completed ? 'bg-green-50' : 'bg-white'
                        }`}
                        onClick={() => toggleItemExpand(item.id)}
                      >
                        <div className="flex items-center space-x-3">
                          <div>
                            {item.completed ? (
                              <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                                <CheckCircle className="h-6 w-6 text-green-600" />
                              </div>
                            ) : (
                              <div className="h-10 w-10 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-500">
                                {item.id}
                              </div>
                            )}
                          </div>
                          <div>
                            <h3 className="font-medium text-lg">{item.title}</h3>
                            <div className="text-sm text-gray-500 flex items-center space-x-2">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                {item.type}
                              </span>
                              <span>•</span>
                              <span>{item.duration}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-40 mr-4 hidden sm:block">
                            <div className="flex justify-between text-xs mb-1">
                              <span>Progress</span>
                              <span>{item.progress}%</span>
                            </div>
                            <Progress value={item.progress} className="h-2" />
                          </div>
                          <ArrowRight className={`h-5 w-5 transition-transform ${expandedItemId === item.id ? 'rotate-90' : ''}`} />
                        </div>
                      </div>
                      
                      {expandedItemId === item.id && (
                        <div className="p-4 bg-gray-50 border-t">
                          <p className="text-gray-700 mb-4">{item.description}</p>
                          
                          {!item.completed && item.currentModule && (
                            <div className="mb-4">
                              <p className="text-sm font-medium">Current Module:</p>
                              <p className="text-pathfinder-primary">{item.currentModule}</p>
                            </div>
                          )}
                          
                          <div className="mb-4">
                            <p className="text-sm font-medium mb-2">Recommended Resources:</p>
                            <ul className="list-disc pl-5 space-y-1">
                              {item.resources.map((resource, index) => (
                                <li key={index}>
                                  <a href={resource.url} className="text-pathfinder-accent hover:underline">
                                    {resource.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="flex justify-end">
                            <Button>
                              {item.completed ? "Review Material" : item.progress > 0 ? "Continue" : "Start Learning"}
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle>Recommended for You</CardTitle>
                <CardDescription>Based on your progress and interests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Card>
                    <CardContent className="p-4">
                      <div className="bg-blue-50 p-4 rounded-lg mb-3">
                        <Book className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="font-medium mb-2">Advanced React Hooks Workshop</h3>
                      <p className="text-sm text-gray-600 mb-3">Master the use of React's built-in hooks and create your own custom hooks.</p>
                      <Button variant="outline" className="w-full">View Workshop</Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="bg-purple-50 p-4 rounded-lg mb-3">
                        <Book className="h-6 w-6 text-pathfinder-primary" />
                      </div>
                      <h3 className="font-medium mb-2">TypeScript for React Developers</h3>
                      <p className="text-sm text-gray-600 mb-3">Learn how to add strong typing to your React applications with TypeScript.</p>
                      <Button variant="outline" className="w-full">View Course</Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="bg-green-50 p-4 rounded-lg mb-3">
                        <Book className="h-6 w-6 text-green-600" />
                      </div>
                      <h3 className="font-medium mb-2">React Testing Library</h3>
                      <p className="text-sm text-gray-600 mb-3">Write maintainable tests for your React components using React Testing Library.</p>
                      <Button variant="outline" className="w-full">View Tutorial</Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
