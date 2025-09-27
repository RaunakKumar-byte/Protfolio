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
    { icon: 'fas fa-calendar-alt', number: '2+', label: 'Years of Learning' },
    { icon: 'fas fa-project-diagram', number: '5+', label: 'Projects Completed' },
    { icon: 'fas fa-code', number: '8+', label: 'Technologies' },
    { icon: 'fas fa-heart', number: '100%', label: 'Dedication' }
  ];

  featuredProjects = [
    {
      title: 'EarlyGuard - Disaster Relief System',
      description: 'Crowdsourced disaster management and early warning system with IoT integration.',
      image: '/assets/images/projects/earlyguard.jpg',
      technologies: ['Node.js', 'MongoDB', 'IoT', 'Express.js'],
      github: 'https://github.com/RaunakKumar-byte/disaster-relief-platform',
      demo: 'https://disaster-relief-platform.onrender.com/'
    },
    {
      title: 'AgriEcho - AI Assistant',
      description: 'Offline-first PWA for farmers with AI-powered crop disease detection.',
      image: '/assets/images/projects/agriecho.jpg',
      technologies: ['TensorFlow', 'PWA', 'AR.js', 'Node.js'],
      github: 'https://github.com/RaunakKumar-byte/AgriEcho3214',
      demo: 'https://agriecho3214.onrender.com/'
    },
    {
      title: 'Mindspace - Mental Health',
      description: 'AI-driven mental health wellness system with emotion detection.',
      image: '/assets/images/projects/mindspace.jpg',
      technologies: ['OpenCV', 'TensorFlow', 'NLP', 'MongoDB'],
      github: 'https://github.com/RaunakKumar-byte',
      demo: '#'
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