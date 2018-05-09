import {Observable} from 'rxjs';


import {Watch} from '@louis/shared/dictionaries/watch.dictionary';

const findWatchByName = (watchName: string): any =>
    (watchArr): Observable<Watch> => {
        return watchArr
            .filter((watch: Watch) => watch.name === watchName)
    };


export {findWatchByName};
