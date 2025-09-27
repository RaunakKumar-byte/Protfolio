import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkModeSubject = new BehaviorSubject<boolean>(false);
  public darkMode$ = this.darkModeSubject.asObservable();

  constructor() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    this.darkModeSubject.next(savedTheme === 'dark' || (!savedTheme && prefersDark));
    this.updateTheme();
  }

  get isDarkMode(): boolean {
    return this.darkModeSubject.value;
  }

  toggleTheme(): void {
    const newTheme = !this.darkModeSubject.value;
    this.darkModeSubject.next(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    this.updateTheme();
  }

  private updateTheme(): void {
    const isDark = this.darkModeSubject.value;
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    
    // Update CSS custom properties
    const root = document.documentElement;
    if (isDark) {
      root.style.setProperty('--bg-primary', '#0a0a0a');
      root.style.setProperty('--bg-secondary', '#1a1a1a');
      root.style.setProperty('--text-primary', '#ffffff');
      root.style.setProperty('--text-secondary', '#b0b0b0');
      root.style.setProperty('--primary-color', '#3b82f6');
      root.style.setProperty('--primary-dark', '#2563eb');
      root.style.setProperty('--accent-color', '#f59e0b');
    } else {
      root.style.setProperty('--bg-primary', '#ffffff');
      root.style.setProperty('--bg-secondary', '#f8fafc');
      root.style.setProperty('--text-primary', '#1f2937');
      root.style.setProperty('--text-secondary', '#6b7280');
      root.style.setProperty('--primary-color', '#3b82f6');
      root.style.setProperty('--primary-dark', '#2563eb');
      root.style.setProperty('--accent-color', '#f59e0b');
    }
  }
}