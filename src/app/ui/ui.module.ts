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
        MatCardModule,
        MatButtonModule,
        MatCheckboxModule,
        MatSliderModule,
    ],
    exports: [
        SliderComponent,
    ]
})
class UiModule { }

export {UiModule};
