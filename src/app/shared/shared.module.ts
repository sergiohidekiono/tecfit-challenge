import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        PageNotFoundComponent
    ],
    imports: [
        HttpClientModule,
        ReactiveFormsModule
    ],
    exports: [
        HttpClientModule,
        ReactiveFormsModule,
        PageNotFoundComponent
    ]
})

export class SharedModule {
}
