import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import {HomeComponent} from './page/home/home.component';
import { SignupComponent } from './page/signup/signup.component';
import { LandingComponent } from './page/landing/landing.component';
import { ProfileComponent } from './page/profile/profile.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import {TopWatchesComponent} from './page/landing/top-watches/top-watches.component';
import {KeepInTouchComponent} from './page/landing/keep-in-touch/keep-in-touch.component';
import {AboutUsComponent} from './page/landing/about-us/about-us.component';
import {IndexViewComponent} from './page/home/index-view/index-view.component';

// Pipes
import {DiscountPipe} from '@pipes/discount/discount';
import {ToFixedPipe} from '@pipes/toFixed/toFixed';
import {CurrencySignPipe} from '@pipes/currencySign/currencySign';
import {CalculatePricePipe} from '@pipes/calculatePrice/calculatePrice';
import {PriceShowPipe} from '@pipes/priceShow/priceShow.ts';

// Services
import {CurrencyResolverService} from './services/price/currency-resolver';
import {WatchService} from '@services/watchService/watchService';
import {DbService} from '@db/dbService';

import {ComponentModule} from '@components/component.module';
import {DbModule} from '@db/db.module';

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
    IndexViewComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule,
    ComponentModule,
    DbModule
  ],
  providers: [
    DiscountPipe,
    ToFixedPipe,
    CurrencySignPipe,
    CalculatePricePipe,
    CurrencyResolverService,
    WatchService,
    DbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
