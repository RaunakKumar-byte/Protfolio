import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects = [
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with Angular',
      image: 'assets/images/project1.jpg',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'Bootstrap'],
      github: '#',
      live: '#'
    },
    {
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with user authentication',
      image: 'assets/images/project2.jpg',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Express'],
      github: '#',
      live: '#'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
