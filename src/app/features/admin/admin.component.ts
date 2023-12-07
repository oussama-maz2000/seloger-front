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
import { PropertyResponse } from 'src/app/core/model/Property.interface';
import { AnnounceService } from 'src/app/core/services/announce-service/annonce.service';
import { DialogUpdateComponent } from 'src/app/core/shared/dialog/dialog-update.component';
import { UpdateBtnComponent } from 'src/app/core/shared/update-btn/update-btn.component';
import { State } from 'src/app/store';
import { LoadAnnounceAction } from 'src/app/store/action/announce.action';
import { getProperties } from 'src/app/store/action/properties.action';
import { MessageAction } from 'src/app/store/action/shared.action';
import { getAllAnnounces } from 'src/app/store/selector/announce.selector';
import { getPropertiesSelector } from 'src/app/store/selector/properties.selector';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ConfirmationService, MessageService],
})
export class AdminComponent implements OnInit {
  data$: Observable<any>;
  propertiesData$: Observable<any>;

  constructor(
    private store: Store<State>,
    private http: HttpClient,
    private ancService: AnnounceService
  ) {
    this.store.dispatch(getProperties());
  }
  ngOnInit(): void {
    this.propertiesData$ = this.store.select(getPropertiesSelector);
    this.propertiesData$.subscribe((data) => {
      console.log(data);
    });
  }

  public defaultColDef: ColDef = {
    sortable: true,
    /* filter: true, */
  };

  public themeClass: string = 'ag-theme-quartz';

  public columnDefs: ColDef[] = [
    /*     { field: 'make', width: 100, suppressSizeToFit: true }, */
    { field: 'prpType', headerName: 'Property Type' },
    { headerName: 'Announce Type', field: 'annType' },
    { headerName: 'Juridique Type', field: 'jrcType', width: 300 },
    { headerName: 'Etat Type', field: 'etatType' },
    { headerName: 'Etage', field: 'etage', width: 100 },
    { headerName: 'Facade', field: 'facade', width: 100 },
    { headerName: 'Prix', field: 'price', sortingOrder: ['asc', 'desc'] },
    { headerName: 'Surface', width: 200, field: 'surface' },

    {
      field: 'Action',
      cellRenderer: DialogUpdateComponent,
      width: 100,
    },
  ];

  onGridReady(params: GridReadyEvent) {}

  onCellClicked(e: CellClickedEvent): void {
    /* this.ancService.propertySignal.set(e.data); */
    this.ancService.setData(e.data);
  }
}
