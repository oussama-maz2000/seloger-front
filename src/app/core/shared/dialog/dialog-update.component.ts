import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ICellRendererParams } from 'ag-grid-community';
import { AgGridModule, ICellRendererAngularComp } from 'ag-grid-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { MultiSelectModule } from 'primeng/multiselect';
import { QuillModule } from 'ngx-quill';
import { quillConfig } from 'src/app/core/shared/data';
import { AnnounceService } from '../../services/announce-service/annonce.service';
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
  public closeResult: string = '';
  public cellValue: string;
  files: File[] = [];
  quillConfig: any;
  serviceAccessibility = [
    {
      value: 'ELEVATOR',
      label: 'elevator',
    },
    {
      value: 'INTERCOM',
      label: 'intercom',
    },
    {
      value: 'CHIP_PORT',
      label: 'chip_port',
    },
    {
      value: 'GUARDIAN',
      label: 'guardian',
    },
    {
      value: 'PARKING',
      label: 'parking',
    },
    {
      value: 'INTERNET',
      label: 'internet',
    },
    {
      value: 'COLLECTON_PARABLES',
      label: 'collection_parables',
    },
  ];

  constructor(
    private modalService: NgbModal,
    private ancService: AnnounceService
  ) {
    this.quillConfig = quillConfig;
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

    this.ancService.getData().subscribe((data) => console.log(data));
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
    console.log('ag init ');
  }
  refresh(params: ICellRendererParams<any, any, any>): boolean {
    this.cellValue = this.getValueToDisplay(params);
    return false;
  }

  getValueToDisplay(params: ICellRendererParams) {
    return params.valueFormatted ? params.valueFormatted : params.value;
  }
}
