"use client";

import { useEffect, useRef } from "react";

export default function BackgroundAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Particle class for 3D effect
    class Particle {
      x: number;
      y: number;
      z: number;
      size: number;
      speedX: number;
      speedY: number;
      speedZ: number;
      hue: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.z = Math.random() * 1000;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.speedZ = Math.random() * 2 + 0.5;
        this.hue = Math.random() * 60 + 240; // Blue to purple range
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.z -= this.speedZ;

        // Reset particle when it goes off screen
        if (this.z <= 0) {
          this.z = 1000;
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
        }

        if (this.x < 0 || this.x > canvas.width) {
          this.speedX *= -1;
        }
        if (this.y < 0 || this.y > canvas.height) {
          this.speedY *= -1;
        }
      }

      draw() {
        if (!ctx) return;

        // Calculate 3D perspective
        const scale = 1000 / (1000 + this.z);
        const x2d = this.x * scale + canvas.width / 2 * (1 - scale);
        const y2d = this.y * scale + canvas.height / 2 * (1 - scale);
        const size2d = this.size * scale;

        // Create gradient for glow effect
        const gradient = ctx.createRadialGradient(x2d, y2d, 0, x2d, y2d, size2d * 3);
        gradient.addColorStop(0, `hsla(${this.hue}, 80%, 60%, ${0.8 * scale})`);
        gradient.addColorStop(0.5, `hsla(${this.hue}, 70%, 50%, ${0.3 * scale})`);
        gradient.addColorStop(1, `hsla(${this.hue}, 60%, 40%, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x2d, y2d, size2d * 3, 0, Math.PI * 2);
        ctx.fill();

        // Draw core
        ctx.fillStyle = `hsla(${this.hue}, 100%, 70%, ${scale})`;
        ctx.beginPath();
        ctx.arc(x2d, y2d, size2d, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create particles
    const particles: Particle[] = [];
    const particleCount = 80;

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    let animationFrameId: number;
    const animate = () => {
      // Create dark gradient background
      const isDark = document.documentElement.classList.contains("dark");
      
      if (isDark) {
        ctx.fillStyle = "rgba(18, 18, 30, 0.3)";
      } else {
        ctx.fillStyle = "rgba(252, 252, 254, 0.3)";
      }
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
      style={{ mixBlendMode: "screen" }}
    />
  );
}