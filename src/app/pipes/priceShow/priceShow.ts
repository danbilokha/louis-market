import {Pipe} from '@angular/core';

import {CalculatePricePipe} from '../calculatePrice/calculatePrice';
import {DiscountPipe} from '../discount/discount';
import {ToFixedPipe} from '../toFixed/toFixed';
import {CurrencySignPipe} from '../currencySign/currencySign';
import {CurrencyResolverService} from '@services/price/currency-resolver';

@Pipe({
    name: 'priceShow'
})
class PriceShowPipe {

    constructor(private currencyResolverService: CurrencyResolverService,
        private currencySignPipe:CurrencySignPipe,
        private toFixedPipe: ToFixedPipe,
        private discountPipe: DiscountPipe,
        private calculatePricePipe: CalculatePricePipe) {

    }

    transform(price: number = 5, {currencyTo, discount = 0, toFixed = 2}:
            {currencyTo: string, discount: number, toFixed: number}) {

        // let currencySignPipe = new CurrencySignPipe();
        // let toFixedPipe = new ToFixedPipe();
        // let discountPipe = new DiscountPipe();
        // let calculatePricePipe = new CalculatePricePipe(this.currencyResolverService);

        return this.currencySignPipe.transform(
            this.toFixedPipe.transform(
                this.discountPipe.transform(
                        this.calculatePricePipe.transform(price, currencyTo)
                    , discount)
                , toFixed),
            currencyTo);
    }
}

export {PriceShowPipe};
