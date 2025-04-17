import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface NetworkAnimationProps {
  className?: string;
  particleCount?: number;
  connectionDistance?: number;
  mouseEffect?: boolean;
  mouseRadius?: number;
  mouseStrength?: number;
}

export default function NetworkAnimation({
  className = "",
  particleCount = 80,
  connectionDistance = 160,
  mouseEffect = true,
  mouseRadius = 150,
  mouseStrength = 5,
}: NetworkAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const hasMouseMoved = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mousePositionRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
      hasMouseMoved.current = true;
    };

    // For touch devices
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mousePositionRef.current = {
          x: e.touches[0].clientX - rect.left,
          y: e.touches[0].clientY - rect.top,
        };
        hasMouseMoved.current = true;
      }
    };

    if (mouseEffect) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("touchmove", handleTouchMove);
    }

    // Set initial mouse position to center
    mousePositionRef.current = {
      x: canvas.width / 2,
      y: canvas.height / 2,
    };

    // Particles array
    const particles: Particle[] = [];
    // Set canvas size to match parent
    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      const dpr = window.devicePixelRatio || 1;
      canvas.width = parent.offsetWidth * dpr;
      canvas.height = parent.offsetHeight * dpr;
      canvas.style.width = `${parent.offsetWidth}px`;
      canvas.style.height = `${parent.offsetHeight}px`;
      ctx.scale(dpr, dpr); // Scale for retina displays

      // Reset particles when resizing
      if (particles.length > 0) {
        init();
      }
    };
    resize();
    window.addEventListener("resize", resize);

    class Particle {
      x: number;
      y: number;
      originalX: number;
      originalY: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.originalX = this.x;
        this.originalY = this.y;
        this.size = Math.random() * 3 + 2; // Changed from 2+1 to 3+2 for bigger particles
        this.speedX = (Math.random() - 0.5) * 1.5;
        this.speedY = (Math.random() - 0.5) * 1.5;

        // Blue color with varying opacity for better visibility
        const opacity = Math.random() * 0.5 + 0.3;
        this.color = `rgba(30, 144, 255, ${opacity})`;
      }

      update() {
        // Natural movement
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce off walls
        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX;
        }

        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY;
        }

        // Mouse effect
        if (mouseEffect && hasMouseMoved.current) {
          const dx = mousePositionRef.current.x - this.x;
          const dy = mousePositionRef.current.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouseRadius) {
            // Calculate force - stronger when closer
            const force = (mouseRadius - distance) / mouseRadius;

            // Push particles away from mouse
            const directionX = dx / distance || 0; // Avoid division by zero
            const directionY = dy / distance || 0;

            // Apply force - use mouseStrength to control intensity
            this.x -= directionX * force * mouseStrength;
            this.y -= directionY * force * mouseStrength;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    // Initialize particles
    const init = () => {
      particles.length = 0; // Clear existing particles
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    // Connect particles with lines
    const connect = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            // Opacity based on distance
            const opacity = 1 - distance / connectionDistance;
            ctx.strokeStyle = `rgba(30, 144, 255, ${opacity * 0.5})`;
            ctx.lineWidth = Math.max(0.5, opacity);

            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }

      connect();
      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    init();
    animate();

    // Cleanup function
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("resize", resize);

      if (mouseEffect) {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("touchmove", handleTouchMove);
      }
    };
  }, [
    particleCount,
    connectionDistance,
    mouseEffect,
    mouseRadius,
    mouseStrength,
  ]);

  return (
    <motion.div
      className={`absolute inset-0 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <canvas ref={canvasRef} className="w-full h-full"></canvas>
    </motion.div>
  );
}
