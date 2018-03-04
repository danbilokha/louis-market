import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/publishReplay';

import {DbService} from '@db/dbService';
import {SCHEMA} from '@db/schema';
import {takeWatches, skipWatches} from './watchList.dictionary';
import {Watch} from '@common/dictionaries/watch.dictionary';
import {AppStoreService} from '@services/store';
import {AppState} from '@services/store.dictionary';

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

    constructor(private dbService: DbService,
                private store: AppStoreService) {
    }

    ngOnInit() {
        this.watchList$ = this.getWatchList(this.skip, this.take);
        // this.store.select('remote')
        //     .map((data: AppState) => {
        //         console.log(data.remoteData?.SCHEMA.WATCH);
        //         console.log(data);
        //         return data;
        //     })
        //     .subscribe(data => {
        //     console.log(data);
        // })
    }

}

export {WatchListComponent};
