import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import {
  ConfirmationService,
  MessageService,
  ConfirmEventType,
} from 'primeng/api';
import { Observable } from 'rxjs';
import { AnnounceService } from 'src/app/core/services/announce-service/annonce.service';
import { DialogUpdateComponent } from 'src/app/core/shared/dialog/dialog-update.component';
import { UpdateBtnComponent } from 'src/app/core/shared/update-btn/update-btn.component';
import { LoadAnnounceAction } from 'src/app/store/action/announce.action';
import { MessageAction } from 'src/app/store/action/shared.action';
import { getAllAnnounces } from 'src/app/store/selector/announce.selector';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ConfirmationService, MessageService],
})
export class AdminComponent implements OnInit {
  data$: Observable<any>;
  constructor(
    private store: Store,
    private http: HttpClient,
    private ancService: AnnounceService
  ) {
    this.store.dispatch(LoadAnnounceAction());
  }
  ngOnInit(): void {
    this.data$ = this.store.select(getAllAnnounces);
    this.data$.subscribe(console.log);
  }

  public rowData$!: Observable<any[]>;

  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  public columnDefs: ColDef[] = [
    { field: 'make', width: 100, suppressSizeToFit: true },
    { field: 'model' },
    { field: 'price' },
    {
      field: 'action',
      cellRenderer: DialogUpdateComponent,
    },
  ];

  onGridReady(params: GridReadyEvent) {
    this.rowData$ = this.http.get<any[]>(
      'https://www.ag-grid.com/example-assets/row-data.json'
    );

    this.rowData$.subscribe(console.log);
  }

  onCellClicked(e: CellClickedEvent): void {
    this.ancService.setData(e.data);
  }
}
