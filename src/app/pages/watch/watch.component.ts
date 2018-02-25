import {Component, Input, OnInit} from '@angular/core';
import {Watch} from '@common/dictionaries/watch.dictionary';
import {LouisImage} from '@common/dictionaries/Image.dictionary';

import {Image, Action, ImageModalEvent, Description} from 'angular-modal-gallery';

@Component({
    selector: 'louis-watch-page',
    templateUrl: './watch.template.html',
    styleUrls: ['./watch.style.scss']
})

class WatchPageComponent implements OnInit {

    @Input()
    public watch: Watch;

    public imagesArray: Array<Image>;
    public mainImage: LouisImage;

    ngOnInit() {
        console.log(this.watch);

        this.mainImage = this.getMainImage(this.watch.images);
        this.imagesArray = this.getImagesArrayForExternalLibrary(this.watch.images);

        console.log(this.imagesArray);
    }

    private getMainImage(images: Array<LouisImage>): LouisImage {

        for (let i = 0, len = images.length; i < len; i += 1) {
            if (images[i].isMain) {
                return images[i];
            }
        }

        return images[0];
    }

    private getImagesArrayForExternalLibrary(images: Array<LouisImage>): Array<Image> {
        return images.map(image => {
            return new Image(
                image.binary,
                null,
                image.name,
                null
            )
        });
    }
}

export {WatchPageComponent};
