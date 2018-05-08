import {Component} from '@angular/core';
import {PriceBase} from '../priceBase';

@Component({
    selector: 'louis-c-price-without-discount',
    templateUrl: './priceWithoutDiscount.template.html',
})
class PriceWithoutDiscountComponent extends PriceBase {
}

export {PriceWithoutDiscountComponent};
