import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AnnounceService } from 'src/app/core/services/announce-service/annonce.service';

import { FormBuilder, FormGroup } from '@angular/forms';
import { LoadAnnounceAction } from 'src/app/store/action/announce.action';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private store: Store, private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    /*  this.store.dispatch(LoadAnnounceAction()); */
  }
}
