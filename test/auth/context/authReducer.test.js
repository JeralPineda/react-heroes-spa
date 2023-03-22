import { authReducer, types } from '../../../src/auth';

describe('Pruebas en authReducer', () => {
  test('debe de retornar el estado por defecto', () => {
    const state = authReducer({ logged: false }, {});
    expect(state).toEqual({ logged: false });
  });

  test('debe de (login) llamar el login autenticar y restablecer el user', () => {
    const action = {
      type: types.login,
      payload: {
        name: 'Jeral',
        id: 'ABC',
      },
    };

    const state = authReducer({ logged: false }, action);
    expect(state).toEqual({ logged: true, user: action.payload });
  });

  test('debe de (logout) borrar el name del usuario y logged en false', () => {
    const action = {
      type: types.logout,
    };

    const state = {
      logged: true,
      user: { id: 'ABC', name: 'Jeral' },
    };

    const newState = authReducer(state, action);
    expect(newState).toEqual({ logged: false });
  });
});
