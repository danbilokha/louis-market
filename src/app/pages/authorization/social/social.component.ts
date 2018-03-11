import {Component} from '@angular/core';

@Component({
    selector: 'louis-p-c-authorization-social',
    template: `
        <div class="social-line text-center">
            <a href="#pablo" class="btn btn-neutral btn-facebook btn-just-icon">
                <i class="fa fa-facebook-square"></i>
            </a>
            <a href="#pablo" class="btn btn-neutral btn-google btn-just-icon">
                <i class="fa fa-google-plus"></i>
            </a>
            <a href="#pablo" class="btn btn-neutral btn-twitter btn-just-icon">
                <i class="fa fa-twitter"></i>
            </a>
        </div>
    `
})
class AuthorizationSocialComponent {
}

export {AuthorizationSocialComponent};
