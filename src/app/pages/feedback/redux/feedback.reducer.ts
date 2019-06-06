import { IFeedbackStoreModel } from '../model/IFeedbackStoreModel';
import { FeedbackAction, FeedbackActionType } from './feedback.actions';

const initialState: IFeedbackStoreModel = {
    userName: '',
    posting: false
};


export function feedbackReducer(
    state: IFeedbackStoreModel = initialState,
    action: FeedbackAction
): IFeedbackStoreModel {
    switch (action.type) {
        case FeedbackActionType.POST:
            return { ...state, userName: action.form.name };
        case FeedbackActionType.START_POSTING:
            return { ...state, posting: true };
        case FeedbackActionType.FINISHED_POSTING:
            return { ...state, posting: false };
        default:
            return state;
    }
}
