
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

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

const skillOptions = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React", 
  "Angular", "Vue.js", "Node.js", "Express", "Django", 
  "Flask", "Ruby on Rails", "Spring Boot", "ASP.NET",
  "SQL", "MongoDB", "PostgreSQL", "Firebase", "AWS",
  "Docker", "Kubernetes", "Git", "GitHub", "CI/CD"
];

const ProfileSetup = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    language: '',
    resumeLink: '',
  });
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleLanguageChange = (value: string) => {
    setFormData((prev) => ({ ...prev, language: value }));
    if (errors.language) {
      setErrors((prev) => ({ ...prev, language: '' }));
    }
  };

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) => {
      if (prev.includes(skill)) {
        return prev.filter((s) => s !== skill);
      } else {
        return [...prev, skill];
      }
    });
    if (errors.skills) {
      setErrors((prev) => ({ ...prev, skills: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.language) {
      newErrors.language = 'Please select a preferred programming language';
    }
    
    if (!formData.resumeLink) {
      newErrors.resumeLink = 'Resume link is required';
    } else if (!/^https?:\/\/.+/.test(formData.resumeLink)) {
      newErrors.resumeLink = 'Please enter a valid URL';
    }
    
    if (selectedSkills.length === 0) {
      newErrors.skills = 'Please select at least one skill';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Profile setup complete!",
        description: "Your personalized dashboard is ready.",
      });
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold gradient-text">Complete Your Profile</h1>
          <p className="text-gray-600 mt-2">Tell us about your skills so we can create your personalized learning roadmap</p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Profile Setup</CardTitle>
            <CardDescription>Help us understand your current skills and learning goals</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="language">Preferred Programming Language</Label>
                <Select 
                  onValueChange={handleLanguageChange} 
                  value={formData.language}
                >
                  <SelectTrigger id="language" className={errors.language ? "border-red-500" : ""}>
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
                {errors.language && (
                  <p className="text-sm text-red-500">{errors.language}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="resumeLink">Resume Google Drive Link (optional)</Label>
                <Input
                  id="resumeLink"
                  name="resumeLink"
                  type="url"
                  placeholder="https://drive.google.com/file/..."
                  value={formData.resumeLink}
                  onChange={handleChange}
                  className={errors.resumeLink ? "border-red-500" : ""}
                />
                <p className="text-xs text-gray-500">
                  Share a link to your resume for more personalized path suggestions
                </p>
                {errors.resumeLink && (
                  <p className="text-sm text-red-500">{errors.resumeLink}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label>Your Skills</Label>
                <div className="flex flex-wrap gap-2 mt-2">
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
                {errors.skills && (
                  <p className="text-sm text-red-500">{errors.skills}</p>
                )}
                <p className="text-xs text-gray-500">
                  Select all the skills you currently have
                </p>
              </div>
            </CardContent>
            
            <CardFooter className="flex justify-end">
              <Button 
                type="submit" 
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? "Setting up..." : "Continue to Dashboard"}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default ProfileSetup;
