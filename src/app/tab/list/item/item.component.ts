import { Component,OnInit,Input, Output, EventEmitter } from '@angular/core';
import {ListComponent} from './tab/list/list.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',

})
export class ItemComponent implements OnInit {

   @Input()allTabHeroes:Array<string>;
   @Input()DCinItem:Array<string>;
   @Input()MARVELinItem:Array<string>;
    @Output()MessageEventDCItem =new EventEmitter(); 
    @Output()MessageEventMARVELItem =new EventEmitter(); 

   DCtabHeroes:any[]=[];
   MARVELtabHeroes:any[]=[];

  

  goToDCfromALL(hero)
  {
    if(this.DCtabHeroes.indexOf(hero)==-1)
   {
     this.DCtabHeroes.push(hero);
    // console.log(this.DCtabHeroes);

      this.MessageEventDCItem.emit(this.DCtabHeroes);
    }
 }

  goToMARVELfromALL(hero)
  {
    if(this.MARVELtabHeroes.indexOf(hero)==-1)
    {
      this.MARVELtabHeroes.push(hero);
   //    console.log(this.MARVELtabHeroes);

        this.MessageEventMARVELItem.emit(this.MARVELtabHeroes);
    }  
  }
 
  // Tab Item Component
  index:number;
  currentHero:string;
  newArray:any[];
  goToMARVELfromDC(hero)
  {
     
    this.currentHero=hero;
    this.index= this.DCinItem.indexOf(hero);
    this.DCinItem.splice(this.index,1);
    this.MARVELtabHeroes.push(this.currentHero);   
    this.MessageEventMARVELItem.emit(this.MARVELtabHeroes);
  }
    

  goToDCfromMARVEL(hero)
  {
    this.currentHero=hero;
    this.index=this.MARVELinItem.indexOf(hero);
    this.MARVELinItem.splice(this.index,1);
    console.log(this.DCinItem);
    this.DCtabHeroes.push(this.currentHero);
    this.MessageEventDCItem.emit(this.DCtabHeroes);
   }

     constructor() { }
     ngOnInit() { }
  
}