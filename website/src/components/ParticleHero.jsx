"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ParticleHero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let particles = [];
    
    // Mouse interaction
    const mouse = { x: null, y: null, radius: 120 };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    
    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    class Particle {
      constructor(x, y, dx, dy, size, r, g, b, baseOpacity) {
        this.baseX = x;
        this.baseY = y;
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.size = size;
        this.r = r;
        this.g = g;
        this.b = b;
        this.baseOpacity = baseOpacity;
        this.currentOpacity = baseOpacity;
        
        // Twinkling effect: 30% of particles twinkle
        this.isTwinkling = Math.random() < 0.3;
        this.twinklePhase = Math.random() * Math.PI * 2;
        this.twinkleSpeed = (Math.random() * 0.015) + 0.015; // roughly 2s-4s cycle
      }

      draw(isHovered = false) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        
        let opacity = this.currentOpacity;
        if (isHovered) {
          opacity = 1.0;
          ctx.shadowBlur = 15;
          ctx.shadowColor = "#FFFFFF";
        } else {
          ctx.shadowBlur = 4;
          ctx.shadowColor = "rgba(255, 255, 255, 0.70)";
        }
        
        ctx.fillStyle = `rgba(${this.r}, ${this.g}, ${this.b}, ${opacity})`;
        ctx.fill();
        ctx.closePath();
        
        // Reset shadow so it doesn't affect lines
        ctx.shadowBlur = 0;
      }

      update() {
        this.x += this.dx;
        this.y += this.dy;

        if (this.x > canvas.width || this.x < 0) this.dx = -this.dx;
        if (this.y > canvas.height || this.y < 0) this.dy = -this.dy;

        if (this.isTwinkling) {
          this.twinklePhase += this.twinkleSpeed;
          const sine = (Math.sin(this.twinklePhase) + 1) / 2;
          this.currentOpacity = 0.4 + (sine * 0.3); // Fade from 40% to 70%
        } else {
          this.currentOpacity = this.baseOpacity;
        }

        let isHovered = false;
        if (mouse.x != null && mouse.y != null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          let forceDirectionX = dx / distance;
          let forceDirectionY = dy / distance;
          
          if (distance < mouse.radius) {
            isHovered = true;
            this.x += forceDirectionX * 0.5;
            this.y += forceDirectionY * 0.5;
          }
        }

        this.draw(isHovered);
      }
    }

    const initParticles = () => {
      particles = [];
      const density = window.innerWidth < 768 ? 50 : 120;
      
      for (let i = 0; i < density; i++) {
        let size = ((Math.random() * 2 + 1) * 1.5) * 0.65; // size reduced by 35%
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let dx = (Math.random() - 0.5) * 0.3;
        let dy = (Math.random() - 0.5) * 0.3;
        
        const rand = Math.random();
        let r = 255, g = 255, b = 255; // All particles #FFFFFF
        let baseOpacity;

        if (rand > 0.8) {
          size *= 1.3;
          baseOpacity = 0.50; // Large particles
        } else if (rand > 0.4) {
          baseOpacity = 0.35; // Medium particles
        } else {
          size *= 0.7;
          baseOpacity = 0.22; // Small particles
        }

        particles.push(new Particle(x, y, dx, dy, size, r, g, b, baseOpacity));
      }
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      
      // Clear canvas with base background color
      ctx.fillStyle = "#0D0F14";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw subtle radial glow in center
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, canvas.width * 0.6);
      gradient.addColorStop(0, "rgba(255, 255, 255, 0.04)");
      gradient.addColorStop(0.7, "transparent");
      gradient.addColorStop(1, "transparent");
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Connect particles
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          let dx = particles[a].x - particles[b].x;
          let dy = particles[a].y - particles[b].y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          // If close enough, draw a line
          if (distance < 150) {
            let isNearMouse = false;
            if (mouse.x != null && mouse.y != null) {
              const dxCenter = mouse.x - (particles[a].x + particles[b].x) / 2;
              const dyCenter = mouse.y - (particles[a].y + particles[b].y) / 2;
              const distCenter = Math.sqrt(dxCenter * dxCenter + dyCenter * dyCenter);
              if (distCenter < mouse.radius) {
                isNearMouse = true;
              }
            }

            const opacityRatio = 1 - distance / 150;
            if (isNearMouse) {
              ctx.strokeStyle = `rgba(255, 255, 255, ${0.55 * opacityRatio})`;
            } else {
              ctx.strokeStyle = `rgba(255, 255, 255, ${0.12 * opacityRatio})`; // Ambient lines at 12%
            }
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
            ctx.closePath();
          }
        }
      }

      // Update & Draw particles
      particles.forEach(p => p.update());
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section 
      className="relative flex flex-col items-center justify-center overflow-hidden w-full"
      style={{ minHeight: "100vh", backgroundColor: "#0D0F14" }}
    >
      {/* Background Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-auto z-0"
      />

      {/* Radial Dark Vignette Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-[5]"
        style={{
          background: "radial-gradient(ellipse 70% 65% at 50% 48%, rgba(10, 12, 18, 0.55) 0%, rgba(10, 12, 18, 0.0) 100%)"
        }}
      />

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 mx-auto w-full pointer-events-none h-full pt-[64px] pb-4">
        
        {/* Pill Badge */}
        <div 
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full backdrop-blur-sm mx-auto mb-4 pointer-events-auto"
          style={{ 
            backgroundColor: "#1A1D26", 
            border: "1px solid #FFFFFF25",
            color: "#F5F5F5",
            fontSize: "13px",
            fontWeight: "500",
            letterSpacing: "0.5px"
          }}
        >
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "rgba(255, 255, 255, 0.75)" }} />
          Revenue-Focused Growth Agency
        </div>

        {/* H1 Titles */}
        <h1 
          className="mx-auto w-full flex flex-col gap-1 tracking-tight"
          style={{ 
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(40px, 5.5vw, 64px)", 
            lineHeight: "1.1",
            maxWidth: "800px",
            marginBottom: "20px",
            fontWeight: "800",
            textShadow: "0 2px 20px rgba(0,0,0,0.5)"
          }}
        >
          <span style={{ color: "#FFFFFF", fontWeight: "800" }}>Turn Marketing Into</span>
          <span 
            style={{ 
              background: "linear-gradient(to right, #4F6EF7, #6B8AFF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
              fontWeight: "800"
            }}
          >
            Predictable Revenue
          </span>
        </h1>

        {/* Subtext */}
        <p 
          className="mx-auto"
          style={{ 
            color: "#E0E0E0", 
            fontSize: "16px",
            maxWidth: "580px", 
            lineHeight: "1.6", 
            marginBottom: "28px",
            fontWeight: "400"
          }}
        >
          Websites, Performance Ads, Social Media and AI tools built for one outcome — measurable growth that compounds.{" "}
          <span style={{ color: "#4F6EF7", fontWeight: "600" }}>
            Fixed pricing. No lock-in. Built to scale.
          </span>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-7 pointer-events-auto w-full sm:w-auto">
          <Link
            href="/free-audit"
            className="inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-transform hover:-translate-y-0.5 w-full sm:w-auto text-[15px] px-7 h-12 no-underline"
            style={{ 
              backgroundColor: "#4F6EF7", 
              color: "#FFFFFF",
              boxShadow: "0 4px 20px rgba(79, 110, 247, 0.25)"
            }}
          >
            Get Free Marketing Audit
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all hover:bg-white/5 w-full sm:w-auto text-[15px] px-7 h-12 no-underline"
            style={{ 
              backgroundColor: "transparent", 
              border: "1.5px solid rgba(255,255,255,0.2)",
              color: "#FFFFFF",
            }}
          >
            View Services
          </Link>
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 pt-7 pointer-events-auto w-full max-w-4xl"
             style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          
          <div className="flex flex-col items-center flex-1 min-w-[120px]">
            <div className="text-[28px] font-bold" style={{ color: "#4F6EF7", fontFamily: "var(--font-heading)", lineHeight: "1.2" }}>17+</div>
            <div className="text-[11px] uppercase tracking-[0.15em] font-semibold mt-1" style={{ color: "#BEBEBE" }}>BRANDS SCALED</div>
          </div>
          
          <div className="hidden md:block w-px h-8" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}></div>
          
          <div className="flex flex-col items-center flex-1 min-w-[120px]">
            <div className="text-[28px] font-bold" style={{ color: "#4F6EF7", fontFamily: "var(--font-heading)", lineHeight: "1.2" }}>8.2x</div>
            <div className="text-[11px] uppercase tracking-[0.15em] font-semibold mt-1" style={{ color: "#BEBEBE" }}>AVERAGE ROAS</div>
          </div>
          
          <div className="hidden sm:block w-px h-8" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}></div>
          
          <div className="flex flex-col items-center flex-1 min-w-[120px]">
            <div className="text-[28px] font-bold" style={{ color: "#4F6EF7", fontFamily: "var(--font-heading)", lineHeight: "1.2" }}>₹10Cr+</div>
            <div className="text-[11px] uppercase tracking-[0.15em] font-semibold mt-1" style={{ color: "#BEBEBE" }}>REVENUE GENERATED</div>
          </div>

          <div className="hidden md:block w-px h-8" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}></div>
          
          <div className="flex flex-col items-center flex-1 min-w-[120px]">
            <div className="text-[28px] font-bold" style={{ color: "#4F6EF7", fontFamily: "var(--font-heading)", lineHeight: "1.2" }}>4.9/5</div>
            <div className="text-[11px] uppercase tracking-[0.15em] font-semibold mt-1" style={{ color: "#BEBEBE" }}>CLIENT RATING</div>
          </div>

        </div>

      </div>
    </section>
  );
}
