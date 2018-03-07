import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';

import {SCHEMA} from 'app/store/schema';
import * as mapping from 'app/store/store.calculation';
import {toArray} from 'app/common/helpers/array';
import {StoreInternalService} from 'app/store/internal/store-internal.service';
import {FetchingRemoteDataSuccess} from '../store.action';
import {Subscription} from 'rxjs/Subscription';

@Injectable()
class StoreExternalService {

    // public getDbData = (entity: string, skip?: number, take?: number): Observable<any> =>
    //     this.getAllData()
    //         .map(data => data[entity])
    //         .map(toArray)
    //         .map(mapping.skip(skip))
    //         .map(mapping.take(take));

    private getAllData = (): Observable<any> => this.db
            .object(`${SCHEMA.DATA}`)
            .valueChanges()
            .share();

    constructor(private db: AngularFireDatabase,
                private internalStore: StoreInternalService) {
    }

    public fetchRemoteData(): Subscription {
        return this.getAllData()
            .subscribe(data => this.internalStore.dispatch(new FetchingRemoteDataSuccess(data)));
    }

    public pushData(entity: string, value: any): void {
        this.db
            .list(`${SCHEMA.DATA}/${entity}`)
            .push(value);
    }
}

export {StoreExternalService};
