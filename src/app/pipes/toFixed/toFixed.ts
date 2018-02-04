import {Pipe} from '@angular/core';

@Pipe({
    name: 'toFixed'
})
class ToFixedPipe {
    transform(value:number, number: number = 2): string {
        return value.toFixed(number);
    }
}

export {ToFixedPipe};
