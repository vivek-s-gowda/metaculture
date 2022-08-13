import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posters',
  templateUrl: './posters.component.html',
  styleUrls: ['./posters.component.scss'],
})
export class PostersComponent implements OnInit {
  constructor() {}

  postres = [
    {
      image: 'assets/images/posters/poster1.png',
      title: 'Crazy Governing Ourselves',
    },
    {
      image: 'assets/images/posters/poster2.png',
      title: 'Dialogue is a Compromise',
    },
    {
      image: 'assets/images/posters/poster3.png',
      title: 'Astonishing Idea That We Can Think ',
    },
    {
      image: 'assets/images/posters/poster4.png',
      title: 'A Government Better Than Us',
    },
    {
      image: 'assets/images/posters/poster5.png',
      title: 'We Know It Is There',
    },
    {
      image: 'assets/images/posters/poster6.png',
      title: 'Pickle',
    },
    {
      image: 'assets/images/posters/poster7.png',
      title: 'Donut',
    },
    {
      image: 'assets/images/posters/poster8.png',
      title: 'Books Burning ',
    },
    {
      image: 'assets/images/posters/poster9.png',
      title: 'Middle Finger ',
    },
    {
      image: 'assets/images/posters/poster10.png',
      title: 'Congratulations On Your Voice',
    },
    {
      image: 'assets/images/posters/poster11.png',
      title: 'Feelings Are Easy',
    },
    {
      image: 'assets/images/posters/poster12.png',
      title: 'Cupackes',
    },
  ];

  ngOnInit(): void {}
}
