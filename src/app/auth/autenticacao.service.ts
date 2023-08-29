import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { User, UserLogin } from './models/user.models';

import { AngularFireAuth } from '@angular/fire/compat/auth'
import { GoogleAuthProvider } from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  baseUrl = 'http://localhost:3000';

  private userSubject = new BehaviorSubject<any>(null);

  user: any;
  error: any;


  constructor(private http: HttpClient, public auth: AngularFireAuth) { 
    const user = sessionStorage.getItem('user');
    if(user){

      this.userSubject.next(JSON.parse(user));
    }
  }

  async login(userLogin: UserLogin) {
    try {

      const credential = await this.auth.signInWithEmailAndPassword(userLogin.email, userLogin.senha);

      this.user = credential.user;

      this.setUserSubject(this.user);

      return credential.user;
      
    } catch (error) {
      this.error = error;
      return error;
    } 
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
    this.userSubject.next(null);
    sessionStorage.clear();
    this.auth.signOut();
  }


}
