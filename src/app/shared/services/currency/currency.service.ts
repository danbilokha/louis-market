import {Injectable} from '@angular/core';
import {ExchangeService} from '@louis/api/exchange/exchange.service';
import {Currency, IBankGovUaCurrencyModel} from './currency.dictionary';
import {BehaviorSubject, Observable} from 'rxjs';
import {map, switchMap, tap} from 'rxjs/internal/operators';

const DEFAULT_EXCHANGE_RATE = 27.5; // DANGEROUS, PROBABLY UNTRUTH INFORMATION

@Injectable()
class CurrencyService {

    // TODO: Remove, when default user preference service will be finished
    private currentCurrencySink: BehaviorSubject<Currency> = new BehaviorSubject<Currency>(Currency.UAH);
    private currentCurrency$: Observable<Currency> = this.currentCurrencySink
        .asObservable()
        .filter(v => !!v);

    private exchangeRate$: Observable<any> = this.exchangeService
        .exchangeRate$;

    constructor(private exchangeService: ExchangeService) {
    }

    public setCurrency(currency: Currency): void {
        this.currentCurrencySink.next(currency);
    }

    public getCurrentCurrency(): Observable<Currency> {
        return this.currentCurrency$;
    }

    public getAvailableCurrencies(): Observable<any> {
        return this.exchangeRate$;
    }

    public getExchangeRate(currencyFrom: Currency, currencyTo: Currency): Observable<any> {
        return this.exchangeRate$
            .pipe(
                switchMap((v: Array<IBankGovUaCurrencyModel>) => Observable.of(this.getCurrencyRate(v, currencyFrom))
            ));
    }

    private getCurrencyRate(currencies: Array<IBankGovUaCurrencyModel>, currencyFrom: Currency): number {
        let exchangeRate = DEFAULT_EXCHANGE_RATE;
        const _currencyFrom = currencyFrom.toUpperCase();

        currencies.forEach((currency: IBankGovUaCurrencyModel) => {
           if(currency.cc === _currencyFrom)  {
               exchangeRate = currency.rate;
               return;
           }
        });

        return exchangeRate;
    }
}

export {CurrencyService};
