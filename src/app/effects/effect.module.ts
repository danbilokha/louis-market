import { EffectsModule } from '@ngrx/effects';
import {NgModule} from '@angular/core';
import {RemoteEffect} from '../store/store.effect';

@NgModule({
    imports: [
        EffectsModule.forRoot([
            RemoteEffect
        ])
    ]
})
class EffectModule {};

export {EffectModule};
