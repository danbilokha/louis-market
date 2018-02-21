import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'louis-slider',
    templateUrl: './slider.template.html'
})
class SliderComponent {
    @Input() public name: string;
    @Input() public autoTicks: boolean = true;
    @Input() public disabled: boolean = false;
    @Input() public invert: boolean = false;
    @Input() public max: number = 1;
    @Input() public min: number = 0;
    @Input() public showTicks: boolean = false;
    @Input() public step: number = 1;
    @Input() public thumbLabel: boolean = false;
    @Input() public value: number = 0;
    @Input() public vertical: boolean = false;

    @Output()
    public valueChanged = new EventEmitter<number>();
    public onValueChanged = (newValue: number): void => this.valueChanged.emit(newValue);

    private _tickInterval = 1;

    get tickInterval(): number | 'auto' {
        return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
    }

    set tickInterval(v) {
        this._tickInterval = Number(v);
    }
}

export {SliderComponent};
