import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddNewDeviceData, Device } from '../models/device.model';
import { BACKEND_URL } from '../constants/url.constant';
import { Observable } from 'rxjs';

@Injectable()
export class DeviceService {
  constructor(private http: HttpClient) { }

  loadDevices(): Observable<Device[]> {
    console.log("Test")
    return this.http.get<Device[]>(BACKEND_URL.DEVICES);
  }

  updateDevice(device: Device): Observable<Device> {
    console.log(device)
    return this.http.put<Device>(`${BACKEND_URL.DEVICES}/${device.name}`, { name: device.name, enabled: device.enabled });
  }

  add(device: AddNewDeviceData): Observable<Device> {
    return this.http.post<Device>(BACKEND_URL.DEVICES, device);
  }
}