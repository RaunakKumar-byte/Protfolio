import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  experiences = [
    {
      title: 'Full-Stack Developer Intern',
      company: 'CodeShip Private Limited',
      period: '2024 - Present',
      description: 'Working on real-world client projects including Xity, X-Cross, YMCA, and EuropeWilliam websites. Gained hands-on experience in Angular development, dynamic page building, backend integration, and API calls. Participated in client meetings and requirement gathering processes.',
      technologies: ['Angular', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Client Management']
    },
    {
      title: 'Full-Stack Development Intern',
      company: 'Navodita Infotech',
      period: 'Jul 2025 - Aug 2025',
      description: 'Successfully completed intensive Full-Stack Development internship. Worked on hands-on projects enhancing proficiency in front-end and back-end technologies. Gained valuable experience in building real-world applications and deployment processes.',
      technologies: ['Full-Stack Development', 'Web Development', 'Project Management', 'Deployment', 'Real-world Applications']
    },
    {
      title: 'Student Developer',
      company: 'Vel Tech Dr.RR Dr.SR University',
      period: '2023 - Present',
      description: 'Active B.Tech CSE student participating in multiple hackathons, technical competitions, and project development. Built 8+ major projects including Railway Gate Automation, Mental Health Systems, and Traffic Management solutions. Represented university in national competitions.',
      technologies: ['Raspberry Pi', 'Computer Vision', 'Machine Learning', 'IoT', 'Python', 'OpenCV', 'TensorFlow', 'Problem Solving']
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
