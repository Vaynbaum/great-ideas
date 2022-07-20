import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class UnloadService {
  constructor() {}

  async unload(fileImg: any) {

    let formData: FormData = new FormData();
    formData.append('file', fileImg);

    return axios.post(`http://localhost:3002`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }
}
