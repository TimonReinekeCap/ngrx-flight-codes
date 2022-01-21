import { Code } from '../models/code';
import { loadCodes, loadCodesFailed, loadCodesSuccess } from './codes.actions';
import { codesReducer } from './codes.reducer';
import { initialState } from './codes.state';

describe('codesReducer', () => {
  describe('loadCodes', () => {
    it('should set the loading state', () => {
      const currentState = { ...initialState, loading: false };
      const action = loadCodes();

      const newState = codesReducer(currentState, action);

      expect(newState.loading).toBeTrue();
    });
    it('should clear the codes', () => {
      const currentState = { ...initialState, codes: [] };
      const action = loadCodes();

      const newState = codesReducer(currentState, action);

      expect(newState.codes).toBeNull();
    });
    it('should remove the error message', () => {
      const currentState = { ...initialState, codes: [] };
      const action = loadCodes();

      const newState = codesReducer(currentState, action);

      expect(newState.showCodeLoadError).toBeFalse();
    });
  });

  describe('loadCodesSuccess', () => {
    const codes: Code[] = [
      {
        code: 'AB 6572',
        from: 'FRA',
        to: 'TXL',
        airline: 'airberlin',
        flightCount: 1,
        time: '06:20',
      },
    ];
    it('should set the loaded codes', () => {
      const currentState = { ...initialState, codes: null };
      const action = loadCodesSuccess({codes});

      const newState = codesReducer(currentState, action);

      expect(newState.codes).toEqual(codes);
    });
    it('should hide the loading state', () => {
      const currentState = { ...initialState, loading: true };
      const action = loadCodesSuccess({codes});

      const newState = codesReducer(currentState, action);

      expect(newState.loading).toEqual(false);
    });
    it('should hide the error message', () => {
      const currentState = { ...initialState, showCodeLoadError: true };
      const action = loadCodesSuccess({codes});

      const newState = codesReducer(currentState, action);

      expect(newState.showCodeLoadError).toEqual(false);
    });
  });

  describe('loadCodesFailed', () => {
    it('should reset the loading state', () => {
      const currentState = { ...initialState, loading: true };
      const action = loadCodesFailed();

      const newState = codesReducer(currentState, action);

      expect(newState.loading).toBeFalse();
    });
    it('should clear the codes', () => {
      const currentState = { ...initialState, codes: [] };
      const action = loadCodesFailed();

      const newState = codesReducer(currentState, action);

      expect(newState.codes).toBeNull();
    });
    it('should show the error message', () => {
      const currentState = { ...initialState, showCodeLoadError: false };
      const action = loadCodesFailed();

      const newState = codesReducer(currentState, action);

      expect(newState.showCodeLoadError).toBeTrue();
    });
  });
});
