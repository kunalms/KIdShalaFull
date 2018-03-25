import { Component, OnInit } from '@angular/core';

import { FileuploadService } from '../services/fileupload.service';

@Component({
  selector: 'app-add-object',
  templateUrl: './add-object.component.html',
  styleUrls: ['./add-object.component.css']
})
export class AddObjectComponent implements OnInit {

	fileToUpload: File = null;
	name: String;
	description: String;
	category: String;

	datafromServer:String;

  constructor(private fileUploadService:FileuploadService ) { }

  ngOnInit() {
  
  }

  onUpload(){
  	this.fileUploadService.postFile(this.fileToUpload,this.name,this.description,this.category).subscribe(data=>{
  		this.datafromServer= data;
  	});
  }

  	handleFileInput(files: FileList) {
    	this.fileToUpload = files.item(0);
	}

	

}


//action="/api/object/upload"