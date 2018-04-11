import {FETCH_REMOTE_DATA, REMOTE_DATA} from './store.action';
import {IRemoteState} from './store.dictionary';

const initRemoteState: IRemoteState = {
    PREORDER: null,
    USER_MESSAGE_FORM: null,
    WATCH: null
};

function remoteReducer(state = initRemoteState, action): IRemoteState {
    switch (action.type) {
        case FETCH_REMOTE_DATA:
            return {
                ...state,
                ...initRemoteState
            };
        case REMOTE_DATA:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}

export {remoteReducer};
