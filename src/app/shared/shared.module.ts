import {NgModule} from '@angular/core';
import {CalculatePriceService} from '@louis/shared/services/calculatePrice/calculatePrice.service';
import {CurrencyService} from '@louis/shared/services/currency/currency.service';
import {CurrencyResolverService} from '@louis/shared/services/currencyResolver/currencyResolver.service';
import {DiscountService} from '@louis/shared/services/discount/discount.service';
import {ToFixedNumberService} from '@louis/shared/services/toFixed/toFixed.service';
import {AddSpacePipe} from '@pipes/addSpace/addSpace.pipe';
import {CurrencySignPipe} from '@pipes/currencySign/currencySign.pipe';
import {TransformPricePipe} from '@pipes/transformPrice/transformPrice.pipe';
import {PriceDirective} from '@directives/price/price.directive';
import {TransformPriceService} from '@services/transformPrice/transformPrice.service';

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
        ToFixedNumberService,
        TransformPriceService
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
