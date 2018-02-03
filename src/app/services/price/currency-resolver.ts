import {Injectable} from '@angular/core';

@Injectable()
class CurrencyResolverService {

    private _currentCurrency: string = 'UAH';

    public get getCurrentCurrency(): string {
        return this._currentCurrency;
    }
}

export {CurrencyResolverService};
