import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
class ToFixedNumberService {
    toFixedFloatingPoint(value: Observable<number>, floatingPoint: number = 2): Observable<number> {
        return value.map(val => parseFloat(val.toFixed(floatingPoint)));
    }
}

export {ToFixedNumberService};
