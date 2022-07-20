import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item.model';
import { TypeItem } from '../models/typeItem.model';
const URL = 'http://localhost:3000/items';
@Injectable({
  providedIn: 'root',
})
export class ItemService {
  public currentItem: Item | null | undefined;
  public typeItem: TypeItem | undefined;
  constructor(private http: HttpClient) {}
  getItems(): Observable<Object[]> {
    return this.http.get<Object[]>(`${URL}?_expand=typeItem`);
  }

  getItemById(id: number | undefined): Observable<Object> {
    return this.http.get(`${URL}/${id}?_expand=typeItem`);
  }

  updateItemById(item: Item) {
    item.typeItem = undefined;
    return this.http.put(`${URL}/${item.id}`, item);
  }

  deleteItem(id: number | undefined) {
    return this.http.delete(`${URL}/${id}`);
  }
}
