import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SwitchComponent } from './switch/switch.component';
import { TimeComponent } from './time/time.component';
import { ControlsComponent } from './controls/controls.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SwitchComponent, TimeComponent, ControlsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Pomo';
}
