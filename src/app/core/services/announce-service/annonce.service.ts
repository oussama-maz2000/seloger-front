import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Announce,
  Properietaire,
  Property,
} from '../../model/announce.interface';
import { Observable, Subject, of } from 'rxjs';

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

  addProprietaireWithPropriete(
    properietaire: Properietaire,

    property: Property,
    files: File[]
  ): Observable<any> {
    const formData: FormData = new FormData();

    const headers = new HttpHeaders({
      'Content-Type': 'multipart/form-data',
    });
    formData.append('properietaire', JSON.stringify(properietaire));
    formData.append('property', JSON.stringify(property));
    files.forEach((element) => {
      formData.append('images', element);
    });
    return this.http.post('/api/annonce/add', formData, {
      responseType: 'text',
    });
  }
}
