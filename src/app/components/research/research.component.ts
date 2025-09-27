import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss']
})
export class ResearchComponent implements OnInit {

  researchProjects = [
    {
      title: 'Automated Railway Gate System using Computer Vision',
      description: 'Research project focusing on safety enhancement at railway crossings through automated gate control systems.',
      category: 'Computer Vision',
      status: 'Completed',
      year: '2024',
      supervisor: 'Dr. Rajesh Kumar',
      institution: 'Vel Tech University',
      pdf: 'assets/research/railway-system.pdf',
      abstract: 'This research presents an innovative approach to railway safety through automated gate control systems...'
    },
    {
      title: 'Mental Health Detection using AI/ML',
      description: 'Academic research on emotion detection and mental health assessment using machine learning algorithms.',
      category: 'Machine Learning',
      status: 'In Progress',
      year: '2024-2025',
      supervisor: 'Dr. Priya Sharma',
      institution: 'Vel Tech University',
      pdf: 'assets/research/mental-health.pdf',
      abstract: 'This study explores the application of machine learning in mental health assessment...'
    }
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

  downloadPDF(pdfPath: string): void {
    window.open(pdfPath, '_blank');
  }
}