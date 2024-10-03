import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'special-view-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-data.component.html',
  styleUrl: './view-data.component.css'
})
export class ViewDataComponent{
  @Input() task: any;
  @Output() deleteTask = new EventEmitter<any>();
  @Output() markAsComplete = new EventEmitter<any>();

  get cardOpacity(): string {
    return this.task.completed ? 'opacity-50' : '';
  }

  get priorityClasses(): string {
    switch (this.task.priority) {
      case 'critical':
        return 'bg-red-100 text-red-800';
      case 'normal':
        return 'bg-yellow-100 text-yellow-800';
      case 'not-so-urgent':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }

  get priorityIconColor(): string {
    switch (this.task.priority) {
      case 'critical':
        return 'text-red-500';
      case 'normal':
        return 'text-yellow-500';
      case 'not-so-urgent':
        return 'text-green-500';
      default:
        return 'text-gray-500';
    }
  }

  onDelete() {
    this.deleteTask.emit(this.task);
  }

  onMarkAsComplete() {
    if (!this.task.completed) {
      this.markAsComplete.emit(this.task);
    }
  }
}
