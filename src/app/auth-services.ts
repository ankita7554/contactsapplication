import { Subject } from 'rxjs';
export class AuthService {
  isLoggedIn = false;

  userActivated = new Subject();

  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.isLoggedIn);
      }, 800);
    });
    return promise;
  }

  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }

  getStatus() {
    return this.isLoggedIn;
  }
}
