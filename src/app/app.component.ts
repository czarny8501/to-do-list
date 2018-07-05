import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To do list';
  taskList = [];
  @ViewChild('inpucik') inpucikZHtmla: ElementRef;

  addTask(task: string): void {
    this.taskList.push(task);
    this.inpucikZHtmla.nativeElement.value = '';
  }

  deleteTask(index: number) {
    this.taskList.splice(index, 1);
  }

}
