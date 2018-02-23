import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from '@pages/home/home.component';
import {SignUpComponent} from '@pages/sign-up/sign-up.component';
import {LandingComponent} from '@pages/landing/landing.component';
import {NotFoundComponent} from '@pages/notFound/not-found.component';
import {CatalogComponent} from '@pages/catalog/catalog.component';
import {WatchPageComponent} from '@pages/watch/watch.component';

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'watch/:name', component: WatchPageComponent},
    {path: 'sign-up', component: SignUpComponent},
    {path: 'landing', component: LandingComponent},
    {path: 'catalog', component: CatalogComponent},
    {path: 'admin', loadChildren: '../specific-rights/admin/admin.module#AdminModule'},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', component: NotFoundComponent}
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
