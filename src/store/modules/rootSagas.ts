import {all, takeLatest} from 'redux-saga/effects';

import {AuthTypes} from './Auth/types';
import {load} from './Auth/sagas';

export default function* rootSaga() {
  return yield all([takeLatest(AuthTypes.SINGN_LOAD, load)]);
}
