import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  isSubmitted = false;

  contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'your.email@example.com',
      link: 'mailto:your.email@example.com'
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      value: 'Your City, Country',
      link: '#'
    }
  ];

  socialLinks = [
    {
      icon: 'fab fa-github',
      link: 'https://github.com/yourusername',
      name: 'GitHub'
    },
    {
      icon: 'fab fa-linkedin',
      link: 'https://linkedin.com/in/yourusername',
      name: 'LinkedIn'
    },
    {
      icon: 'fab fa-twitter',
      link: 'https://twitter.com/yourusername',
      name: 'Twitter'
    }
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.contactForm.valid) {
      // Handle form submission here
      console.log('Form submitted:', this.contactForm.value);
      // You can add your email service integration here
      this.contactForm.reset();
      this.isSubmitted = false;
    }
  }

  get f() {
    return this.contactForm.controls;
  }

}
