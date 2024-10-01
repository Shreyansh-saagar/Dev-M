import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'special-task-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  taskForm: FormGroup;

  constructor(private fb: FormBuilder, private _toastService: ToastrService) {
    this.taskForm = this.fb.group({
      taskName: ['', Validators.required],
      taskDescription: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      priority: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.taskForm.valid) {
      const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      tasks.push(this.taskForm.value);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      this.taskForm.reset();
      this.showSuccess()
    }
  }

  showSuccess(){
    this._toastService.success('Task Saved','Success!')
  }
}
