import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

class CategoryResponse{
	_id:string;
	name:string;
}

@Injectable()
export class FetchcategoryService {

  constructor(private http: HttpClient) { }

  fetchCategories():Observable<CategoryResponse[]>{
  	const endpoint='api/category/all';
  	return this.http.get<CategoryResponse[]>(endpoint);
  }

}
