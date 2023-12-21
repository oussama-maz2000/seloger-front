import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-immobilier-template',
  templateUrl: './immobilier-template.component.html',
  styleUrls: ['./immobilier-template.component.css'],
})
export class ImmobilierTemplateComponent implements OnInit {
  /* data: ImmobilierInterface = {
    type: TypeImmobilier.Appartement,
    price: 2000,
    caractéristiques: ['hello', 'hello'],
    willaya: 'batna',
    address: 'city 5 juillet',
    images: [
      '../../../../assets/maison/photo-01.webp',
      '../../../../assets/maison/photo-02.webp',
      '../../../../assets/maison/photo-03.webp',
      '../../../../assets/maison/photo-04.webp',
      '../../../../assets/maison/photo-05.webp',
      '../../../../assets/maison/photo-06.webp',
    ],
    description: 'hello world ',
  }; */
  /*  currentIndex = 0;
  characters: Array<string>;
  ngOnInit(): void {
    this.characters = this.data.caractéristiques;
  }

  previousImg() {
    if (this.currentIndex != 0) this.currentIndex--;
    else this.currentIndex = this.data.images.length - 1;
  }
  nextImg() {
    const isLastSlide = this.currentIndex === this.data.images.length - 1; // return true or false
    if (!isLastSlide) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  } */
  ngOnInit(): void {}
}
