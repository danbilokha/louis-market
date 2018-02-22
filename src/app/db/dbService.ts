import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';

import {SCHEMA} from '@db/schema';
import * as mapping from '@db/db.dictionary';

@Injectable()
class DbService {

    public getDbData = (entity: string, skip?: number, take?: number): Observable<any> =>
        this.db
            .object(`${SCHEMA.DATA}`)
            .valueChanges()
            .map(data => data[entity])
            .map(mapping.skip(skip))
            .map(mapping.take(take));

    constructor(private db: AngularFireDatabase) {

    }

    public setDbData(entity: string, value: any): void {
        this.db
            .list(`${SCHEMA.DATA}/${entity}`)
            .push(value);
    }

}

export {DbService};
