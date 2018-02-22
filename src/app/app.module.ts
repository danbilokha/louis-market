import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Components
import {AppComponent} from './app.component';
import {HomeComponent} from '@pages/home/home.component';
import {SignupComponent} from '@pages/signup/signup.component';
import {LandingComponent} from '@pages/landing/landing.component';
import {ProfileComponent} from '@pages/profile/profile.component';
import {NavbarComponent} from './common/navbar/navbar.component';
import {FooterComponent} from './common/footer/footer.component';
import {TopWatchesComponent} from '@pages/landing/top-watches/top-watches.component';
import {KeepInTouchComponent} from '@pages/landing/keep-in-touch/keep-in-touch.component';
import {AboutUsComponent} from '@pages/landing/about-us/about-us.component';
import {IndexViewComponent} from '@pages/home/index-view/index-view.component';
import {NotFoundComponent} from '@pages/notFound/not-found.component';
import {CatalogComponent} from '@pages/catalog/catalog.component.ts';


// Pipes
import {DiscountPipe} from '@pipes/discount/discount';
import {ToFixedPipe} from '@pipes/toFixed/toFixed';
import {CurrencySignPipe} from '@pipes/currencySign/currencySign';
import {CalculatePricePipe} from '@pipes/calculatePrice/calculatePrice';
import {PriceShowPipe} from '@pipes/priceShow/priceShow';
import {AddSpacePipe} from '@pipes/addSpace/addSpace';

// Services
import {CurrencyResolverService} from './services/price/currency-resolver';
import {WatchService} from '@services/watchService/watchService';

// Modules
import {AppRoutingModule} from '@settings/app.routing';
import {AdminModule} from './specific-rights/admin/admin.module';
import {ComponentModule} from '@components/component.module';
import {DbModule} from '@db/db.module';
import {UiModule} from '@ui/ui.module';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        SignupComponent,
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
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        NgbModule.forRoot(),
        FormsModule,
        RouterModule,
        UiModule,
        AppRoutingModule,
        ComponentModule,
        DbModule,
        AdminModule
    ],
    providers: [
        DiscountPipe,
        ToFixedPipe,
        CurrencySignPipe,
        CalculatePricePipe,
        AddSpacePipe,
        CurrencyResolverService,
        WatchService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
