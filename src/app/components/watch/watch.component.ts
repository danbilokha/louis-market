import {Component, Input, OnInit} from '@angular/core';

import {Watch} from './watch.dictionary';
import {data} from './Mock/data';

@Component({
    selector: 'louis-watch',
    templateUrl: './watch.template.html',
    styleUrls: ['./watch.style.scss']
})
class WatchComponent implements OnInit {
    @Input()
    public watch: Watch;

    ngOnInit() {
        this.watch = data;
    }
}

export {WatchComponent};
