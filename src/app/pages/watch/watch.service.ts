import {Injectable} from '@angular/core';
import {Watch} from 'app/shared/dictionaries/watch.dictionary';
import {StoreService} from 'app/store/store.service';
import {Observable} from 'rxjs/Observable';
import * as arrHelpers from 'shared/helpers/array';
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
