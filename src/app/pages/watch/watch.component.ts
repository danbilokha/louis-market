import {Component, Input, OnInit} from '@angular/core';
import {Watch} from '@common/dictionaries/watch.dictionary';
import {LouisImage} from '@common/dictionaries/Image.dictionary';

@Component({
    selector: 'louis-watch-page',
    templateUrl: './watch.template.html',
    styleUrls: ['./watch.style.scss']
})

class WatchPageComponent implements OnInit {

    @Input()
    public watch: Watch;

    public mainImage: LouisImage;
    public priceMap: object;

    ngOnInit() {
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
