import {Component} from '@angular/core';

@Component({
    selector: 'louis-p-c-authorization-footer',
    template: `
        <div class="footer register-footer text-center">
            <h6>&copy; 2016 - {{time | date: 'yyyy'}}, ALL RIGHTS ARE RESERVED, with <i class="fa fa-heart heart"></i></h6>
        </div>
    `
})
class AuthorizationFooterComponent {
    time: Date = new Date();
};

export {AuthorizationFooterComponent};
