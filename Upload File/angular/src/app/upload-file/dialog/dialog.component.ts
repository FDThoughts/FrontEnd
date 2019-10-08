import { Component, OnInit, ViewChild } 
  from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  @ViewChild('file', {static: false}) file

  public files: Set<File> = new Set()
  progress
  canBeClosed = true
  primaryButtonText = 'Upload'
  showCancelButton = true
  uploading = false
  isHeadedFiles = false;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    public uploadService: UploadService
  ) {
    uploadService.uploadSuccessfully.subscribe(
      success => {
        this.uploading = !success;
        this.canBeClosed = success;
         this.dialogRef.disableClose = !success;
        if (success) {
          this.dialogRef.close();
        }
      }
    )
   }

  ngOnInit() {
  }

  addFiles() {
    this.file.nativeElement.click();
  }

  onFilesAdded() {
    const files: {[key: string]: File} =
      this.file.nativeElement.files;
    for (let key in files) {
      if (!isNaN(parseInt(key))) {
        this.files.add(files[key]);
      }
    }
  }

  closeDialog() {
    this.uploading = true;

    this.uploadService.upload
      (this.files, this.isHeadedFiles);

    this.primaryButtonText = 'Finish';

    this.canBeClosed = false;
    this.dialogRef.disableClose = true;
  }
}
