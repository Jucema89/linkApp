import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  saveIdUser(id: string) {
    localStorage.setItem('idUser', id);
  }

  getIdUser() {
    return localStorage.getItem('idUser');
  }
  
}
