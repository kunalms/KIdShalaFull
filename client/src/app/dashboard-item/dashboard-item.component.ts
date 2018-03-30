import { Component, OnInit, Input } from '@angular/core';

import { Obj } from '../models/object';


@Component({
  selector: 'app-dashboard-item',
  templateUrl: './dashboard-item.component.html',
  styleUrls: ['./dashboard-item.component.css']
})
export class DashboardItemComponent implements OnInit {

	@Input() index: Number;
	@Input() item: Obj;

	itemUrl:String;
	

	constructor() { }

	ngOnInit() {
		this.itemUrl= "http://localhost:3000"+this.item.original_file_path+this.item.file_name;
	}

}
