import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListItemComponent } from './list-item/list-item/list-item.component';
import { ListComponent } from './list/list/list.component';
import { SendItemsComponent } from './twilio/send-items/send-items.component';
import { ReactiveFormsModule } from '@angular/forms'
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { HelpComponent } from './head/help/help.component';
import { ListService } from './list/list.service';

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AppComponent,
    ListItemComponent,
    ListComponent,
    SendItemsComponent,
    HelpComponent,
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }