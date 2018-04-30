import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/from';
import {Watch} from 'app/common/dictionaries/watch.dictionary';

const findWatchByName = (watchName: string): any =>
    (watchArr): Observable<Watch> => {
        return watchArr
            .filter((watch: Watch) => watch.name === watchName)
    };


export {findWatchByName};
