import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Announce, Property } from '../../model/announce.interface';
import { Observable, Subject, of } from 'rxjs';
import { PropertyResponse } from '../../model/Property.interface';

@Injectable({ providedIn: 'root' })
export class AnnounceService {
  dataSubject = new Subject<any>();
  data$ = this.dataSubject.asObservable();
  propertySignal = signal<any | null>('');

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

  addProprietaireWithPropriete(property: Property, files: File[]) {
    const formData: FormData = new FormData();
    formData.append('property', JSON.stringify(property));
    files.forEach((element) => {
      formData.append('images', element);
    });
    return this.http.post('/api/annonce/add', formData, {
      responseType: 'text',
    });
  }

  getProperties() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get('/api/annonce/get-properties', { headers });
  }

  updateProperty(property: Property, files: File[]) {
    const formData: FormData = new FormData();
    formData.append('property', JSON.stringify(property));
    files.forEach((element) => {
      formData.append('images', element);
    });
    return this.http.post('/api/annonce/add', formData, {
      responseType: 'text',
    });
  }
}
