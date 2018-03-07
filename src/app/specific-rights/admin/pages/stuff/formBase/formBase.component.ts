import {Component} from '@angular/core';
import {LouisImage} from '@common/dictionaries/Image.dictionary';
import {Watch} from '@common/dictionaries/watch.dictionary';
import * as _ from 'lodash';
import {DbService} from 'store/external/store-external.service';
import {SCHEMA} from 'store/schema';

@Component({
    selector: 'louis-form-base',
    templateUrl: './formBase.template.html',
    styleUrls: ['./formBase.style.scss']
})
class FormBaseComponent {

    public name: string;
    public images: Array<LouisImage>;
    public price: number;
    public currency: string = 'usd';
    public description: string;
    public type: string = 'automatic';
    public isAvailable: boolean = true;
    public discount?: number = 0;

    // isAvailabe
    public value: number = 1;

    public currencies: Array<any> = [
        {
            value: 'usd', display: 'USD'
        },
        {
            value: 'eur', display: 'EUR'
        },
        {
            value: 'uah', display: 'UAH'
        }
    ];

    public types: Array<object> = [
        {
            value: 'automatic', display: 'automatic'
        },
        {
            value: 'quartz', display: 'quartz'
        }
    ];
    public valueChanged = (newValue: number): void => {
        this.value = newValue;
        this.isAvailable = newValue === 1;
    };

    public constructor(private dbService: DbService) {
    }

    public loadedImages(images: Array<LouisImage>) {
        this.images = images;
    }

    public onReset(): void {
        this.name = '';
        this.description = '';
        this.type = 'automatic';
        this.currency = 'usd';
        this.price = null;
        this.discount = 0;
    }

    public onSubmit(): void {

        if (_.isNil(this.name)
            || _.isNil(this.description)
            || _.isNil(this.price)
            || _.isNil(this.images)) {

            console.log('CANNOT ADD NEW WATCH');
            return;
        }

        const watch = new Watch(this.name,
            this.images,
            this.price,
            this.currency,
            this.description,
            this.type,
            this.isAvailable,
            this.discount);

        this.dbService.setDbData(SCHEMA.WATCH, watch);
    }
}

export {FormBaseComponent}
