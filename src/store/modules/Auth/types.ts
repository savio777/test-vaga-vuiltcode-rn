export enum AuthTypes {
  SINGN_LOAD = '@auth/load',
  SINGN_IN_USER = '@auth/singnin',
  SING_OUT_USER = '@auth/singout',
  SIGNIN_ERROR = '@auth/errorsingin',
}

export interface UserCredentialsSing {
  email: string;
  password: string;
}

export interface UserState {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  fullName: string;
}

export interface AuthState {
  user: UserState;
  error?: string;
  logged: boolean;
  loading: boolean;
}
