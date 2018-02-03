import {Pipe} from '@angular/core';

import {CurrencyResolverService} from '@services/price/currency-resolver';

@Pipe({
    name: 'currency'
})
class CurrencyPipe {

    constructor(private currencyResolverService:CurrencyResolverService) {

    }

    transform(value: number, currency: string): string {
        if(currency === undefined)
            currency = this.currencyResolverService.getCurrentCurrency;
            
        return `${value} ${currency.toUpperCase()}`;
    }
}

export {CurrencyPipe};
