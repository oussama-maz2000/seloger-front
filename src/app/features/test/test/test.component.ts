import { Component } from '@angular/core';
import { willaya } from 'src/app/core/shared/data';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  willaya:string[]
  constructor() {
    this.willaya = willaya;
   }

}
