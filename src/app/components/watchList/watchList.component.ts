import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/publishReplay';

import {takeWatches, skipWatches} from './watchList.dictionary';
import {Watch} from '@common/dictionaries/watch.dictionary';
import {StoreService} from '@store/store.service';
import * as arrHelpers from '@common/helpers/array';
import {WATCH} from '@settings/constants';
import {Subject} from 'rxjs/Subject';

@Component({
    selector: 'louis-c-watch-watch-list',
    templateUrl: './watchList.template.html',
    styleUrls: ['./watchList.style.scss']
})
class WatchListComponent {

    @Input() showPreloader: boolean = false; // tslint:disable-line
    @Input() options: any;
    @Input() skip: number = skipWatches;
    @Input() take: number = takeWatches;

    @Output()
    public watchTaped: EventEmitter<Watch>;

    public watchList$: Observable<Array<Watch>> = this.store
        .get(WATCH)
        .filter(watch => !!watch)
        .map(arrHelpers.toArray)
        .map(arrHelpers.skip(this.skip))
        .map(arrHelpers.take(this.take))
        .do(v => console.log(v))
        .publishReplay(1)
        .refCount();

    constructor(private store: StoreService) {
    }

    public onWatchTap(watch: Watch): void {
        this.watchTaped.emit(watch);
    }
}

export {WatchListComponent};
