import { AuthenticationService } from './../shared/services/authentication.service';
import { Task } from './../model/Task';
import { GestionService } from './../shared/services/gestion.service';
import { Router } from '@angular/router';
import { LocalStorage, LocalStorageService } from 'ngx-webstorage';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  tasks: any = []
  task: Task = new Task();


  constructor(private ser: GestionService, private route: Router,private auth:AuthenticationService, private local:LocalStorageService) { }

  ngOnInit(): void {
    this.getAllTasks();


  }

  getAllTasks(){
    this.ser.getAllTasks().subscribe(
      (data) => {
        this.tasks = data;

      },
      (err) => { console.log(err) }

    )
  }

  saveTask(){

    this.ser.addTask(this.task).subscribe(
      data=>{this.route.navigate(["/accueil"])},
      err=>{
        this.route.navigate(["/accueil"])
        console.log(JSON.toString()
        )

      }
    )
    }
    delete(id:number){
      this.ser.deleteTask(id).subscribe
      (
        data => {

          this.getAllTasks();
          this.route.navigate(["/accueil"])
        },
        error => console.log(error));
  }



}
