import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit {
  constructor() { }

    ngOnInit() {
      AOS.init({
        duration: 1200,
        easing: 'ease-in-out', 
        once: true, 
        mirror: false,
      });
    }
  
  }

