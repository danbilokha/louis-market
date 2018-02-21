import {MatButtonModule, MatCardModule, MatCheckboxModule, MatSliderModule} from '@angular/material';
import {NgModule} from '@angular/core';

import {SliderComponent} from './slider/slider.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        SliderComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        // Material modules
        MatCardModule,
        MatButtonModule,
        MatCheckboxModule,
        MatSliderModule
    ],
    exports: [
        SliderComponent,
        MatCardModule,
        MatButtonModule,
        MatCheckboxModule,
        MatSliderModule
    ]
})
class UiModule { }

export {UiModule};
