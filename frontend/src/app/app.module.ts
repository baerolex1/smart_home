import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DeviceOverviewComponent } from './components/device-overview/device-overview.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { SectionCtComponent } from './components/section-ct/section-ct.component';
import { HttpClientModule } from '@angular/common/http';
import { DeviceService } from './services/device.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddNewDeviceComponent } from './components/add-new-device/add-new-device.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
  AppComponent,
  NotFoundComponent,
  HomeComponent,
  DeviceOverviewComponent,
  SectionCtComponent,
  AddNewDeviceComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatDividerModule,
    HttpClientModule,
    MatTooltipModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  providers: [DeviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
