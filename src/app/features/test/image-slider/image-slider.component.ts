import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css'],
})
export class ImageSliderComponent {
  @Input() slides: Array<any>;

  currentIndex: number = 0;

  getCurrentSliderUrl(): string {
    return `${this.slides[this.currentIndex].url}`;
  }
}
