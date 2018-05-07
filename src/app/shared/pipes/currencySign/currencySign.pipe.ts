import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: '[currencySign]'
})
class CurrencySignPipe implements PipeTransform {
    transform(value: string, currencySign: string): string {
        return `${value} ${currencySign.toUpperCase()}`;
    }
}

export {CurrencySignPipe};
