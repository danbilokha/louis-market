import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './settings/admin.routing';

import {AdminComponent} from './admin.component';
import {AdminIndexComponent} from './pages/index/index.component';
import {AdminStuffComponent} from './pages/stuff/stuff.component';
import {AdminStuffCreateComponent} from './pages/stuff/create/create.component';
import {AdminStuffDeleteComponent} from './pages/stuff/delete/delete.component';
import {AdminStuffUpdateComponent} from './pages/stuff/update/update.component';
import {FormBaseComponent} from './pages/stuff/formBase/formBase.component';

// TODO: Del duplicate load of Material module in Lazy loaded component
import {UiModule} from '@ui/ui.module';

@NgModule({
    declarations: [
        AdminComponent,
        AdminIndexComponent,
        AdminStuffComponent,
        AdminStuffCreateComponent,
        AdminStuffDeleteComponent,
        AdminStuffUpdateComponent,
        FormBaseComponent,
    ],
    imports: [
        RouterModule,
        FormsModule,
        CommonModule,
        AdminRoutingModule,
        UiModule
    ]
})
class AdminModule {

}

export {AdminModule};
