import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./common/header/header.component";
import {HeroSectionComponent} from "./common/hero-section/hero-section.component";
import {ProductStatusComponent} from "./common/product-status/product-status.component";
import {FrameToggleComponent} from "./common/frame-toggle/frame-toggle.component";
import {TaskFormComponent} from "./special/task-form/task-form.component";
import {FooterComponent} from "./common/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,HeroSectionComponent,ProductStatusComponent,FrameToggleComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-essential-udemy-shreyansh';
}
