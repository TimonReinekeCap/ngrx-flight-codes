import { createAction, props } from '@ngrx/store';
import { Code } from '../models/code';

export const loadCodes = createAction('[Codes Component] Load Codes');
export const loadCodesSuccess = createAction(
  '[Codes Component] Load Codes Success',
  props<{ codes: Code[] }>()
);
export const loadCodesFailed = createAction(
  '[Codes Component] Load Codes Failed'
);
