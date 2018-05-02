import {Injectable} from '@angular/core';
import {EXCHANGE_RATE_ENDPOINT} from './exchange.dictionary';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {TIME_TO_FETCH_EXCHANGE_RATE} from './exchange.dictionary';

@Injectable()
class ExchangeService {

    private exchangeRateSink: BehaviorSubject<any> = new BehaviorSubject<any>(undefined);
    public exchageRate$: Observable<any> = this.exchangeRateSink
        .asObservable()
        .filter(v => !!v);

    constructor(private http: HttpClient) {
        setInterval(this.getExchangeRate, TIME_TO_FETCH_EXCHANGE_RATE);
    }

    private getExchangeRate(): void {
        this.http
            .get(EXCHANGE_RATE_ENDPOINT)
            .subscribe(rate => {

            });
    }
}

export {ExchangeService};
