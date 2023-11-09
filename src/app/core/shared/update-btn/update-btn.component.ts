import { Component } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { NgxDropzoneModule } from 'ngx-dropzone';

@Component({
  selector: 'app-update-btn',
  templateUrl: './update-btn.component.html',
  styleUrls: ['./update-btn.component.css'],
})
export class UpdateBtnComponent implements ICellRendererAngularComp {
  public cellValue: string;

  /* nodes:string[]=["house",'apparetment'] */
  public closeResult: string = '';
  constructor(private modalService: NgbModal) {}

  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
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
}
