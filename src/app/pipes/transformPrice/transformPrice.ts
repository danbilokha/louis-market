import {ComponentFactoryResolver, Pipe, PipeTransform} from '@angular/core';

import {CalculatePricePipe} from '../calculatePrice/calculatePrice';
import {DiscountPipe} from '../discount/discount';
import {ToFixedPipe} from '../toFixed/toFixed';
import {CurrencySignPipe} from '../currencySign/currencySign';
import {AddSpacePipe} from '../addSpace/addSpace';
import {Observable} from 'rxjs/Observable';

@Pipe({
    name: 'transformPrice'
})
class PriceShowPipe implements PipeTransform {

    constructor(private componentFactoryResolver: ComponentFactoryResolver,
                private currencySignPipe: CurrencySignPipe,
                private addSpacePipe: AddSpacePipe,
                private toFixedPipe: ToFixedPipe,
                private discountPipe: DiscountPipe,
                private calculatePricePipe: CalculatePricePipe) {
    }

    transform(value: number, {currencyTo, discount = 0, toFixed = 2}:
        { currencyTo: string, discount: number, toFixed: number }): Observable<string> {

        return this.currencySignPipe.transform(
            this.addSpacePipe.transform(
                this.toFixedPipe.transform(
                    this.discountPipe.transform(
                        this.calculatePricePipe.transform(value, currencyTo)
                        , discount)
                    , toFixed),
            ),
            currencyTo);
    }
}

export {PriceShowPipe};
