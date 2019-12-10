import { createAction, props } from '@ngrx/store';


export const AddUser = createAction(
  '[User] Add User',
  props<{ user: string }>()
)