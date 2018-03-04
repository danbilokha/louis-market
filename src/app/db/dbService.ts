import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {Subscription} from 'rxjs/Subscription';

import {SCHEMA} from '@db/schema';
import * as mapping from '@db/db.dictionary';
import {toArray} from '@common/helpers/array';
import {AppStoreService} from '@services/store';
import {FetchingRemoteDataError, FetchingRemoteDataSuccess, RemoteData} from '@settings/remote';

@Injectable()
class DbService {

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
                this.store.dispatch(new RemoteData(data));
                this.store.dispatch(new FetchingRemoteDataSuccess());
            } else {
                this.store.dispatch(new FetchingRemoteDataError());
            }
        });

    constructor(private db: AngularFireDatabase,
                private store: AppStoreService) {
    }

    public setDbData(entity: string, value: any): void {
        this.db
            .list(`${SCHEMA.DATA}/${entity}`)
            .push(value);
    }
}

export {DbService};
