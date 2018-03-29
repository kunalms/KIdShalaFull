import { Component, OnInit, Input } from '@angular/core';

import { Obj } from '../models/object';


@Component({
  selector: 'app-dashboard-item',
  templateUrl: './dashboard-item.component.html',
  styleUrls: ['./dashboard-item.component.css']
})
export class DashboardItemComponent implements OnInit {

	@Input() item: Obj;

	constructor() { }

	ngOnInit() {
	
	}

}
