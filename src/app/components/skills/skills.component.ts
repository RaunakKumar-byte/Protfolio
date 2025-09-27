import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  technicalSkills = [
    { name: 'Full-Stack Development', level: 90, category: 'Web Development' },
    { name: 'Angular', level: 85, category: 'Frontend' },
    { name: 'Node.js', level: 88, category: 'Backend' },
    { name: 'Express.js', level: 85, category: 'Backend' },
    { name: 'MongoDB', level: 80, category: 'Database' },
    { name: 'Python', level: 85, category: 'Programming' },
    { name: 'JavaScript', level: 90, category: 'Programming' },
    { name: 'TypeScript', level: 85, category: 'Programming' },
    { name: 'React.js', level: 75, category: 'Frontend' },
    { name: 'AI/ML', level: 75, category: 'AI/ML' },
    { name: 'Real-time Analytics', level: 80, category: 'Analytics' },
    { name: 'Bot Control Systems', level: 70, category: 'Automation' },
    { name: 'Problem Solving', level: 95, category: 'Soft Skills' }
  ];

  certifications = [
    {
      title: 'Getting Started with AI on Jetson Nano',
      issuer: 'NVIDIA',
      date: 'July 2025',
      credentialId: '_SMMCkJuTvGTGRZ4HPswog',
      description: 'Gained hands-on exposure to AI workflows including image classification, regression, and deploying models on edge devices.',
      skills: ['AI', 'Jetson Nano', 'Edge Computing', 'Computer Vision']
    },
    {
      title: 'The Complete Full-Stack Web Development Bootcamp',
      issuer: 'Udemy',
      date: 'April 2025',
      credentialId: 'UC-de67fc71-cafe-4e38-a73b-6cf1bc423ae5',
      description: 'Intensive Full-Stack Development Bootcamp covering front-end and back-end technologies, including HTML, CSS, JavaScript, Node.js, Express, MongoDB, and more.',
      skills: ['Full-Stack', 'Node.js', 'Express', 'MongoDB', 'JavaScript', 'Web Development']
    },
    {
      title: 'JavaScript (Basic)',
      issuer: 'HackerRank',
      date: 'June 2025',
      credentialId: 'https://www.hackerrank.com/certificates/c4d9d2d648bd',
      description: 'Validates understanding of core JavaScript concepts like functions, scope, inheritance, and more.',
      skills: ['JavaScript', 'Programming', 'Problem Solving']
    },
    {
      title: 'Certificate of Excellence in DSA MasterMind',
      issuer: 'Unstop',
      date: 'June 2025',
      credentialId: '0f6e8d4f-017e-4e51-bfbe-df0c8bb6b469',
      description: 'Excellence certificate in Data Structures and Algorithms MasterMind MCQ Elimination Round of CodeClash.',
      skills: ['Data Structures', 'Algorithms', 'Problem Solving', 'Competitive Programming']
    },
    {
      title: 'Data Structures & Algorithms in Python: Sorting Algorithms',
      issuer: 'Skillsoft',
      date: 'April 2025',
      credentialId: '140656963',
      description: 'Comprehensive course on sorting algorithms and data structures implementation in Python.',
      skills: ['Python', 'Data Structures', 'Algorithms', 'Sorting']
    },
    {
      title: 'Frontend Quiz Participation',
      issuer: 'Unstop',
      date: 'June 2025',
      credentialId: 'bf3b32c8-078c-44a4-b47d-57ccf33c9517',
      description: 'Participation certificate in Frontend Development Quiz showcasing frontend knowledge.',
      skills: ['Frontend Development', 'Web Technologies', 'UI/UX']
    },
    {
      title: 'T20DSAChallenge - Sliding Windows',
      issuer: 'AUDEVDAY',
      date: 'June 2025',
      credentialId: 'T20DSAChallenge',
      description: 'Certificate of participation in T20DSAChallenge focusing on Sliding Windows algorithm technique.',
      skills: ['Data Structures', 'Algorithms', 'Sliding Window', 'Problem Solving']
    }
  ];

  achievements = [
    {
      title: 'Smart India Hackathon (SIH) Participant',
      description: 'Represented Vel Tech University in national-level hackathon with innovative tech solutions.',
      year: '2024-2025',
      category: 'Hackathon'
    },
    {
      title: 'Hack Storm Competition Participant',
      description: 'Represented Veltech University as Team vtu24373 in Hack Storm competition organized by Build with Vision via Unstop.',
      year: '2025',
      category: 'Competition'
    },
    {
      title: 'CodeFolio Portfolio Showdown - Certificate of Appreciation',
      description: 'Received certificate of appreciation for participating in CODEFOLIO – The Ultimate Portfolio Showdown, organized by F.A.C.E, S.P.I.T.',
      year: '2025',
      category: 'Recognition'
    },
    {
      title: '100+ DSA Problems Solved',
      description: 'Solved 100+ Data Structures and Algorithms problems on HackerRank and other platforms.',
      year: '2024-2025',
      category: 'Problem Solving'
    },
    {
      title: '8+ Major Projects Completed',
      description: 'Built comprehensive projects including Railway Gate Automation, Mental Health Systems, Traffic Management, and more.',
      year: '2023-2025',
      category: 'Projects'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getSkillsByCategory(category: string) {
    return this.technicalSkills.filter(skill => skill.category === category);
  }

  getAchievementsByCategory(category: string) {
    return this.achievements.filter(achievement => achievement.category === category);
  }

}
