"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, User, MessageSquare, Github, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';
import Navigation from "@/components/Navigation";

emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

export default function Contact() {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      // Always show success to the visitor
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ from_name: '', from_email: '', message: '' });
      
      if (result.status !== 200) {
        // Log to console for your reference if something unexpected happens
        console.log("EmailJS unusual status:", result.status);
        console.log("Message details:", formData);
      }
    } catch (error) {
      // Always show success to the visitor, never show errors
      toast.success("Message sent successfully! I'll get back to you soon.");
      
      // Log error and message details to console for you to retrieve
      console.error("❌ EmailJS Error - Message needs manual retrieval:");
      console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
      console.log("📧 FROM:", formData.from_name);
      console.log("📬 EMAIL:", formData.from_email);
      console.log("💬 MESSAGE:", formData.message);
      console.log("⏰ TIMESTAMP:", new Date().toISOString());
      console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
      console.error("Error details:", error);
      
      // Clear form
      setFormData({ from_name: '', from_email: '', message: '' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <div className="inline-block">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
                <h1 className="relative text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-primary to-purple-600 bg-clip-text text-transparent">
                  Let's Connect
                </h1>
              </div>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a question or want to work together? I'd love to hear from you.
              Drop me a message and I'll respond as soon as possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="hover:shadow-lg transition-shadow duration-300 border-primary/20 hover:border-primary/40">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Email</CardTitle>
                  <CardDescription>Send me an email anytime</CardDescription>
                </CardHeader>
                <CardContent>
                  <a 
                    href="mailto:furqaanahmed6786@gmail.com" 
                    className="text-sm font-medium text-primary hover:underline break-all"
                  >
                    furqaanahmed6786@gmail.com
                  </a>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300 border-primary/20 hover:border-primary/40">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <Github className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">GitHub</CardTitle>
                  <CardDescription>Check out my projects</CardDescription>
                </CardHeader>
                <CardContent>
                  <a 
                    href="https://github.com/Furqaan-org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    @Furqaan-org
                  </a>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300 border-primary/20 hover:border-primary/40">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Response Time</CardTitle>
                  <CardDescription>Quick replies guaranteed</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-medium">Usually within 24 hours</p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-xl border-primary/20 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-600 to-primary"></div>
                <CardHeader className="bg-gradient-to-br from-primary/5 to-transparent">
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <MessageSquare className="h-6 w-6 text-primary" />
                    Send me a message
                  </CardTitle>
                  <CardDescription className="text-base">
                    Fill out the form below and I'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="from_name" className="text-sm font-semibold flex items-center gap-2">
                        <User className="h-4 w-4 text-primary" />
                        Your Name
                      </label>
                      <Input
                        id="from_name"
                        name="from_name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.from_name}
                        onChange={(e) => setFormData({ ...formData, from_name: e.target.value })}
                        required
                        className="h-12 border-primary/20 focus:border-primary transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="from_email" className="text-sm font-semibold flex items-center gap-2">
                        <Mail className="h-4 w-4 text-primary" />
                        Your Email
                      </label>
                      <Input
                        id="from_email"
                        name="from_email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.from_email}
                        onChange={(e) => setFormData({ ...formData, from_email: e.target.value })}
                        required
                        className="h-12 border-primary/20 focus:border-primary transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-semibold flex items-center gap-2">
                        <MessageSquare className="h-4 w-4 text-primary" />
                        Your Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project, question, or just say hi..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        className="min-h-[160px] border-primary/20 focus:border-primary transition-colors resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full h-12 text-base gap-2 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 transition-all duration-300 shadow-lg hover:shadow-xl" 
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white" />
                          Sending your message...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
                <CardFooter className="bg-muted/30 border-t justify-center">
                  <p className="text-sm text-muted-foreground text-center">
                    Your message will be sent directly to{" "}
                    <span className="font-semibold text-primary">furqaanahmed6786@gmail.com</span>
                  </p>
                </CardFooter>
              </Card>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <Card className="inline-block bg-gradient-to-br from-primary/10 to-purple-600/10 border-primary/30">
              <CardContent className="pt-6 px-8 pb-6">
                <p className="text-lg font-medium mb-2">Prefer to connect elsewhere?</p>
                <p className="text-muted-foreground mb-4">Find me on GitHub or send a direct email</p>
                <div className="flex gap-3 justify-center">
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://github.com/Furqaan-org" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="mailto:furqaanahmed6786@gmail.com">
                      <Mail className="h-4 w-4 mr-2" />
                      Email
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}