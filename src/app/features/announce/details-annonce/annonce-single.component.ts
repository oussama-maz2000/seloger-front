import { Component, OnInit } from '@angular/core';
import { AnnonceService } from 'src/app/core/services/annonce.service';

@Component({
  selector: 'app-annonce-single',
  templateUrl: './annonce-single.component.html',
  styleUrls: ['./annonce-single.component.css'],
})
export class AnnonceSingleComponent implements OnInit {
  constructor(private _anncService: AnnonceService) {}
  readonly title = this._anncService.title();

  ngOnInit(): void {
    console.log(this.title);
  }
}
