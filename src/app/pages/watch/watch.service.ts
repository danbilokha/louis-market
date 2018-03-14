import {Injectable} from '@angular/core';
import {Watch} from 'app/common/dictionaries/watch.dictionary';
import {StoreService} from 'app/store/store.service';
import {Observable} from 'rxjs/Observable';
import {RemoteState} from '@store/store.dictionary';
import * as arrHelpers from '@common/helpers/array';

@Injectable()
class WatchService {

    constructor(private store: StoreService) {
    }

    public getWatchByName = (name: string): Observable<Watch> =>
        this.store
            .get('remote')
            .filter((remote: RemoteState) => !!remote.data)
            .map(({data: {WATCH}}: RemoteState) => WATCH)
            .map(arrHelpers.toArray)
            .map((watches: Array<Watch>) => {
                console.log( watches.filter(watch => watch.name === name)[0]);
                return  watches.filter(watch => watch.name === name)[0];
            });
}

export {WatchService};
