import { Action, createReducer, on } from '@ngrx/store';
import * as UserAction from '../actions/user.actions'

export const usersFeatureKey = 'users';

export interface State {
  users: string[]
}

export const initialState: Array<string> = []

const usersReducer = createReducer(
  initialState,
  on(UserAction.AddUser, (state, { user }) => [...state, user])
);

export function userReducer(state: Array<string> = initialState, action: Action) {
  return usersReducer(state, action);
}
