import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ToDo } from '../app/toDo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular demo';
  toDoValue: string = '';
  id: number = 0;
  list: ToDo[] = [];

  ngOnInit() {
    this.id = 0;
    this.list = [];
    this.toDoValue = '';
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked = ', this.list, 'id = ', this.id);
  }

  addTask(newToDovalue: string) {
    const newItem: ToDo = {
      id: this.id + 1,
      toDoValue: newToDovalue,
      isDone: false,
    };
    this.list.push(newItem);
    this.toDoValue = '';
  }

  deleteTask(deleteToDo: string) {
    console.log('deleteToDo = ', deleteToDo);
    this.list = this.list.filter((task) => task.toDoValue !== deleteToDo);
  }
}
