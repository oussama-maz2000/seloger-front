import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  connecter: FormGroup;
  visible: boolean = false;

  ngOnInit(): void {
    this.connecter = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  changeVisibility(): void {
    this.visible = !this.visible;
  }

  onSubmit(): void {
    console.log(this.connecter);
  }
}
