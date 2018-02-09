import {Injectable} from '@angular/core';

import {AngularFirestore} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
class DbService {

    constructor(private db: AngularFirestore) {

    }

    public getDbData(entity: string): Observable<any> {
        console.log(this.db.collection(entity).valueChanges());
        return this.db.collection(entity).valueChanges();
    }

    public setDbData(entity: string, value: any): void {
        this.db.collection(entity).add(value);
    }
}

export {DbService};
