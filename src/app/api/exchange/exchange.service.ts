import {Injectable} from '@angular/core';
import {EXCHANGE_RATE_ENDPOINT} from './exchange.dictionary';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
class ExchangeService {

    constructor(private http: HttpClient) {
    }

    public getExchangeRate(): Observable<any> {
        console.log('start to fetch', EXCHANGE_RATE_ENDPOINT);
        return this.http
            .get(EXCHANGE_RATE_ENDPOINT)
            .do(v => console.log(v));
    }
}

export {ExchangeService};
