import { SpinnerComponent } from './spinner/spinner.component';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        PageNotFoundComponent,
        SpinnerComponent
    ],
    imports: [
        HttpClientModule,
        ReactiveFormsModule,
        CommonModule
    ],
    exports: [
        HttpClientModule,
        ReactiveFormsModule,
        PageNotFoundComponent,
        SpinnerComponent
    ]
})

export class SharedModule {
}
