import { ActionReducerMap } from '@ngrx/store';
import { IFeedbackStoreModel } from '../pages/feedback/model/IFeedbackStoreModel';
import { feedbackReducer } from '../pages/feedback/reducers/feedback.reducer';

export interface IStoreState {
    // Pages specific data/state
    feedbackPage: IFeedbackStoreModel;
}

export const reducers: ActionReducerMap<IStoreState> = {
    feedbackPage: feedbackReducer,
};
