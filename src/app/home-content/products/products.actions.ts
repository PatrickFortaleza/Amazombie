import { createAction, props } from '@ngrx/store';

export const add = createAction(  '[Products] Add',
props<{ item: Object }>());