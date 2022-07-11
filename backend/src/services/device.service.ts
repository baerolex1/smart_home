import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { DataBaseService } from './data-base.service';
import { Device } from '../models/device.model';
import { Configuration } from '../models/configuration.model';

Injectable()
export class DeviceService {

  constructor(@Inject(DataBaseService) private dataBaseService: DataBaseService) {}

  getAll(): {[deviceId: string]: Device} {
    return this.dataBaseService.get().devices;
  }

  get(deviceId: string): Device {
    const device = this.dataBaseService.get().devices[deviceId];
    if (!device) {
      throw new NotFoundException(`Device ${deviceId} was not found!`)
    }
    return device;
  }

  updateConfig(deviceId: string, newConfig: Configuration): Device {
    this.get(deviceId); // make sure device is existing
    this.dataBaseService.get().devices[deviceId].configuration = newConfig;
    return this.get(deviceId);
  }

  addMeasure(deviceId: string, measure: any): Device {
    this.get(deviceId); // make sure device is existing
    this.dataBaseService.get().devices[deviceId].measurements.push(measure);
    return this.get(deviceId);
  }
}