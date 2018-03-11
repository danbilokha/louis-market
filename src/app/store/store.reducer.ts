import {FETCH_REMOTE_DATA, REMOTE_DATA} from './store.action';
import {RemoteState} from './store.dictionary';

const initRemoteState: RemoteState = {
    data: null,
};

function remoteReducer(state = initRemoteState, action): RemoteState {
    switch (action.type) {
        case FETCH_REMOTE_DATA:
            return {
                ...state,
                ...initRemoteState
            };
        case REMOTE_DATA:
            return {
                ...state,
                data: action.payload
            };
        default:
            return state;
    }
}

export {remoteReducer};
