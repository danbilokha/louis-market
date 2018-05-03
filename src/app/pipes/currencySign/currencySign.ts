import {Pipe, PipeTransform} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Pipe({
    name: 'currencySign'
})
class CurrencySignPipe implements PipeTransform {
    transform(value: number, currencySign: string): Observable<string> {
        return Observable.of(`${value} ${currencySign.toUpperCase()}`);
    }
}

export {CurrencySignPipe};
