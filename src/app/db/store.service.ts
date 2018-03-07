import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';

import {AppState} from '../services/store.dictionary';
import {Observable} from 'rxjs/Observable';

@Injectable()
class AppStoreService {

    constructor(private store: Store<AppState>) {
    }

    public dispatch(action: any) {
        this.store.dispatch(action);
    }

    public select<T>(entity: any): Observable<T> {
        return this.store.select(entity);
    }
}

export {AppStoreService};
