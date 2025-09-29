import { Injectable } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  constructor() { }

  // Fade in animation
  fadeIn(element: any, duration: number = 1, delay: number = 0) {
    return gsap.fromTo(element, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration, delay, ease: "power2.out" }
    );
  }

  // Slide in from left
  slideInLeft(element: any, duration: number = 1, delay: number = 0) {
    return gsap.fromTo(element,
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration, delay, ease: "power2.out" }
    );
  }

  // Slide in from right
  slideInRight(element: any, duration: number = 1, delay: number = 0) {
    return gsap.fromTo(element,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration, delay, ease: "power2.out" }
    );
  }

  // Scale animation
  scaleIn(element: any, duration: number = 1, delay: number = 0) {
    return gsap.fromTo(element,
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration, delay, ease: "back.out(1.7)" }
    );
  }

  // Stagger animation for multiple elements
  staggerAnimation(elements: any, animation: string = 'fadeIn', stagger: number = 0.2) {
    const animations = {
      fadeIn: { from: { opacity: 0, y: 50 }, to: { opacity: 1, y: 0 } },
      slideUp: { from: { opacity: 0, y: 100 }, to: { opacity: 1, y: 0 } },
      scaleIn: { from: { opacity: 0, scale: 0.8 }, to: { opacity: 1, scale: 1 } }
    };

    const anim = animations[animation as keyof typeof animations] || animations.fadeIn;
    
    return gsap.fromTo(elements, anim.from, {
      ...anim.to,
      duration: 1,
      stagger: stagger,
      ease: "power2.out"
    });
  }

  // Scroll triggered animation
  scrollTriggerAnimation(element: any, animation: any, trigger?: any) {
    return gsap.fromTo(element, animation.from, {
      ...animation.to,
      scrollTrigger: {
        trigger: trigger || element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });
  }

  // Progress bar animation
  animateProgressBar(element: any, width: string, duration: number = 2) {
    return gsap.to(element, {
      width: width,
      duration: duration,
      ease: "power2.out"
    });
  }

  // Typing animation
  typeWriter(element: any, text: string, speed: number = 0.05) {
    const chars = text.split('');
    element.textContent = '';
    
    return gsap.to({}, {
      duration: chars.length * speed,
      ease: "none",
      onUpdate: function() {
        const progress = Math.round(this['progress']() * chars.length);
        element.textContent = chars.slice(0, progress).join('');
      }
    });
  }

  // Parallax effect
  parallax(element: any, speed: number = 0.5) {
    gsap.to(element, {
      yPercent: -50 * speed,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  }

  // Initialize scroll animations for the entire page
  initializeScrollAnimations(): void {
    // Animate elements with scroll-animate class
    gsap.utils.toArray('.scroll-animate').forEach((element: any) => {
      gsap.fromTo(element, 
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Animate elements with slide-left class
    gsap.utils.toArray('.slide-left').forEach((element: any) => {
      gsap.fromTo(element,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Animate elements with slide-right class
    gsap.utils.toArray('.slide-right').forEach((element: any) => {
      gsap.fromTo(element,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Animate elements with zoom-in class
    gsap.utils.toArray('.zoom-in').forEach((element: any) => {
      gsap.fromTo(element,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Staggered animations for stagger-item elements
    gsap.utils.toArray('.stagger-item').forEach((element: any, index: number) => {
      gsap.fromTo(element,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }

  // Enhanced hover effects
  addHoverEffects(): void {
    // Enhanced hover lift effect
    gsap.utils.toArray('.hover-lift-enhanced').forEach((element: any) => {
      element.addEventListener('mouseenter', () => {
        gsap.to(element, {
          y: -15,
          scale: 1.02,
          duration: 0.4,
          ease: "power2.out"
        });
      });

      element.addEventListener('mouseleave', () => {
        gsap.to(element, {
          y: 0,
          scale: 1,
          duration: 0.4,
          ease: "power2.out"
        });
      });
    });

    // Enhanced glow effect
    gsap.utils.toArray('.hover-glow-enhanced').forEach((element: any) => {
      element.addEventListener('mouseenter', () => {
        gsap.to(element, {
          scale: 1.05,
          duration: 0.4,
          ease: "power2.out"
        });
      });

      element.addEventListener('mouseleave', () => {
        gsap.to(element, {
          scale: 1,
          duration: 0.4,
          ease: "power2.out"
        });
      });
    });

    // Magnetic effect
    gsap.utils.toArray('.magnetic').forEach((element: any) => {
      element.addEventListener('mousemove', (e: MouseEvent) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        gsap.to(element, {
          x: x * 0.1,
          y: y * 0.1,
          duration: 0.3,
          ease: "power2.out"
        });
      });

      element.addEventListener('mouseleave', () => {
        gsap.to(element, {
          x: 0,
          y: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });
  }

  // Initialize all animations
  initializeAllAnimations(): void {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
      this.initializeScrollAnimations();
      this.addHoverEffects();
      this.optimizeForMobile();
    } else {
      // For users who prefer reduced motion, just show elements
      gsap.set(['.scroll-animate', '.stagger-item'], { opacity: 1, y: 0, x: 0, scale: 1 });
    }
  }

  // Check if device is mobile/touch
  private isMobileDevice(): boolean {
    return window.innerWidth <= 768 || ('ontouchstart' in window);
  }

  // Optimize animations for mobile
  private optimizeForMobile(): void {
    if (this.isMobileDevice()) {
      // Reduce animation durations
      gsap.globalTimeline.timeScale(1.5);
      
      // Disable complex hover effects on mobile
      const hoverElements = document.querySelectorAll('.hover-lift-enhanced, .hover-glow-enhanced, .magnetic, .tilt-3d, .morph-animation');
      hoverElements.forEach(element => {
        element.classList.add('mobile-optimized');
      });
    }
  }

  // Reset all animations
  resetAnimations(): void {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    gsap.set(['.scroll-animate', '.stagger-item', '.slide-left', '.slide-right', '.zoom-in'], {
      clearProps: "all"
    });
  }
}