import {action} from 'typesafe-actions';

import {AuthTypes, UserState} from './types';

export const singninError = (error: string) =>
  action(AuthTypes.SIGNIN_ERROR, {error});

export const singninSucess = (data: UserState) =>
  action(AuthTypes.SINGN_IN_USER, {data});

export const singnOut = () => action(AuthTypes.SING_OUT_USER);
