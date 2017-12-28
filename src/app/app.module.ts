import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import{CreateComponent} from'./create/create.component';
import { TabComponent } from './tab/tab.component';
import {ListComponent} from './tab/list/list.component';
import{ItemComponent} from './tab/list/item/item.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    TabComponent,
    ListComponent,
    ItemComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
