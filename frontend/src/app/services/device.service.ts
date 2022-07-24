import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Device } from '../models/device.model';
import { BACKEND_URL } from '../constants/url.constant';
import { Observable } from 'rxjs';

@Injectable()
export class DeviceService {
  constructor(private http: HttpClient) { }

  loadDevices(): Observable<Device[]> {
    return this.http.get<Device[]>(BACKEND_URL.DEVICES);
  }

  updateDevice(device: Device): Observable<Device> {
    return this.http.put<Device>(`${BACKEND_URL.DEVICES}/${device.name}`, { name: device.name, enabled: device.enabled });
  }
}