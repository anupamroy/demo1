import { Component, OnInit } from '@angular/core';
import { Todo } from '../Todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todolist : Todo[]=[
    // {
    //   work : "Doctor Appointment",
    //   description:"Need to carry the reports and prescription",
    //   AllocatedTime : "9 AM"
    // },
    // {
    //   work : "Review Meeting with Team",
    //   description:"Need to review the running projects and what is the schedule of delivery",
    //   AllocatedTime : "10 AM"
    // },
    // {
    //   work : "Meeting with Client",
    //   description:"Update project staus and provide timeline for the next developements",
    //   AllocatedTime : "11 AM"
    // },
    
  ]

  OnTodoCreated(todo){
    console.log(todo);
    this.todolist.push(todo)
    console.log(this.todolist)
  }

  constructor(private _todoService : TodoService) { }

  ngOnInit(): void {
    this._todoService.getTodos().subscribe(data => this.todolist = data)

  }

}
