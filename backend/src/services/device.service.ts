import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Device } from '@prisma/client';
import { PrismaService } from './prisma.service';
import { DeviceDto } from '../models/device.dto';

Injectable()
export class DeviceService {

  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  async getAll(): Promise<Device[]> {
    return await this.prismaService.device.findMany();
  }

  async get(deviceName: string): Promise<Device> {
    const device = await this.prismaService.device.findUnique({ where: {name: deviceName}});
    if (!device) {
      throw new NotFoundException(`Device with name ${deviceName} was not found!`)
    }
    return device;
  }

  async update(deviceName: string, device: DeviceDto): Promise<Device> {
    const deviceId = (await this.get(deviceName)).id;
    return await this.prismaService.device.update({
      where: {name: deviceName},
      data: { enabled: device.enabled}
    });
  }

  async create(device: DeviceDto): Promise<Device> {
    return await this.prismaService.device.create({
      data: device
    });
  }
}