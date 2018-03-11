import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';

import {Authorization} from '../Authorization';
import {User} from '../authorization.dictionary';
import {AuthorizationService} from '../authorization.service';

@Component({
    selector: 'louis-p-sign-up',
    templateUrl: './sign-up.template.html',
    styleUrls: ['./sign-up.style.scss']
})
class SignUpComponent extends Authorization implements OnInit {

    constructor(protected fb: FormBuilder,
                private authService: AuthorizationService) {
        super(fb);
    }

    ngOnInit() {
        super.initForm();
        super.addFormControl(
            'confirmPassword',
            new FormControl('', Validators.compose([
                Validators.required
            ]))
        );
    }

    public onConfirmPasswordChange({target: {value}}): void {
        if (value !== this.form.get('password').value) {
            this.form.get('confirmPassword').setErrors({'PasswordNotMatched': true});
            return;
        }

        this.form.get('confirmPassword').setErrors(null);
        return;
    }

    public onRegister(): void {
        const form = this.form.getRawValue();

        const user: User = new User();
        user.login = form.login;
        user.password = form.password;

        this.authService.signUp(user);
    }
}

export {SignUpComponent};
