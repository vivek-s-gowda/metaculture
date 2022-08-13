import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-poster-items',
  templateUrl: './poster-items.component.html',
  styleUrls: ['./poster-items.component.scss']
})
export class PosterItemsComponent implements OnInit {

  @Input() shortline: string = '';
  @Input() image: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
