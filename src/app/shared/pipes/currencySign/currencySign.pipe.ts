import {Pipe, PipeTransform} from '@angular/core';
import {CurrencyService} from '@services/currency/currency.service';
import {Observable} from 'rxjs';
import {Currency} from '@services/currency/currency.dictionary';

@Pipe({
    name: '[currencySign]'
})
class CurrencySignPipe implements PipeTransform {

    constructor(private currencyService: CurrencyService) {
    }

    transform(value: number): Observable<string> {
        return this.currencyService
            .getCurrentCurrency()
            .map((currency: Currency) => `${value} ${currency.toString()}`);
    }
}

export {CurrencySignPipe};
