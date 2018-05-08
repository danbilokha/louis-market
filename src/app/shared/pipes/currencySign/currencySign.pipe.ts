import {Pipe, PipeTransform} from '@angular/core';
import {CurrencyService} from '@services/currency/currency.service';
import {Observable} from 'rxjs/Observable';

@Pipe({
    name: '[currencySign]'
})
class CurrencySignPipe implements PipeTransform {

    constructor(private currencyService: CurrencyService) {
    }

    transform(value: number): Observable<string> {
        return this.currencyService
            .getCurrentCurrency()
            .map(currency => )
        return `${value} ${currencySign.toUpperCase()}`;
    }
}

export {CurrencySignPipe};
