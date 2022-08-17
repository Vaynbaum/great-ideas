import { Injectable } from '@angular/core';
import { URL_UPLOAD_IMAGE } from '../urls';

@Injectable({
  providedIn: 'root',
})
export class UrlImgService {
  constructor() {}

  getURLImg(url: string | undefined): string | undefined {
    return url
      ? (url as string).indexOf('http') > -1
        ? url
        : `${URL_UPLOAD_IMAGE}/${url}`
      : undefined;
  }
}
