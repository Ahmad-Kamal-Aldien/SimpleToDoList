import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import {TasksService  } from 'src/app/Services/tasks.service';
@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.css']
})
export class AddTasksComponent implements OnInit {

  constructor(public TaskServices :TasksService, public route:Router,public title:Title) { 
      this.title.setTitle("Add");
    }

  ngOnInit(): void {
  }
  add(txttitle:any,txtdesc:any){
this.TaskServices.add(txttitle.value,txtdesc.value);
this.route.navigate(['']);

  }
}
