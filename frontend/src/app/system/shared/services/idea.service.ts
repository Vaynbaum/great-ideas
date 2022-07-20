import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Idea } from '../models/idea.model';

const URL = 'http://localhost:3000/records';
@Injectable({
  providedIn: 'root',
})
export class IdeaService {
  constructor(private http: HttpClient) {}
  createIdea(record: Idea): Observable<Object> {
    return this.http.post(URL, record);
  }
  getIdeas(): Observable<Object[]> {
    return this.http.get<Object[]>(`${URL}?_expand=user&_sort=date&_order=desc`);
  }

  updateIdea(data: Idea) {
    return this.http.put(`${URL}/${data.id}`, data);
  }

  deleteIdea(id: number | undefined) {
    return this.http.delete(`${URL}/${id}`);
  }
}
