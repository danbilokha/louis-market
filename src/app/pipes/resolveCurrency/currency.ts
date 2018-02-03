import {Pipe} from '@angular/core';

import {CurrencyResolverService} from '@services/price/currency-resolver';

@Pipe({
    name: 'currency'
})
class CurrencyPipe {

    //constructor()

    transform(value: number, currency: string = 'UAH'): string {
        return `${value} ${currency.toUpperCase()}`;
    }
}

export {CurrencyPipe};
