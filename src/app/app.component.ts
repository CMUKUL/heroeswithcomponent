import { Component,Input,Output } from '@angular/core';
import{CreateComponent} from'./create/create.component';
import { TabComponent } from './tab/tab.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  arrayinApp:any[];

  receiveMessage($event) 
  {
    this.arrayinApp = $event;
    console.log(this.arrayinApp);
  }

  


}
