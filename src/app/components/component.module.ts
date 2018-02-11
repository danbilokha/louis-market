import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {WatchComponent} from './watch/watch.component';
import {WatchListComponent} from './watchList/watchList.component';

// Pipes
import {DiscountPipe} from '@pipes/discount/discount';
import {ToFixedPipe} from '@pipes/toFixed/toFixed';
import {CurrencySignPipe} from '@pipes/currencySign/currencySign';
import {CalculatePricePipe} from '@pipes/calculatePrice/calculatePrice';
import {PriceShowPipe} from '@pipes/priceShow/priceShow.ts';

@NgModule({
    declarations: [
        WatchComponent,
        WatchListComponent,
        DiscountPipe,
        ToFixedPipe,
        CurrencySignPipe,
        CalculatePricePipe,
        PriceShowPipe
    ],
    imports: [
        BrowserModule,
    ],
    exports: [
        WatchComponent,
        WatchListComponent
    ]
})
class ComponentModule {

}

export {ComponentModule};
