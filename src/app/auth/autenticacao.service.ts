import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { User, UserLogin } from './models/user.models';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  baseUrl = 'http://localhost:3000';

  private userSubject = new BehaviorSubject<User>({user: '', acesso: []});


  constructor(private http: HttpClient) { 
    const user = sessionStorage.getItem('user');
    if(user){

      this.userSubject.next(JSON.parse(user));
    }
  }

  login(userLogin: UserLogin): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/login`, userLogin).pipe(
      map(data => {
        
        this.setUserSubject(data)

        return data;
      })
    );
  }

  private setUserSubject(user: any){
    sessionStorage.setItem('user', JSON.stringify(user));
    this.userSubject.next(user);
  }

  getUser(){
    return this.userSubject.asObservable();
  }

  getRoles(){
    return this.userSubject.getValue();
  }

  logout(){
    this.userSubject.next({
      user: '',
      acesso: []
    });
    sessionStorage.clear();
  }


}
