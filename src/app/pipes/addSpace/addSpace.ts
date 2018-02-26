import {Pipe} from '@angular/core';

import {reverseString, addSpace} from './addSpace.calculation';

@Pipe({
    name: 'addSpace'
})
class AddSpacePipe {

    transform(value: string): string {
        console.log(value, value.length);

        if(value.length < 5)
            return value;
            
        return reverseString(addSpace(reverseString(value)));
    }
}

export {AddSpacePipe};
