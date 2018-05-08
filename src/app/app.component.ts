import {Component, OnInit, Inject, Renderer, ElementRef, ViewChild} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import {DOCUMENT} from '@angular/platform-browser';
import {Location} from '@angular/common';

import {NavbarComponent} from './components/navbar/navbar.component';
import {StoreInternalService} from './store/internal/store-internal.service';
import {FetchRemoteData} from '@store/store.action';

@Component({
    selector: 'app-root',
    templateUrl: './app.template.html',
    styleUrls: ['./app.style.scss']
})
export class AppComponent implements OnInit {
    @ViewChild(NavbarComponent) navbar: NavbarComponent;
    private _router: Subscription;

    constructor(private renderer: Renderer,
                private router: Router,
                @Inject(DOCUMENT) private document: any,
                private element: ElementRef,
                public location: Location,
                private store: StoreInternalService) {
    }

    ngOnInit() {
        const navbar: HTMLElement = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            } else {
                window.document.activeElement.scrollTop = 0;
            }
            this.navbar.sidebarClose();
        });
        this.renderer.listenGlobal('window', 'scroll', (event) => {
            const number = window.scrollY;
            if (number > 150 || window.pageYOffset > 150) {
                // add logic
                navbar.classList.remove('navbar-transparent');
            } else {
                // remove logic
                navbar.classList.add('navbar-transparent');
            }
        });
        const ua = window.navigator.userAgent;
        const trident = ua.indexOf('Trident/');
        let version;
        if (trident > 0) {
            // IE 11 => return version number
            const rv = ua.indexOf('rv:');
            version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }
        if (version) {
            const body = document.getElementsByTagName('body')[0];
            body.classList.add('ie-background');

        }

        this.fetchRemoteData();
    }

    removeFooter() {
        let titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (titlee === 'signup' || titlee === 'nucleoicons') {
            return false;
        }
        else {
            return true;
        }
    }

    private fetchRemoteData(): void { // tslint:disable-line
        this.store.dispatch(new FetchRemoteData());
    }
}
