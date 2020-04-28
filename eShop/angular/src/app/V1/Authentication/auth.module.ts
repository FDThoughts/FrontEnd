import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { LoginService } from './login.service';

@NgModule({
    imports: [
        RouterModule,
        FormsModule,
        CommonModule
    ],
    declarations: [AuthComponent],
    providers: [
        AuthService,
        AuthGuard,
        LoginService
    ],
    exports: [AuthComponent]
})

export class AuthModule {}