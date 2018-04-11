import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Actions, Effect} from '@ngrx/effects';

import {
    FETCHING_REMOTE_DATA_SUCCESS,
    FETCH_REMOTE_DATA,
    FetchingRemoteData,
    RemoteData,
    PUSH_REMOTE_DATA,
    PushingRemoteData
} from './store.action';
import {StoreExternalService} from './external/store-external.service';
import {ExtendedAction, LOCAL_STORAGE_NAMESPACE} from './store.dictionary';
import {StoreLocalStorageService} from '@store/localStorage/store-localStorage';

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
        .do((data) => {
            const _data = JSON.parse(JSON.stringify(data));

            if (_data.WATCH) {
                for (const key in _data.WATCH) {
                    delete _data.WATCH[key].images;
                }

                this.storeLocalStorageService.set(LOCAL_STORAGE_NAMESPACE.watch.toString(), _data.WATCH);
            }

            if (_data.USER) {
                for (const key in _data.USER) {
                    delete _data.USER[key].password;
                }

                this.storeLocalStorageService.set(LocalStorageNamespace.user.toString(), _data.USER);
            }
        });

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
