import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

import {Watch} from '@common/dictionaries/watch.dictionary';
import {LouisImage} from '@common/dictionaries/Image.dictionary';
import {data} from './Mock/data';

@Component({
    selector: 'louis-watch',
    templateUrl: './watch.template.html',
    styleUrls: ['./watch.style.scss']
})
class WatchComponent implements OnInit, OnChanges {

    @Input()
    public watch: Watch;

    @Input()
    public extraClasses: string;

    public mainImage: string = data.image;
    public priceMap: object;

    ngOnInit() {
        this.priceMap = {
            currencyTo: 'UAH',
            discount: this.watch.discount,
            toFixed: 2
        };
    }

    ngOnChanges(changes: SimpleChanges): void {
        const watch = changes.watch.currentValue;
        if (watch && watch.images.length) {
            this.mainImage = this.getMainImage(watch.images)
        }
    }

    private getMainImage(images: Array<LouisImage>): string {
        for (let i = 0, len = images.length; i < len; i += 1) {
            if (images[i].isMain) {
                return images[i].binary;
            }
        }

        return images[0].binary;
    }
}

export {WatchComponent};
