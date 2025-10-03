"use client";

import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Code, Brain, Laptop, Rocket, BookOpen, Target } from "lucide-react";

export default function About() {
  const skills = [
    "Python",
    "JavaScript/TypeScript",
    "React & Next.js",
    "Machine Learning",
    "Deep Learning",
    "TensorFlow & PyTorch",
    "Data Analysis",
    "SQL & Databases",
    "Git & GitHub",
    "HTML & CSS",
    "AI Model Development",
    "Problem Solving",
  ];

  const interests = [
    { icon: Brain, label: "Artificial Intelligence", description: "Exploring neural networks, NLP, computer vision, and AI applications" },
    { icon: Code, label: "Web Development", description: "Building modern web applications with cutting-edge frameworks" },
    { icon: Laptop, label: "IT & Systems", description: "Understanding computer systems, networks, and infrastructure" },
    { icon: Rocket, label: "Innovation", description: "Creating projects that combine AI with practical solutions" },
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <Avatar className="h-32 w-32 mx-auto mb-6">
              <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop" alt="Profile" />
              <AvatarFallback>FAS</AvatarFallback>
            </Avatar>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Me</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              12th Grade Student | IT & AI Enthusiast | Future Tech Innovator
            </p>
          </div>

          {/* Bio Section */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>My Journey</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Hello! I'm Furqaabn Ahmed Shareef, a 12th-grade student with an insatiable curiosity for 
                technology and innovation. Currently, I'm immersing myself in the fascinating fields of 
                Information Technology and Artificial Intelligence, learning new skills every day.
              </p>
              <p>
                My journey into tech started with a simple curiosity about how computers work, which quickly 
                evolved into a passion for programming and AI. From building my first "Hello World" program 
                to experimenting with machine learning models, every step has been an exciting adventure. 
                I believe that AI and IT are not just subjects to study—they're tools to create meaningful 
                solutions that can make a real difference in the world.
              </p>
              <p>
                As a student, I'm constantly balancing academics with self-directed learning through online 
                courses, coding challenges, and personal projects. I'm particularly fascinated by how AI can 
                solve complex problems and how modern web technologies can create seamless user experiences. 
                My goal is to become a skilled developer and AI engineer who can bridge the gap between 
                cutting-edge technology and practical applications.
              </p>
              <p>
                When I'm not coding or studying, I enjoy reading tech blogs, watching AI tutorials, exploring 
                new programming languages, and thinking about how technology will shape our future. I'm always 
                eager to learn, collaborate, and take on new challenges that push me beyond my comfort zone.
              </p>
            </CardContent>
          </Card>

          {/* Skills Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Skills & Technologies</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm px-4 py-2">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Interests Section */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Areas of Interest</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {interests.map((interest) => (
                <Card key={interest.label}>
                  <CardHeader>
                    <interest.icon className="h-8 w-8 mb-2 text-primary" />
                    <CardTitle>{interest.label}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{interest.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}