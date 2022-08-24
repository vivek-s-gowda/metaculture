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
      heading: 'Crazy Governing Ourselves',
      cost:'150'
    },
    {
      image: 'assets/images/posters/poster2.png',
      heading: 'Dialogue is a Compromise',
      cost:'150'
    },
    {
      image: 'assets/images/posters/poster3.png',
      heading: 'Astonishing Idea That We Can Think ',
      cost:'150'
    },
    {
      image: 'assets/images/posters/poster4.png',
      heading: 'A Government Better Than Us',
      cost:'150'
    },
    {
      image: 'assets/images/posters/poster5.png',
      heading: 'We Know It Is There',
      cost:'150'
    },
    {
      image: 'assets/images/posters/poster6.png',
      heading: 'Pickle',
      cost:'150'
    },
    {
      image: 'assets/images/posters/poster7.png',
      heading: 'Donut',
      cost:'150'
    },
    {
      image: 'assets/images/posters/poster8.png',
      heading: 'Books Burning ',
      cost:'150'
    },
    {
      image: 'assets/images/posters/poster9.png',
      heading: 'Middle Finger ',
      cost:'150'
    },
    {
      image: 'assets/images/posters/poster10.png',
      heading: 'Congratulations On Your Voice',
      cost:'150'
    },
    {
      image: 'assets/images/posters/poster11.png',
      heading: 'Feelings Are Easy',
      cost:'150'
    },
    {
      image: 'assets/images/posters/poster12.png',
      heading: 'Cupackes',
      cost:'150'
    },
  ];

  ngOnInit(): void {}

}
