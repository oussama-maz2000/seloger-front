import { Injectable, signal } from '@angular/core';
@Injectable()
export class AnnonceService {
  title = signal<string>('');
}
