import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'louis-component-modal',
    templateUrl: './modal.template.html',
    styleUrls: ['./modal.styles.scss']
})
class ModalComponent {

    @Input() public headerText: string = 'Модальное окно';
    @Input() public submitButtonText = 'Готово';

    @Input()
    public content: any = false;

    @Input()
    public footer: any = false;

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
