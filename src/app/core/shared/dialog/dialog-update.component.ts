import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ICellRendererParams } from 'ag-grid-community';
import { AgGridModule, ICellRendererAngularComp } from 'ag-grid-angular';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { MultiSelectModule } from 'primeng/multiselect';
import { QuillModule } from 'ngx-quill';
import {
  quillConfig,
  willaya,
  serviceAccessibilityList,
  hygieneList,
  piecesList,
  publicServcieList,
  avances,
} from 'src/app/core/shared/data';
import { AnnounceService } from '../../services/announce-service/annonce.service';

import { PropertyResponse } from '../../model/Property.interface';
import {
  validateNumber,
  validatePublicService,
  validateServiceAccessebility,
  validatehygiene,
} from '../../validation/ValidationFn';
@Component({
  selector: 'app-dialog-update',
  standalone: true,
  imports: [
    CommonModule,
    AgGridModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDropzoneModule,
    MultiSelectModule,
    QuillModule,
  ],
  templateUrl: './dialog-update.component.html',
  styleUrls: ['./dialog-update.component.css'],
})
export class DialogUpdateComponent implements ICellRendererAngularComp, OnInit {
  closeResult: string = '';
  cellValue: string;
  files: File[] = [];
  willays: string[];
  quillConfig: any;
  serviceAccessibilityList: string[];
  hygieneList: string[];
  piecesList: string[];
  publicServcieList: string[];
  updatePropertyForm: FormGroup;
  avances: string[];

  oldProperty: PropertyResponse = null;

  constructor(
    private modalService: NgbModal,
    private ancService: AnnounceService,
    private formBuilder: FormBuilder
  ) {
    this.quillConfig = quillConfig;
    this.willays = willaya;
    this.serviceAccessibilityList = serviceAccessibilityList;
    this.hygieneList = hygieneList;
    this.piecesList = piecesList;
    this.publicServcieList = publicServcieList;
    this.avances = avances;
    this.updateProprieteForm();
  }
  ngOnInit(): void {}

  openFullScreen(content) {
    const modalRef = this.modalService.open(content, {
      size: 'xl',
      centered: true,
      windowClass: 'full-screen-modal',
      keyboard: true,
      scrollable: true,
      animation: true,
    });

    this.ancService.data$.subscribe((data) => {
      this.updatePropertyForm.patchValue({
        prpType: data.prpType,
        annType: data.annType,
        jrcType: data.jrcType,
        willaya: data.willaya,
        address: data.address,
        etage: data.etage,
        facade: data.facade,
        price: data.price,
        surface: data.surface,
        etatType: data.etatType,
        meublee: data.meublee,
        negociable: data.negociable,
        /* service: data.service, */
        hygiene: data.hygiene,
        pieces: data.pieces,
        servicePublicdata: data.servicePublic,
        climatisationdata: data.climatisation,
        chauffage: data.chauffage,
        etatCity: data.etatCity,
        avances: data.avances,
        cuisin: data.cuisin,
        disponible: data.disponible,
        description: data.description,
      });
      this.updatePropertyForm.get('service').patchValue(data.service);
    });
  }

  onSelect(event: any): void {
    /* if (event.addedFiles[0].size < 2222222222) {
      this.files.push(...event.addedFiles);
    } */
    /*  const imageArray = this.fromRequired.get('images') as FormArray;
    this.files.push(...event.addedFiles);
    for (const file of this.files) {
      imageArray.push(new FormControl(file));
    } */
  }
  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  agInit(params: ICellRendererParams<any, any, any>): void {
    this.cellValue = this.getValueToDisplay(params);
  }
  refresh(params: ICellRendererParams<any, any, any>): boolean {
    this.cellValue = this.getValueToDisplay(params);
    return false;
  }

  getValueToDisplay(params: ICellRendererParams) {
    return params.valueFormatted ? params.valueFormatted : params.value;
  }

  addOrRemoveFormControl(e: any, formControlName: string) {
    const controlArray: FormArray = this.updatePropertyForm.get(
      formControlName
    ) as FormArray;

    if (e.target.checked) {
      controlArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      controlArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          controlArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  updateProprieteForm() {
    this.updatePropertyForm = this.formBuilder.group({
      prpType: [, [Validators.required]],
      annType: [, [Validators.required]],
      jrcType: [, [Validators.required]],
      willaya: [, [Validators.required]],
      address: [, [Validators.required]],
      etage: [, [Validators.required, validateNumber()]],
      facade: [, [Validators.required, validateNumber()]],
      price: [, [Validators.required, validateNumber()]],
      surface: [, [Validators.required, validateNumber()]],
      etatType: [, [Validators.required]],
      meublee: [, [Validators.required]],
      negociable: [, [Validators.required]],
      service: this.formBuilder.array([], [validateServiceAccessebility()]),
      hygiene: this.formBuilder.array([], [validatehygiene()]),
      pieces: [''],
      servicePublic: this.formBuilder.array([], [validatePublicService()]),
      climatisation: [,],
      chauffage: [],
      etatCity: [],
      avances: [],
      cuisin: [],
      disponible: [],
      description: [],
    });
  }

  preventClose(event: Event): void {
    event.stopPropagation();
  }
}
