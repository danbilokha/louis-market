import {Injectable} from '@angular/core';
import {Action, Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of'

import {STORAGE_NAMESPACE, StoreState} from '../store.dictionary';

@Injectable()
class StoreInternalService {

    constructor(private store: Store<StoreState>) {
    }

    public dispatch(action: Action) {
        this.store.dispatch(action);
    }

    public select<T>(entity: any): Observable<T> {
        return this.store.select(this.getStorageReducer(entity))
            .switchMap(v => {
                return of(v[entity]);
            });
    }

    private getStorageReducer(entity: any): any {
        if (STORAGE_NAMESPACE.has(entity.toString())) {
            return STORAGE_NAMESPACE.get(entity.toString());
        }
    }
}

export {StoreInternalService};
