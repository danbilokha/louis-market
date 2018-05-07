import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormBase} from '@helpers/form';

const MIN_PASSWORD_LENGTH = 5;

abstract class Authentication extends FormBase {

    public form: FormGroup;

    constructor(protected fb: FormBuilder) {
        super(fb);
    }

    public initForm(): void {
        this.form = this.fb.group({
            login: [
                '',
                Validators.required
            ],
            password: [
                '',
                Validators.compose([
                    Validators.required,
                    Validators.minLength(MIN_PASSWORD_LENGTH)
                ])
            ]
        });
    }
}

export {MIN_PASSWORD_LENGTH, Authentication};
