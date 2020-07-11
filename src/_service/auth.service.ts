import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { tap} from 'rxjs/operators'; 
import { JwtHelperService } from '@auth0/angular-jwt';
import { TokenStorageService } from './token-storage.service';
const AUTH_API = 'http://localhost:3200/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
    public jwtHelper: JwtHelperService,
    private tokenService : TokenStorageService) { }
  public isAuthenticated(): boolean {
    const token = this.tokenService.getToken();
    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(token);
  }

  login(credentials) {
    return this.http.post(AUTH_API + 'login', {
      username: credentials.email,
      password: credentials.password
    }, httpOptions).pipe(tap((res:any) => {
     this.tokenService.saveToken(res.token);
}))
}


register(user) {
    return this.http.post(AUTH_API + 'register', {
      fullname: user.fullname,
      email: user.email,
      password: user.password,
      password2 : user.cpassword
    }).pipe(tap(res => {
    //this.login(user)
}))
}

public get loggedIn(): boolean{
  return localStorage.getItem('access_token') !==  null;
}
}
