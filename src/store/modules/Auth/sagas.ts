import {call, put} from 'redux-saga/effects';
import api from '../../../services/api';

import {singninError, singninSucess} from './actions';

import {UserCredentialsSing} from './types';

export function* load(data: object) {
  try {
    console.log('data', data);

    const credentials: UserCredentialsSing = data.payload.data;

    console.log('credentials', credentials);

    const response = yield call(api.post, '/auth', {
      email: credentials.email,
      password: credentials.password,
    });

    console.log(response.data);

    yield put(singninSucess(response.data));
  } catch (err) {
    console.log('err', err.response);

    if (err?.response?.errors) {
      yield put(singninError(err?.response?.errors[0]));
    } else {
      yield put(singninError('erro ao efetuar o login'));
    }
  }
}
