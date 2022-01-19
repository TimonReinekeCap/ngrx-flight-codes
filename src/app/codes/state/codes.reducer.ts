import { createReducer, on } from '@ngrx/store';
import { Code } from '../models/code';
import { loadCodes, loadCodesFailed, loadCodesSuccess } from './codes.actions';
import { initialState } from './codes.state';

export const codesReducer = createReducer(
  initialState,
  on(loadCodes, (state) => ({ ...state, loading: true, codes: null, showCodeLoadError: false })),
  on(loadCodesSuccess, (state, action: {codes: Code[]}) => ({...state, codes: action.codes, loading: false, showCodeLoadError: false})),
  on(loadCodesFailed, (state) => ({...state, codes: null, loading: false, showCodeLoadError: true})),
);
