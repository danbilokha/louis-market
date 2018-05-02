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

    private exchangeRateSink: BehaviorSubject<any> = new BehaviorSubject<any>(undefined);
    private exchangeRate$: Observable<any> = this.exchangeRateSink
        .asObservable()
        .filter(v => !!v)
        .do(v => console.log(v));

    constructor(private exchangeService: ExchangeService) {
        this.fetchCurrencies();
    }

    public setCurrency(currency: Currency): void {
        this.currentCurrencySink.next(currency);
    }

    public convertFromTo(from: ConvertCurrency, to?: ConvertCurrency): Observable<ConvertCurrency> {
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

    private fetchCurrencies(): void {
        this.exchangeService
            .getExchangeRate()
            .subscribe(rate => {
                console.log(rate);
                this.exchangeRateSink.next(rate);
            });

        // upd currencies rate
        setTimeout(this.fetchCurrencies, TIME_TO_FETCH_CURRENCIES);
    }
}

export {CurrencyService};
