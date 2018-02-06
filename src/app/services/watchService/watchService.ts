import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
class WatchService {

    public watches$: Observable<any>;

}

export {WatchService};
