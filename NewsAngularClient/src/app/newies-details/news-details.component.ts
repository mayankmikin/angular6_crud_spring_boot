import { Component, OnInit, Input } from '@angular/core';
import { DeviceService } from '../news.service';
import { Device } from '../device';

import { NewiesListComponent } from '../newies-list/newies-list.component';

@Component({
  selector: 'news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {

  @Input() device: Device;

  constructor(private newsService: NewsService, private listComponent: NewiesListComponent) { }

  ngOnInit() {
  }

 


}
