import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from '@pages/home/home.component';
import {ProfileComponent} from '@pages/profile/profile.component';
import {SignupComponent} from '@pages/signup/signup.component';
import {LandingComponent} from '@pages/landing/landing.component';
import {NotFoundComponent} from "@pages/notFound/not-found.component";

const routes: Routes =[
    { path: 'home',             component: HomeComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: "**",               component: NotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
