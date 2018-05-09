import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs';

import {SCHEMA} from '@louis/store/schema';
import {StoreInternalService} from '@louis/store/internal/store-internal.service';
import {FetchingRemoteDataSuccess} from '../store.action';
import {toArray} from '@helpers/array';

@Injectable()
class StoreExternalService {

    private getAllData = (): Observable<any> => this.db
        .object(`${SCHEMA.DATA}`)
        .valueChanges()
        .share();

    constructor(private db: AngularFireDatabase,
                private internalStore: StoreInternalService) {
    }

    public usersRemoteData$: Observable<any> = this.getAllData() // tslint:disable-line
        .map(data => data.USER)
        .map(toArray);

    public fetchRemoteData(): void {
        this.getAllData()
            .subscribe(data => {
                const _data = JSON.parse(JSON.stringify(data));

                if (_data.USER) {
                    delete _data.USER;
                }

                this.internalStore.dispatch(new FetchingRemoteDataSuccess(_data));
            });
    }

    public pushData(entity: string, value: any): void {
        this.db
            .list(`${SCHEMA.DATA}/${entity}`)
            .push(value);
    }
}

export {StoreExternalService};
