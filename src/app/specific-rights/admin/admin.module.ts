import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AdminRoutingModule} from './settings/admin.routing';

import {AdminComponent} from './admin.component';
import {AdminIndexComponent} from './pages/index/index.component';
import {AdminStuffComponent} from './pages/stuff/stuff.component';

@NgModule({
    declarations: [
        AdminComponent,
        AdminIndexComponent,
        AdminStuffComponent
    ],
    imports: [
        RouterModule,
        AdminRoutingModule
    ]
})
class AdminModule {

}

export {AdminModule};
