import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {from} from 'rxjs/observable/from'

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
        const _entity: any = entity.toString().toUpperCase();
        return this.getInternalStoreData(_entity)
            .withLatestFrom(
                this.getLocalStorageData(_entity),
                (internalData, localStorageData) => {

                    switch (true) {
                        case !!internalData:
                            console.log('internal');
                            return internalData;
                        case !!localStorageData:
                            console.log('local');
                            return localStorageData;
                        default:
                            return undefined;
                    }
                })
    }

    private getInternalStoreData<T>(entity: any): Observable<any> {
        return this.internalStore.select(entity);
    }

    private getLocalStorageData(entity: any): Observable<object> {
        return from(
            [this.localStorageService.get(entity)]
        );
    }
}

export {StoreService};
