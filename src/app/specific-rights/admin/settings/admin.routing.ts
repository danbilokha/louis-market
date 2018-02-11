import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AdminComponent} from '../admin.component';
import {AdminIndexComponent} from '../pages/index/index.component';
import {AdminStuffComponent} from '../pages/stuff/stuff.component';

const routes: Routes =[
    { path: '',             component: AdminComponent,
        children: [
            { path: 'home',          component: AdminIndexComponent },
            { path: 'stuff',         component: AdminStuffComponent },
            { path: '',              component: AdminComponent, pathMatch: 'full' },
        ]},
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
