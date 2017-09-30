import { Injectable } from '@angular/core';

@Injectable()
export class ListService {
  private listArray = []
  constructor() { }
  updateListArray(list){
    this.listArray = list
    return this.listArray
  }
  getListArray(){
    return this.listArray
  }
}
