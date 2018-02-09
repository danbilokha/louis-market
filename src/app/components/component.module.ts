import {NgModule} from '@angular/core';

import {WatchComponent} from './watch/watch.component';
import {WatchListComponent} from './watchList/watchList.compomponent';

@NgModule({
    declarations: [
        WatchComponent,
        WatchListComponent
    ]
})
class ComponentModule {

}

export {ComponentModule};
