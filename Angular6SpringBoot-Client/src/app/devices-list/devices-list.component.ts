import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DeviceService } from '../device.service';
import { Device } from '../device';

@Component({
  selector: 'devices-list',
  templateUrl: './devices-list.component.html',
  styleUrls: ['./devices-list.component.css']
})
export class DevicesListComponent implements OnInit {

  devices: Observable<Device[]>;
  constructor(private deviceService: DeviceService) { }

  ngOnInit() {
    this.reloadData();
  }

  

	reloadData() {
	    this.devices = this.deviceService.getDevicesList();
	  }
}
