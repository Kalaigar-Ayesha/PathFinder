
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle, User, Mail, MapPin, GraduationCap, FileText } from 'lucide-react';

// Programming languages
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

// International languages
const internationalLanguages = [
  "English",
  "Hindi",
  "Arabic",
  "Spanish",
  "French",
  "Mandarin",
  "Russian",
  "Portuguese",
  "German",
  "Japanese",
  "Korean"
];

// Mock user data initial state
const initialUserProfile = {
  name: 'Alex Johnson',
  email: 'alex.johnson@example.com',
  location: 'San Francisco, CA',
  bio: 'Frontend developer passionate about creating beautiful and accessible user interfaces. Currently learning React and TypeScript.',
  profileImage: 'https://i.pravatar.cc/150?img=12',
  preferredLanguage: 'JavaScript',
  spokenLanguage: 'English',
  skills: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript'],
  resumeFileName: null,
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
  const [userProfile, setUserProfile] = useState(initialUserProfile);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    bio: '',
    preferredLanguage: '',
    spokenLanguage: '',
    customSkill: '',
    resumeFile: null as File | null
  });
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const skillOptions = [
    "HTML", "CSS", "JavaScript", "TypeScript", "React", 
    "Angular", "Vue.js", "Node.js", "Express", "Django", 
    "Flask", "Ruby on Rails", "Spring Boot", "ASP.NET",
    "SQL", "MongoDB", "PostgreSQL", "Firebase", "AWS",
    "Docker", "Kubernetes", "Git", "GitHub", "CI/CD"
  ];
  
  useEffect(() => {
    // Load profile data from localStorage if exists
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
      const parsedProfile = JSON.parse(savedProfile);
      setUserProfile(prev => ({
        ...prev,
        ...parsedProfile
      }));
    }
    
    // Initialize form data with user profile
    setFormData({
      name: userProfile.name,
      email: userProfile.email,
      location: userProfile.location,
      bio: userProfile.bio,
      preferredLanguage: userProfile.preferredLanguage,
      spokenLanguage: userProfile.spokenLanguage || 'English',
      customSkill: '',
      resumeFile: null
    });
    setSelectedSkills(userProfile.skills);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type !== 'application/pdf') {
        toast({
          title: "Invalid file type",
          description: "Only PDF files are allowed",
        });
        return;
      }
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        toast({
          title: "File too large",
          description: "File size should be less than 5MB",
        });
        return;
      }
      
      setFormData((prev) => ({ ...prev, resumeFile: file }));
    }
  };

  const handleLanguageChange = (value: string) => {
    setFormData((prev) => ({ ...prev, preferredLanguage: value }));
  };

  const handleSpokenLanguageChange = (value: string) => {
    setFormData((prev) => ({ ...prev, spokenLanguage: value }));
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

  const addCustomSkill = () => {
    if (!formData.customSkill.trim()) return;
    
    // Check if skill already exists
    if (selectedSkills.includes(formData.customSkill.trim())) {
      toast({
        title: "Skill already added",
        description: "This skill is already in your list.",
      });
      return;
    }
    
    setSelectedSkills(prev => [...prev, formData.customSkill.trim()]);
    setFormData(prev => ({ ...prev, customSkill: '' }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Update user profile with form data
    const updatedProfile = {
      ...userProfile,
      name: formData.name,
      email: formData.email,
      location: formData.location,
      bio: formData.bio,
      preferredLanguage: formData.preferredLanguage,
      spokenLanguage: formData.spokenLanguage,
      skills: selectedSkills,
      resumeFileName: formData.resumeFile ? formData.resumeFile.name : userProfile.resumeFileName,
    };
    
    // Simulate API call and update local storage
    setTimeout(() => {
      setIsLoading(false);
      setUserProfile(updatedProfile);
      localStorage.setItem('userProfile', JSON.stringify(updatedProfile));
      
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

          {/* Resume viewer section */}
          {userProfile.resumeFileName && (
            <div className="w-full mt-6 p-4 border rounded-md">
              <div className="flex items-center gap-2 mb-3">
                <FileText className="h-5 w-5 text-pathfinder-primary" />
                <p className="font-medium">Resume</p>
              </div>
              <p className="text-sm text-gray-600 mb-2">{userProfile.resumeFileName}</p>
              <Button variant="outline" size="sm" className="w-full">
                Download Resume
              </Button>
            </div>
          )}
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
              <Label htmlFor="spokenLanguage">Preferred Spoken Language</Label>
              <Select 
                onValueChange={handleSpokenLanguageChange}
                value={formData.spokenLanguage}
              >
                <SelectTrigger id="spokenLanguage">
                  <SelectValue placeholder="Select your spoken language" />
                </SelectTrigger>
                <SelectContent>
                  {internationalLanguages.map((language) => (
                    <SelectItem key={language} value={language}>
                      {language}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="resumeFile">Resume (PDF)</Label>
              <div className="flex gap-2">
                <Input
                  id="resumeFile"
                  name="resumeFile"
                  type="file"
                  accept=".pdf"
                  onChange={handleFileChange}
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                />
                <Button 
                  type="button" 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => fileInputRef.current?.click()}
                >
                  {formData.resumeFile ? formData.resumeFile.name : (userProfile.resumeFileName || "Choose PDF file")}
                </Button>
                {(formData.resumeFile || userProfile.resumeFileName) && (
                  <Button 
                    type="button" 
                    variant="ghost"
                    onClick={() => {
                      setFormData(prev => ({ ...prev, resumeFile: null }));
                      setUserProfile(prev => ({ ...prev, resumeFileName: null }));
                    }}
                  >
                    Clear
                  </Button>
                )}
              </div>
              <p className="text-xs text-gray-500">
                Upload your resume in PDF format (max 5MB)
              </p>
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

              <div className="flex gap-2 mt-4">
                <Input
                  placeholder="Add other skill..."
                  value={formData.customSkill}
                  onChange={(e) => setFormData(prev => ({ ...prev, customSkill: e.target.value }))}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      addCustomSkill();
                    }
                  }}
                />
                <Button type="button" onClick={addCustomSkill}>Add</Button>
              </div>

              {selectedSkills.length > 0 && (
                <div className="mt-4">
                  <Label className="mb-2 block">Selected Skills:</Label>
                  <div className="flex flex-wrap gap-2">
                    {selectedSkills.map((skill) => (
                      <div 
                        key={skill} 
                        className="bg-pathfinder-primary text-white px-3 py-1 rounded-full text-sm flex items-center gap-1"
                      >
                        {skill}
                        <button 
                          type="button" 
                          onClick={() => toggleSkill(skill)} 
                          className="ml-1 rounded-full bg-white bg-opacity-20 h-4 w-4 flex items-center justify-center text-xs hover:bg-opacity-30"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <p className="text-xs text-gray-500">
                Select all the skills you currently have or add custom ones
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
