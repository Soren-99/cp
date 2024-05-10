import { Injectable } from '@angular/core';

const TOKEN = 'cp-token'
const USER = 'cp-user'

@Injectable({
  providedIn: 'root'
})
export class UserStorageService {

  constructor() { }

  public saveToken(token: string): void{
    window.localStorage.removeItem(TOKEN);
    window.localStorage.setItem(TOKEN, token);
  }

  public saveUser(user): void{
    window.localStorage.removeItem(TOKEN);
    window.localStorage.setItem(USER, JSON.stringify(user));
  }
}
