import {Injectable} from '@angular/core';
import {CurrencyService} from 'app/shared/services/currency/currency.service';
import {Currency} from 'app/shared/services/currency/currency.dictionary';
import {Observable} from 'rxjs';

@Injectable()
class CalculatePriceService {

    constructor(private currencyService: CurrencyService) {
        this.currencyService.setCurrency(Currency.UAH);
    }

    public calculate(value: number, from: Currency): Observable<number> {

        return this.currencyService
            .getExchangeRate(from)
            .switchMap(rate => {
                return Observable.of(value);
            });
    }
}

export {CalculatePriceService};
