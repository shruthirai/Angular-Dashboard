import { Injectable } from '@angular/core';
import {  Http } from '@angular/http';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  getUserList(){
    return this.http.get('../../assets/userlist.json');
  }
}
