import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { TabComponent } from './tab/tab.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',

})
export class CreateComponent implements OnInit {

  Heroes:any[]=[];
  newEntry:string='';

  @Output()messageEvent = new EventEmitter<any>();
  
 onAdd(newEntry:string)
 {  
   if(!newEntry)
   {
     return;
   }
   else if(this.Heroes.indexOf(newEntry)==-1) 
   {
    this.Heroes.push(newEntry);
    //console.log(this.Heroes);
    this.newEntry='';
    this.messageEvent.emit(this.Heroes);
    }
 }



 

 constructor() { }
  ngOnInit() {
  }


}