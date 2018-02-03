import {Pipe} from '@angular/core';

//import {} from '../../'

@Pipe({
    name: 'currency'
})
class CurrencyPipe {

    //constructor()

    transform(value: number, currency: string = 'UAH'): string {
        return `${value} ${currency.toUpperCase()}`;
    }
}

export {CurrencyPipe};
