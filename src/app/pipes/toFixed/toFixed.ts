import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'toFixed'
})
class ToFixedPipe implements PipeTransform {
    transform(value: number, floatingPoint: number = 2): string {
        return value.toFixed(floatingPoint);
    }
}

export {ToFixedPipe};
