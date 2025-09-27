import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-hackathons',
  templateUrl: './hackathons.component.html',
  styleUrls: ['./hackathons.component.scss']
})
export class HackathonsComponent implements OnInit {
  
  hackathons = [
    {
      id: 1,
      name: 'Smart India Hackathon (SIH)',
      year: '2024-2025',
      status: 'Participant',
      description: 'Represented Vel Tech University in national-level hackathon with innovative tech solutions for railway automation.',
      technologies: ['Raspberry Pi', 'Computer Vision', 'Python', 'IoT'],
      teamSize: 4,
      duration: '36 hours',
      achievement: 'Certificate of Participation',
      image: 'assets/images/hackathons/sih-logo.png',
      certificate: 'assets/images/certificates/sih-certificate.pdf',
      project: 'Automated Railway Gate System',
      impact: 'Enhanced railway safety through automated gate control system'
    },
    {
      id: 2,
      name: 'Hack Storm',
      year: '2024',
      status: 'Participant',
      description: 'Build with Vision via Unstop hackathon focusing on innovative solutions for real-world problems.',
      technologies: ['Web Development', 'AI/ML', 'Node.js', 'MongoDB'],
      teamSize: 3,
      duration: '24 hours',
      achievement: 'Certificate of Participation',
      image: 'assets/images/hackathons/hackstorm-logo.png',
      certificate: 'assets/images/certificates/hackstorm-certificate.pdf',
      project: 'Disaster Relief Platform',
      impact: 'Created platform for efficient disaster management and resource allocation'
    },
    {
      id: 3,
      name: 'CodeClash - The Battle of Logic',
      year: '2025',
      status: 'Winner',
      description: 'DSA MasterMind MCQ Elimination Round showcasing problem-solving skills and algorithmic thinking.',
      technologies: ['Data Structures', 'Algorithms', 'Problem Solving', 'C++'],
      teamSize: 1,
      duration: '2 hours',
      achievement: 'Certificate of Excellence',
      image: 'assets/images/hackathons/codeclash-logo.png',
      certificate: 'assets/images/certificates/codeclash-certificate.pdf',
      project: 'Algorithm Optimization',
      impact: 'Achieved top 10% ranking in competitive programming challenge'
    },
    {
      id: 4,
      name: 'T20DSA Challenge - Sliding Windows',
      year: '2025',
      status: 'Participant',
      description: 'AUDEVDAY organized DSA challenge focusing on sliding window algorithms and optimization techniques.',
      technologies: ['Sliding Window', 'Two Pointers', 'Array Processing', 'Python'],
      teamSize: 1,
      duration: '1 week',
      achievement: 'Certificate of Completion',
      image: 'assets/images/hackathons/t20dsa-logo.png',
      certificate: 'assets/images/certificates/t20dsa-certificate.pdf',
      project: 'Optimized Sliding Window Solutions',
      impact: 'Mastered advanced sliding window techniques for array problems'
    }
  ];

  competitions = [
    {
      id: 1,
      name: 'Frontend Quiz Competition',
      year: '2025',
      platform: 'Unstop',
      category: 'Web Development',
      score: '85%',
      rank: 'Top 15%',
      description: 'Comprehensive frontend development quiz covering HTML, CSS, JavaScript, and modern frameworks.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Angular'],
      achievement: 'Certificate of Participation',
      certificate: 'assets/images/certificates/frontend-quiz-certificate.pdf'
    },
    {
      id: 2,
      name: 'JavaScript (Basic) Certification',
      year: '2025',
      platform: 'HackerRank',
      category: 'Programming',
      score: '100%',
      rank: 'Perfect Score',
      description: 'HackerRank JavaScript certification validating core JavaScript concepts and programming skills.',
      technologies: ['JavaScript', 'ES6', 'Functions', 'Scope', 'Closures'],
      achievement: 'HackerRank Certificate',
      certificate: 'assets/images/certificates/javascript-certificate.pdf'
    }
  ];

  stats = [
    { label: 'Hackathons Participated', value: '4', icon: 'fas fa-trophy' },
    { label: 'Competitions Won', value: '1', icon: 'fas fa-medal' },
    { label: 'Certificates Earned', value: '6', icon: 'fas fa-certificate' },
    { label: 'Technologies Used', value: '15+', icon: 'fas fa-code' }
  ];

  constructor() { }

  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }

  getStatusClass(status: string): string {
    switch(status) {
      case 'Winner': return 'badge-success';
      case 'Participant': return 'badge-primary';
      case 'Finalist': return 'badge-warning';
      default: return 'badge-secondary';
    }
  }

  getCategoryClass(category: string): string {
    switch(category) {
      case 'Web Development': return 'category-web';
      case 'Programming': return 'category-programming';
      case 'AI/ML': return 'category-ai';
      case 'IoT': return 'category-iot';
      default: return 'category-default';
    }
  }

  viewCertificate(certificatePath: string): void {
    // Open certificate in new tab
    window.open(certificatePath, '_blank');
  }
}