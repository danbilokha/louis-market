import {Injectable} from '@angular/core';

import {usdTOuahCoef, eurTOuahCoef} from './currency-resolver.dictionary';

@Injectable()
class CurrencyResolverService {

    private _currentCurrency: string = 'USD';

    public get getCurrentCurrency(): string {
        return this._currentCurrency;
    }

    public getCurrencyCoef(currency: string, currencyTo: string): number {
        return this.resolveCurrencyCoef(currency, currencyTo);
    }

    private resolveCurrencyCoef(currency: string, currencyTo: string): number {
        if(currency === currencyTo)
            return 1;
        
        if(currency.toUpperCase() === 'USD') {
            switch(currencyTo.toUpperCase()) {
                case 'UAH':
                    return usdTOuahCoef;
            }
        }

        if(currency.toUpperCase() === 'EUR') {
            switch(currencyTo.toUpperCase()) {
                case 'UAH':
                    return eurTOuahCoef;
            }
        }
    }

    public calculatePrice(value: number, currencyTo: string): number {
        return value * this.getCurrencyCoef(this._currentCurrency, currencyTo);
    }
}

export {CurrencyResolverService};
