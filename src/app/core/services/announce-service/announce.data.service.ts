import { Announce } from '../../model/property.interface';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AnnounceDataService extends DefaultDataService<Announce> {
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('Announce', http, httpUrlGenerator);
  }

  override getAll(): Observable<Announce[]> {
    return this.http.get('http://localhost:3000/products').pipe(
      map((data) => {
        const anounces: Announce[] = [];
        for (let key in data) {
          anounces.push({ ...data[key], id: key });
        }

        return anounces;
      })
    );
  }
}
