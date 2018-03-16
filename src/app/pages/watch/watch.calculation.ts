import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';

import {Watch} from 'app/common/dictionaries/watch.dictionary';

const findWatchByName = (watchName: string): any =>
    (watchArr): Observable<Watch> =>
        watchArr
            .do((data) => console.log(data))
            .filter((watch: Watch) => watch.name === watchName)
            .do((data) => console.log(data))
            .map(find => find[0])
            .do((data) => console.log(data));

export {findWatchByName};
