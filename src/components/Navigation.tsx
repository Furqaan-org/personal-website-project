"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, LogOut, User } from "lucide-react";
import { useState } from "react";
import { useSession, authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { data: session, isPending, refetch } = useSession();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  const handleSignOut = async () => {
    const { error } = await authClient.signOut();
    if (error?.code) {
      toast.error(error.code);
    } else {
      localStorage.removeItem("bearer_token");
      refetch();
      router.push("/");
      toast.success("Signed out successfully");
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="https://github.com/Furqaan-org" target="_blank" rel="noopener noreferrer" className="text-xl font-bold">
            Furqaan Ahmed Shareef
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors hover:text-primary ${
                  pathname === link.href
                    ? "text-foreground font-medium"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Auth Buttons */}
            {!isPending && (
              <>
                {session?.user ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm" className="gap-2">
                        <User className="h-4 w-4" />
                        {session.user.name}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => router.push("/dashboard")}>
                        Dashboard
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={handleSignOut} className="text-destructive">
                        <LogOut className="h-4 w-4 mr-2" />
                        Sign Out
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" onClick={() => router.push("/login")}>
                      Sign In
                    </Button>
                    <Button size="sm" onClick={() => router.push("/register")}>
                      Sign Up
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-2 transition-colors hover:text-primary ${
                  pathname === link.href
                    ? "text-foreground font-medium"
                    : "text-muted-foreground"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Mobile Auth Buttons */}
            {!isPending && (
              <div className="pt-4 border-t border-border space-y-2">
                {session?.user ? (
                  <>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start gap-2"
                      onClick={() => {
                        router.push("/dashboard");
                        setMobileMenuOpen(false);
                      }}
                    >
                      <User className="h-4 w-4" />
                      {session.user.name}
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start gap-2 text-destructive"
                      onClick={() => {
                        handleSignOut();
                        setMobileMenuOpen(false);
                      }}
                    >
                      <LogOut className="h-4 w-4" />
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <>
                    <Button 
                      variant="ghost" 
                      className="w-full"
                      onClick={() => {
                        router.push("/login");
                        setMobileMenuOpen(false);
                      }}
                    >
                      Sign In
                    </Button>
                    <Button 
                      className="w-full"
                      onClick={() => {
                        router.push("/register");
                        setMobileMenuOpen(false);
                      }}
                    >
                      Sign Up
                    </Button>
                  </>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}