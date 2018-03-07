import { EffectsModule } from '@ngrx/effects';
import {NgModule} from '@angular/core';
import {RemoteEffect} from '../db/store.effect';

@NgModule({
    imports: [
        EffectsModule.forRoot([
            RemoteEffect
        ])
    ]
})
class EffectModule {};

export {EffectModule};
