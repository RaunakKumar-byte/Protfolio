import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects = [
    {
      title: 'Automated Railway Gate System',
      description: 'Developed using Raspberry Pi, IR sensors, and Computer Vision to enhance safety at level crossings by minimizing human errors. The system detects incoming trains and automatically controls motorized gates.',
      image: 'assets/images/railway2.jpg',
      technologies: ['Raspberry Pi', 'Python', 'OpenCV', 'C Programming', 'Computer Vision'],
      github: 'https://github.com/RaunakKumar-byte',
      live: '#'
    },
    {
      title: 'Mindspace - Mental Health Wellness System',
      description: 'AI-driven mental health wellness system with emotion detection, mood tracking, and wellness support. Integrated Computer Vision & NLP for real-time emotion recognition.',
      image: 'assets/images/projects/mindspace-logo.png',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'OpenCV', 'TensorFlow', 'NLP', 'EJS'],
      github: 'https://github.com/RaunakKumar-byte',
      live: '#'
    },
    {
      title: 'Plant Detection System - KhetLoom',
      description: 'AI-powered plant health monitoring and disease detection system with comprehensive dashboard. Features real-time plant monitoring, bot control, analytics, and automated farming tasks. Built during internship with full-stack development including Angular frontend and Node.js backend.',
      image: 'assets/images/projects/plant-detection.jpg',
      technologies: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'AI/ML', 'Real-time Analytics', 'Bot Control'],
      github: 'https://github.com/princeraj07m/Khetloom',
      live: 'https://khetloom.live'
    },
    {
      title: 'Disaster Relief Platform',
      description: 'Crowdsourced disaster management and early warning system with IoT integration. Built for hackathon with features for disaster reporting, volunteer coordination, and real-time alerts.',
      image: 'assets/images/projects/disaster-relief.jpg',
      technologies: ['Node.js', 'MongoDB', 'IoT', 'Express.js', 'GSM Integration'],
      github: 'https://github.com/RaunakKumar-byte/disaster-relief-platform',
      live: 'https://disaster-relief-platform.onrender.com/'
    },
    {
      title: 'AgriEcho - AI Assistant for Farmers',
      description: 'Offline-first PWA for farmers with AI-powered crop disease detection and AR crop doctor feature. Works offline with IndexedDB and TensorFlow Lite integration.',
      image: 'assets/images/projects/agriecho.jpg',
      technologies: ['TensorFlow Lite', 'PWA', 'AR.js', 'Node.js', 'IndexedDB', 'Offline-first'],
      github: 'https://github.com/RaunakKumar-byte/AgriEcho3214',
      live: 'https://agriecho3214.onrender.com/'
    },
    {
      title: 'Plant Detection System',
      description: 'Computer Vision-based plant health and disease detection system with real-time monitoring capabilities. Integrated with web backend for plant health analytics.',
      image: 'assets/images/projects/plant-detection.jpg',
      technologies: ['Computer Vision', 'OpenCV', 'TensorFlow', 'Node.js', 'MongoDB', 'Real-time Monitoring'],
      github: 'https://github.com/RaunakKumar-byte',
      live: '#'
    },
    {
      title: 'DSA Problem Solutions',
      description: 'Comprehensive collection of 100+ Data Structures and Algorithms problems solved on HackerRank and other platforms. Includes solutions in Java, Python, and JavaScript.',
      image: 'assets/images/projects/dsa-problems.jpg',
      technologies: ['Java', 'Python', 'JavaScript', 'Data Structures', 'Algorithms', 'Problem Solving'],
      github: 'https://github.com/RaunakKumar-byte/Java-Hackerrank-problem',
      live: '#'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
