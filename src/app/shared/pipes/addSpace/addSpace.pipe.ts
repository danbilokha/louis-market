import {Pipe, PipeTransform} from '@angular/core';
import {addSpace, reverseString} from './addSpace.calculation';

@Pipe({
    name: 'addSpace'
})
class AddSpacePipe implements PipeTransform {

    transform(value: number | string): string {
        if (value.toString().length < 5) {
            return value.toString();
        }

        return reverseString(addSpace(reverseString(value.toString())));
    }
}

export {AddSpacePipe};
