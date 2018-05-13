import {Action} from '@ngrx/store';

import {remoteReducer} from './store.reducer';
import {USER, WATCH} from '@settings/constants';

interface ExtendedAction extends Action {
    payload: any;
}

interface StoreState {
    remote: any;
}

interface IRemoteState {
    PREORDER: any;
    USER_MESSAGE_FORM: any;
    WATCH: any;
}

const STORAGE_NAMESPACE: Map<string, string> = new Map([
    [WATCH, 'remote'],
    [USER, 'remote']
]);

const appReducers: StoreState = {
    remote: remoteReducer
};

export {
    StoreState,
    ExtendedAction,
    IRemoteState,
    STORAGE_NAMESPACE,
    appReducers,
};
