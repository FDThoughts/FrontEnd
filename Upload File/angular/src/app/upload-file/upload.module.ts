import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadFileComponent } from './upload-file.component';
import {
  MatButtonModule,
  MatDialogModule,
  MatListModule,
  MatProgressBarModule,
  MatTableModule,
  MatInputModule,
  MatCheckboxModule
} from '@angular/material';
import { BrowserAnimationsModule } 
  from '@angular/platform-browser/animations';
import { FlexLayoutModule } from 
  '@angular/flex-layout';
import { HttpClientModule }
  from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DialogComponent } from './dialog/dialog.component';
import { UploadService } from './upload.service';
import { API_URL_PROVIDER } from './url-generator.provider';

@NgModule({
  declarations: [UploadFileComponent, 
    DialogComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatListModule,
    FlexLayoutModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatTableModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule
  ],
  exports: [
    UploadFileComponent,
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatListModule,
    FlexLayoutModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatTableModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule
  ],
  entryComponents: [DialogComponent],
  providers: [
    UploadService,
    API_URL_PROVIDER
  ],
})
export class UploadModule { }
