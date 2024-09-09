import { Injectable } from '@angular/core';
import { Itask } from '../Interfaces/itask';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks:Itask[]=[
  
      
      
   
  ];
  edittask(getIndex:number,getData:any){
this.tasks[getIndex]=getData;
this.saveStoreInLocalStorage();
  }
  add(name:string,desc:string){
    this.tasks.push({
      desc,name
    });
    this.saveStoreInLocalStorage();
      }
  deleteOne(i:number){
    this.tasks.splice(i,1);
    this.saveStoreInLocalStorage();
  }

  saveStoreInLocalStorage(){
    localStorage.setItem("saveStore",JSON.stringify(this.tasks));
  }
  constructor() { 
    let alldata=localStorage.getItem("saveStore");
    if(alldata){

      this.tasks=JSON.parse(alldata);
    }

  }
}
