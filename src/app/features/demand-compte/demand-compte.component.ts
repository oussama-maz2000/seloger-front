import { Component, OnInit } from '@angular/core';
import { willaya } from 'src/app/core/shared/data';
@Component({
  selector: 'app-demand-compte',
  templateUrl: './demand-compte.component.html',
  styleUrls: ['./demand-compte.component.css'],
})
export class DemandCompteComponent implements OnInit {
  willays: string[];

  constructor() {
    this.willays = willaya;
  }
  ngOnInit(): void {}
}
