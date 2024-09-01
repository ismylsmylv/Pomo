import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-controls',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './controls.component.html',
  styleUrl: './controls.component.scss',
})
export class ControlsComponent {
  @Output() controlChange = new EventEmitter<boolean>();
  control = false;
  log(event: boolean) {
    this.control = event;
    console.log(event);
    this.controlChange.emit(this.control);
  }
}
