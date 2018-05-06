import {AbstractControl, FormBuilder, FormGroup} from '@angular/forms';

abstract class FormBase {

    public form: FormGroup;

    constructor(protected fb: FormBuilder) {
    }

    public abstract initForm(): void;

    public addFormControl(name: string, control: AbstractControl): void {
        this.form.addControl(name, control);
    }
}

export {FormBase};
