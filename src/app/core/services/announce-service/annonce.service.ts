import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AnnounceService {
  constructor(private http: HttpClient) {}

  addAnnounce(annonces: any) {
    console.log(annonces);
    return this.http.post('/api/announce/post/annonce', annonces, {
      responseType: 'text',
    });
  }
}
