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
  @ViewChild('typingText') typingText!: ElementRef;
  @ViewChild('profileCard') profileCard!: ElementRef;

  typingRoles = [
    'Full-Stack Developer',
    'DSA Enthusiast', 
    'Innovator',
    'Problem Solver',
    'Tech Explorer'
  ];
  currentRoleIndex = 0;
  currentText = '';
  isDeleting = false;
  typingSpeed = 100;
  deletingSpeed = 50;
  pauseTime = 2000;

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
    this.startTypingAnimation();
  }

  private initAnimations(): void {
    // Typing animation for name
    setTimeout(() => {
      this.animationService.typeWriter(this.nameText.nativeElement, 'Raunak Kumar', 0.1);
    }, 1000);

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

  private startTypingAnimation(): void {
    setTimeout(() => {
      this.typeText();
    }, 3000);
  }

  private typeText(): void {
    const currentRole = this.typingRoles[this.currentRoleIndex];
    
    if (this.isDeleting) {
      this.currentText = currentRole.substring(0, this.currentText.length - 1);
    } else {
      this.currentText = currentRole.substring(0, this.currentText.length + 1);
    }

    if (this.typingText) {
      this.typingText.nativeElement.textContent = this.currentText;
    }

    let typeSpeed = this.isDeleting ? this.deletingSpeed : this.typingSpeed;

    if (!this.isDeleting && this.currentText === currentRole) {
      typeSpeed = this.pauseTime;
      this.isDeleting = true;
    } else if (this.isDeleting && this.currentText === '') {
      this.isDeleting = false;
      this.currentRoleIndex = (this.currentRoleIndex + 1) % this.typingRoles.length;
      typeSpeed = 500;
    }

    setTimeout(() => this.typeText(), typeSpeed);
  }
}