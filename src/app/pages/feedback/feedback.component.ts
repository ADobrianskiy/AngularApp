import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUserFeedback } from './model/IUserFeedback';


@Component({
    selector: 'app-feedback',
    templateUrl: './feedback.component.html',
    styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {
    private state: ComponentState = ComponentState.SHOW_FORM;
    private userName = '';

    constructor() {
    }

    public get showFeedbackForm() {
        return this.state === ComponentState.SHOW_FORM;
    }

    public get showPreloader() {
        return this.state === ComponentState.SHOW_PRELOADER;
    }

    public get showSuccessMessage() {
        return this.state === ComponentState.SHOW_SUCCESS_MSG;
    }

    public onSubmit(formData: IUserFeedback) {
        if (this.state === ComponentState.SHOW_FORM) {
            this.userName = formData.name;
            this.state = ComponentState.SHOW_PRELOADER;

            setTimeout(() => {
                this.state = ComponentState.SHOW_SUCCESS_MSG;
            }, 3000);
        }
    }
}

enum ComponentState {
    SHOW_FORM = 'SHOW_FORM',
    SHOW_PRELOADER = 'SHOW_PRELOADER',
    SHOW_SUCCESS_MSG = 'SHOW_SUCCESS_MSG'
}
