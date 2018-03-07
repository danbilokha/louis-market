import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Actions, Effect} from '@ngrx/effects';

import {
    FETCHING_REMOTE_DATA_SUCCESS,
    FETCH_REMOTE_DATA,
    FetchingRemoteData,
    RemoteData,
    PUSH_REMOTE_DATA
} from './store.action';
import {StoreExternalService} from './external/store-external.service';
import {ExtendedAction} from './store.dictionary';

@Injectable()
class StoreEffect {

    @Effect()
    public fetchRemoteData$: Observable<FetchingRemoteData> = this.actions$
        .ofType(FETCH_REMOTE_DATA)
        .map(() => {
            this.storeExternalService.fetchRemoteData();
            return new FetchingRemoteData()
        });

    @Effect()
    public setRemoteDataToInternalStore$: Observable<RemoteData> = this.actions$
        .ofType(FETCHING_REMOTE_DATA_SUCCESS)
        .map(({payload}: ExtendedAction) => {
            return new RemoteData(payload)
        });

    @Effect()
    public pushData$: Observable<void> = this.actions$
        .ofType(PUSH_REMOTE_DATA)
        .map(({payload: {entity, value}}: ExtendedAction) => {
            console.log(entity, value);
            this.storeExternalService.pushData(entity, value)
        });

    constructor(private actions$: Actions,
                private storeExternalService: StoreExternalService) {
    }

}

export {StoreEffect};
