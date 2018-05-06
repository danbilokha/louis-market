import {Pipe, PipeTransform} from '@angular/core';
import {CalculatePricePipe} from '../calculatePrice/calculatePrice';
import {DiscountPipe} from '../discount/discount';
import {ToFixedPipe} from '../toFixed/toFixed';
import {CurrencySignPipe} from '../currencySign/currencySign';
import {AddSpacePipe} from '../addSpace/addSpace';

@Pipe({
    name: 'transformPrice'
})
class PriceShowPipe implements PipeTransform {

    // TODO: Makes all below pipes as a service and leave only that service like pipe.
    constructor(private currencySignPipe: CurrencySignPipe,
                private addSpacePipe: AddSpacePipe,
                private toFixedPipe: ToFixedPipe,
                private discountPipe: DiscountPipe,
                private calculatePricePipe: CalculatePricePipe) {
    }

    transform(value: number, {currencyTo, discount = 0, toFixed = 2}): string {

        return this.currencySignPipe.transform(
            this.addSpacePipe.transform(
                this.toFixedPipe.transform(
                    this.discountPipe.transform(
                        this.calculatePricePipe.transform(value, currencyTo)
                        , discount)
                    , toFixed),
            ), currencyTo);
    }
}

export {PriceShowPipe};
