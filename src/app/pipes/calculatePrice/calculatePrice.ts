import {Pipe} from '@angular/core';

import {CurrencyResolverService} from '@services/price/currency-resolver';

@Pipe({
    name: 'currencyPrice'
})
class CalculatePricePipe {

    constructor(private currencyResolverService: CurrencyResolverService) {

    }

    transform(value: number, currencyTo: string): number {
        return this.currencyResolverService.calculatePrice(value, currencyTo);
    }
}

export {CalculatePricePipe};
