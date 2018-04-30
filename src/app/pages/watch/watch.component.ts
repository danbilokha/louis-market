import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Watch} from '@common/dictionaries/watch.dictionary';
import {LouisImage} from '@common/dictionaries/Image.dictionary';

@Component({
    selector: 'louis-watch-page',
    templateUrl: './watch.template.html',
    styleUrls: ['./watch.style.scss']
})

class WatchPageComponent implements OnInit {

    public watch: Watch;

    public mainImage: LouisImage;
    public priceMap: object;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        console.log(this.route.snapshot.data.watch);
        this.watch = this.route.snapshot.data.watch;
        this.mainImage = this.getMainImage(this.watch.images);

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
