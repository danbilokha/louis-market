import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/publishReplay';

import {SCHEMA} from '@store/schema';
import {takeWatches, skipWatches} from './watchList.dictionary';
import {Watch} from '@common/dictionaries/watch.dictionary';
import {StoreService} from '@store/store.service';
import {StoreState} from '@store/store.dictionary';

@Component({
    selector: 'louis-c-watch-watch-list',
    templateUrl: './watchList.template.html',
    styleUrls: ['./watchList.style.scss']
})
class WatchListComponent implements OnInit {

    @Input() showPreloader: boolean = false; // tslint:disable-line
    @Input() options: any;
    @Input() skip: number = skipWatches;
    @Input() take: number = takeWatches;

    public watchList$: Observable<Array<Watch>>;

    private getWatchList = (skip: number, take: number): Observable<Array<Watch>> =>
        // this.dbService
        //     .getDbData(SCHEMA.WATCH, skip, take)
        //     .publishReplay(1)
        //     .refCount();
        this.store
            .get(SCHEMA.WATCH)
            .map((state: StoreState) => {
                return state.remote.WATCH;
            })
            .publishReplay(1)
            .refCount();

    constructor(private store: StoreService) {
    }

    ngOnInit() {
        this.watchList$ = this.getWatchList(this.skip, this.take);
    }

}

export {WatchListComponent};
