import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { willaya } from 'src/app/core/shared/data';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  willaya: string[];

  filterForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.willaya = willaya;
  }

  ngOnInit(): void {
    this.filterForm = this.formBuilder.group({
      property: [''],
      besoin: [''],
      prix: [],
      willaya: [],
    });
  }

  setBesoin(value: string): void {
    this.filterForm.get('besoin').setValue(value);
  }

  setProperty(value: string): void {
    this.filterForm.get('property').setValue(value);
  }

  setWillaya(value: string): void {
    this.filterForm.get('willaya').setValue(value);
  }

  onSubmit(): void {
    console.log(this.filterForm.value);
  }
}
