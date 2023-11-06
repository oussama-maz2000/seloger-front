import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getAnnounces } from 'src/app/store/selector/announce.selector';

@Component({
  selector: 'app-single-announce',
  templateUrl: './single-announce.component.html',
  styleUrls: ['./single-announce.component.css'],
})
export class SingleAnnounceComponent implements OnInit {
  currentIndex = 0;
  images = [
    '../../../../assets/maison/photo_01.webp',
    '../../../../assets/maison/photo_02.webp',
    '../../../../assets/maison/photo_03.webp',
  ];
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.select(getAnnounces).subscribe(console.log);
  }

  previousImg() {
    if (this.currentIndex != 0) this.currentIndex--;
    else this.currentIndex = this.images.length - 1;
  }
  nextImg() {
    const isLastSlide = this.currentIndex === this.images.length - 1; // return true or false
    if (!isLastSlide) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }
}
