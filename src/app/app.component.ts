import { Component, OnInit, OnDestroy } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { AnimationService } from './services/animation.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular-portfolio';

  constructor(
    public themeService: ThemeService,
    private animationService: AnimationService
  ) {}

  ngOnInit() {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });

    // Initialize custom animations after a short delay
    setTimeout(() => {
      this.animationService.initializeAllAnimations();
    }, 500);
  }

  ngOnDestroy() {
    this.animationService.resetAnimations();
  }
}