import { Component } from '@angular/core';
import { 
  ErrorHandlerService
} from './V1/errorHandler.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  private lastError: string[];

  constructor(
    private errorService: ErrorHandlerService
  ) {
    errorService.geterrors().subscribe(
      error => {
        this.lastError = error;
      }
    );
  }

  geterror(): string[] {
    return this.lastError;
  }

  clearError() {
    this.lastError = null;
  }
}
