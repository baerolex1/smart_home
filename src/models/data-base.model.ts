import { Device } from './device.model';

export class DataBase {

  devices: {[deviceId: string]: Device} = {};

  constructor(devices: {[deviceId: string]: Device}) {
    this.devices = devices;
  }

}