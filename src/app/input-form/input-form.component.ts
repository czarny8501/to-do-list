import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {
 
  @ViewChild('inpucik') inpucikZHtmla: ElementRef;
  @Output() taskCreated: EventEmitter<string>=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  addTask(task: string): void {
   
    this.taskCreated.emit(task);

    this.inpucikZHtmla.nativeElement.value = '';
  }
}
