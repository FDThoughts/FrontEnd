import { Component,
  ViewChild} from '@angular/core';

import { MatDialog } 
  from '@angular/material';
import { DialogComponent }
  from './dialog/dialog.component';
import { UploadService } 
  from './upload.service';
import { ResultModel } from './models/csvresult';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent {

  @ViewChild(DialogComponent, {static: false})
  private dialogChhild : DialogComponent;

  uploadSuccessfully: boolean = false;
  parsedFilesResult: ResultModel;

  constructor(public dialog:
    MatDialog, public uploadService:
    UploadService) { 
      uploadService.uploadSuccessfully.subscribe(
        success => {
          this.uploadSuccessfully = success;
          this.parsedFilesResult = 
            this.uploadService.ParsedFilesResult;
        }
      )
    }

  public openUploadDialog() {
    let dialogRef = this.dialog
      .open(
        DialogComponent,
        {
          width: '50%',
          height: '50%'
        }
      )
  }
}
