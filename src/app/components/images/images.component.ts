import {Component, Input} from '@angular/core';
import {LouisImage} from '@common/dictionaries/image.dictionary';
import {Image} from 'angular-modal-gallery';

import {louisImageMapToModalGalleryImage} from './images.calculation';

@Component({
    selector: 'louis-c-images',
    templateUrl: './images.template.html'
})
class ImagesComponent {

    public images: Array<Image>;

    @Input()
    set imagesArray(images: Array<LouisImage>) {
        this.images = louisImageMapToModalGalleryImage(images)
    };
}

export {ImagesComponent};
