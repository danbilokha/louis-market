import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Watch} from '@common/dictionaries/watch.dictionary';
import {LouisImage} from '@common/dictionaries/Image.dictionary';
import {DEFAULT_WATCH_IMAGE} from '@settings/constants';

@Component({
    selector: 'louis-watch-page',
    templateUrl: './watch.template.html',
    styleUrls: ['./watch.style.scss']
})
class WatchPageComponent implements OnInit {

    public watch: Watch = {} as any;

    public mainImage: LouisImage;
    public priceMap: object;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.watch = this.route.snapshot.data.watch;
        this.mainImage = this.watch.images
            ? this.getMainImage(this.watch.images)
            : new LouisImage(
                'Default watch image',
                0,
                'default image',
                `${DEFAULT_WATCH_IMAGE}`,
                true
            );

        this.priceMap = {
            currencyTo: 'UAH',
            discount: this.watch.discount,
            toFixed: 2
        };
    }

    private getMainImage(images: Array<LouisImage>): LouisImage {

        for (let i = 0, len = images.length; i < len; i += 1) {
            if (images[i].isMain) {
                return images[i];
            }
        }

        return images[0];
    }
}

export {WatchPageComponent};
