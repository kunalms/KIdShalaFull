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

    postPrefab(fileToUpload:File,asset_name,id):Observable<FileUploadResponse>{
        const endpoint='api/object/approve';
        const formData:FormData= new FormData();
        formData.append('id',id);
        formData.append('prefab', fileToUpload, fileToUpload.name);
        formData.append('asset_name',asset_name);
        return this.http.post<FileUploadResponse>(endpoint,formData);   
    }

    rejectObject (id):Observable<FileUploadResponse>{
        const endpoint='api/object/reject';
        let headers= new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json');
        return this.http.post<FileUploadResponse>(endpoint,{id:id},{headers:headers});
    }

    addCategory(name,description):Observable<FileUploadResponse>{
        const endpoint='api/category/add';
        let headers= new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json');
        return this.http.post<FileUploadResponse>(endpoint,{name:name,description:description},{headers:headers});
    }
}
