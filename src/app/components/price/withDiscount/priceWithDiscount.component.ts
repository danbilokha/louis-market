import {Component, Input} from '@angular/core';
import {PriceBase} from '../priceBase';

@Component({
    selector: 'louis-component-price-with-discount',
    templateUrl: './priceWithDiscount.template.html',
})
class PriceWithDiscountComponent extends PriceBase {
    @Input()
    newPrice: number;
}

export {PriceWithDiscountComponent};
