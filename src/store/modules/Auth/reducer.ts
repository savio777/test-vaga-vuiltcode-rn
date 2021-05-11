import {Reducer} from 'redux';

import {AuthState, AuthTypes} from './types';

const initialState: AuthState = {
  user: {
    id: '',
    email: '',
    firstName: '',
    lastName: '',
    fullName: '',
  },
  accessToken: '',
  logged: false,
  loading: false,
  error: '',
};

const authReducer: Reducer<AuthState> = (
  state: AuthState = initialState,
  action,
) => {
  switch (action.type) {
    case AuthTypes.SINGN_LOAD:
      return {...state, loading: true, error: ''};
    case AuthTypes.SINGN_IN_USER:
      return {
        user: action.payload.data.data.user,
        accessToken: action.payload.data.data.accessToken,
        error: '',
        loading: false,
        logged: true,
      };
    case AuthTypes.SING_OUT_USER:
      return initialState;
    case AuthTypes.SIGNIN_ERROR:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
