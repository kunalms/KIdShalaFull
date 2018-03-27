import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

class CategoryResponse{
	_id:string;
	name:string;
}

class ObjectResponse{
	ratings: any[];
	_id: string;
	name: string;
	description: string;
	original_file_path: string;
	asset_bundle_path: string ;
	asset_name: string ;
	file_name: string;
	image_path: string;
	view_count: number;
	upload_date: string;
	cat_id: string;
	user_id: string;
	approve_status: number;
	__v: number;
}

@Injectable()
export class FetchService {

  constructor(private http: HttpClient) { }

  fetchCategories():Observable<CategoryResponse[]>{
  	const endpoint='api/category/all';
  	return this.http.get<CategoryResponse[]>(endpoint);
  }

  fetchObjects(user_id):Observable<ObjectResponse[]>{
  	const endpoint='api/object/user/'+user_id;
  	return this.http.get<ObjectResponse[]>(endpoint);
  }

}
