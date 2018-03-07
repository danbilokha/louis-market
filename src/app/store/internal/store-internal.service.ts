import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';

import {AppState} from '../store.dictionary';
import {Observable} from 'rxjs/Observable';

@Injectable()
class StoreInternalService {

    constructor(private store: Store<AppState>) {
    }

    public dispatch(action: any) {
        this.store.dispatch(action);
    }

    public select<T>(entity: any): Observable<T> {
        return this.store.select(entity);
    }
}

export {StoreInternalService};
