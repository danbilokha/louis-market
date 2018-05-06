import {Pipe, PipeTransform} from '@angular/core';

import {CurrencyResolverService} from '@services/price/currency-resolver.service';
import {CurrencyService} from '@settings/currency/currency.service';
import {Currency} from '@settings/currency/currency.dictionary';

@Pipe({
    name: 'currencyPrice'
})
class CalculatePricePipe implements PipeTransform {

    constructor(private currencyResolverService: CurrencyResolverService,
                private currencyService: CurrencyService) {
        this.currencyService.setCurrency(Currency.UAH);
    }

    transform(value: number, from: Currency): number {

        const ret = this.currencyService
            .convertFromTo(value, from);


        return value * 100;
    }
}

export {CalculatePricePipe};
