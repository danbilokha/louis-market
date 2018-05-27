import {CalculatePriceService} from '@services/calculatePrice/calculatePrice.service';
import {DiscountService} from '@services/discount/discount.service';
import {ToFixedNumberService} from '@services/toFixed/toFixed.service';
import {Observable} from 'rxjs';
import {Currency} from '@services/currency/currency.dictionary';
import {Injectable} from '@angular/core';

@Injectable()
class TransformPriceService {

    constructor(private toFixedNumberService: ToFixedNumberService,
                private discountService: DiscountService,
                private calculatePriceService: CalculatePriceService) {
    }

    transform(value: number, currencyFrom: Currency, {currencyTo = Currency.UAH, discount = 0, toFixed = 2}): Observable<number> {

        return this.toFixedNumberService.toFixedFloatingPoint(
            this.discountService.calculateWithDiscount(
                this.calculatePriceService.calculate(value, currencyFrom, currencyTo)
                , discount
            )
        );
    }
}

export {TransformPriceService};
