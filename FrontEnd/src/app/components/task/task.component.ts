import { Component, OnInit } from '@angular/core';
import { TasksService } from "../../services/tasks.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks: any = [];


  constructor(private taskService: TasksService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(
      res => {
        console.log(res);
        this.tasks = res;
      },
      err => {
        console.log(err);
      });
  }

}
