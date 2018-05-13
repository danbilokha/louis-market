import {NgModule} from '@angular/core';
import {ExchangeService} from './exchange/exchange.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    imports: [
        HttpClientModule
    ],
    providers: [
        ExchangeService
    ],
    exports: [
    ]
})
class ApiModule {
}

export {ApiModule};
