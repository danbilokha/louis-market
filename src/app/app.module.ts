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
import {WatchComponent} from './components/watch/watch.component';

// Pipes
import {DiscountPipe} from './pipes/discount/discount';
import {ToFixedPipe} from './pipes/toFixed/toFixed';
import {CurrencySignPipe} from '@pipes/currencySign/currencySign';
import {CalculatePricePipe} from '@pipes/calculatePrice/calculatePrice';

// Services
import {CurrencyResolverService} from './services/price/currency-resolver';


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
    WatchComponent,
    DiscountPipe,
    ToFixedPipe,
    CurrencySignPipe,
    CalculatePricePipe
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [
    CurrencyResolverService,    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
