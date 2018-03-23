import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';


class AuthResponse{
	success:string;
	msg:string;
	id:string;
}

@Injectable()
export class AuthService {


  	constructor(private http: HttpClient) { }



  	addUser(user): Observable<AuthResponse>{
  		let headers= new HttpHeaders();
  		headers = headers.set('Content-Type', 'application/json');
  		return this.http.post<AuthResponse>('api/user/register',user,{headers:headers});
  	}

}
