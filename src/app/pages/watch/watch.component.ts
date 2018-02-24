import {Component, Input} from '@angular/core';
import {Watch} from '@common/dictionaries/watch.dictionary';

@Component({
    selector: 'louis-watch-page',
    templateUrl: './watch.template.html',
    styleUrls: ['./watch.style.scss']
})

class WatchPageComponent {

    @Input()
    public watch: Watch;

}

export {WatchPageComponent};
