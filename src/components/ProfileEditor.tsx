
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle, User, Mail, MapPin, GraduationCap } from 'lucide-react';

// Mock user data
const userProfile = {
  name: 'Alex Johnson',
  email: 'alex.johnson@example.com',
  location: 'San Francisco, CA',
  bio: 'Frontend developer passionate about creating beautiful and accessible user interfaces. Currently learning React and TypeScript.',
  profileImage: 'https://i.pravatar.cc/150?img=12',
  preferredLanguage: 'JavaScript',
  skills: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript'],
  resumeLink: 'https://drive.google.com/file/d/example',
  progress: {
    coursesCompleted: 4,
    totalCourses: 7,
    daysActive: 32,
    badges: ['JavaScript Basics', 'CSS Master', 'React Rookie', 'Git Essentials'],
    percentage: 57
  }
};

const ProfileEditor = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: userProfile.name,
    email: userProfile.email,
    location: userProfile.location,
    bio: userProfile.bio,
    preferredLanguage: userProfile.preferredLanguage,
    resumeLink: userProfile.resumeLink
  });
  const [selectedSkills, setSelectedSkills] = useState<string[]>(userProfile.skills);
  const [isLoading, setIsLoading] = useState(false);
  
  const skillOptions = [
    "HTML", "CSS", "JavaScript", "TypeScript", "React", 
    "Angular", "Vue.js", "Node.js", "Express", "Django", 
    "Flask", "Ruby on Rails", "Spring Boot", "ASP.NET",
    "SQL", "MongoDB", "PostgreSQL", "Firebase", "AWS",
    "Docker", "Kubernetes", "Git", "GitHub", "CI/CD"
  ];
  
  const languages = [
    "JavaScript",
    "Python",
    "Java",
    "C#",
    "Go",
    "Ruby",
    "PHP",
    "TypeScript",
    "Swift",
    "Kotlin",
    "Rust"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLanguageChange = (value: string) => {
    setFormData((prev) => ({ ...prev, preferredLanguage: value }));
  };

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) => {
      if (prev.includes(skill)) {
        return prev.filter((s) => s !== skill);
      } else {
        return [...prev, skill];
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Profile updated!",
        description: "Your profile information has been saved.",
      });
    }, 1000);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Profile Summary Card */}
      <Card className="md:col-span-1">
        <CardHeader>
          <CardTitle>Profile Summary</CardTitle>
          <CardDescription>Your progress overview</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-pathfinder-primary">
            <img 
              src={userProfile.profileImage} 
              alt={userProfile.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-semibold mb-1">{userProfile.name}</h3>
          <p className="text-gray-500 mb-4 flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            {userProfile.location}
          </p>
          
          <div className="w-full mb-6">
            <div className="flex justify-between text-sm mb-1">
              <span>Learning Progress</span>
              <span>{userProfile.progress.percentage}%</span>
            </div>
            <Progress value={userProfile.progress.percentage} className="h-2" />
          </div>
          
          <div className="w-full">
            <div className="flex justify-between mb-2">
              <div className="text-center">
                <p className="text-2xl font-semibold">{userProfile.progress.coursesCompleted}</p>
                <p className="text-xs text-gray-500">Courses<br />Completed</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-semibold">{userProfile.progress.daysActive}</p>
                <p className="text-xs text-gray-500">Days<br />Active</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-semibold">{userProfile.progress.badges.length}</p>
                <p className="text-xs text-gray-500">Badges<br />Earned</p>
              </div>
            </div>
          </div>
          
          <div className="w-full mt-4">
            <p className="text-sm font-medium mb-2">Earned Badges</p>
            <div className="flex flex-wrap gap-2">
              {userProfile.progress.badges.map((badge) => (
                <div 
                  key={badge} 
                  className="flex items-center bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full"
                >
                  <CheckCircle className="h-3 w-3 mr-1" />
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Profile Editor Form */}
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Edit Profile</CardTitle>
          <CardDescription>Update your personal information</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <div className="relative">
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="pl-10"
                />
                <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <div className="relative">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="pl-10"
                />
                <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <div className="relative">
                <Input
                  id="location"
                  name="location"
                  type="text"
                  value={formData.location}
                  onChange={handleChange}
                  className="pl-10"
                />
                <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                rows={4}
              />
              <p className="text-xs text-gray-500">
                Brief description about yourself and your tech journey
              </p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="language">Preferred Programming Language</Label>
              <Select 
                onValueChange={handleLanguageChange} 
                value={formData.preferredLanguage}
              >
                <SelectTrigger id="language">
                  <SelectValue placeholder="Select your preferred language" />
                </SelectTrigger>
                <SelectContent>
                  {languages.map((language) => (
                    <SelectItem key={language} value={language}>
                      {language}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="resumeLink">Resume Google Drive Link</Label>
              <Input
                id="resumeLink"
                name="resumeLink"
                type="url"
                placeholder="https://drive.google.com/file/..."
                value={formData.resumeLink}
                onChange={handleChange}
              />
            </div>
            
            <div className="space-y-2">
              <Label>Your Skills</Label>
              <div className="flex flex-wrap gap-2">
                {skillOptions.map((skill) => (
                  <Button
                    type="button"
                    key={skill}
                    variant={selectedSkills.includes(skill) ? "default" : "outline"}
                    size="sm"
                    onClick={() => toggleSkill(skill)}
                    className={selectedSkills.includes(skill) ? "bg-pathfinder-primary" : ""}
                  >
                    {skill}
                  </Button>
                ))}
              </div>
              <p className="text-xs text-gray-500">
                Select all the skills you currently have
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              type="submit" 
              disabled={isLoading}
              className="ml-auto"
            >
              {isLoading ? "Saving..." : "Save Changes"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default ProfileEditor;
