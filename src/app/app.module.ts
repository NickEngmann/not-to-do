import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListItemComponent } from './list-item/list-item/list-item.component';
import { ListComponent } from './list/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
