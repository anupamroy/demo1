import { Injectable } from '@angular/core';
import { Todo } from "./Todo";
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private _url : string = "https://jsonplaceholder.typicode.com/todos"

  todos : Todo[]=[
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
    // }
  ] 
  constructor(private _http : HttpClient) { 

  }

  getTodos():Observable<Todo[]>{
    return this._http.get<Todo[]>(this._url);
  }
}
