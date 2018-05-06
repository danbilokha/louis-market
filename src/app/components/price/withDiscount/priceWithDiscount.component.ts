import {Component, OnInit} from '@angular/core';
import {PriceBase} from '../priceBase';

@Component({
    selector: 'louis-c-price-with-discount',
    templateUrl: './priceWithDiscount.template.html',
})
class PriceWithDiscountComponent extends PriceBase implements OnInit {

    ngOnInit() {
        console.log(this.price);
        debugger;
    }

}

export {PriceWithDiscountComponent};
