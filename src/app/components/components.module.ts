import { FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { IncrementoComponent } from './incremento/incremento.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
    declarations: [
        IncrementoComponent,
        GraphicsComponent
    ],
    imports: [
        FormsModule,
        ChartsModule
    ],
    exports: [
        IncrementoComponent, 
        GraphicsComponent
    ]
})

export class ComponentsModule { }