import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.css']
})
export class TodoformComponent implements OnInit {
  todo : Todo;
  work : string;
  description : string;
  AllocatedTime : string;
  @Output() TodoCreated = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addTodo(){
      // this.todo = {work : this.work,description:this.description,AllocatedTime:this.AllocatedTime}
      this.TodoCreated.emit(this.todo);

  }

}
