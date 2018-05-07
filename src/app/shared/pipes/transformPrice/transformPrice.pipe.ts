import {Pipe, PipeTransform} from '@angular/core';
import {CalculatePriceService} from '@services/calculatePrice/calculatePrice.service';
import {DiscountService} from '@services/discount/discount.service';
import {ToFixedNumberService} from '@services/toFixed/toFixed.service';
import {Observable} from 'rxjs/Observable';
import {Currency} from '@services/currency/currency.dictionary';

@Pipe({
    name: 'transformPrice'
})
class TransformPricePipe implements PipeTransform {

    // TODO: Makes all below pipes as a service and leave only that service like pipe.
    constructor(private toFixedNumberService: ToFixedNumberService,
                private discountService: DiscountService,
                private calculatePriceService: CalculatePriceService) {
    }

    transform(value: number, {currencyTo = Currency.UAH, discount = 0, toFixed = 2}): Observable<number> {

        return this.toFixedNumberService.toFixedFloatingPoint(
            this.discountService.calculateWithDiscount(
                this.calculatePriceService.calculate(value, currencyTo)
                , discount
            )
        );
    }
}

export {TransformPricePipe};
