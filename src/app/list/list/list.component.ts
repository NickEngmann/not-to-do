import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  newSession = false;
  listItemName = 'Procrastinating';
  listItems = [];
  updatedList = false;
  sendingStatus = false;
  constructor(private listservice: ListService) {
    setTimeout( ()=>{
      this.newSession=true;
    }, 2000);
   }

  ngOnInit() {
  }
  changeLayout(){
    this.sendingStatus = true;
  }
  addList() {
    this.listItems.push(this.listItemName);
    this.listItemName=undefined;
    this.updatedList = true;
    this.listservice.updateListArray(this.listItems)
  }
  deleteItem(listItemName){
    for(let i = 0; i<this.listItems.length;i++){
      if(this.listItems[i]==listItemName){
        this.listItems.splice(i,1);
      }
    }
    this.listservice.updateListArray(this.listItems)
  }
}
