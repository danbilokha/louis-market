import {MatButtonModule, MatCardModule, MatCheckboxModule, MatSliderModule} from '@angular/material';
import {NgModule} from '@angular/core';

import {SliderComponent} from './slider/slider.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {UploadImagesComponent} from './upload-images/upload-images.component';

@NgModule({
    declarations: [
        SliderComponent,
        UploadImagesComponent
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
        UploadImagesComponent,
        MatCardModule,
        MatButtonModule,
        MatCheckboxModule,
        MatSliderModule
    ]
})
class UiModule { }

export {UiModule};
