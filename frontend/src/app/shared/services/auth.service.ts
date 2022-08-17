import { User } from '../model/user.model';
const KEY = 'user';
export class AuthService {
  public user: User | null = null;
  constructor() {
    const user = localStorage.getItem(KEY);
    if (user) {
      this.user = User.of(JSON.parse(user));
    }
  }
  
  login(user: User) {
    this.user = user;
    window.localStorage.setItem(KEY, JSON.stringify(user));
  }
  logout() {
    this.user = null;
    window.localStorage.removeItem(KEY);
  }
  public get isLoggedIn(): boolean {
    return this.user != null;
  }
}
