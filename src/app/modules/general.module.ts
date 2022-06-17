import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';

import { SharedModule } from './../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './users/user.component';

@NgModule({
    declarations: [
        HomeComponent,
        UserComponent
    ],
    imports: [
        SharedModule,
        CoreModule,
        CommonModule
    ],
    exports: []
})
export class GeneralModule { }
