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
  publicServiceList,
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
import { Property } from '../../model/announce.interface';
import { Store } from '@ngrx/store';
import { updatePropertyAction } from 'src/app/store/action/properties.action';
import { ToasterService } from '../../services/announce-service/toast.service';
import { SpinnerAction } from 'src/app/store/action/shared.action';
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
  publicServiceList: string[];
  avances: string[];

  imagesListLink: string[] = [];
  removedLinks: string[] = [];

  checkProprieteFormValidation: boolean = false;

  updatePropertyForm: FormGroup;
  uploadFilesFormControl: FormGroup;

  constructor(
    private modalService: NgbModal,
    private ancService: AnnounceService,
    private formBuilder: FormBuilder,
    private store: Store,
    private toast: ToasterService
  ) {
    this.quillConfig = quillConfig;
    this.willays = willaya;
    this.serviceAccessibilityList = serviceAccessibilityList;
    this.hygieneList = hygieneList;
    this.piecesList = piecesList;
    this.publicServiceList = publicServiceList;
    this.avances = avances;
    this.updateProprieteForm();
    this.updateFilesForm();
  }
  ngOnInit(): void {
    this.ancService.data$.subscribe((data) => {
      this.updatePropertyForm.patchValue({
        id: data.id,
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
        piece: data.piece,
        climatisation: data.climatisation,
        chauffage: data.chauffage,
        etatCity: data.etatCity,
        avances: data.avances,
        cuisin: data.cuisin,
        disponible: data.disponible,
        description: data.description,
        imagesLink: data.imagesLink,
      });

      this.updateServiceAccessebility(data.service);
      this.updateServicePublic(data.servicePublic);
      this.updateHygiene(data.hygiene);
      this.imagesListLink = data.imagesLink;
    });
  }

  openFullScreen(content) {
    const modalRef = this.modalService.open(content, {
      size: 'xl',
      centered: true,
      windowClass: 'full-screen-modal',
      keyboard: true,
      scrollable: true,
      animation: true,
    });
  }

  onSelect(event: any): void {
    for (const file of event.addedFiles) {
      // Initialize fileExists for each file in the loop
      let fileExists = this.files.some(
        (existingFile) => existingFile.name === file.name
      );

      // Check if the file type is valid and if it doesn't already exist
      if (
        (file.type === 'image/jpeg' ||
          file.type === 'image/webp' ||
          file.type === 'image/png') &&
        !fileExists
      ) {
        this.files.push(file);
        this.images.push(new FormControl(file)); // Assuming FormControl usage is correct
      }
    }
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
      id: [],
      prpType: [, [Validators.required]],
      annType: [, [Validators.required]],
      jrcType: [, [Validators.required]],
      willaya: [, [Validators.required]],
      address: [, [Validators.required]],
      etage: [, [Validators.required, validateNumber(), Validators.min(0)]],
      facade: [, [Validators.required, validateNumber(), Validators.min(1)]],
      price: [, [Validators.required, validateNumber()]],
      surface: [, [Validators.required, validateNumber(), Validators.min(0)]],
      etatType: [, [Validators.required]],
      meublee: [, [Validators.required]],
      negociable: [, [Validators.required]],
      service: this.formBuilder.array([], [validateServiceAccessebility()]),
      hygiene: this.formBuilder.array([], [validatehygiene()]),
      piece: [],
      servicePublic: this.formBuilder.array([], [validatePublicService()]),
      climatisation: [,],
      chauffage: [],
      etatCity: [],
      avances: [],
      cuisin: [],
      disponible: [],
      description: [],
      imagesLink: [],
    });
  }

  updateFilesForm() {
    this.uploadFilesFormControl = this.formBuilder.group({
      images: this.formBuilder.array([], [Validators.required]),
    });
  }

  updateServiceAccessebility(services: string[]) {
    const serviceAccessibility = this.updatePropertyForm.get(
      'service'
    ) as FormArray;
    serviceAccessibility.clear();
    services.forEach((element) => {
      const control = this.formBuilder.control(element, [Validators.required]);
      serviceAccessibility.push(control);
    });
  }

  updateServicePublic(servicePublics: string[]) {
    const servicePublic = this.updatePropertyForm.get(
      'servicePublic'
    ) as FormArray;
    servicePublic.clear();
    servicePublics.forEach((element) => {
      const control = this.formBuilder.control(element, [Validators.required]);
      servicePublic.push(control);
    });
  }

  updateHygiene(hygienes: string[]) {
    const hygieneControl = this.updatePropertyForm.get('hygiene') as FormArray;
    hygieneControl.clear();
    hygienes.forEach((element) => {
      const control = this.formBuilder.control(element, [Validators.required]);
      hygieneControl.push(control);
    });
  }

  preventClose(event: Event): void {
    event.stopPropagation();
  }

  isServiceChecked(item: string): boolean {
    return this.updatePropertyForm.get('servicePublic').value.includes(item);
  }

  addOrRemoveService(item: string, event: any) {
    const servicePublicArray = this.updatePropertyForm.get(
      'servicePublic'
    ) as FormArray;
    if (event.target.checked) {
      // Add the item if it's checked and not already in the array
      if (!servicePublicArray.value.includes(item)) {
        servicePublicArray.push(new FormControl(item));
      }
    } else {
      // Remove the item if it's unchecked
      const index = servicePublicArray.value.indexOf(item);
      if (index >= 0) {
        servicePublicArray.removeAt(index);
      }
    }
  }
  addOrRemoveHygiene(item: string, event: any) {
    const hygieneArray = this.updatePropertyForm.get('hygiene') as FormArray;
    if (event.target.checked) {
      if (!hygieneArray.value.includes(item)) {
        hygieneArray.push(new FormControl(item));
      }
    } else {
      // Remove the item if it's unchecked
      const index = hygieneArray.value.indexOf(item);
      if (index >= 0) {
        hygieneArray.removeAt(index);
      }
    }
  }

  addOrRemoveServiceAccessibility(item: string, event: any) {
    const serviceArray = this.updatePropertyForm.get('service') as FormArray;
    if (event.target.checked) {
      // Add the item if it's checked and not already in the array
      if (!serviceArray.value.includes(item)) {
        serviceArray.push(new FormControl(item));
      }
    } else {
      // Remove the item if it's unchecked
      const index = serviceArray.value.indexOf(item);
      if (index >= 0) {
        serviceArray.removeAt(index);
      }
    }
  }

  isHygieneChecked(item: string): boolean {
    return this.updatePropertyForm.get('hygiene').value.includes(item);
  }
  isServiceAccessibilityChecked(item: string): boolean {
    return this.updatePropertyForm.get('service').value.includes(item);
  }

  removeItem(index: number, item: string): void {
    if (confirm('are you sure')) {
      this.imagesListLink.slice(index, 1);
      this.removedLinks.push(item);
      this.updatePropertyForm.get('imagesLink').value.splice(index, 1);
    }
  }

  onRemoveFile(event) {
    const indexToRemove = this.files.findIndex(
      (file) => file.name === event.name
    );

    if (indexToRemove !== -1) {
      this.files.splice(indexToRemove, 1);
      this.images.removeAt(indexToRemove);
    }
  }

  get images() {
    return this.uploadFilesFormControl.get('images') as FormArray;
  }

  submitData(modal: any) {
    this.checkProprieteFormValidation = true;
    let property: Property = this.updatePropertyForm.value;
    property.imagesLink = this.imagesListLink;

    if (this.updatePropertyForm.valid || this.checkProprieteFormValidation) {
      this.store.dispatch(
        updatePropertyAction({
          property: property,
          images: this.images.value,
          pathsDeleted: this.removedLinks,
        })
      );
      this.store.dispatch(SpinnerAction({ status: true }));
      modal.close('Save click');
    }
    // modal.close('Save click');
  }
}
