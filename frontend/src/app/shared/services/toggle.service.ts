import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToggleService {
  public toggle: boolean = true;

  async changeToggle(toggle: boolean) {
    this.toggle = toggle;
  }

  constructor() {}
}
