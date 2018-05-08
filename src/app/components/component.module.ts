import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ModalGalleryModule} from 'angular-modal-gallery';
// Components
import {WatchComponent} from './watch/watch.component';
import {WatchListComponent} from './watchList/watchList.component';
import {LoaderComponent} from './loader/loader.component';
import {CommentComponent} from './comment/comment.component';
import {CommentListComponent} from './commentList/commentList.component';
import {ModalComponent} from './modal/modal.component';
import {HeaderComponent} from './header/header.component';
import {ImagesComponent} from './images/images.component';
import {DelimiterComponent} from './delimiter/delimiter.component';
import {PriceWithDiscountComponent} from './price/withDiscount/priceWithDiscount.component';
import {PriceWithoutDiscountComponent} from './price/withoutDiscount/priceWithoutDiscount.component';
// TODO: Need investigation, seems unneeded
// import 'hammerjs';
// import 'mousetrap';
import {SharedModule} from '@shared/shared.module';

@NgModule({
    declarations: [
        WatchComponent,
        WatchListComponent,
        LoaderComponent,
        CommentComponent,
        CommentListComponent,
        ModalComponent,
        HeaderComponent,
        ImagesComponent,
        DelimiterComponent,
        PriceWithDiscountComponent,
        PriceWithoutDiscountComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        ModalGalleryModule.forRoot(),
        SharedModule
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
        CommentListComponent,
        ModalComponent,
        HeaderComponent,
        ImagesComponent,
        DelimiterComponent,
        PriceWithDiscountComponent,
        PriceWithoutDiscountComponent
    ]
})
class ComponentModule {
}

export {ComponentModule};
