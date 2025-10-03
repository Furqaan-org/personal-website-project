"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Code, Palette, Zap } from "lucide-react";
import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-8">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                Hi, I'm{" "}
                <span className="text-primary">Your Name</span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
                A passionate creator, developer, and problem solver. 
                Welcome to my personal space on the web.
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
                I'm dedicated to creating meaningful experiences and solving complex problems
                through creativity and technology.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Code className="h-10 w-10 mb-2 text-primary" />
                  <CardTitle>Developer</CardTitle>
                  <CardDescription>
                    Building clean, efficient code and bringing ideas to life through technology.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Palette className="h-10 w-10 mb-2 text-primary" />
                  <CardTitle>Designer</CardTitle>
                  <CardDescription>
                    Crafting beautiful, user-centric designs that make a lasting impression.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Zap className="h-10 w-10 mb-2 text-primary" />
                  <CardTitle>Innovator</CardTitle>
                  <CardDescription>
                    Always exploring new technologies and pushing the boundaries of what's possible.
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
                I'm always open to new opportunities, collaborations, and conversations.
                Feel free to reach out!
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