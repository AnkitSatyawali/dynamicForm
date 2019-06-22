import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})
export class FormListComponent implements OnInit {
  forms:number = 0;
  constructor() { }

  ngOnInit() {
  }
  addNewForm()
  {
     this.forms = this.forms+1;
  }
}
