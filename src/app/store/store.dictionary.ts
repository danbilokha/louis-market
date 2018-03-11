import {Action} from '@ngrx/store';

import {remoteReducer} from './store.reducer';

interface ExtendedAction extends Action {
    payload: any;
}

interface StoreState {
    remote: any;
}

interface RemoteState {
    data: IRemote;
}

interface IRemote {
    PREORDER: any;
    USER_MESSAGE_FORM: any;
    WATCH: any;
}

enum LocalStorageNamespace {
    Remote = 1,
    Watch = 2,
    User = 3
}

const appReducers: StoreState = {
    remote: remoteReducer
};

export {
    StoreState,
    ExtendedAction,
    RemoteState,
    IRemote,
    LocalStorageNamespace,
    appReducers,
};
