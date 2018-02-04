import {Pipe} from '@angular/core';

import {CurrencyResolverService} from '@services/price/currency-resolver';

@Pipe({
    name: 'currency-sign'
})
class CurrencyPipe {

    constructor(private currencyResolverService:CurrencyResolverService) {

    }

    transform(value: number): string {
        return `${value} ${this.currencyResolverService.getCurrentCurrency.toUpperCase()}`;
    }
}

export {CurrencyPipe};
