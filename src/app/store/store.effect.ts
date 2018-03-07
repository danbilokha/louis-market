import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import {Actions, Effect} from '@ngrx/effects';

import {FETCH_REMOTE_DATA, FetchingRemoteData} from './store.action';

@Injectable()
class StoreEffect {

    @Effect()
    fetchRemoteData$: Observable<Action> = this.actions$
        .ofType(FETCH_REMOTE_DATA)
        .map(() => {
            return new FetchingRemoteData()
        });

    constructor(private actions$: Actions) {
    }

}

export {StoreEffect};
