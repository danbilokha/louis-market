import {Watch} from '@common/dictionaries/watch.dictionary';
import {Observable} from 'rxjs/Observable';

abstract class ResoveWatchByName {
    public abstract resovleWatchByName(watchName: string): Observable<Watch>;
}


export {ResoveWatchByName};
