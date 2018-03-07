import {Injectable} from '@angular/core';
import {Action, Store} from '@ngrx/store';

import {AppState} from '../store.dictionary';
import {Observable} from 'rxjs/Observable';

@Injectable()
class StoreInternalService {

    constructor(private store: Store<AppState>) {
    }

    public dispatch(action: Action) {
        this.store.dispatch(action);
    }

    public select<T>(entity: any): Observable<T> {
        console.log(entity);
        this.store.subscribe(state => {
            console.log(state);
        });
        return this.store.select(entity);
    }
}

export {StoreInternalService};
