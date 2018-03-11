import {Pipe, PipeTransform} from '@angular/core';

import {CurrencyResolverService} from '@services/price/currency-resolver.service';

@Pipe({
    name: 'currencyPrice'
})
class CalculatePricePipe implements PipeTransform {

    constructor(private currencyResolverService: CurrencyResolverService) {

    }

    transform(value: number, currencyTo: string): number {
        return this.currencyResolverService.calculatePrice(value, currencyTo);
    }
}

export {CalculatePricePipe};
