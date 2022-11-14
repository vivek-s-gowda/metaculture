import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DataService  } from '../data.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FooterComponent implements OnInit {

  constructor(private dataService: DataService, private sanitizer:DomSanitizer) { }
  copyRightsText: any;
  ngOnInit(): void {
    this.dataService.getCopyrights().subscribe((data:any)=>{
      console.log(data);
      this.copyRightsText = data.msg;
      this.copyRightsText = this.sanitizer.bypassSecurityTrustHtml(data.msg);   
    })
  }

}
