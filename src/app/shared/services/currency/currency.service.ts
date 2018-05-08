import {Injectable} from '@angular/core';
import {ExchangeService} from 'app/api/exchange/exchange.service';
import {Currency} from './currency.dictionary';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

// TODO: Move that coef to a static json file, which created while application loaded and updated every `${TIME}`
// TODO: Create Mock default exchange rate file
const USD_TO_UAH_DEF_COEF = 28;
const EUR_TO_UAH_DEF_COEF = 33;

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

    public getExchangeRate(currency: Currency): Observable<any> {
        return this.exchangeRate$
            .filter(v => !!v) // TODO: Implement filter
    }
}

export {CurrencyService};
