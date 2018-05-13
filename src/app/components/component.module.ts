import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ModalGalleryModule} from 'angular-modal-gallery';
import {WatchComponent} from './watch/watch.component';
import {WatchListComponent} from './watchList/watchList.component';
import {LoaderComponent} from './loader/loader.component';
import {CommentComponent} from './comment/comment.component';
import {ModalComponent} from './modal/modal.component';
import {HeaderComponent} from './header/header.component';
import {ImagesComponent} from './images/images.component';
import {DelimiterComponent} from './delimiter/delimiter.component';
import {PriceWithDiscountComponent} from './price/withDiscount/priceWithDiscount.component';
import {PriceWithoutDiscountComponent} from './price/withoutDiscount/priceWithoutDiscount.component';
import {WatchOrderComponent} from '@components/order/order.component';
// TODO: Need investigation, seems unneeded
// import 'hammerjs';
// import 'mousetrap';
import {SharedModule} from '@shared/shared.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import {UiModule} from '@ui/ui.module';

@NgModule({
    declarations: [
        WatchComponent,
        WatchListComponent,
        LoaderComponent,
        CommentComponent,
        ModalComponent,
        HeaderComponent,
        ImagesComponent,
        WatchOrderComponent,
        DelimiterComponent,
        PriceWithDiscountComponent,
        PriceWithoutDiscountComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        ModalGalleryModule.forRoot(),
        SharedModule,
        NgbModule,
        UiModule
    ],
    entryComponents: [
        PriceWithDiscountComponent,
        PriceWithoutDiscountComponent
    ],
    exports: [
        WatchComponent,
        WatchListComponent,
        LoaderComponent,
        CommentComponent,
        ModalComponent,
        HeaderComponent,
        ImagesComponent,
        WatchOrderComponent,
        DelimiterComponent,
        PriceWithDiscountComponent,
        PriceWithoutDiscountComponent
    ]
})
class ComponentModule {
}

export {ComponentModule};
