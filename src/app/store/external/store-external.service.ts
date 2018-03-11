import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';

import {SCHEMA} from 'app/store/schema';
import {StoreInternalService} from 'app/store/internal/store-internal.service';
import {FetchingRemoteDataSuccess} from '../store.action';
import {Subscription} from 'rxjs/Subscription';

@Injectable()
class StoreExternalService {

    private getAllData = (): Observable<any> => this.db
            .object(`${SCHEMA.DATA}`)
            .valueChanges()
            .share();

    constructor(private db: AngularFireDatabase,
                private internalStore: StoreInternalService) {
    }

    public fetchRemoteData(): Subscription {
        return this.getAllData()
            .subscribe(data => {
                this.internalStore.dispatch(new FetchingRemoteDataSuccess(data))
            });
    }

    public pushData(entity: string, value: any): void {
        this.db
            .list(`${SCHEMA.DATA}/${entity}`)
            .push(value);
    }
}

export {StoreExternalService};
