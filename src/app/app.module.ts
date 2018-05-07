import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// Components
import {AppComponent} from './app.component';
import {HomeComponent} from '@pages/home/home.component';
import {SignUpComponent} from '@pages/authentication/sign-up/sign-up.component';
import {LandingComponent} from '@pages/landing/landing.component';
import {ProfileComponent} from '@pages/profile/profile.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {FooterComponent} from './components/footer/footer.component';
import {TopWatchesComponent} from '@pages/landing/top-watches/top-watches.component';
import {KeepInTouchComponent} from '@pages/landing/keep-in-touch/keep-in-touch.component';
import {AboutUsComponent} from '@pages/landing/about-us/about-us.component';
import {IndexViewComponent} from '@pages/home/index-view/index-view.component';
import {NotFoundComponent} from '@pages/notFound/not-found.component';
import {CatalogComponent} from '@pages/catalog/catalog.component.ts';
import {WatchPageComponent} from '@pages/watch/watch.component';
import {WatchCommentsComponent} from '@pages/watch/comments/watch-comments.component';
import {OrderPageComponent} from '@pages/order/order.component';
import {SignInComponent} from '@pages/authentication/sign-in/sign-in.component';
import {AuthorizationFooterComponent} from '@pages/authentication/footer/footer.component';
import {AuthorizationSocialComponent} from '@pages/authentication/social/social.component';
// Pipes
// Services
import {WatchService} from '@pages/watch/watch.service';
import {AuthorizationService} from '@pages/authentication/authentication.service';
import {SessionService} from '@settings/session.service';
import {NonSignInGuard} from '@settings/NonSignInGuard';
import {SignInGuard} from '@settings/SignInGuard';
import {WatchResolver} from '@pages/watch/watch.resolver';
// Modules
import {AppRoutingModule} from '@settings/app.routing';
import {AppStoreModule} from '@store/store.module';
import {AdminModule} from './specific-rights/admin/admin.module';
import {ComponentModule} from '@components/component.module';
import {UiModule} from '@ui/ui.module';
import {ApiModule} from './api/api.module';
import {SharedModule} from '@shared/shared.module';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        SignUpComponent,
        SignInComponent,
        LandingComponent,
        ProfileComponent,
        NavbarComponent,
        FooterComponent,
        TopWatchesComponent,
        KeepInTouchComponent,
        AboutUsComponent,
        IndexViewComponent,
        NotFoundComponent,
        CatalogComponent,
        WatchPageComponent,
        WatchCommentsComponent,
        OrderPageComponent,
        AuthorizationFooterComponent,
        AuthorizationSocialComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        NgbModule.forRoot(),
        ReactiveFormsModule,
        FormsModule,
        RouterModule,
        UiModule,
        AppRoutingModule,
        AppStoreModule,
        SharedModule,
        ComponentModule,
        AppStoreModule,
        AdminModule,
        ApiModule
    ],
    providers: [
        WatchService,
        AuthorizationService,
        SessionService,
        SignInGuard,
        NonSignInGuard,
        WatchResolver
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
