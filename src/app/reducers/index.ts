import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { userReducer } from './users.reducer'

export interface State {
  users: Array<string>
}

export const reducers: ActionReducerMap<State> = {
  users: userReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
