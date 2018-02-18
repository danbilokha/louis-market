import {MatButtonModule, MatCardModule, MatCheckboxModule, MatSliderModule} from '@angular/material';
import {NgModule} from '@angular/core';

import {SliderComponent} from './slider/slider.component';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';

@NgModule({
    declarations: [
        SliderComponent
    ],
    imports: [
        MatCardModule,
        MatButtonModule,
        MatCheckboxModule,
        MatSliderModule,
    ],
    exports: [
        MatCardModule,
        MatButtonModule,
        MatCheckboxModule,
        MatSliderModule,
    ]
})
class UiModule { }

export {UiModule};
