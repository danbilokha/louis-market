import {NgModule} from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {StoreModule} from '@ngrx/store';

import {StoreExternalService} from './external/store-external.service';
import {environment} from 'environments/environment';
import {appReducers} from './store.dictionary';

@NgModule({
    imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        StoreModule.forRoot(appReducers)
    ],
    providers: [
        StoreExternalService
    ]
})
class AppStoreModule {
}

export {AppStoreModule};
