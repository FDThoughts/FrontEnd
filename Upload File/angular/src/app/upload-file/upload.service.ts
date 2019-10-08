import { Injectable, Inject } from '@angular/core';
import { HttpClient }
  from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { ResultModel } from './models/csvresult';
import { API_URL } from './url-generator.provider';

@Injectable()
export class UploadService {

  private _uploadSuccessfully = 
    new Subject<boolean>();
  private _uploadedCount = 0;

  public uploadSuccessfully = 
    this._uploadSuccessfully.asObservable();
  public error: string = "";
  public ParsedFilesResult: ResultModel;

  constructor(private http: HttpClient,
    @Inject(API_URL) private url)
  {
    this._uploadSuccessfully.next(false);
    this.ParsedFilesResult = new ResultModel();
    this.ParsedFilesResult.resultList = [];
  }

  public upload(files: Set<File>, isHeadedFiles)
     {
      this._uploadedCount = 0;
      files.forEach(file => {
        const formData: FormData = new FormData();
        formData.append('files', file, file.name);

        this.uploadFile(formData, isHeadedFiles,
            files.size, file.name).subscribe(
          (res) => {
          }         
        );
      });      
    }

  private uploadFile(data, isHeadedFiles,
    filesCount, filename: string)
  {
    const progress = new Subject<number>();
    let uploadUrl = this.url + "?isHeadedFiles=" + isHeadedFiles;
    
    return this.http.post<any>(
      uploadUrl, data
    ).pipe(map((event) => {            
      if (event.resultList)
      {        
        this.ParsedFilesResult.isHeadedFiles = 
          event.isHeadedFiles;
        event.resultList.forEach(r =>
          this.ParsedFilesResult.resultList.push(r)
        );

        this._uploadedCount++;
        if (this._uploadedCount == filesCount &&
          this.error == "")
        {
          this._uploadSuccessfully.next(true); 
        } 
      }
      else if (event.message)
      {
        this.error += (event.message + " - ");
        this._uploadSuccessfully.next(false);
      } 
    }));
  }
}
