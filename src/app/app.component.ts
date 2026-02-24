import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items: FirebaseListObservable<any[]>;
  newItemName = '';
  editingItemId = null;

  constructor(private db: AngularFireDatabase) {
    this.items = db.list('/items');
  }

  ngOnInit(): void {
    // Initialize any needed data
  }

  addItem(): void {
    if (this.newItemName.trim()) {
      this.items.push({ name: this.newItemName, completed: false });
      this.newItemName = '';
    }
  }

  toggleComplete(item: any): void {
    this.items.update(item.$key, { completed: !item.completed });
  }

  deleteItem(key: string): void {
    this.items.remove(key);
  }

  editItem(item: any): void {
    this.editingItemId = item.$key;
  }

  saveEdit(item: any): void {
    if (this.editingItemId) {
      this.items.update(this.editingItemId, { name: item.name });
      this.editingItemId = null;
    }
  }

  get filteredItems(): Observable<any[]> {
    return this.items;
  }
}
