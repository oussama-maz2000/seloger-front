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
import { UpdateBtnComponent } from 'src/app/core/shared/update-btn/update-btn.component';
import { LoadAnnounceAction } from 'src/app/store/action/announce.action';
import { getAllAnnounces } from 'src/app/store/selector/announce.selector';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ConfirmationService, MessageService],
})
export class AdminComponent implements OnInit {
  data$: Observable<any>;
  constructor(private store: Store, private http: HttpClient) {
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
      cellRenderer: UpdateBtnComponent,
    },
  ];

  rowData = [
    {
      make: 'Toyota',
      model: 'm1',
      price: 35351,
      year: 2000,
      country: 'algeria',
    },
    { make: 'Ford', model: 'm2', price: 6546, year: 2000, country: 'algeria' },
    { make: 'M3', model: 'm3', price: 646, year: 2000, country: 'algeria' },
    { make: 'M765', model: 'm4', price: 56486, year: 2000, country: 'algeria' },
  ];

  onGridReady(params: GridReadyEvent) {
    this.rowData$ = this.http.get<any[]>(
      'https://www.ag-grid.com/example-assets/row-data.json'
    );
    this.rowData$.subscribe(console.log);
  }

  onCellClicked(e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }
}
