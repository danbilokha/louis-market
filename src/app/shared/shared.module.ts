import {NgModule} from '@angular/core';
import {CalculatePriceService} from 'app/shared/services/calculatePrice/calculatePrice.service';
import {CurrencyService} from 'app/shared/services/currency/currency.service';
import {CurrencyResolverService} from 'app/shared/services/currencyResolver/currencyResolver.service';
import {DiscountService} from 'app/shared/services/discount/discount.service';
import {ToFixedNumberService} from 'app/shared/services/toFixed/toFixed.service';
import {AddSpacePipe} from '@pipes/addSpace/addSpace.pipe';
import {CurrencySignPipe} from '@pipes/currencySign/currencySign.pipe';
import {TransformPricePipe} from '@pipes/transformPrice/transformPrice.pipe';
import {PriceDirective} from '@directives/price/price.directive';

@NgModule({
    imports: [],
    declarations: [
        AddSpacePipe,
        CurrencySignPipe,
        TransformPricePipe,
        PriceDirective
    ],
    providers: [
        CalculatePriceService,
        CurrencyService,
        CurrencyResolverService,
        DiscountService,
        ToFixedNumberService
    ],
    exports: [
        AddSpacePipe,
        CurrencySignPipe,
        TransformPricePipe,
        PriceDirective
    ]
})
class SharedModule {
}

export {SharedModule};
