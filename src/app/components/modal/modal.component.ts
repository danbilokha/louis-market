import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'louis-c-modal-component',
    templateUrl: './modal.component.html'
})
class ModalComponent {

    @Input() public headerText: string = 'Модальное окно';
    @Input() public submitButtonText = 'Готово';

    @Input()
    public content: any;

    @Input()
    public footer: any;

    @Output()
    public modalClose = new EventEmitter<any>();

    @Output()
    public modalSubmit = new EventEmitter<any>();

    public onClose(): void {
        this.modalClose.emit();
    }

    public onSubmit(): void {
        this.modalSubmit.emit();
    }

}

export {ModalComponent};
