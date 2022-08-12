import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-items',
  templateUrl: './course-items.component.html',
  styleUrls: ['./course-items.component.scss'],
})
export class CourseItemsComponent implements OnInit {
  constructor() {}
  @Input() image: string = '';
  @Input() counter: number = 0;
  @Input() heading: string = '';
  @Input() description: string = '';
  
  ngOnInit(): void {}
}
