import React from 'react';

import {useSelector} from 'react-redux';

import Loading from '../components/Loading';
import {ApplicationState} from '../store';
import {AuthState} from '../store/modules/Auth/types';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

const Routes: React.FC = () => {
  const {loading, logged}: AuthState = useSelector<ApplicationState>(
    state => state.auth,
  );

  //const {user, loading} = useAuth();

  if (loading) {
    return <Loading />;
  }

  return logged ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
