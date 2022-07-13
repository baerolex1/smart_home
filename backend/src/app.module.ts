import { Module } from '@nestjs/common';
import { PrismaService } from './services/prisma.service';
import { DeviceService } from './services/device.service';
import { DeviceController } from './controllers/device.controller';


@Module({
  imports: [],
  controllers: [DeviceController],
  providers: [PrismaService, DeviceService],
})
export class AppModule {}
