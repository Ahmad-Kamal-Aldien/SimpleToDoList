import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiontaskComponent } from './components/actiontask/actiontask.component';
import { AddTasksComponent } from './components/add-tasks/add-tasks.component';
import { HomeComponent } from './components/home/home.component';
import { NotfountComponent } from './components/notfount/notfount.component';

const routes: Routes = [
  {path:"", component : HomeComponent},
  {path:"app-add-tasks",component: AddTasksComponent},
  {path:"app-actiontask/:id",component: ActiontaskComponent},
  {path:"**",component :NotfountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
