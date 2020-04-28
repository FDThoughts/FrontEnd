import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { AuthModule } from '../Authentication/auth.module';
import { AuthComponent } from '../Authentication/auth/auth.component';
import { AuthGuard } from '../Authentication/auth.guard';

const routes: Routes = [
    {path: 'login', component: AuthComponent},
    {
        path: '',  
        component: AdminComponent,
        canActivateChild: [AuthGuard],
        children: [
            {path: '', component: AdminComponent}
        ]
    }
];

@NgModule({
    imports: [
        FormsModule,
        RouterModule,
        RouterModule.forChild(routes),
        CommonModule,
        AuthModule
    ],
    declarations: [
        AdminComponent
    ],
    exports: [
        AdminComponent
    ]
})

export class AdminModule { }