import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

import player from 'lottie-web';
@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
})
export class SpinnerComponent {
  options: AnimationOptions = {
    path: '../../../../assets/maison/lottie.json',
  };

  styles: Partial<CSSStyleDeclaration> = {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '0px',
  };
}
export function playerFactory() {
  return player;
}
