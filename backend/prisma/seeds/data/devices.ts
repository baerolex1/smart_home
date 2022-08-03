import { Device, Measure } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime';

const DEVICE_ID_1 = 'SmartPlug1';
const DEVICE_ID_2 = 'SmartPlug2';

export const devices = [{
  data:   {
    id: DEVICE_ID_1,
    name: DEVICE_ID_1,
    enabled: true,
  }
},
{
  data:   {
    id: DEVICE_ID_2,
    name: DEVICE_ID_2,
    enabled: true,
  }
}];

export const measures = [{
  data: {
    temperatureInDegree: new Decimal(22),
    currentInAmpere: new Decimal(79),
    voltageInVolt: new Decimal(7.55),
    powerInWatts: new Decimal(72.5),
    powerFactor: new Decimal(78),
    frequencyInHertz: new Decimal(12),
    deviceId: DEVICE_ID_1
  }
},
{
  data: {
    temperatureInDegree: new Decimal(22),
    currentInAmpere: new Decimal(79),
    voltageInVolt: new Decimal(7.55),
    powerInWatts: new Decimal(72.5),
    powerFactor: new Decimal(78),
    frequencyInHertz: new Decimal(12),
    deviceId: DEVICE_ID_2
  }
}];