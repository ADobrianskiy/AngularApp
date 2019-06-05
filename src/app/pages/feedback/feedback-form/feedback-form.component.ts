import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-feedback-form',
    templateUrl: './feedback-form.component.html',
    styleUrls: ['./feedback-form.component.scss']
})
export class FeedbackFormComponent implements OnInit {
    public feedbackFrom;

    @Output() onSubmit: EventEmitter<any> = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
        this.feedbackFrom = new FormGroup({
            name: new FormControl('', [Validators.required, Validators.min(3)]),
            email: new FormControl('', Validators.email),
            feedbackText: new FormControl('', Validators.required),
        });
    }

    public submitForm() {
        if (this.feedbackFrom.valid) {
            this.onSubmit.emit(this.feedbackFrom.value);
        }
    }
}
