import { Component, OnInit } from '@angular/core';

import { Device } from '../device';
import { DeviceService } from '../device.service';

@Component({
  selector: 'create-device',
  templateUrl: './create-device.component.html',
  styleUrls: ['./create-device.component.css']
})
export class CreateDeviceComponent implements OnInit {

  device: Device = new Device();
  submitted = false;

  constructor(private deviceService: DeviceService) { }

  ngOnInit() {
  }

  newDevice(): void {
    this.submitted = false;
    this.device = new Device();
  }

  save() {
    this.deviceService.createDevice(this.device)
      .subscribe(data => console.log(data), error => console.log(error));
    this.device = new Device();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
