import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UrlImgService {
  constructor() {}

  getURLImg(url: string | undefined): string | undefined {
    return url
      ? (url as string).indexOf('http') > -1
        ? url
        : `http://localhost:3002/${url}`
      : undefined;
  }
}
