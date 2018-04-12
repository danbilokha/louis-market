import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/publishReplay';

import {takeWatches, skipWatches} from './watchList.dictionary';
import {Watch} from '@common/dictionaries/watch.dictionary';
import {StoreService} from '@store/store.service';
import * as arrHelpers from '@common/helpers/array';
import {WATCH} from '@settings/constants';

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

    @Output()
    public watchTaped: EventEmitter<Watch>;

    public watchList$: Observable<Array<Watch>>;

    private getWatchList = (skip: number, take: number): Observable<Array<Watch>> =>
        this.store
            .get(WATCH)
            .filter(watch => !!watch)
            .map(arrHelpers.toArray)
            .map(arrHelpers.skip(skip))
            .map(arrHelpers.take(take))
            .do(v => console.log(v))
            .publishReplay(1)
            .refCount();

    constructor(private store: StoreService) {
    }

    public onWatchTap(watch: Watch): void {
        console.log(watch);
        this.watchTaped.emit(watch);
    }

    ngOnInit() {
        this.watchList$ = this.getWatchList(this.skip, this.take);
    }

}

export {WatchListComponent};
