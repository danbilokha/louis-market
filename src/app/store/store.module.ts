import {NgModule} from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {StoreModule} from '@ngrx/store';

import {StoreExternalService} from './external/store-external.service';
import {environment} from 'environments/environment';
import {appReducers} from './store.dictionary';
import {StoreInternalService} from './internal/store-internal.service';
import {StoreEffect} from './store.effect';
import {StoreService} from './store.service';
import {StoreLocalStorage} from './localStorage/store-localStorage';

@NgModule({
    imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        StoreModule.forRoot(appReducers)
    ],
    providers: [
        StoreExternalService,
        StoreInternalService,
        StoreLocalStorage,
        StoreService,
        StoreEffect
    ]
})
class AppStoreModule {
}

export {AppStoreModule};
