import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
class DiscountService {

    public calculateWithDiscount(value: Observable<number>, discount: number): Observable<number> {
        return value.map(price => price - (price * discount / 100));
    }
}

export {DiscountService};
