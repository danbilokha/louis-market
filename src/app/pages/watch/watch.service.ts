import {Injectable} from '@angular/core';
import {Watch} from '@dictionaries/watch.dictionary';
import {StoreService} from '@louis/store/store.service';
import {Observable} from 'rxjs';
import * as arrHelpers from '@helpers/array';
import {WATCH} from '@settings/constants';

@Injectable()
class WatchService {

    public getWatches = (): Observable<Array<Watch>> =>
        this.store
            .get(WATCH)
            .filter(watches => !!watches)
            .map(arrHelpers.toArray)
            .share();

    constructor(private store: StoreService) {
    }
}

export {WatchService};
