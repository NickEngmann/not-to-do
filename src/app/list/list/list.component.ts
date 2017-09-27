import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  newSession = false;
  listItemName = 'Procrastinating';
  listItems = [];

  constructor() {
    setTimeout( ()=>{
      this.newSession=true;
    }, 2000);
   }

  ngOnInit() {
  }

  addList() {
    console.log(this.listItemName);
    this.listItems.push(this.listItemName);
    this.listItemName='';
  }
  deleteItem(listItemName){
    for(let i = 0; i<this.listItems.length;i++){
      if(this.listItems[i]==listItemName){
        this.listItems.splice(i,1);
      }
    }
  }
}
