import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Master {

  kota = signal<any[]>(['Jakarta', 'Bandung', 'Surabaya', 'Medan']);
  constructor() {}

  getItems() {
    return this.kota();
  }

}
