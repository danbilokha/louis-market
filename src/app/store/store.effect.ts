import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Actions, Effect} from '@ngrx/effects';

import {
    FETCH_REMOTE_DATA,
    FETCHING_REMOTE_DATA_SUCCESS,
    FetchingRemoteData,
    PUSH_REMOTE_DATA,
    PushingRemoteData,
    RemoteData
} from './store.action';
import {StoreExternalService} from './external/store-external.service';
import {ExtendedAction} from './store.dictionary';
import {StoreLocalStorageService} from '@store/localStorage/store-localStorage';
import {USER, WATCH} from '@settings/constants';
import {tap} from 'rxjs/internal/operators';

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

    @Effect({dispatch: false})
    public setRemoteDataToLocalStorage$ = this.actions$
        .ofType(FETCHING_REMOTE_DATA_SUCCESS)
        .pipe(
            tap(({payload}: ExtendedAction) => {
                const _data = JSON.parse(JSON.stringify(payload));

                if (_data.WATCH && this.storeLocalStorageService.isLocaStoragelKey(WATCH)) {
                    for (const key in _data.WATCH) {
                        delete _data.WATCH[key].images;
                    }

                    this.storeLocalStorageService.set(WATCH, _data.WATCH);
                }

                if (_data.USER && this.storeLocalStorageService.isLocaStoragelKey(USER)) {
                    for (const key in _data.USER) {
                        delete _data.USER[key].password;
                    }

                    this.storeLocalStorageService.set(USER, _data.USER);
                }
            })
        );

    @Effect()
    public pushData$: Observable<PushingRemoteData> = this.actions$
        .ofType(PUSH_REMOTE_DATA)
        .map(({payload: {entity, value}}: ExtendedAction) => {
            this.storeExternalService.pushData(entity, value);
            return new PushingRemoteData();
        });

    constructor(private actions$: Actions,
                private storeExternalService: StoreExternalService,
                private storeLocalStorageService: StoreLocalStorageService) {
    }

}

export {StoreEffect};
