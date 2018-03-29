import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';


import { Obj } from '../models/object';

class CategoryResponse{
	_id:string;
	name:string;
}



@Injectable()
export class FetchService {

  constructor(private http: HttpClient) { }

  fetchCategories():Observable<CategoryResponse[]>{
  	const endpoint='api/category/all';
  	return this.http.get<CategoryResponse[]>(endpoint);
  }

  fetchObjects(user_id):Observable<Obj[]>{
  	const endpoint='api/object/user/'+user_id;
  	return this.http.get<Obj[]>(endpoint);
  }

}
