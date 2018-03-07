import {Pipe, PipeTransform} from '@angular/core';

import {CalculatePricePipe} from '../calculatePrice/calculatePrice';
import {DiscountPipe} from '../discount/discount';
import {ToFixedPipe} from '../toFixed/toFixed';
import {CurrencySignPipe} from '../currencySign/currencySign';
import {AddSpacePipe} from '../addSpace/addSpace';
import {CurrencyResolverService} from '@services/price/currency-resolver.service';

@Pipe({
    name: 'priceShow'
})
class PriceShowPipe implements PipeTransform {

    constructor(private currencyResolverService: CurrencyResolverService,
                private currencySignPipe: CurrencySignPipe,
                private addSpacePipe: AddSpacePipe,
                private toFixedPipe: ToFixedPipe,
                private discountPipe: DiscountPipe,
                private calculatePricePipe: CalculatePricePipe) {

    }

    transform(price: number = 5, {currencyTo, discount = 0, toFixed = 2}: { currencyTo: string, discount: number, toFixed: number }) {

        return this.currencySignPipe.transform(
            this.addSpacePipe.transform(
                this.toFixedPipe.transform(
                    this.discountPipe.transform(
                        this.calculatePricePipe.transform(price, currencyTo)
                        , discount)
                    , toFixed),
            ),
            currencyTo);
    }
}

export {PriceShowPipe};
