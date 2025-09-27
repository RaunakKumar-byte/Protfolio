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
}