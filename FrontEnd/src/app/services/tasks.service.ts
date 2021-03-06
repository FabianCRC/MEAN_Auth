import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private url = 'http://localhost:3000/api'
  constructor(private http: HttpClient) { }

  getTasks() {
    return this.http.get<any>(this.url + '/tasks');
  }
  
  getPrivateTasks() {
    return this.http.get<any>(this.url + '/private-tasks');

  }

}
