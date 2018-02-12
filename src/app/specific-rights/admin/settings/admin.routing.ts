import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AdminComponent} from '../admin.component';
import {AdminIndexComponent} from '../pages/index/index.component';
import {AdminStuffComponent} from '../pages/stuff/stuff.component';
import {AdminStuffCreateComponent} from '../pages/stuff/create/create.component';
import {AdminStuffDeleteComponent} from '../pages/stuff/delete/delete.component';
import {AdminStuffUpdateComponent} from '../pages/stuff/update/update.component';

const routes: Routes =[
    { path: '',             component: AdminComponent,
        children: [
            { path: 'main',          component: AdminIndexComponent },
            { path: 'stuff',         component: AdminStuffComponent,
                children: [
                    { path: 'create',          component: AdminStuffCreateComponent },
                    { path: 'delete',          component: AdminStuffDeleteComponent },
                    { path: 'update',          component: AdminStuffUpdateComponent },
                ] },
        ] },
    // { path: '',              component: AdminComponent, pathMatch: 'full' },
    { path: "**", redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
  ],
})
class AdminRoutingModule { }

export {AdminRoutingModule}
