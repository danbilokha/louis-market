import {Injectable} from '@angular/core';
import {Watch} from '@common/dictionaries/watch.dictionary';
import {DbService} from '@db/dbService';
import {SCHEMA} from '@db/schema';
import {Observable} from 'rxjs/Observable';

@Injectable()
class WatchService {

    constructor(private db: DbService) {
    }

    public getWatchByName = (name: string): Observable<Watch> =>
        this.db
            .getDbData(SCHEMA.WATCH)
            .map(watches => watches.filter(watch => watch.name === name)[0])

}

export {WatchService};