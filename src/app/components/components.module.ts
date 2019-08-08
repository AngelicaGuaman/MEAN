import { FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { IncrementoComponent } from './incremento/incremento.component';

@NgModule({
    declarations: [
        IncrementoComponent
    ],
    imports: [
        FormsModule
    ],
    exports: [
        IncrementoComponent
    ]
})

export class ComponentsModule { }