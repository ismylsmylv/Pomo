import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-switch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.scss',
})
export class SwitchComponent {
  [x: string]: any;
  @Output() sectionChange = new EventEmitter<string>();
  @Input() section!: string;
  changeSection(section: string): void {
    this.sectionChange.emit(section);
    console.log(section);
  }
}
