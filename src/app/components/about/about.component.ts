import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  coreSkills = [
    'Full-Stack Development', 'Angular', 'Node.js', 'Express.js', 'MongoDB',
    'Python', 'JavaScript', 'TypeScript', 'React.js', 'AI/ML', 
    'Real-time Analytics', 'Bot Control Systems', 'Problem Solving', 'Team Leadership'
  ];

  personalInfo = [
    { icon: 'fas fa-user', label: 'Name', value: 'Raunak Kumar' },
    { icon: 'fas fa-birthday-cake', label: 'Age', value: '20 years' },
    { icon: 'fas fa-map-marker-alt', label: 'Location', value: 'Chennai, India' },
    { icon: 'fas fa-envelope', label: 'Email', value: 'vtu24373@veltech.edu.in' },
    { icon: 'fas fa-phone', label: 'Phone', value: '+91 7640248488' },
    { icon: 'fas fa-language', label: 'Languages', value: 'Hindi, English' },
    { icon: 'fas fa-graduation-cap', label: 'Education', value: 'B.Tech CSE (3rd Year)' },
    { icon: 'fas fa-university', label: 'University', value: 'Vel Tech Dr.RR Dr.SR University' }
  ];

  education = [
    {
      period: '2023 - Present',
      degree: 'B.TECH Computer Science Engineering',
      institution: 'Vel Tech Dr.RR Dr.SR University',
      location: 'Chennai, India',
      description: 'Actively involved in technical and academic events. Participated in multiple national and inter-college hackathons, developing innovative tech solutions under tight deadlines. Currently in 3rd year with strong focus on Full-Stack Development, AI/ML, and IoT.',
      achievements: [
        'Participated in Smart India Hackathon (SIH)',
        'Represented university in Hack Storm competition',
        'Certificate of Excellence in DSA MasterMind',
        'Active member of Computer Society of India (CSI)',
        'Completed multiple technical workshops and certifications',
        'Built 8+ major projects including Railway Gate Automation',
        'Successfully completed Full-Stack Development internships'
      ]
    },
    {
      period: '2020 - 2022',
      degree: '12th Grade',
      institution: 'S.N.A. Evening College, Barh',
      location: 'Barh, India',
      description: 'Completed higher secondary education with focus on science and mathematics.',
      achievements: []
    },
    {
      period: '2016 - 2020',
      degree: '10th Grade',
      institution: 'Sarswati Vidya Mandir, Gulabagh, Barh',
      location: 'Barh, India',
      description: 'Participated in school-level sports, inter-school quizzes, cultural programs (Sanskritik), and science exhibitions, fostering teamwork, creativity, and practical learning.',
      achievements: [
        'Participated in science exhibitions',
        'Active in cultural programs and sports',
        'Winner in inter-school quiz competitions'
      ]
    }
  ];

  interests = [
    {
      icon: 'fas fa-code',
      title: 'Coding',
      description: 'Passionate about writing clean, efficient code and exploring new programming languages and frameworks.'
    },
    {
      icon: 'fas fa-trophy',
      title: 'Hackathons',
      description: 'Love participating in hackathons to solve real-world problems and collaborate with talented developers.'
    },
    {
      icon: 'fas fa-robot',
      title: 'AI & ML',
      description: 'Fascinated by artificial intelligence and machine learning applications in solving complex problems.'
    },
    {
      icon: 'fas fa-microchip',
      title: 'IoT Projects',
      description: 'Enjoy building Internet of Things projects that bridge the physical and digital worlds.'
    },
    {
      icon: 'fas fa-book-reader',
      title: 'Learning',
      description: 'Continuous learner who loves exploring new technologies and staying updated with industry trends.'
    },
    {
      icon: 'fas fa-users',
      title: 'Mentoring',
      description: 'Enjoy helping and mentoring junior students in their programming and project development journey.'
    },
    {
      icon: 'fas fa-gamepad',
      title: 'Gaming',
      description: 'Casual gamer who enjoys strategy games and finds inspiration in game development concepts.'
    },
    {
      icon: 'fas fa-camera',
      title: 'Photography',
      description: 'Amateur photographer who loves capturing moments and exploring creative visual storytelling.'
    }
  ];

  values = [
    {
      icon: 'fas fa-lightbulb',
      title: 'Innovation',
      description: 'Always seeking creative solutions and pushing the boundaries of what\'s possible with technology.'
    },
    {
      icon: 'fas fa-handshake',
      title: 'Collaboration',
      description: 'Believe in the power of teamwork and open communication to achieve extraordinary results.'
    },
    {
      icon: 'fas fa-graduation-cap',
      title: 'Continuous Learning',
      description: 'Committed to lifelong learning and staying curious about emerging technologies and methodologies.'
    },
    {
      icon: 'fas fa-heart',
      title: 'Passion',
      description: 'Approach every project with enthusiasm and dedication to deliver high-quality solutions.'
    },
    {
      icon: 'fas fa-balance-scale',
      title: 'Integrity',
      description: 'Maintain honesty and ethical standards in all professional and personal interactions.'
    },
    {
      icon: 'fas fa-rocket',
      title: 'Excellence',
      description: 'Strive for excellence in everything I do, from code quality to user experience.'
    }
  ];

  constructor() { }

  ngOnInit(): void { }
}