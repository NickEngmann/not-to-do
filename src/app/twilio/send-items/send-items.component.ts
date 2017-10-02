import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ListComponent } from '../../list/list/list.component';
import { ListService } from '../../list/list.service';
export interface FormModel {
  captcha?: string;
}

@Component({
  selector: 'app-send-items',
  templateUrl: './send-items.component.html',
  styleUrls: ['./send-items.component.css']
})
export class SendItemsComponent implements OnInit {
  public resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
  }
  numberForm: FormGroup;
  list: any;
  listKey: any;
  listitems: any;
  token: any;
  done = false;
  constructor( private db: AngularFireDatabase, private fb: FormBuilder, private listservice: ListService ) { }

  ngOnInit() {
    this.buildForm()
    this.listKey = (Math.floor(Math.random() * (99000 + 1)) + 0)
    this.list = this.db.object('/lists/'+this.listKey)
    console.log(this.listKey)
    this.list.update({
      status: 'not-ready',
      })
  
  }

  validateMinMax(min,max){
    return['',[
      Validators.required,
      Validators.minLength(min),
      Validators.maxLength(max),
      Validators.pattern('[0-9]+') //validates input is digit
    ]]
  }

  buildForm(){
    this.numberForm = this.fb.group({
      country: this.validateMinMax(1,2),
      area: this.validateMinMax(3,3),
      prefix: this.validateMinMax(3,3),
      line: this.validateMinMax(4,4)
    });
  }
  get e164(){
    const form = this.numberForm.value
    const num = form.country + form.area + form.prefix + form.line
    return `+${num}`
  }

  updatePhoneNumber(){
    this.listitems = this.listservice.getListArray()
    this.list.update({
      phoneNumber: this.e164,
      status: 'ready',
      listarr: this.listitems })
    this.done = true;
  }
}
