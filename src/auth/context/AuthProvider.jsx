import { useReducer } from 'react';

import { AuthContext, authReducer } from './';
import { types } from '../types/types';
import { json } from 'react-router-dom';

const initialState = {
  logged: false,
};

const init = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return {
    logged: !!user,
    user: user,
  };
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState, init);

  const login = (name = '') => {
    const user = {
      id: 'ABC',
      name,
    };

    const action = {
      type: types.login,
      payload: user,
    };

    localStorage.setItem('user', JSON.stringify(user));

    dispatch(action);
  };

  return (
    <AuthContext.Provider
      //
      value={{ ...state, login: login }}
    >
      {children}
    </AuthContext.Provider>
  );
};
