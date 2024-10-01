import {Component, Input} from '@angular/core';
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
}
