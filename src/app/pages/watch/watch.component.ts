import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
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

    ngOnInit() {
        console.log(this.watch);
        this.mainImage = this.getMainImage(this.watch.images);
    }

    private getMainImage(images: Array<LouisImage>): LouisImage {

        for(let i = 0, len = images.length; i < len; i += 1) {
            if(images[i].isMain) {
                return images[i];
            }
        }

        return images[0];
    }
}

export {WatchPageComponent};
