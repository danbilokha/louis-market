import {Injectable} from '@angular/core';
import {Watch} from '@common/dictionaries/watch.dictionary';
import {StoreService} from '@store/store.service';
import {SCHEMA} from '@store/schema';
import {Observable} from 'rxjs/Observable';

@Injectable()
class WatchService {

    constructor(private store: StoreService) {
    }

    public getWatchByName = (name: string): Observable<Watch> =>
        this.store
            .get(SCHEMA.WATCH)
            .map((watches: Array<any>) => watches.filter(watch => watch.name === name)[0])

}

export {WatchService};
