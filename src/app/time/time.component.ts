import { Component, Input, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-time',
  standalone: true,
  imports: [],
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss'],
})
export class TimeComponent implements OnChanges, OnDestroy {
  time = 1500;
  private intervalId: any;

  @Input() section!: string;
  @Input() control: boolean | undefined;

  ngOnChanges() {
    if (this.control) {
      this.startTimer();
    } else {
      this.pauseTimer();
    }
  }

  startTimer() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.intervalId = setInterval(() => {
      if (this.time > 0) {
        this.time--;
      } else {
        clearInterval(this.intervalId);
      }
    }, 1000);
  }

  pauseTimer() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  getTimeParts() {
    const minutes = Math.floor(this.time / 60);
    const seconds = this.time % 60;
    return { minutes, seconds };
  }
}
