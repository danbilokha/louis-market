import {Injectable} from '@angular/core';
import {EXCHANGE_RATE_ENDPOINT} from './exchange.dictionary';
import {HttpClient} from '@angular/common/http';
import {Observable, BehaviorSubject} from 'rxjs';
import {TIME_TO_FETCH_EXCHANGE_RATE} from './exchange.dictionary';

@Injectable()
class ExchangeService {
    private getExchangeRateSink: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public exchangeRate$: Observable<any> = this.getExchangeRateSink
        .asObservable()
        .filter(v => !!v)
        .switchMap(() => this.http
            .get(EXCHANGE_RATE_ENDPOINT));

    constructor(private http: HttpClient) {
        this.getExchangeRate();
        // upd exchange rate timeout
        setInterval(this.getExchangeRate, TIME_TO_FETCH_EXCHANGE_RATE);
    }

    private getExchangeRate(): void {
        this.getExchangeRateSink.next(true);
    }
}

export {ExchangeService};
