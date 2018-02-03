import {Component, Input, OnInit} from '@angular/core';

import {Watch} from './watch.dictionary';

@Component({
    selector: 'louis-watch',
    templateUrl: './watch.template.html',
    styleUrls: ['./watch.style.scss']
})
class WatchComponent implements OnInit {
    @Input()
    public watch: Watch;

    ngOnInit() {
        let data = require('./Mock/data.json');
        this.watch = data;
        console.log(this.watch);
    }
}

export {WatchComponent};
