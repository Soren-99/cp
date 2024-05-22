import { UserStorageService } from './../storage/user-storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AuthenticationResponse } from '../../Authentication';

const BASIC_URL = "http://localhost:8080/";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

    constructor( private http: HttpClient,
    private userStorageService: UserStorageService) { }

  register(signupDTO:any): Observable<any> {
    return this.http.post(BASIC_URL + "sign-up", signupDTO);
  }



  login(username: string, password: string): any {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = {username, password};

    return this.http.post(BASIC_URL + 'authenticate', body, { headers, observe: 'response'}).pipe(
      map((res: any) => {
        const body = res.body as AuthenticationResponse;
        const token = body.jwtToken;
        const user = body.user;
        if (token && user) {
          this.userStorageService.saveToken(token);
          this.userStorageService.saveUser(user);
          console.log(token);
          return true;

        }
        return false;
      })
    )
  }

  getOrderByTrackingId(trackingId: number): Observable<any>{
    return this.http.get(BASIC_URL + `order/${trackingId}`);
  }
}
