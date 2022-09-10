import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private dataService:DataService,
    private fb: FormBuilder, 
    private _snackBar: MatSnackBar) { }

  contactFormArray: any = [];

  contactForm = this.fb.group({
    name: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    email: [''],
    message: [''],
  });

  ngOnInit(): void {

    // this.dataService.addData('contact',this.contactFormArray)
    this.dataService.getData().subscribe((values:any)=>{
      this.contactFormArray = values[0];
    })
  }

  submit() 
  {
    this.contactFormArray.push(this.contactForm.value);
    this.dataService.addData('contact',this.contactFormArray)
    this.openSnackBar();
  }

  openSnackBar() {
    this._snackBar.open('Message Sent, We will reach you !', 'Okay ', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 2 * 1000,
    });
  }
}
