import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/publishReplay';

import {DbService} from '@db/dbService';
import {SCHEMA} from '@db/schema';
import {takeWatches, skipWatches} from './watchList.dictionary';
import {Watch} from '@common/dictionaries/watch.dictionary';

@Component({
    selector: 'louis-c-watch-watch-list',
    templateUrl: './watchList.template.html',
    styleUrls: ['./watchList.style.scss']
})
class WatchListComponent implements OnInit {

    @Input() showPreloader: boolean = false;
    @Input() options: any;
    @Input() skip: number = skipWatches;
    @Input() take: number = takeWatches;

    public watchList$: Observable<Array<Watch>>;

    private getWatchList = (skip: number, take: number): Observable<Array<Watch>> =>
        this.dbService
            .getDbData(SCHEMA.WATCH, skip, take)
            .publishReplay(1)
            .refCount();

    constructor(private dbService: DbService) {
    }

    ngOnInit() {
        this.watchList$ = this.getWatchList(this.skip, this.take);
    }

}

export {WatchListComponent};
