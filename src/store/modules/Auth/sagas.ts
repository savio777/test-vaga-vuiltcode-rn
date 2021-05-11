import {call, put} from 'redux-saga/effects';
import api from '../../../services/api';

import {singninError, singninSucess} from './actions';

import {UserCredentialsSing} from './types';

export function* load(data: UserCredentialsSing) {
  try {
    const response = yield call(api.get, '/auth', {
      email: data.email,
      password: data.password,
    });

    yield put(singninSucess(response.data));
  } catch (err) {
    console.log(err);
    yield put(singninError('err teste'));
  }
}
