import { Component,OnInit,Input,Output,EventEmitter } from '@angular/core';
import{ItemComponent} from '.tab/list/item/item.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',

})
export class ListComponent implements OnInit 
{

    @Input()arrayinList:Array<string>;
    @Input()DCinList:Array<string>;
    @Input()MARVELinList:Array<string>;
    @Output()MessageEventDCList =new EventEmitter<any>(); 
    @Output()MessageEventMARVELList =new EventEmitter<any>(); 

    DClistHeroes:any[];
    MARVELlistHeroes:any[];

    MessageEventDCfromItem($event)
     {
      this.DClistHeroes = $event;
      console.log(this.DClistHeroes);

      this.MessageEventDCList.emit(this.DClistHeroes);
     }

     MessageEventMARVELfromItem($event)
     {
      this.MARVELlistHeroes= $event;
       this.MessageEventMARVELList.emit(this.MARVELlistHeroes);
     }

     constructor() { }
     ngOnInit() { }
  
}