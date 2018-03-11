import { EffectsModule } from '@ngrx/effects';
import {NgModule} from '@angular/core';
import {StoreEffect} from '../store/store.effect';

@NgModule({
    imports: [
        EffectsModule.forRoot([
            StoreEffect
        ])
    ]
})
class EffectModule {};

export {EffectModule};
