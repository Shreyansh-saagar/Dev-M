import {Component, OnInit} from '@angular/core';
import {TaskFormComponent} from "../../special/task-form/task-form.component";
import {InfoBarComponent} from "../info-bar/info-bar.component";
import {ViewDataComponent} from "../../special/view-data/view-data.component";

@Component({
  selector: 'common-frame-toggle',
  standalone: true,
  imports: [TaskFormComponent,InfoBarComponent,ViewDataComponent],
  templateUrl: './frame-toggle.component.html',
  styleUrl: './frame-toggle.component.css'
})
export class FrameToggleComponent implements OnInit {
  activeButton: string = 'addTask';
  tasks: any[] = [];

  ngOnInit(): void {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    }
  }

  setActive(buttonName: string): void {
    this.activeButton = buttonName;
  }

  isActive(buttonName: string): boolean {
    return this.activeButton === buttonName;
  }
}
