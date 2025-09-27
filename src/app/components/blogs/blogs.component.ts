import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  
  blogs = [
    {
      id: 1,
      title: 'Building My First Full-Stack Application with Angular and Node.js',
      excerpt: 'A comprehensive guide to creating a modern web application from scratch, covering frontend development with Angular, backend API development with Node.js, and database integration with MongoDB.',
      content: 'In this detailed blog post, I walk through the complete process of building my first full-stack application. Starting with project setup and configuration, I cover Angular component architecture, TypeScript best practices, Node.js API development, MongoDB database design, and deployment strategies. The post includes code examples, common pitfalls to avoid, and lessons learned during the development process.',
      author: 'Raunak Kumar',
      date: '2024-08-15',
      readTime: '8 min read',
      category: 'Full-Stack Development',
      tags: ['Angular', 'Node.js', 'MongoDB', 'TypeScript', 'Web Development'],
      image: 'assets/images/blogs/fullstack-blog.jpg',
      featured: true,
      views: 1250,
      likes: 89
    },
    {
      id: 2,
      title: 'My Journey Through Data Structures and Algorithms',
      excerpt: 'Reflecting on my DSA learning journey, from basic concepts to advanced algorithms, and how it transformed my problem-solving approach.',
      content: 'This blog chronicles my personal journey through data structures and algorithms. I share my learning methodology, favorite resources, practice strategies, and how DSA concepts apply to real-world software development. The post includes my progression from basic arrays and linked lists to advanced topics like dynamic programming and graph algorithms.',
      author: 'Raunak Kumar',
      date: '2024-07-20',
      readTime: '6 min read',
      category: 'Programming',
      tags: ['DSA', 'Algorithms', 'Programming', 'Problem Solving', 'Learning'],
      image: 'assets/images/blogs/dsa-blog.jpg',
      featured: true,
      views: 980,
      likes: 67
    },
    {
      id: 3,
      title: 'From Hackathon Participant to Winner: Lessons Learned',
      excerpt: 'Sharing insights from participating in multiple hackathons, including preparation strategies, team dynamics, and what it takes to build winning solutions.',
      content: 'In this post, I share my experiences from various hackathons including Smart India Hackathon, Hack Storm, and other competitions. I discuss preparation strategies, team formation, time management, technology selection, and presentation skills. The blog includes practical tips for hackathon success and how these experiences shaped my technical skills.',
      author: 'Raunak Kumar',
      date: '2024-06-10',
      readTime: '5 min read',
      category: 'Hackathons',
      tags: ['Hackathons', 'Competition', 'Teamwork', 'Innovation', 'Learning'],
      image: 'assets/images/blogs/hackathon-blog.jpg',
      featured: false,
      views: 750,
      likes: 45
    },
    {
      id: 4,
      title: 'Building IoT Solutions with Raspberry Pi and Computer Vision',
      excerpt: 'Exploring the intersection of IoT and computer vision through my railway gate automation project, covering hardware integration, sensor programming, and real-time image processing.',
      content: 'This technical blog dives deep into my railway gate automation project. I explain the hardware setup, sensor integration, computer vision implementation using OpenCV, and the challenges of real-time processing. The post includes circuit diagrams, code snippets, and lessons learned from working with embedded systems and computer vision.',
      author: 'Raunak Kumar',
      date: '2024-05-25',
      readTime: '10 min read',
      category: 'IoT & Computer Vision',
      tags: ['IoT', 'Raspberry Pi', 'Computer Vision', 'OpenCV', 'Embedded Systems'],
      image: 'assets/images/blogs/iot-blog.jpg',
      featured: false,
      views: 1100,
      likes: 78
    },
    {
      id: 5,
      title: 'My Internship Experience: From Student to Professional Developer',
      excerpt: 'Reflecting on my internship journey at CodeShip Private Limited, the projects I worked on, skills I developed, and how it prepared me for a career in software development.',
      content: 'This personal blog shares my internship experience, from the application process to working on real client projects. I discuss the transition from academic learning to professional development, the importance of mentorship, and how internships bridge the gap between education and industry. The post includes specific project examples and career advice for students.',
      author: 'Raunak Kumar',
      date: '2024-04-15',
      readTime: '7 min read',
      category: 'Career',
      tags: ['Internship', 'Career', 'Professional Development', 'Learning', 'Experience'],
      image: 'assets/images/blogs/internship-blog.jpg',
      featured: false,
      views: 890,
      likes: 56
    },
    {
      id: 6,
      title: 'The Future of Web Development: Trends and Technologies to Watch',
      excerpt: 'Exploring emerging trends in web development, from AI integration to new frameworks, and how developers can stay ahead of the curve.',
      content: 'In this forward-looking blog, I analyze current trends in web development including AI-powered development tools, new JavaScript frameworks, WebAssembly, and the evolution of frontend technologies. I discuss how these trends might shape the future of web development and provide recommendations for developers looking to stay current.',
      author: 'Raunak Kumar',
      date: '2024-03-30',
      readTime: '9 min read',
      category: 'Technology Trends',
      tags: ['Web Development', 'Technology', 'Future', 'Trends', 'Innovation'],
      image: 'assets/images/blogs/trends-blog.jpg',
      featured: false,
      views: 650,
      likes: 34
    }
  ];

  categories = [
    'All',
    'Full-Stack Development',
    'Programming',
    'Hackathons',
    'IoT & Computer Vision',
    'Career',
    'Technology Trends'
  ];

  selectedCategory = 'All';
  selectedBlog: any = null;
  showModal = false;

  constructor() { }

  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }

  get filteredBlogs() {
    if (this.selectedCategory === 'All') {
      return this.blogs;
    }
    return this.blogs.filter(blog => blog.category === this.selectedCategory);
  }

  get featuredBlogs() {
    return this.blogs.filter(blog => blog.featured);
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }

  openBlogModal(blog: any): void {
    this.selectedBlog = blog;
    this.showModal = true;
  }

  closeBlogModal(): void {
    this.showModal = false;
    this.selectedBlog = null;
  }

  getCategoryClass(category: string): string {
    switch(category) {
      case 'Full-Stack Development': return 'category-fullstack';
      case 'Programming': return 'category-programming';
      case 'Hackathons': return 'category-hackathons';
      case 'IoT & Computer Vision': return 'category-iot';
      case 'Career': return 'category-career';
      case 'Technology Trends': return 'category-trends';
      default: return 'category-default';
    }
  }

  getTotalViews(): number {
    return this.blogs.reduce((total, blog) => total + blog.views, 0);
  }

  getTotalLikes(): number {
    return this.blogs.reduce((total, blog) => total + blog.likes, 0);
  }
}