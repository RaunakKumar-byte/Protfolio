import { Component, OnInit, HostListener } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isScrolled = false;
  isNavbarOpen = false;

  navItems = [
    { label: 'Home', route: '/' },
    { label: 'About', route: '/about' },
    { label: 'Skills', route: '/skills' },
    { label: 'Projects', route: '/projects' },
    { label: 'Experience', route: '/experience' },
    { label: 'Contact', route: '/contact' }
  ];

  constructor(public themeService: ThemeService) { }

  ngOnInit(): void { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 50;
  }

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  closeNavbar() {
    this.isNavbarOpen = false;
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}