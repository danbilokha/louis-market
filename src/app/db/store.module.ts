import {NgModule} from '@angular/core';
import {AngularFireModule,} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database';

import {DbService} from './external/dbService';
import {environment} from 'environments/environment';

@NgModule({
    imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AngularFireAuthModule,
        AngularFireDatabaseModule,
    ],
    providers: [
        DbService
    ]
})
class DbModule {

}

export {DbModule};
