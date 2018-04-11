import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {from} from 'rxjs/observable/from'
import {of} from 'rxjs/observable/of'

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

    public get<T>(entity: any): any {
        console.log(entity);
        return this.getInternalStoreData(entity)
            .withLatestFrom(
                this.getLocalStorageData(entity),
                (internalData, localStorageData): Observable<any> => {
                    console.log(internalData);
                    console.log(localStorageData);

                    switch (true) {
                        case !internalData:
                            return of(internalData);
                        case !localStorageData:
                            return of(localStorageData);
                        default:
                            return of(undefined);
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
