import {Component, Input, OnInit} from '@angular/core';

import {Watch} from '@common/dictionaries/watch.dictionary';
import {data} from './Mock/data';

@Component({
    selector: 'louis-watch',
    templateUrl: './watch.template.html',
    styleUrls: ['./watch.style.scss']
})
class WatchComponent implements OnInit {
    @Input()
    public watch: Watch;

    public priceMap:object;
    public watchMock: any = data;

    ngOnInit() {
        console.log(this.watch);

        this.priceMap = {
            currencyTo: 'UAH',
            discount: this.watch.discount,
            toFixed: 2
        };
    }
}

export {WatchComponent};
