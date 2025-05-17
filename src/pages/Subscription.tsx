
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Subscription = () => {
  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6 gradient-text">Choose Your Learning Journey</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Unlock your full potential with a Pathfinder subscription plan that fits your needs and goals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Freemium Plan */}
          <Card className="border-2 border-gray-200">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl">Freemium</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-gray-500">/month</span>
              </div>
              <CardDescription className="mt-2">Get started with personalized roadmaps</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Personalized learning roadmaps</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Basic skills assessment</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Course recommendations</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Limited AI chatbot assistance (10 queries/day)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Progress tracking</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="flex justify-center pt-6">
              <Link to="/signup">
                <Button size="lg">Get Started</Button>
              </Link>
            </CardFooter>
          </Card>
          
          {/* Premium Plan */}
          <Card className="border-2 border-pathfinder-primary relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-pathfinder-primary text-white py-1 px-4 transform translate-y-0 rotate-0 origin-top-right text-sm font-medium">
              Recommended
            </div>
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl">Premium</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold">$19</span>
                <span className="text-gray-500">/month</span>
              </div>
              <CardDescription className="mt-2">Enhanced learning with personal mentorship</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Everything in Freemium</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span><strong>Unlimited</strong> AI chatbot assistance</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Monthly 1-on-1 mentorship session (30 min)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Advanced learning analytics</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Priority content updates</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Customizable learning pace</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span>Resume review & career guidance</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="flex justify-center pt-6">
              <Link to="/signup">
                <Button size="lg" className="bg-pathfinder-primary hover:bg-pathfinder-primary/90">
                  Start 7-Day Free Trial
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
        
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-6 text-left">
            <div>
              <h3 className="text-lg font-medium mb-2">Can I switch between plans?</h3>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be effective from your next billing cycle.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept all major credit cards, PayPal, and select regional payment methods.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Can I cancel my subscription?</h3>
              <p className="text-gray-600">
                Yes, you can cancel your subscription at any time from your account settings. You'll continue to have access until the end of your current billing period.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">What's included in the mentorship sessions?</h3>
              <p className="text-gray-600">
                Mentorship sessions are 1-on-1 video calls with experienced developers who can review your code, answer questions, and provide career guidance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
