import {Injectable} from '@angular/core';
import {ExchangeService} from 'app/api/exchange/exchange.service';
import {Currency, ConvertCurrency} from './currency.dictionary';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

@Injectable()
class CurrencyService {

    // TODO: Remove, when default user preference service will be finished
    private currentCurrencySink: BehaviorSubject<Currency> = new BehaviorSubject<Currency>(Currency.UAH);
    public currentCurrency$: Observable<Currency> = this.currentCurrencySink
        .asObservable()
        .filter(v => !!v);

    private exchangeRate$: Observable<any> = this.exchangeService
        .exchangeRate$;

    constructor(private exchangeService: ExchangeService) {
    }

    public setCurrency(currency: Currency): void {
        this.currentCurrencySink.next(currency);
    }

    public convertFromTo(value: number, from: Currency, to?: Currency): Observable<ConvertCurrency> {
        return this.currentCurrency$
            .withLatestFrom(
                this.exchangeRate$,
                (rate, currency) => {
                    if (to === undefined) {
                        console.log('to undefined');
                    }
                    console.log('rate', rate);
                    console.log('rate', currency);
                    return new ConvertCurrency(123, currency);
                }
            )
    }
}

export {CurrencyService};
