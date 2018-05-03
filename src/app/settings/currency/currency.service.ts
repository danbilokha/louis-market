import {Injectable} from '@angular/core';
import {ExchangeService} from 'app/api/exchange/exchange.service';
import {Currency, ConvertCurrency} from './currency.dictionary';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';

@Injectable()
class CurrencyService {

    // TODO: Remove, when default user preference service will be finished
    private currentCurrencySink: BehaviorSubject<Currency> = new BehaviorSubject<Currency>(Currency.UAH);
    public currentCurrency$: Observable<Currency> = this.currentCurrencySink
        .asObservable()
        .filter(v => !!v);

    private rate: any;
    private exchangeRateSubscription: Subscription = this.exchangeService
        .exchangeRate$
        .subscribe(rate => this.rate = rate);

    constructor(private exchangeService: ExchangeService) {
    }

    public setCurrency(currency: Currency): void {
        this.currentCurrencySink.next(currency);
    }

    public convertFromTo(value: number, from: Currency, to?: Currency): ConvertCurrency {
        return new ConvertCurrency(123, Currency.USD);
    }
}

export {CurrencyService};
