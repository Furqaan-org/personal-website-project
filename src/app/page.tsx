"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Code, Brain, Sparkles } from "lucide-react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import BackgroundAnimation from "@/components/BackgroundAnimation";

export default function Home() {
  return (
    <>
      <Navigation />
      <BackgroundAnimation />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-8">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                Hi, I'm{" "}
                <span className="text-primary">Furqaan Ahmed Shareef</span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
                A passionate 12th grade student exploring the exciting worlds of Information Technology and Artificial Intelligence. 
                Building the future, one line of code at a time.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link href="/projects">
                  <Button size="lg" className="gap-2">
                    View My Work <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Me Summary */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                I'm a high school student with a deep passion for technology, constantly learning and 
                experimenting with cutting-edge IT and AI technologies.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Code className="h-10 w-10 mb-2 text-primary" />
                  <CardTitle>IT Enthusiast</CardTitle>
                  <CardDescription>
                    Learning web development, programming languages, and building practical applications to solve real-world problems.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Brain className="h-10 w-10 mb-2 text-primary" />
                  <CardTitle>AI Explorer</CardTitle>
                  <CardDescription>
                    Diving deep into machine learning, neural networks, and artificial intelligence to understand the technology shaping our future.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Sparkles className="h-10 w-10 mb-2 text-primary" />
                  <CardTitle>Lifelong Learner</CardTitle>
                  <CardDescription>
                    Always curious, always growing. Exploring new technologies, frameworks, and staying updated with the latest in tech.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Link href="/about">
                <Button variant="outline" size="lg">
                  Learn More About Me
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-8">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Let's Connect
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                I'm always excited to connect with fellow tech enthusiasts, discuss ideas, 
                or collaborate on interesting projects. Feel free to reach out!
              </p>
              <Link href="/contact">
                <Button size="lg" className="gap-2">
                  Contact Me <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}