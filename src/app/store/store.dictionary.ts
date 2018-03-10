import {Action} from '@ngrx/store';

import {remoteReducer} from './store.reducer';

interface ExtendedAction extends Action {
    payload: any;
}

interface StoreState {
    remote: any;
}

interface RemoteState {
    data: any;
}

const appReducers: StoreState = {
    remote: remoteReducer
};

export {
    StoreState,
    ExtendedAction,
    RemoteState,
    appReducers,
};
