import { Component } from '@angular/core';

@Component({
  selector: 'common-info-bar',
  standalone: true,
  imports: [],
  templateUrl: './info-bar.component.html',
  styleUrl: './info-bar.component.css'
})
export class InfoBarComponent {
  showComponent = true;

  hideComponent() {
    this.showComponent = false;
  }
}
