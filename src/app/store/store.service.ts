import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';

import {StoreInternalService} from './internal/store-internal.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
class StoreService {

    constructor(private internalStore: StoreInternalService) {
    }

    public set(action: Action): void {
        this.internalStore.dispatch(action);
    }

    public get<T>(entity: any): Observable<T> {
        return this.internalStore.select(entity);
    }
}

export {StoreService};
