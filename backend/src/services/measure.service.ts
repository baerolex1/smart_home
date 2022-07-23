import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Device, Measure } from '@prisma/client';
import { PrismaService } from './prisma.service';
import { DeviceService } from './device.service';
import { MeasureDto } from '../models/measure.dto';

Injectable()
export class MeasureService {

  constructor(@Inject(PrismaService) private prismaService: PrismaService, @Inject(DeviceService) private deviceService: DeviceService) {}

  async getAll(deviceName: string): Promise<Measure[]> {
    const deviceId = (await this.deviceService.get(deviceName)).id;
    return await this.prismaService.measure.findMany({ where: { deviceId }});
  }

  async add(deviceName: string, measure: MeasureDto): Promise<Measure> {
    const deviceId = (await this.deviceService.get(deviceName)).id;
    return await this.prismaService.measure.create({
      data: { ...measure, deviceId },
    });
  }

}