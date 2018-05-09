import {Watch} from 'app/shared/dictionaries/watch.dictionary';
import {Observable} from 'rxjs';

abstract class ResoveWatchByName {
    public abstract resovleWatchByName(watchName: string): Observable<Watch>;
}


export {ResoveWatchByName};
