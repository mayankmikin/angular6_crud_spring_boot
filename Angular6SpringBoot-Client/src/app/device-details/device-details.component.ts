import { Component, OnInit, Input } from '@angular/core';
import { DeviceService } from '../device.service';
import { Device } from '../device';

import { DevicesListComponent } from '../devices-list/devices-list.component';

@Component({
  selector: 'device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.css']
})
export class DeviceDetailsComponent implements OnInit {

  @Input() device: Device;

  constructor(private deviceService: DeviceService, private listComponent: DevicesListComponent) { }

  ngOnInit() {
  }

 


}
