import { Component } from '@angular/core';
import {
  willaya,
  serviceAccessibilityList,
  hygieneList,
  piecesList,
  publicServcieList,
  quillConfig,
} from 'src/app/core/shared/data';
@Component({
  selector: 'app-add-annonce',
  templateUrl: './add-annonce.component.html',
  styleUrls: ['./add-annonce.component.css'],
})
export class AddAnnonceComponent {
  files: File[] = [];
  serviceAccessibilityList: string[];

  constructor() {
    this.serviceAccessibilityList = serviceAccessibilityList;
  }

  onSelect(event: any): void {
    /* if (event.addedFiles[0].size < 2222222222) {
      this.files.push(...event.addedFiles);
    } */
    /*  const imageArray = this.fromRequired.get('images') as FormArray; */
    this.files.push(...event.addedFiles);
    for (const file of this.files) {
      /*  imageArray.push(new FormControl(file)); */
    }
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  preventClose(event: Event): void {
    event.stopPropagation();
  }
}
