import {Pipe, PipeTransform} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Pipe({
    name: 'toFixed'
})
class ToFixedPipe implements PipeTransform {
    transform(value: number, number: number = 2): Observable<number> {
        return Observable.of(parseInt(value.toFixed(number), 10));
    }
}

export {ToFixedPipe};
