import {Injectable, Input} from '@angular/core';
import {Currency} from '@settings/currency/currency.dictionary';

@Injectable()
abstract class PriceBase {

    @Input()
    currency: Currency;

    @Input()

}

export {PriceBase};
