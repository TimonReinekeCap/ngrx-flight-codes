import { Code } from '../models/code';

export interface CodesState {
  loading: boolean;
  showCodeLoadError: boolean;
  codes: Code[] | null;
}

export const initialState: CodesState = {
  codes: null,
  loading: false,
  showCodeLoadError: false,
};
