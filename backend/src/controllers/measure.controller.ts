import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Measure } from '@prisma/client';
import { MeasureService } from '../services/measure.service';
import { MeasureDto } from '../models/measure.dto';

@Controller("api/measurements")
export class MeasureController {
  constructor(private measureService: MeasureService) {}

  @Get(':deviceName')
  async getAll(@Param('deviceName') deviceName: string): Promise<Measure[]> {
    return await this.measureService.getAll(deviceName);
  }

  @Post(':deviceName')
  async add(@Param('deviceName') deviceName: string, @Body() measure: MeasureDto): Promise<Measure> {
    return await this.measureService.add(deviceName, measure);
  }
}