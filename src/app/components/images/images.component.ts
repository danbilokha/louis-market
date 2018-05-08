import {Component, Input} from '@angular/core';
import {LouisImage} from '@dictionaries/image.dictionary';
import {Image} from 'angular-modal-gallery';

import {louisImageMapToModalGalleryImage} from './images.calculation';

@Component({
    selector: 'louis-c-images',
    templateUrl: './images.template.html'
})
class ImagesComponent {

    public images: Array<Image>;

    @Input()
    public set imagesArray(images: Array<LouisImage>) {
        if (images === undefined) {
            return;
        }
        this.images = louisImageMapToModalGalleryImage(images);
    };
}

export {ImagesComponent};
