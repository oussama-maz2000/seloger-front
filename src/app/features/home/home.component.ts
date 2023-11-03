import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AnnounceService } from 'src/app/core/services/announce-service/annonce.service';
import {
  LoadAnnounceAction,
  LoadAnnounceSuccessAction,
} from 'src/app/store/action/announce.action';
import { getAnnounces } from 'src/app/store/selector/announce.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private store: Store, private anncService: AnnounceService) {}
  ngOnInit(): void {
    /* this.store.dispatch(LoadAnnounceAction());
    this.store.select(getAnnounces).subscribe(console.log); */
    this.anncService.getAllAnnounces();
  }
}
