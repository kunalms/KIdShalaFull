import { Component, OnInit, ViewEncapsulation,Input } from '@angular/core';
import { Router } from '@angular/router';

import {FlashMessagesService} from 'angular2-flash-messages';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { FileuploadService } from '../../services/fileupload.service';
import { Obj } from '../../models/object';

@Component({
  selector: 'app-dashboarditem',
  templateUrl: './dashboarditem.component.html',
  styleUrls: ['./dashboarditem.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboarditemComponent implements OnInit {

  private modalRef;
  object_id:String;
  fileToUpload: File = null;
  assetname:String;
	@Input() item: Obj;
	itemUrl:String;

  	constructor(private modalService: NgbModal,
      private fileUploadService:FileuploadService,
      private flashMessagesService:FlashMessagesService,
      private router:Router) {}

	ngOnInit() {
    this.object_id=this.item._id;
		this.itemUrl= "http://localhost:3000"+this.item.original_file_path+this.item.file_name;
  	}

  	openWindowCustomClass(content) {
  		this.modalRef = this.modalService.open(content, {windowClass: 'dark-modal'});
    }

    onUpload() {
      console.log(this.fileToUpload,this.assetname,this.object_id);
      this.modalRef.close();this.modalRef.close();
      this.fileUploadService.postPrefab(this.fileToUpload,this.assetname,this.object_id).subscribe(data=>{
        if(data.success){
          console.log("success");
          this.flashMessagesService.show(data.msg,{cssClass:'alert-success',timeout:3000});
          this.router.navigate(['/adminhome']);
        }else{
          this.flashMessagesService.show(data.msg,{cssClass:'alert-danger',timeout:3000});
          this.router.navigate(['/adminhome']);
        }
      });
    }

    handleFileInput(files: FileList) {
      this.fileToUpload = files.item(0);
    }

}
