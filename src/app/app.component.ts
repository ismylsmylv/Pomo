import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ControlsComponent } from './controls/controls.component';
import { SwitchComponent } from './switch/switch.component';
import { TimeComponent } from './time/time.component';
import { TasksComponent } from './tasks/tasks.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SwitchComponent,
    TimeComponent,
    ControlsComponent,
    TasksComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Pomo';
  section: string = 'focus';

  setSection(type: string): void {
    this.section = type;
  }
}
