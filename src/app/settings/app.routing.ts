import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from '@pages/home/home.component';
import {SignUpComponent} from '@pages/authorization/sign-up/sign-up.component';
import {LandingComponent} from '@pages/landing/landing.component';
import {NotFoundComponent} from '@pages/notFound/not-found.component';
import {CatalogComponent} from '@pages/catalog/catalog.component';
import {BaseWatchPageComponent} from '@pages/watch/base-watch.component';
import {OrderPageComponent} from '@pages/order/order.component';
import {SignInComponent} from '@pages/authorization/sign-in/sign-in.component';
import {SignInGuard} from './SignInGuard';
import {NonSignInGuard} from './NonSignInGuard';

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {
        path: 'sign-up', component: SignUpComponent, canActivate: [NonSignInGuard]
    },
    {
        path: 'sign-in', component: SignInComponent, canActivate: [NonSignInGuard]
    },
    {
        path: 'landing', component: LandingComponent
    },
    {
        path: 'catalog', component: CatalogComponent
    },
    { // TODO: Load lazy module only admins
        path: 'admin', loadChildren: '../specific-rights/admin/admin.module#AdminModule'
    },
    {
        path: 'watch/:name', component: BaseWatchPageComponent
    },
    {
        path: 'order/:name', component: OrderPageComponent
    },
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: '**', component: NotFoundComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [],
})
export class AppRoutingModule {
}
