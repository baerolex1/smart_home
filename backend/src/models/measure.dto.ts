import { Decimal } from '@prisma/client/runtime';

export class MeasureDto {

  temperatureInDegree: Decimal;
  currentInAmpere: Decimal;
  voltageInVolt: Decimal;
  powerInWatts: Decimal;
  powerFactor: Decimal;
  frequencyInHertz: Decimal;
}