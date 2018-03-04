import {StoreModule} from '@ngrx/store';
import {NgModule} from '@angular/core';

const appReducers = {
};

@NgModule({
    imports: [
        StoreModule.forRoot(appReducers),
    ]
})
class AppStoreModule {
}

export {AppStoreModule};
