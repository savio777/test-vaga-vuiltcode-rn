import {action} from 'typesafe-actions';

import {AuthTypes, UserCredentialsSing, SingnInSucessPayload} from './types';

export const singninError = (error: string) =>
  action(AuthTypes.SIGNIN_ERROR, {error});

export const singninSucess = (data: SingnInSucessPayload) =>
  action(AuthTypes.SINGN_IN_USER, {data});

export const loadSing = (data: UserCredentialsSing) =>
  action(AuthTypes.SINGN_LOAD, {data});

export const singnOut = () => action(AuthTypes.SING_OUT_USER);
