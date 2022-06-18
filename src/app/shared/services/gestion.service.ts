import { Task } from './../../model/Task';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GestionService {

  constructor( private http:HttpClient) { }
  getAllTasks()
  {return this.http.get("/tasks")}
  addTask(task: any){
    return this.http.post('/tasks',task);
   }
   deleteTask(id:number){
    return this.http.delete('/tasks/'+id);
   }
}
