import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import{ItemComponent} from './tab/list/item/item.component';
import {ListComponent} from './tab/list/list.component';



@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
})
export class TabComponent implements OnInit {
  
  @Input()arrayinTab:Array<string>;

   
    DCTabHeroes:Array<string>=[];
    MARVELTabHeroes:Array<string>=[];

    MessageEventDCTab($event)
     {
      this.DCTabHeroes =this.DCTabHeroes.concat($event);
      this.DCTabHeroes=Array.from(new Set(this.DCTabHeroes));
      console.log(this.DCTabHeroes);    
     }

     MessageEventMARVELTab($event)
     {
      this.MARVELTabHeroes=this.MARVELTabHeroes.concat($event);
      this.MARVELTabHeroes=Array.from(new Set(this.MARVELTabHeroes));
     }
 
  constructor() { }

  ngOnInit() {
  }

}
