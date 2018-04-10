import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {from} from 'rxjs/observable/from'
import {withLatestFrom} from 'rxjs/operator/withLatestFrom';

import {StoreInternalService} from './internal/store-internal.service';
import {PushRemoteData} from './store.action';
import {StoreLocalStorageService} from './localStorage/store-localStorage';

@Injectable()
class StoreService {

    constructor(private internalStore: StoreInternalService,
                private localStorageService: StoreLocalStorageService) {
    }

    public set(entity: string, value: any): void {
        const action = new PushRemoteData({entity, value});
        this.internalStore.dispatch(action);
    }

    public get<T>(entity: any): Observable<T> {
        return withLatestFrom(
            null,
            this.getLocalStorageData(entity),
            (internalData, localStorageData) => {
                console.log(internalData);
                console.log(localStorageData);

                switch (true) {
                    case !internalData:
                        return Observable.of(internalData);
                    case !localStorageData:
                        return Observable.of(localStorageData);
                    default:
                        return Observable.of(undefined);
                }
            })
    }

    private getInternalStoreData<T>(entity: any): Observable<T> {
        return this.internalStore.select(entity);
    }

    private getLocalStorageData(entity: any): Observable<object> {
        return from(
            [this.localStorageService.get(entity)]
        );
    }
}

export {StoreService};
