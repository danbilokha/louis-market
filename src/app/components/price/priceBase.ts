import {Injectable, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Injectable()
abstract class PriceBase implements OnInit, OnChanges {

    @Input()
    price: number;

    @Input()
    shownPrice: string;

    ngOnInit() {
        console.log(this.price);
        console.log(this.shownPrice);
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log(changes);
        debugger;
    }
}

export {PriceBase};
