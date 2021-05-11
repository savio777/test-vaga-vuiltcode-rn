import {combineReducers} from 'redux';

import authReducer from './Auth/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;

/*export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
*/
