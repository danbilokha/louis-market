import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AdminRoutingModule} from './settings/admin.routing';

import {AdminComponent} from './admin.component';
import {AdminIndexComponent} from './pages/index/index.component';
import {AdminStuffComponent} from './pages/stuff/stuff.component';
import {AdminStuffCreateComponent} from './pages/stuff/create/create.component';
import {AdminStuffDeleteComponent} from './pages/stuff/delete/delete.component';
import {AdminStuffUpdateComponent} from './pages/stuff/update/update.component';

@NgModule({
    declarations: [
        AdminComponent,
        AdminIndexComponent,
        AdminStuffComponent,
        AdminStuffCreateComponent,
        AdminStuffDeleteComponent,
        AdminStuffUpdateComponent
    ],
    imports: [
        RouterModule,
        AdminRoutingModule
    ]
})
class AdminModule {

}

export {AdminModule};
