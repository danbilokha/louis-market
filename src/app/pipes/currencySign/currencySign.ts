import {Pipe} from '@angular/core';

@Pipe({
    name: 'currencySign'
})
class CurrencySignPipe {

    // value is string because it's after fixed pype
    // witch return string
    transform(value: string, currencySign: string): string {
        return `${value} ${currencySign.toUpperCase()}`;
    }
}

export {CurrencySignPipe};
