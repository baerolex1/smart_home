import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../../services/device.service';
import { AddNewDeviceData, Device } from '../../models/device.model';
import { MatDialog } from '@angular/material/dialog';
import { AddNewDeviceComponent } from '../add-new-device/add-new-device.component';

@Component({
  selector: 'app-device-overview',
  templateUrl: './device-overview.component.html',
  styleUrls: ['./device-overview.component.scss']
})
export class DeviceOverviewComponent implements OnInit {

  devices: Device[] = [];

  constructor(private deviceService: DeviceService, private dialog: MatDialog) { }

  async ngOnInit(): Promise<void> {
    await this.loadDevices();
  }

  async loadDevices(): Promise<void> {
    this.devices = await this.deviceService.loadDevices().toPromise();
  }

  async updateDevice(device: Device): Promise<void> {
    device.enabled = !device.enabled;
    await this.deviceService.updateDevice(device).toPromise();
  }

  getSliderTooltip(device: Device): string {
    return `${device.enabled ? 'Disable' : 'Enable'} device ${device.name}`;
  }

  addNew(): void {
    this.dialog.open(AddNewDeviceComponent, {
      width: '250px',
    }).afterClosed().subscribe(async (data: AddNewDeviceData) => {
       await this.deviceService.add(data).toPromise();
       await this.loadDevices();
    });
  }

}
