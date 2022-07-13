// import { Body, Controller, Param, Post } from '@nestjs/common';
// import { DeviceService } from '../services/device.service';
// import { Device } from '../models/device.model';
//
// @Controller("api/measurements")
// export class MeasureController {
//   constructor(private deviceService: DeviceService) {}
//
//   @Post(':deviceId')
//   newMeasure(@Param('deviceId') deviceId: string, @Body() measure: any): Device {
//     return this.deviceService.addMeasure(deviceId, measure);
//   }
// }