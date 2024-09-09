import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from 'src/app/Services/tasks.service';

@Component({
  selector: 'app-actiontask',
  templateUrl: './actiontask.component.html',
  styleUrls: ['./actiontask.component.css']
})
export class ActiontaskComponent implements OnInit {

  constructor(public taskServices:TasksService,public param:ActivatedRoute,public roue:Router,public title:Title) { 
    this.title.setTitle("Action");
  }
   Edit(){
this.taskServices.edittask(this.getIndex,this.getData);
this.roue.navigate([""]);
  }
  Delete(){
    this.taskServices.deleteOne(this.getIndex);
    this.roue.navigate([""]);
  }
  cancel(){
 this.roue.navigate([""]);
  }
  getIndex:any;
  getData:any;
  ngOnInit(): void {
    this.getIndex=this.param.snapshot.paramMap.get('id');
    this.getData= this.taskServices.tasks[this.getIndex];
  }

}
