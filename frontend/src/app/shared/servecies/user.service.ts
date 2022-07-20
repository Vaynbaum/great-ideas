import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';
import { map } from 'rxjs/operators';
const url = 'http://localhost:3000/users';
@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}
  getUserByEmail(email: string): Observable<User> {
    return this.http
      .get(`${url}?email=${email}`)
      .pipe(map((user: any) => (user[0] ? user[0] : undefined)));
  }

  getUserById(id: number): Observable<Object> {
    return this.http.get(`${url}${id}`);
  }

  createUser(user: User): Observable<Object> {
    return this.http.post(`${url}`, user);
  }

  deleteUser(id: number) {
    return this.http.delete(`${url}/${id}`);
  }

  updateUser(user: User): Observable<Object> {
    window.localStorage.setItem('user', JSON.stringify(user));
    return this.http.put(`${url}/${user.id}`, user);
  }

  getUsers(): Observable<Object[]> {
    return this.http.get<Object[]>(`${url}`);
  }
}
