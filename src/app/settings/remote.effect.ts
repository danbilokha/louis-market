import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import {Actions, Effect} from '@ngrx/effects';

import {FETCH_REMOTE_DATA} from './remote';

@Injectable()
class RemoteEffect {

    // @Effect()
    // fetchRemoteData$: Observable<Action> = this.actions$
    //     .ofType(FETCH_REMOTE_DATA);

    constructor(private actions$: Actions) {
    }

}

export {RemoteEffect};
