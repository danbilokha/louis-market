import {Pipe, PipeTransform} from '@angular/core';
import {addSpace, reverseString} from './addSpace.calculation';

@Pipe({
    name: '[addSpace]'
})
class AddSpacePipe implements PipeTransform {

    transform(value: string): string {
        if (value.length < 5) {
            return value;
        }

        return reverseString(addSpace(reverseString(value)));
    }
}

export {AddSpacePipe};
