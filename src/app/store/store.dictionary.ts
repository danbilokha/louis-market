import {Action} from '@ngrx/store';

import {remoteReducer} from './store.reducer';

const appReducers = {
    remote: remoteReducer
};

interface AppState {
    data: any;
}

interface ExtendedAction extends Action {
    payload: any;
}

export {
    appReducers,
    AppState,
    ExtendedAction
};
