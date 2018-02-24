import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

// Pipes
import {DiscountPipe} from '@pipes/discount/discount';
import {ToFixedPipe} from '@pipes/toFixed/toFixed';
import {CurrencySignPipe} from '@pipes/currencySign/currencySign';
import {CalculatePricePipe} from '@pipes/calculatePrice/calculatePrice';
import {PriceShowPipe} from '@pipes/priceShow/priceShow.ts';
import {AddSpacePipe} from '@pipes/addSpace/addSpace';

import {WatchComponent} from './watch/watch.component';
import {WatchListComponent} from './watchList/watchList.component';
import {LoaderComponent} from './loader/loader.component';

@NgModule({
    declarations: [
        WatchComponent,
        WatchListComponent,
        DiscountPipe,
        ToFixedPipe,
        CurrencySignPipe,
        CalculatePricePipe,
        PriceShowPipe,
        AddSpacePipe,
        LoaderComponent
    ],
    imports: [
        BrowserModule,
        RouterModule
    ],
    exports: [
        WatchComponent,
        WatchListComponent,
        LoaderComponent
    ]
})
class ComponentModule {

}

export {ComponentModule};
