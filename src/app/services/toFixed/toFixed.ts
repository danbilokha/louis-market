import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
class ToFixedNumberService {
    toFixedFloatingPoint(value: Observable<number>, floatingPoint: number = 2): Observable<string> {
        return value.map(val => val.toFixed(floatingPoint));
    }
}

export {ToFixedNumberService};
