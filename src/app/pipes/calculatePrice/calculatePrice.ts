import {Pipe, PipeTransform} from '@angular/core';

import {CurrencyResolverService} from '@services/price/currency-resolver.service';
import {CurrencyService} from '@settings/currency/currency.service';
import {ConvertCurrency, Currency} from '@settings/currency/currency.dictionary';

@Pipe({
    name: 'currencyPrice'
})
class CalculatePricePipe implements PipeTransform {

    constructor(private currencyResolverService: CurrencyResolverService,
                private currencyService: CurrencyService) {
        this.currencyService.setCurrency(Currency.UAH);
        this.currencyService.convertFromTo(new ConvertCurrency(100, Currency.USD))
    }

    transform(value: number, currencyTo: string): number {
        return this.currencyResolverService.calculatePrice(value, currencyTo);
    }
}

export {CalculatePricePipe};
