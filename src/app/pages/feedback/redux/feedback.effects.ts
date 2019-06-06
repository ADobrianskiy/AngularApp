import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { delay, exhaustMap, map, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { IStoreState } from '../../../reducers';
import {
    FeedbackAction,
    FeedbackActionType,
    FeedbackFinishedPostingAction,
    FeedbackPostAction,
    FeedbackStartPostingAction
} from './feedback.actions';
import { IUserFeedback } from '../model/IUserFeedback';

@Injectable()
export class FeedbackEffects {
    constructor(private actions$: Actions, private store: Store<IStoreState>) {}

    @Effect()
    postFeedback$: Observable<FeedbackAction> = this.actions$.pipe(
        ofType(FeedbackActionType.POST),
        map((action: FeedbackPostAction) => action.form),
        exhaustMap((data: IUserFeedback) => {
            console.log('Posting data: ', data);

            this.store.dispatch(new FeedbackStartPostingAction());
            return timer(3000);
        }),
        map(() => {
            return new FeedbackFinishedPostingAction();
        })
    );
}

/*

if (this.state === ComponentState.SHOW_FORM) {
            this.userName = formData.name;
            this.state = ComponentState.SHOW_PRELOADER;

            setTimeout(() => {
                this.state = ComponentState.SHOW_SUCCESS_MSG;
            }, 3000);
        }

 */
