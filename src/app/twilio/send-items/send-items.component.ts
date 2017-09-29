import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-send-items',
  templateUrl: './send-items.component.html',
  styleUrls: ['./send-items.component.css']
})
export class SendItemsComponent implements OnInit {

  numberForm: FormGroup;
  order: any;

  constructor( private db: AngularFireDatabase, private fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm()
    this.order = this.db.object('/')
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
    this.order.update({ phoneNumber: this.e164 })
  }
}
