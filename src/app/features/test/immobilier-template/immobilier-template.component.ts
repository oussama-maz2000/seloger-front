import { Component, Input, OnInit } from '@angular/core';
import { ImmobilierInterface } from 'src/app/core/model/immobilier.interface';
import { TypeImmobilier } from 'src/app/core/model/type-immobilier.enum';

@Component({
  selector: 'app-immobilier-template',
  templateUrl: './immobilier-template.component.html',
  styleUrls: ['./immobilier-template.component.css'],
})
export class ImmobilierTemplateComponent implements OnInit {
  slides: Array<any> = [
    {
      id: 1,
      url: 'https://yarlrybrsqapllwioing.supabase.co/storage/v1/object/public/PROPERTY_IMAGES/img_basic_pub_11_template.jpg',
    },
    {
      id: 2,
      url: 'https://yarlrybrsqapllwioing.supabase.co/storage/v1/object/public/PROPERTY_IMAGES/img_basic_pub_15_template.jpg',
    },
    {
      id: 3,
      url: 'https://yarlrybrsqapllwioing.supabase.co/storage/v1/object/public/PROPERTY_IMAGES/img_basic_pub_2_templatev2.jpg',
    },
    {
      id: 4,
      url: 'https://yarlrybrsqapllwioing.supabase.co/storage/v1/object/public/PROPERTY_IMAGES/img_basic_pub_5_template.jpg',
    },
    {
      id: 5,
      url: 'https://yarlrybrsqapllwioing.supabase.co/storage/v1/object/public/PROPERTY_IMAGES/img_basic_pub_7_template.jpg',
    },
    {
      id: 6,
      url: 'https://yarlrybrsqapllwioing.supabase.co/storage/v1/object/public/PROPERTY_IMAGES/img_basic_pub_9_template.jpg',
    },
  ];
  data: ImmobilierInterface = {
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
  };
  currentIndex = 0;
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
  }
}
