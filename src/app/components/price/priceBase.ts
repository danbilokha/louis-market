import {Injectable, Input} from '@angular/core';

@Injectable()
abstract class PriceBase {
    @Input()
    price: number;
}

export {PriceBase};
