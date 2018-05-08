import {Pipe, PipeTransform} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Currency} from '@services/currency/currency.dictionary';
import {TransformPriceService} from '@services/transformPrice/transformPrice.service';

@Pipe({
    name: 'transformPrice'
})
class TransformPricePipe implements PipeTransform {

    constructor(private transformPriceService: TransformPriceService) {
    }

    transform(value: number, {currencyTo = Currency.UAH, discount = 0, toFixed = 2}): Observable<number> {
        return this.transformPriceService.transform(value, {currencyTo, discount, toFixed});
    }
}

export {TransformPricePipe};
