import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Announce } from '../../model/announce.interface';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AnnounceService {
  private dataSubject = new Subject<any>();

  constructor(private http: HttpClient) {}

  addAnnounce(annonces: any) {
    return this.http.post('/api/announce/post/annonce', annonces, {
      responseType: 'json',
    });
  }

  getAllAnnounces() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get('/api/announce/get/announces', { headers });
  }

  setData(data: any): void {
    this.dataSubject.next(data);
  }

  getData(): Subject<any> {
    return this.dataSubject;
  }

  addProprietaireWithPropriete(data: any): Observable<any> {
    return this.http.post(
      '/api/announce/post/ProprietaireWithPropriete',
      data,
      {
        responseType: 'text',
      }
    );
  }
}
