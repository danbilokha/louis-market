import {Pipe} from '@angular/core';

@Pipe({
    name: 'discount'
})
class DiscountPipe {
    
    transform(value, discount) {
        return (value - (value * discount / 100));
    }
}

export {DiscountPipe};
