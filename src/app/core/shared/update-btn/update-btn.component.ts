import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-update-btn',
  templateUrl: './update-btn.component.html',
  styleUrls: ['./update-btn.component.css'],
})
export class UpdateBtnComponent implements ICellRendererAngularComp {
  public cellValue: string;

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

  buttonClicked() {
    console.log(this);
  }
}
