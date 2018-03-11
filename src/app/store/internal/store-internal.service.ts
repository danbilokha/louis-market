import {Injectable} from '@angular/core';
import {Action, Store} from '@ngrx/store';

import {StoreState} from '../store.dictionary';
import {Observable} from 'rxjs/Observable';

@Injectable()
class StoreInternalService {

    constructor(private store: Store<StoreState>) {
    }

    public dispatch(action: Action) {
        this.store.dispatch(action);
    }

    public select<T>(entity: any): Observable<T> {
        return this.store.select(entity);
    }
}

export {StoreInternalService};
