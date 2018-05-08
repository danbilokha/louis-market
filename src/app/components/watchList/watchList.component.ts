import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/publishReplay';

import {skipWatches, takeWatches} from './watchList.dictionary';
import {Watch} from '@dictionaries/watch.dictionary';
import {StoreService} from '@store/store.service';
import * as arrHelpers from '@helpers/array';
import {WATCH} from '@settings/constants';

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

    public watchList$: Observable<Array<Watch>> = this.store
        .get(WATCH)
        .filter(watch => !!watch)
        .map(arrHelpers.toArray)
        .map(arrHelpers.skip(this.skip))
        .map(arrHelpers.take(this.take))
        .publishReplay(1)
        .refCount();

    @Output()
    public watchTaped: EventEmitter<Watch> = new EventEmitter<Watch>();

    constructor(private store: StoreService) {
    }

    public onWatchTap(watch: Watch): void {
        this.watchTaped.emit(watch);
    }
}

export {WatchListComponent};
