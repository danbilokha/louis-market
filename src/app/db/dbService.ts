import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';

import {SCHEMA} from '@db/schema';
import * as mapping from '@db/db.dictionary';
import {toArray} from '@common/helpers/array';

@Injectable()
class DbService {

    constructor(private db: AngularFireDatabase) {

    }

    public getDbData = (entity: string, skip?: number, take?: number): Observable<any> =>
        this.db
            .object(`${SCHEMA.DATA}`)
            .valueChanges()
            .map(data => data[entity])
            .map(toArray)
            .map(mapping.skip(skip))
            .map(mapping.take(take));

    public setDbData(entity: string, value: any): void {
        this.db
            .list(`${SCHEMA.DATA}/${entity}`)
            .push(value);
    }

}

export {DbService};
