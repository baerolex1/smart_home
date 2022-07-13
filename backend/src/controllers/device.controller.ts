import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { Device } from '@prisma/client';
import { DeviceService } from '../services/device.service';

@Controller("api/devices")
export class DeviceController {
  constructor(private deviceService: DeviceService) {}

  @Get()
  async getAll(): Promise<Device[]> {
    return await this.deviceService.getAll();
  }

  @Get(':deviceId')
  async get(@Param('deviceId') deviceId: string): Promise<Device> {
    return await this.deviceService.get(deviceId);
  }

  // TODO
  // @Put(':deviceId')
  // updateConfig(@Param('deviceId') deviceId: string, @Body() newConfig: Configuration): Device {
  //   return this.deviceService.updateConfig(deviceId, newConfig);
  // }
}
