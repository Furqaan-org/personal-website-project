"use client";

import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Code, Database, Palette, Music, Camera, BookOpen } from "lucide-react";

export default function About() {
  const skills = [
    "JavaScript/TypeScript",
    "React & Next.js",
    "Node.js",
    "Python",
    "UI/UX Design",
    "Figma",
    "SQL & NoSQL",
    "Git & GitHub",
  ];

  const interests = [
    { icon: Code, label: "Coding", description: "Building web applications and exploring new technologies" },
    { icon: Music, label: "Music", description: "Playing guitar and discovering new artists" },
    { icon: Camera, label: "Photography", description: "Capturing moments and landscapes" },
    { icon: BookOpen, label: "Reading", description: "Science fiction, biographies, and tech blogs" },
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <Avatar className="h-32 w-32 mx-auto mb-6">
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" alt="Profile" />
              <AvatarFallback>YN</AvatarFallback>
            </Avatar>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Me</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Creative professional with a passion for technology, design, and continuous learning.
            </p>
          </div>

          {/* Bio Section */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>My Story</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Hello! I'm a passionate creator who loves bringing ideas to life through code and design. 
                My journey in technology started when I built my first website, and I've been hooked ever since.
              </p>
              <p>
                Over the years, I've worked on various projects ranging from web applications to mobile apps, 
                always striving to create user-friendly and aesthetically pleasing solutions. I believe that 
                great design is not just about how something looks, but how it works.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new music, taking photos, or diving into a good book. 
                I'm always eager to learn new skills and take on exciting challenges that push me out of my comfort zone.
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
            <h2 className="text-3xl font-bold mb-6">Interests & Hobbies</h2>
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