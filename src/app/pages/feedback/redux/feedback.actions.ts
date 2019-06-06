import { IUserFeedback } from '../model/IUserFeedback';
import { Action } from '@ngrx/store';

export enum FeedbackActionType {
    POST = '[Feedback] POST',
    START_POSTING = '[Feedback] START POSTING',
    FINISHED_POSTING = '[Feedback] FINISHED POSTING',
}

export class FeedbackPostAction implements Action {
    readonly type = FeedbackActionType.POST;

    constructor(public form: IUserFeedback) {
    }
}

export class FeedbackStartPostingAction implements Action {
    readonly type = FeedbackActionType.START_POSTING;
}

export class FeedbackFinishedPostingAction implements Action {
    readonly type = FeedbackActionType.FINISHED_POSTING;
}


export type FeedbackAction = FeedbackPostAction | FeedbackStartPostingAction | FeedbackFinishedPostingAction;
