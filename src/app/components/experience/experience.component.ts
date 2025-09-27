import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  experiences = [
    {
      title: 'Frontend Developer',
      company: 'Tech Company',
      period: '2022 - Present',
      description: 'Developing responsive web applications using Angular and modern frontend technologies.',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'RxJS']
    },
    {
      title: 'Junior Developer',
      company: 'Startup Inc',
      period: '2021 - 2022',
      description: 'Worked on various web projects and gained experience in full-stack development.',
      technologies: ['JavaScript', 'React', 'Node.js', 'MongoDB']
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
