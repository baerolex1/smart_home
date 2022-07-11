import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { Configuration } from '../models/configuration.model';
import { Device } from '../models/device.model';
import { DeviceService } from '../services/device.service';

@Controller("api/configurations")
export class ConfigController {
  constructor(private deviceService: DeviceService) {}

  @Get()
  get(): {[deviceId: string]: Device} {
    return this.deviceService.getAll();
  }

  @Get(':deviceId')
  getSpecific(@Param('deviceId') deviceId: string): Configuration {
    return this.deviceService.get(deviceId).configuration;
  }

  @Put(':deviceId')
  updateConfig(@Param('deviceId') deviceId: string, @Body() newConfig: Configuration): Device {
    return this.deviceService.updateConfig(deviceId, newConfig);
  }
}
