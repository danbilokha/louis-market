import {Pipe, PipeTransform} from '@angular/core';

import {CurrencyResolverService} from '@services/price/currency-resolver.service';
import {CurrencyService} from '@settings/currency/currency.service';
import {Currency} from '@settings/currency/currency.dictionary';
import {Observable} from 'rxjs/Observable';

@Pipe({
    name: 'currencyPrice'
})
class CalculatePricePipe implements PipeTransform {

    constructor(private currencyResolverService: CurrencyResolverService,
                private currencyService: CurrencyService) {
        this.currencyService.setCurrency(Currency.UAH);
    }

    transform(value: number, from: Currency): Observable<number> {
        return this.currencyService
            .convertFromTo(value, from);
    }
}

export {CalculatePricePipe};
