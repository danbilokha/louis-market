import {Component, Input} from '@angular/core';

@Component({
    selector: 'louis-c-delimiter',
    templateUrl: './delimiter.template.html'
})
class DelimiterComponent {

    @Input()
    public option: any = {
        isHorizontal: true
    }

}

export {DelimiterComponent};
