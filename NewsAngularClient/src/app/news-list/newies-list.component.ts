import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { NewsService } from '../device.service';
import { News } from '../news';

@Component({
  selector: 'newies-list',
  templateUrl: './newies-list.component.html',
  styleUrls: ['./newies-list.component.css']
})
export class NewiesListComponent implements OnInit {

  newies: Observable<News[]>;
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.reloadData();
  }

  

	reloadData() {
	    this.newies = this.newsService.getDevicesList();
	  }
}
