import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-posters',
  templateUrl: './posters.component.html',
  styleUrls: ['./posters.component.scss'],
})
export class PostersComponent implements OnInit {
  constructor(private dataService: DataService) {}

  postres = [
    {
      image: 'assets/images/poster1/poster1.jpg',
      heading: 'Astonishing Idea That We Can Think',
      cost: '40',
    },
    {
      image: 'assets/images/poster1/poster2.jpg',
      heading: 'Breakfast of sapiens',
      cost: '40',
    },
    {
      image: 'assets/images/poster1/poster3.jpg',
      heading: 'Burning books',
      cost: '40',
    },
    {
      image: 'assets/images/poster1/poster4.jpg',
      heading: 'Chicken tikka',
      cost: '40',
    },
    {
      image: 'assets/images/poster1/poster5.jpg',
      heading: 'Voice, what now',
      cost: '40',
    },
    {
      image: 'assets/images/poster1/poster6.jpg',
      heading: 'Crazy Governing Ourselves',
      cost: '40',
    },
    {
      image: 'assets/images/poster1/poster7.jpg',
      heading: 'Critical Thinking not Intuitive',
      cost: '40',
    },
    {
      image: 'assets/images/poster1/poster8.jpg',
      heading: 'Democracy better than us ',
      cost: '40',
    },
    {
      image: 'assets/images/poster1/poster10.jpg',
      heading: 'Democracy Dies As Spectacle',
      cost: '40',
    },
    {
      image: 'assets/images/poster1/poster11.jpg',
      heading: 'Democracy_is_not_for_Wimps',
      cost: '40',
    },
    {
      image: 'assets/images/poster1/poster12.jpg',
      heading: 'Demons and angels',
      cost: '40',
    },
    {
      image: 'assets/images/poster1/poster13.jpg',
      heading: 'Dialogue is a Compromise',
      cost: '40',
    },
    {
      image: 'assets/images/poster1/poster14.jpg',
      heading: 'Donut',
      cost: '40',
    },
    {
      image: 'assets/images/poster1/poster15.jpg',
      heading: 'Excruciating clarity',
      cost: '40',
    },
    {
      image: 'assets/images/poster1/poster16.jpg',
      heading: 'Feelings are Easy',
      cost: '40',
    },
    {
      image: 'assets/images/poster1/poster17.jpg',
      heading: 'Freedom_and_Cupcakes',
      cost: '40',
    },
    {
      image: 'assets/images/poster1/poster18.jpg',
      heading: 'Goldfish',
      cost: '40',
    },
    {
      image: 'assets/images/poster1/poster19.jpg',
      heading: 'Here LIES THE TRUTH',
      cost: '40',
    },
    {
      image: 'assets/images/poster1/poster20.jpg',
      heading: 'Introduction',
      cost: '40',
    },
    {
      image: 'assets/images/poster1/poster21.jpg',
      heading: 'Justice or Revenge',
      cost: '40',
    },
    {
      image: 'assets/images/poster1/poster23.jpg',
      heading: 'Move fast, break things',
      cost: '40',
    },
    {
      image: 'assets/images/poster1/poster24.jpg',
      heading: 'Moving to California',
      cost: '40',
    },
    {
      image: 'assets/images/poster1/poster25.jpg',
      heading: 'Politics of Suffering',
      cost: '40',
    },
    {
      image: 'assets/images/poster1/poster27.jpg',
      heading: 'Porches and Portals',
      cost: '40',
    },
    {
      image: 'assets/images/poster1/poster28.jpg',
      heading: 'Voice Noice',
      cost: '40',
    }
  ];

  ngOnInit(): void {
    this.dataService.getData().subscribe((values:any)=>{
      console.log(values)
    })
  }


}
