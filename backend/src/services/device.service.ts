import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Device } from '@prisma/client';
import { PrismaService } from './prisma.service';

Injectable()
export class DeviceService {

  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  async getAll(): Promise<Device[]> {
    return await this.prismaService.device.findMany();
  }

  async get(id: string): Promise<Device> {
    const device = await this.prismaService.device.findUnique({ where: {id}});
    if (!device) {
      throw new NotFoundException(`Device with id ${id} was not found!`)
    }
    return device;
  }

  // updateConfig(deviceId: string, config: { enabled: boolean }): Prisma.Device {
  //   this.get(deviceId); // make sure device is existing
  //   this.dataBaseService.get().devices[deviceId].configuration = newConfig;
  //   return this.get(deviceId);
  // }
  //
  // addMeasure(deviceId: string, measure: any): Device {
  //   this.get(deviceId); // make sure device is existing
  //   this.dataBaseService.get().devices[deviceId].measurements.push(measure);
  //   return this.get(deviceId);
  // }
}