import { Component, OnInit, HostListener, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  @ViewChild('navbarCollapse') navbarCollapse!: ElementRef;
  
  isScrolled = false;
  isNavbarOpen = false;
  openDropdowns: { [key: string]: boolean } = {};

  navItems = [
    { label: 'Home', route: '/' },
    { label: 'About', route: '/about' },
    { 
      label: 'Portfolio', 
      route: '#',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Skills', route: '/skills' },
        { label: 'Projects', route: '/projects' },
        { label: 'Experience', route: '/experience' },
        { label: 'Timeline', route: '/timeline' }
      ]
    },
    { 
      label: 'Competitions', 
      route: '#',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Hackathons', route: '/hackathons' },
        { label: 'DSA Tracker', route: '/dsa-tracker' },
        { label: 'Achievements', route: '/achievements' }
      ]
    },
    { 
      label: 'Content', 
      route: '#',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Blogs', route: '/blogs' },
        { label: 'Research', route: '/research' },
        { label: 'Tech Playground', route: '/tech-playground' }
      ]
    },
    { 
      label: 'Connect', 
      route: '#',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Testimonials', route: '/testimonials' },
        { label: 'Future Goals', route: '/future-goals' },
        { label: 'Resume', route: '/resume' },
        { label: 'Contact', route: '/contact' }
      ]
    }
  ];

  constructor(public themeService: ThemeService) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.initializeDropdowns();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 50;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    
    // Close navbar if clicking outside of it
    if (this.isNavbarOpen && this.navbarCollapse) {
      const navbarElement = this.navbarCollapse.nativeElement;
      const navbarToggler = document.querySelector('.navbar-toggler');
      
      if (!navbarElement.contains(target) && !navbarToggler?.contains(target)) {
        this.closeNavbar();
      }
    }
    
    // Close dropdowns if clicking outside of them
    const dropdownToggle = target.closest('.dropdown-toggle');
    const dropdownMenu = target.closest('.dropdown-menu');
    
    if (!dropdownToggle && !dropdownMenu) {
      this.closeAllDropdowns();
    }
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any) {
    // Close navbar on window resize to desktop
    if (event.target.innerWidth > 991) {
      this.isNavbarOpen = false;
    }
  }

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  closeNavbar() {
    this.isNavbarOpen = false;
    this.closeAllDropdowns();
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  toggleDropdown(dropdownLabel: string, event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    
    // Close other dropdowns
    Object.keys(this.openDropdowns).forEach(key => {
      if (key !== dropdownLabel) {
        this.openDropdowns[key] = false;
      }
    });
    
    // Toggle current dropdown
    this.openDropdowns[dropdownLabel] = !this.openDropdowns[dropdownLabel];
  }

  closeAllDropdowns(): void {
    Object.keys(this.openDropdowns).forEach(key => {
      this.openDropdowns[key] = false;
    });
  }

  isDropdownOpen(dropdownLabel: string): boolean {
    return this.openDropdowns[dropdownLabel] || false;
  }

  private initializeDropdowns(): void {
    // Initialize all dropdowns as closed
    this.navItems.forEach(item => {
      if (item.hasDropdown) {
        this.openDropdowns[item.label] = false;
      }
    });
  }
}