import { Module } from '@nestjs/common';
import { ConfigController } from './controllers/config.controller';
import { DataBaseService } from './services/data-base.service';
import { MeasureController } from './controllers/measure.controller';
import { DeviceService } from './services/device.service';

@Module({
  imports: [],
  controllers: [ConfigController, MeasureController],
  providers: [DataBaseService, DeviceService],
})
export class AppModule {}
