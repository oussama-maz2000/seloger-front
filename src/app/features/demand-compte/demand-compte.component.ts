import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { willaya } from 'src/app/core/shared/data';

@Component({
  selector: 'app-demand-compte',
  templateUrl: './demand-compte.component.html',
  styleUrls: ['./demand-compte.component.css'],
})
export class DemandCompteComponent implements OnInit {
  willaya: string[];
  submitted: boolean = false;
  demandForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.willaya = willaya;
  }
  ngOnInit(): void {
    this.demandForm = this.formBuilder.group({
      nom_agence: ['', [Validators.required]],
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      adress_agence: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', [Validators.required]],
      willaya: ['Tous', [Validators.required]],
    });
  }

  onSubmit() {
    this.submitted = true;

    console.log(this.demandForm.value);
  }
}
