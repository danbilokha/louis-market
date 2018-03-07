import {Action} from '@ngrx/store';

import {storeReducer} from './store.reducer';

const appReducers = {
    data: storeReducer
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
