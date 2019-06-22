import { Component, OnInit,EventEmitter } from '@angular/core';
import {FormControl, Validators,FormGroup} from '@angular/forms';
import { FS } from "./form.model";
import { mimeType } from "./mime-type.validator";
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
yearsControl = new FormControl('', [Validators.required]);
 flagArray:boolean[]=[];
 flagArray2:boolean[]=[];
 years : string[] = ['First','Second','Third','Fourth'];
  formsnumber = new FS();
 formArray=[];
 imgUrl:string;

 fileToUpload : File;
  constructor() { }
  ngOnInit() {
    this.formArray.push(this.formsnumber);
    this.flagArray.push(true);
    this.flagArray2.push(true);   
  }
  addNewform()
  {
    this.formsnumber = new FS();
    this.formArray.push(this.formsnumber);
    this.flagArray.push(true);
  }
  removeForm(index)
  {
    this.formArray.splice(index);
    this.flagArray.splice(index);

  }
  onSignup(form,index)
  {
     console.log(form);
     this.flagArray[index]=false;
     this.flagArray2[index+1]=true;
  }
  onImagePicked(file:FileList) {
      this.fileToUpload = file.item(0);
      var reader = new FileReader();
      reader.onload = (event:any) => {
         this.imgUrl = event.target.result;
      }
      reader.readAsDataURL(this.fileToUpload);
  }
}
