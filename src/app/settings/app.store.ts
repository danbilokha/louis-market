import {StoreModule} from '@ngrx/store';
import {NgModule} from '@angular/core';

import {remoteReducer} from './remote';

const appReducers = {
    remote: remoteReducer
};

@NgModule({
    imports: [
        StoreModule.forRoot(appReducers),
    ]
})
class AppStoreModule {
}

export {AppStoreModule};
