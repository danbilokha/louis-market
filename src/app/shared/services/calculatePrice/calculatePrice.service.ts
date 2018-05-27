import {Injectable} from '@angular/core';
import {CurrencyService} from '@louis/shared/services/currency/currency.service';
import {Currency} from '@louis/shared/services/currency/currency.dictionary';
import {Observable} from 'rxjs';

@Injectable()
class CalculatePriceService {

    constructor(private currencyService: CurrencyService) {
        this.currencyService.setCurrency(Currency.UAH);
    }

    public calculate(value: number, from: Currency, to?: Currency): Observable<number> {
        // TODO: Implement converting to user currencies, not only for UAH
        return this.currencyService
            .getExchangeRate(from, to) // CURRENTLY ONLY TO UAH
            .switchMap(rate => Observable.of(value * rate));
    }
}

export {CalculatePriceService};
