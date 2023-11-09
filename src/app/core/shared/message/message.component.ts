import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { getMessage, getType } from 'src/app/store/selector/shared.selector';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent implements OnInit {
  alertColor: string;
  alertMessage: string;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.select(getType).subscribe((data) => {
      if (data == 'suc') this.alertColor = 'alert alert-success';
      else this.alertColor = 'alert alert-danger';
    });

    this.store.select(getMessage).subscribe((date) => {
      this.alertMessage = date;
    });
  }
}
