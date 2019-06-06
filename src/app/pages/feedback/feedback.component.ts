import { Component } from '@angular/core';
import { IUserFeedback } from './model/IUserFeedback';
import { IStoreState } from '../../reducers';
import { Store } from '@ngrx/store';
import { FeedbackPostAction } from './reducers/feedback.actions';
import { IFeedbackStoreModel } from './model/IFeedbackStoreModel';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';


@Component({
    selector: 'app-feedback',
    templateUrl: './feedback.component.html',
    styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {
    private state$: Observable<ComponentState>;
    private userName$;

    constructor(private store: Store<IStoreState>) {
        this.state$ = this.store.select(s => s.feedbackPage)
            .pipe(
                map((feedbackPage: IFeedbackStoreModel) => {
                    if (feedbackPage.posting) {
                        return ComponentState.SHOW_PRELOADER;
                    } else if (feedbackPage.userName) {
                        return ComponentState.SHOW_SUCCESS_MSG;
                    }
                    return ComponentState.SHOW_FORM;
                }),
                startWith(ComponentState.SHOW_FORM)
            );

        this.userName$ = this.store.select(s => s.feedbackPage.userName);
    }

    public get showFeedbackForm$() {
        return this.state$.pipe(map(state => state === ComponentState.SHOW_FORM));
    }

    public get showPreloader$() {
        return this.state$.pipe(map(state => state === ComponentState.SHOW_PRELOADER));
    }

    public get showSuccessMessage$() {
        return this.state$.pipe(map(state => state === ComponentState.SHOW_SUCCESS_MSG));
    }

    public onSubmit(formData: IUserFeedback) {
        this.store.dispatch(new FeedbackPostAction(formData));
    }
}

enum ComponentState {
    SHOW_FORM = 'SHOW_FORM',
    SHOW_PRELOADER = 'SHOW_PRELOADER',
    SHOW_SUCCESS_MSG = 'SHOW_SUCCESS_MSG'
}
