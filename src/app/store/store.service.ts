import {Injectable} from '@angular/core';

import {StoreInternalService} from './internal/store-internal.service';
import {Observable} from 'rxjs/Observable';
import {PushRemoteData} from './store.action';

@Injectable()
class StoreService {

    constructor(private internalStore: StoreInternalService) {
    }

    public set(entity: string, value: any): void {
        const action = new PushRemoteData({entity, value});
        this.internalStore.dispatch(action);
    }

    public get<T>(entity: any): Observable<T> {
        return this.internalStore.select(entity);
    }
}

export {StoreService};
