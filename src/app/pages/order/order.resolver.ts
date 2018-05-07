import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs/Observable';

import {Watch} from '@dictionaries/watch.dictionary';

@Injectable()
class OrderResolver implements Resolve<Watch> {

    resolve(): Observable<Watch> {
        return Observable.of({} as Watch);
    }
}

export {OrderResolver};
