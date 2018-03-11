import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';

import {SCHEMA} from 'app/store/schema';
import {StoreInternalService} from 'app/store/internal/store-internal.service';
import {FetchingRemoteDataSuccess} from '../store.action';
import {Subscription} from 'rxjs/Subscription';
import {StoreLocalStorageService} from '../localStorage/store-localStorage';
import {LocalStorageNamespace} from '../store.dictionary';

@Injectable()
class StoreExternalService {

    private getAllData = (): Observable<any> => this.db
        .object(`${SCHEMA.DATA}`)
        .valueChanges()
        .share();

    constructor(private db: AngularFireDatabase,
                private internalStore: StoreInternalService,
                private localStorage: StoreLocalStorageService) {
    }

    public fetchRemoteData(): void {
        this.getAllData()
            .subscribe(data => {
                this.internalStore.dispatch(new FetchingRemoteDataSuccess(data));
                this.setToLocalStorage(data);
            });
    }

    public pushData(entity: string, value: any): void {
        this.db
            .list(`${SCHEMA.DATA}/${entity}`)
            .push(value);
    }

    private setToLocalStorage(data: any): void {
        const _data = JSON.parse(JSON.stringify(data));

        if (_data.WATCH) {
            for (const key in _data.WATCH) {
                delete _data.WATCH[key].images;
            }

            this.localStorage.set(LocalStorageNamespace.Watch.toString(), _data.WATCH);
        }

        // if (_data.USER) {
        //     for (const key in _data.USER) {
        //         delete _data.USER[key].password;
        //     }
        //
        //     this.localStorage.set(LocalStorageNamespace.User.toString(), _data.USER);
        // }
    }
}

export {StoreExternalService};
