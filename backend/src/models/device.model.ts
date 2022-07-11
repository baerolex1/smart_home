import { Configuration } from './configuration.model';

export class Device {

  id: string;
  configuration: Configuration = { on: true };
  measurements: any[] = [];

  constructor(id: string, measurement: any) {
    this.id = id;
    this.measurements.push(measurement);
  }
}