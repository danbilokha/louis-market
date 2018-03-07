import {StoreModule} from '@ngrx/store';
import {NgModule} from '@angular/core';

import {remoteReducer} from './store.reducer';

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
