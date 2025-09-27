import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { AnimationService } from '../../services/animation.service';
import { gsap } from 'gsap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('nameText') nameText!: ElementRef;
  @ViewChild('titleText') titleText!: ElementRef;
  @ViewChild('profileCard') profileCard!: ElementRef;

  stats = [
    { icon: 'fas fa-calendar-alt', number: '3+', label: 'Years of Learning' },
    { icon: 'fas fa-project-diagram', number: '8+', label: 'Projects Completed' },
    { icon: 'fas fa-code', number: '15+', label: 'Technologies' },
    { icon: 'fas fa-certificate', number: '7+', label: 'Certifications' }
  ];

  featuredProjects = [
    {
      title: 'Automated Railway Gate System',
      description: 'Raspberry Pi & Computer Vision system for automated railway crossing safety with IR sensors and motorized gates.',
      image: '/assets/images/railway2.jpg',
      technologies: ['Raspberry Pi', 'Python', 'OpenCV', 'Computer Vision'],
      github: 'https://github.com/RaunakKumar-byte',
      demo: '#'
    },
    {
      title: 'Mindspace - Mental Health Wellness',
      description: 'AI-driven mental health platform with emotion detection, mood tracking, and wellness support using Computer Vision & NLP.',
      image: '/assets/images/projects/mindspace-logo.png',
      technologies: ['Node.js', 'OpenCV', 'TensorFlow', 'MongoDB'],
      github: 'https://github.com/RaunakKumar-byte',
      demo: '#'
    },
    {
      title: 'Plant Detection System',
      description: 'AI-powered plant health monitoring and disease detection system with real-time analytics dashboard. Built during internship with comprehensive backend API and modern frontend.',
      image: '/assets/images/projects/plant-detection.jpg',
      technologies: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'AI/ML', 'Real-time Analytics'],
      github: 'https://github.com/princeraj07m/Khetloom',
      demo: 'https://khetloom.live'
    }
  ];

  constructor(private animationService: AnimationService) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.initAnimations();
  }

  private initAnimations(): void {
    // Typing animation for name and title
    setTimeout(() => {
      this.animationService.typeWriter(this.nameText.nativeElement, 'Raunak Kumar', 0.1);
    }, 1000);

    setTimeout(() => {
      this.animationService.typeWriter(this.titleText.nativeElement, 'Full-Stack Developer', 0.08);
    }, 2500);

    // Profile card hover animation
    const profileCard = this.profileCard.nativeElement;
    profileCard.addEventListener('mouseenter', () => {
      gsap.to(profileCard, {
        scale: 1.05,
        rotationY: 5,
        duration: 0.3,
        ease: "power2.out"
      });
    });

    profileCard.addEventListener('mouseleave', () => {
      gsap.to(profileCard, {
        scale: 1,
        rotationY: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    });

    // Animate stats numbers
    this.animateStatsNumbers();
  }

  private animateStatsNumbers(): void {
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach((stat, index) => {
      const finalNumber = this.stats[index].number;
      const numericValue = parseInt(finalNumber.replace(/\D/g, ''));
      
      gsap.fromTo(stat, 
        { textContent: 0 },
        {
          textContent: numericValue,
          duration: 2,
          delay: index * 0.2,
          ease: "power2.out",
          snap: { textContent: 1 },
          onUpdate: function() {
            const current = Math.round(this['targets']()[0].textContent);
            stat.textContent = current + (finalNumber.includes('+') ? '+' : '');
          },
          scrollTrigger: {
            trigger: stat,
            start: "top 80%"
          }
        }
      );
    });
  }

  onProjectHover(event: MouseEvent): void {
    const card = event.currentTarget as HTMLElement;
    gsap.to(card, {
      y: -10,
      scale: 1.02,
      duration: 0.3,
      ease: "power2.out"
    });
  }

  onProjectLeave(event: MouseEvent): void {
    const card = event.currentTarget as HTMLElement;
    gsap.to(card, {
      y: 0,
      scale: 1,
      duration: 0.3,
      ease: "power2.out"
    });
  }
}