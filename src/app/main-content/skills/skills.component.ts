import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})

export class SkillsComponent implements OnInit {
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
