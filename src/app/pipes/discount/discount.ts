import {Pipe, PipeTransform} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Pipe({
    name: 'discount'
})
class DiscountPipe implements PipeTransform {

    transform(value: number, discount: number): Observable<number> {
        return Observable.of((value - (value * discount / 100)));
    }
}

export {DiscountPipe};
