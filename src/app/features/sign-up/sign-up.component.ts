import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  visible: boolean = false;
  caractersControl: boolean = false;
  majusculeContorl: boolean = false;
  minisculeControl: boolean = false;
  numControl: boolean = false;

  createAccount: FormGroup;

  ngOnInit(): void {
    this.createAccount = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        this.checkLower.bind(this),
        this.checkUpper.bind(this),
        this.checkNumber.bind(this),
        Validators.minLength(8),
      ]),
    });

    this.createAccount.get('password').valueChanges.subscribe((value) => {
      value.length < 8
        ? (this.caractersControl = false)
        : (this.caractersControl = true);

      this.numControl = /\d/.test(value);
      this.minisculeControl = /[a-z]/.test(value);
      this.majusculeContorl = /[A-Z]/.test(value);
    });
  }

  changeVisibility(): void {
    this.visible = !this.visible;
  }

  checkLower(control: FormControl): { [s: string]: boolean } {
    if (/[a-z]/.test(control.value) == false) return { InvalidLower: true };
    return null;
  }
  checkUpper(control: FormControl): { [s: string]: boolean } {
    if (/[A-Z]/.test(control.value) == false) return { InvalidUpper: true };
    return null;
  }

  checkNumber(control: FormControl): { [s: string]: boolean } {
    if (/\d/.test(control.value) == false) return { InvalidNum: true };
    return null;
  }

  onSubmit() {
    console.log(this.createAccount.value);
  }
}
