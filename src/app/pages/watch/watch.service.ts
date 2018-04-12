import {Injectable} from '@angular/core';
import {Watch} from 'app/common/dictionaries/watch.dictionary';
import {StoreService} from 'app/store/store.service';
import {Observable} from 'rxjs/Observable';
import * as arrHelpers from '@common/helpers/array';

@Injectable()
class WatchService {

    constructor(private store: StoreService) {
    }

    public getWatches = (): Observable<Array<Watch>> =>
        this.store
            .get('watch')
            .do(v => console.log(v))
            .filter(watches => !!watches)
            .map(arrHelpers.toArray);
}

export {WatchService};
