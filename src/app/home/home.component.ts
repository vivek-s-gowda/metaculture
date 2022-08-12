import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  images = [1, 2, 3].map((n) => `assets/images/slide${n}.png`);
  ngOnInit(): void {
  }

}
