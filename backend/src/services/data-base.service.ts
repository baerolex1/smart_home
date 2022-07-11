import { Injectable, Logger, OnApplicationBootstrap } from '@nestjs/common';
import { DataBase } from '../models/data-base.model';
import { existsSync, readFileSync, writeFileSync } from 'fs';
import { Device } from '../models/device.model';

Injectable()
export class DataBaseService implements OnApplicationBootstrap {

  private DATA_BASE_FILE = 'data/data-base.json';

  private INITIAL_SAMPLE = new DataBase({ 'device1': new Device('device1', { value: 17 })})

  private readonly logger = new Logger(DataBaseService.name);

  private dataBase: DataBase;

  get(): DataBase {
    return this.dataBase;
  }

  onApplicationBootstrap(): void {
    if(!existsSync(this.DATA_BASE_FILE)) {
      this.logger.log(`No persisted database file found [${this.DATA_BASE_FILE}] a new empty database will be created!`);
      this.dataBase = this.INITIAL_SAMPLE;
    }
    else {
      this.dataBase = JSON.parse(readFileSync(this.DATA_BASE_FILE) as unknown as string) as DataBase;
      this.logger.log(`Database was loaded successfully from [${this.DATA_BASE_FILE}]`);
    }
    setInterval(()=> this.persistDatabase(), 10000);
  }

  private persistDatabase(): void {
    writeFileSync(this.DATA_BASE_FILE, JSON.stringify(this.dataBase, null, 2), { flag: 'w' });
  }
}
