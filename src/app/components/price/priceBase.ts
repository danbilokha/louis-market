import {Input} from '@angular/core';

abstract class PriceBase {
    @Input()
    price: number;
}

export {PriceBase};
