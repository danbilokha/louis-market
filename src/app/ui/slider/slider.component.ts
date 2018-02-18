import {Component, Input} from '@angular/core';

@Component({
    selector: 'louis-slider',
    templateUrl: './slider.template.html'
})
class SliderComponent {
    @Input() public autoTicks: boolean = true;
    @Input() public disabled: boolean = false;
    @Input() public invert: boolean = false;
    @Input() public max: number = 1;
    @Input() public min: number = 0;
    @Input() public showTicks: boolean = false;
    @Input() public step: number = 1;
    @Input() public thumbLabel: boolean = true;
    @Input() public value: number = 0;
    @Input() public vertical: boolean = false;

    get tickInterval(): number | 'auto' {
        return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
    }
    set tickInterval(v) {
        this._tickInterval = Number(v);
    }
    private _tickInterval = 1;
}

export {SliderComponent};
