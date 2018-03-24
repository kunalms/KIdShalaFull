import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../models/user';


class RegistrationResponse{
	success:string;
	msg:string;
	id:string;
}

class AuthResponse{
	success:boolean;
  msg:string;
	user:User;
}

class ProfileResponse{
  user:User;
}

@Injectable()
export class AuthService {

    user_id:any;
    user_info:any;

  	constructor(private http: HttpClient) { }

  	addUser(user): Observable<RegistrationResponse>{
  		let headers= new HttpHeaders();
  		headers = headers.set('Content-Type', 'application/json');
  		return this.http.post<RegistrationResponse>('api/user/register',user,{headers:headers});
  	}

  	authenticateUser(user):Observable<AuthResponse>{
  		let headers= new HttpHeaders();
  		headers = headers.set('Content-Type', 'application/json');
  		return this.http.post<AuthResponse>('api/user/authenticate',user,{headers:headers});
  	}

    getProfile():Observable<ProfileResponse>{
      this.loadId();
      let user={uid:this.user_id};
      let headers= new HttpHeaders();
      headers = headers.set('Content-Type', 'application/json');
      return this.http.post<ProfileResponse>('api/user/profile',user,{headers:headers}); 
    }


    storeUserData(id,user){
      localStorage.setItem("logged_in","true");
      localStorage.setItem("user_id",id);
      localStorage.setItem("user_info",JSON.stringify(user));
      this.user_id=id;
      this.user_info=user;
    }

    loadId(){
      const u_id = localStorage.getItem('user_id');
      this.user_id=u_id;
    }

    loggedIn(){
      var logged_in=localStorage.getItem("logged_in");
      if(logged_in== "true"){
        return true;
      }
      return  false;
    }

    logout(){
      this.user_id=null;
      this.user_info=null;
      localStorage.clear();
    }

}
