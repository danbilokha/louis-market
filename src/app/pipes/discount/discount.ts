import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'discount'
})
class DiscountPipe implements PipeTransform {

    transform(value: number, discount: number): number {
        return value - (value * discount / 100);
    }
}

export {DiscountPipe};
