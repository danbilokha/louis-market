import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';

import {SCHEMA} from 'app/store/schema';
import * as mapping from 'app/store/store.calculation';
import {toArray} from 'app/common/helpers/array';
import {StoreInternalService} from 'app/store/internal/store-internal.service';
import {FetchingRemoteDataError, FetchingRemoteDataSuccess, RemoteData} from '../store.action';

@Injectable()
class StoreExternalService {

    public getDbData = (entity: string, skip?: number, take?: number): Observable<any> =>
        this.getAllData()
            .map(data => data[entity])
            .map(toArray)
            .map(mapping.skip(skip))
            .map(mapping.take(take));

    private getAllData = (): Observable<any> =>
        this.db
            .object(`${SCHEMA.DATA}`)
            .valueChanges()
            .share();

    private setDataToStore: Subscription = this.getAllData() // tslint:disable-line
        .subscribe(data => {
            if (data) {
                console.log(data);
                this.store.dispatch(new RemoteData(data));
                this.store.dispatch(new FetchingRemoteDataSuccess());
            } else {
                this.store.dispatch(new FetchingRemoteDataError());
            }
        });

    constructor(private db: AngularFireDatabase,
                private store: StoreInternalService) {
    }

    public setDbData(entity: string, value: any): void {
        this.db
            .list(`${SCHEMA.DATA}/${entity}`)
            .push(value);
    }
}

export {StoreExternalService};
