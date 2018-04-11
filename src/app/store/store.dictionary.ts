import {Action} from '@ngrx/store';

import {remoteReducer} from './store.reducer';

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

const LOCAL_STORAGE_NAMESPACE: Array<string> = [
    'remote',
    'watch',
    'user'
];

const appReducers: StoreState = {
    remote: remoteReducer
};

export {
    StoreState,
    ExtendedAction,
    IRemoteState,
    LOCAL_STORAGE_NAMESPACE,
    appReducers,
};
