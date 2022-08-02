import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { AddNewDeviceData } from '../../models/device.model';

@Component({
  selector: 'app-add-new-device',
  templateUrl: './add-new-device.component.html',
  styleUrls: ['./add-new-device.component.scss']
})
export class AddNewDeviceComponent {

  name = new FormControl(undefined, Validators.required);
  enabled = new FormControl(true, Validators.required);

  constructor(
    public dialogRef: MatDialogRef<AddNewDeviceComponent>,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  getData(): AddNewDeviceData {
    return {
      name: this.name.value,
      enabled: true,
    }
  }
}
