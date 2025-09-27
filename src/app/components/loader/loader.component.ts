import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  isLoading = true;

  constructor() { }

  ngOnInit(): void {
    // Simulate loading time
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
}