import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To do list';
  taskList = [];

  addTask(task: string): void {
    this.taskList.push(task);
  }

  deleteTask(index: number){
    this.taskList.splice(index,1);
  }

}
