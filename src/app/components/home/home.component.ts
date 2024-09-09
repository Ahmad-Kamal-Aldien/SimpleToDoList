import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Route, Router } from '@angular/router';
import { Itask } from 'src/app/Interfaces/itask';
import { TasksService } from 'src/app/Services/tasks.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public taskServices:TasksService,public router:Router,public title:Title) { 
    this.title.setTitle("Home");
  }

  ngOnInit(): void {
  }
  deleteselect(i:number){
this.taskServices.deleteOne(i)
  }

  getData:any;
  Detail(i:number){
    this.getData= this.taskServices.tasks[i];

    this.router.navigate(['app-actiontask',i]);
    
   

  }

}
