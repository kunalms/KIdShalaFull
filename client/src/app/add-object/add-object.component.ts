import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {FlashMessagesService} from 'angular2-flash-messages';

import { FileuploadService } from '../services/fileupload.service';
import { FetchService } from '../services/fetch.service';

@Component({
  selector: 'app-add-object',
  templateUrl: './add-object.component.html',
  styleUrls: ['./add-object.component.css']
})


export class AddObjectComponent implements OnInit {

	fileToUpload: File = null;
	name: string;
	description: string;
	categories: any;
	uid:string;
	selectedCategory:string;
	
  constructor(private fileUploadService:FileuploadService,
  private fetchSevice:FetchService,
  private flashMessagesService:FlashMessagesService,
  private router:Router ) { }

  ngOnInit() {
  	this.fetchSevice.fetchCategories().subscribe(data=>{
  		//console.log(data);
      this.categories=data;
  		});
  	this.uid= localStorage.getItem('user_id');
  }

  onUpload() {
  	this.fileUploadService.postFile(this.fileToUpload,
  		this.name,
  		this.description,
  		this.selectedCategory,
  		this.uid).subscribe(data=>{
        console.log(data);
  		  if(data.success){
          this.flashMessagesService.show(data.msg,{cssClass:'alert-success',timeout:3000});
          this.router.navigate(['/dashboard']);
        }else{
          this.flashMessagesService.show(data.msg,{cssClass:'alert-danger',timeout:3000});
          this.router.navigate(['/dashboard']);
        }

  	});
  }

  handleFileInput(files: FileList) {
    	this.fileToUpload = files.item(0);
	}

}
