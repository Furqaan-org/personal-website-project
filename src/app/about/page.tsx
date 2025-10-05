"use client";

import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Code, Brain, Laptop, Rocket, BookOpen, Target, Award, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

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

  const achievements = [
    { icon: Award, title: "Self-Taught Developer", description: "Learned programming through online courses and hands-on projects" },
    { icon: TrendingUp, title: "Continuous Learner", description: "Consistently expanding knowledge in AI and web technologies" },
    { icon: Target, title: "Goal-Oriented", description: "Working towards becoming a skilled developer and AI engineer" },
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background gradient effect */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative inline-block mb-6"
            >
              <Avatar className="h-40 w-40 ring-4 ring-primary/20 ring-offset-4 ring-offset-background">
                <AvatarImage src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Screenshot-2025-10-05-124553-1759653980920.png" alt="Profile" />
                <AvatarFallback className="text-2xl">FAS</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-full p-2">
                <Rocket className="h-5 w-5" />
              </div>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
            >
              About Me
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              12th Grade Student | IT & AI Enthusiast | Future Tech Innovator
            </motion.p>
          </motion.div>

          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card className="mb-12 hover:shadow-lg transition-shadow duration-300 border-primary/10">
              <CardHeader>
                <CardTitle className="text-2xl">My Journey</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hello! I'm <span className="text-foreground font-semibold">Furqaan Ahmed Shareef</span>, a 12th-grade student with an insatiable curiosity for 
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
          </motion.div>

          {/* Achievements Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Award className="h-8 w-8 text-primary" />
              Achievements & Milestones
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-md hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="pt-6 text-center">
                      <achievement.icon className="h-10 w-10 mx-auto mb-3 text-primary" />
                      <h3 className="font-semibold mb-2">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Code className="h-8 w-8 text-primary" />
              Skills & Technologies
            </h2>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.9 + index * 0.05 }}
                    >
                      <Badge 
                        variant="secondary" 
                        className="text-sm px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Interests Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Brain className="h-8 w-8 text-primary" />
              Areas of Interest
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {interests.map((interest, index) => (
                <motion.div
                  key={interest.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 group">
                    <CardHeader>
                      <interest.icon className="h-8 w-8 mb-2 text-primary group-hover:scale-110 transition-transform duration-300" />
                      <CardTitle className="group-hover:text-primary transition-colors duration-300">{interest.label}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{interest.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}