import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Announce } from '../../model/announce.interface';
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
    data: any,

    files: File[]
  ): Observable<any> {
    const formData: FormData = new FormData();
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');

    // Append JSON data
    formData.append('data', JSON.stringify(data));
    /*     formData.append('property', propriete);

    formData.append('properietaire', proprietaire);
  */ /* formData.append('proprietaire', data.proprietaire);
    formData.append('propriete', data.propriete);
    formData.append('optionalInformation', data.optionalInformation); */

    // Append files
    /* for (let i = 0; i < files.length; i++) {
      formData.append('images', files[i]);
    } */

    files.forEach((element) => {
      formData.append('images', element);
    });

    return this.http.post('/api/annonce/add', formData, {
      headers,
      responseType: 'text',
    });
  }
}
