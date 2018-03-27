import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

class FileUploadResponse{
	success:boolean;
	msg: string;
}


@Injectable()
export class FileuploadService {

  constructor(private http: HttpClient) { }


  postFile(fileToUpload: File,name,description,category,uid): Observable<FileUploadResponse> {
    const endpoint = 'api/object/upload';
    const formData: FormData = new FormData();
    formData.append('object', fileToUpload, fileToUpload.name);
    formData.append('name',name);
    formData.append('description',description);
    formData.append('cat_id',category);
    formData.append('user_id',uid);
    return this.http.post<FileUploadResponse>(endpoint,formData);
	}
}
