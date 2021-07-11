import { Component, OnInit } from '@angular/core';
import { TasksService } from "../../services/tasks.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-private-task',
  templateUrl: './private-task.component.html',
  styleUrls: ['./private-task.component.css']
})
export class PrivateTaskComponent implements OnInit {

  tasks: any = [];

  constructor(private tasksService: TasksService, private router: Router) { }

  ngOnInit(): void {
    this.tasksService.getPrivateTasks().subscribe(
      res => {
        this.tasks = res;
      }, err => {
        this.router.navigate(['/signin']);
      });
  }

}
