
import { useState, useRef } from 'react';
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

// Added international languages
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
    resumeFile: null as File | null,
    spokenLanguage: '',
    customSkill: ''
  });
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type !== 'application/pdf') {
        setErrors((prev) => ({ ...prev, resumeFile: 'Only PDF files are allowed' }));
        return;
      }
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        setErrors((prev) => ({ ...prev, resumeFile: 'File size should be less than 5MB' }));
        return;
      }
      
      setFormData((prev) => ({ ...prev, resumeFile: file }));
      if (errors.resumeFile) {
        setErrors((prev) => ({ ...prev, resumeFile: '' }));
      }
    }
  };

  const handleLanguageChange = (value: string) => {
    setFormData((prev) => ({ ...prev, language: value }));
    if (errors.language) {
      setErrors((prev) => ({ ...prev, language: '' }));
    }
  };

  const handleSpokenLanguageChange = (value: string) => {
    setFormData((prev) => ({ ...prev, spokenLanguage: value }));
    if (errors.spokenLanguage) {
      setErrors((prev) => ({ ...prev, spokenLanguage: '' }));
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

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.language) {
      newErrors.language = 'Please select a preferred programming language';
    }
    
    if (!formData.spokenLanguage) {
      newErrors.spokenLanguage = 'Please select a preferred spoken language';
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
    
    // Simulate API call - store data in localStorage for demo purposes
    setTimeout(() => {
      // Store data in local storage for retrieval in profile page
      localStorage.setItem('userProfile', JSON.stringify({
        language: formData.language,
        spokenLanguage: formData.spokenLanguage,
        skills: selectedSkills,
        resumeFileName: formData.resumeFile ? formData.resumeFile.name : null,
        // In a real app, you would upload the file to a server and store the URL
        // For demo purposes, we're just storing the file name
      }));
      
      setIsLoading(false);
      toast({
        title: "Profile setup complete!",
        description: "Your personalized dashboard is ready.",
      });
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 mt-16">
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
                <Label htmlFor="spokenLanguage">Preferred Spoken Language</Label>
                <Select 
                  onValueChange={handleSpokenLanguageChange} 
                  value={formData.spokenLanguage}
                >
                  <SelectTrigger id="spokenLanguage" className={errors.spokenLanguage ? "border-red-500" : ""}>
                    <SelectValue placeholder="Select your preferred language" />
                  </SelectTrigger>
                  <SelectContent>
                    {internationalLanguages.map((language) => (
                      <SelectItem key={language} value={language}>
                        {language}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.spokenLanguage && (
                  <p className="text-sm text-red-500">{errors.spokenLanguage}</p>
                )}
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
                    className={errors.resumeFile ? "border-red-500" : ""}
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                  />
                  <Button 
                    type="button" 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    {formData.resumeFile ? formData.resumeFile.name : "Choose PDF file"}
                  </Button>
                  {formData.resumeFile && (
                    <Button 
                      type="button" 
                      variant="ghost"
                      onClick={() => setFormData(prev => ({ ...prev, resumeFile: null }))}
                    >
                      Clear
                    </Button>
                  )}
                </div>
                <p className="text-xs text-gray-500">
                  Upload your resume in PDF format (max 5MB)
                </p>
                {errors.resumeFile && (
                  <p className="text-sm text-red-500">{errors.resumeFile}</p>
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
                
                {errors.skills && (
                  <p className="text-sm text-red-500">{errors.skills}</p>
                )}
                <p className="text-xs text-gray-500">
                  Select all the skills you currently have or add custom ones
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
