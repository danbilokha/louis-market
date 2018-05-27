import {Pipe, PipeTransform} from '@angular/core';
import {Observable} from 'rxjs';
import {Currency} from '@services/currency/currency.dictionary';
import {TransformPriceService} from '@services/transformPrice/transformPrice.service';

@Pipe({
    name: 'transformPrice'
})
class TransformPricePipe implements PipeTransform {

    constructor(private transformPriceService: TransformPriceService) {
    }

    transform(value: number, currencyFrom: Currency, {currencyTo = Currency.UAH, discount = 0, toFixed = 2}): Observable<number> {
        return this.transformPriceService.transform(value, currencyFrom, {currencyTo, discount, toFixed});
    }
}

export {TransformPricePipe};
