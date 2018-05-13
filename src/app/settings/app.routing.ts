import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from '@pages/home/home.component';
import {SignUpComponent} from '@pages/authentication/sign-up/sign-up.component';
import {LandingComponent} from '@pages/landing/landing.component';
import {NotFoundComponent} from '@pages/notFound/not-found.component';
import {CatalogComponent} from '@pages/catalog/catalog.component';
import {SignInComponent} from '@pages/authentication/sign-in/sign-in.component';
import {NonSignInGuard} from './NonSignInGuard';
import {WatchResolver} from '@pages/watch/watch.resolver';
import {WatchPageComponent} from '@pages/watch/watch.component';

const routes: Routes = [
    {
        path: '', component: HomeComponent
    },
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
    {
        // TODO: Load lazy module only admins
        path: 'admin',
        loadChildren: '../specific-rights/admin/admin.module#AdminModule'
    },
    {
        path: 'watch/:name',
        component: WatchPageComponent,
        resolve: {
            watch: WatchResolver
        }
    },
    {
        path: 'watch/:name/:order',
        component: WatchPageComponent,
        resolve: {
            watch: WatchResolver
        }
    },
    {
        path: 'home', redirectTo: '', pathMatch: 'full'
    },
    {
        path: 'index', redirectTo: '', pathMatch: 'full'
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
    ]
})
export class AppRoutingModule {
}
