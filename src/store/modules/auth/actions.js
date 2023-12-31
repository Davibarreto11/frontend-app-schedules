export function singInRequest(email, password, navigate) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password, navigate },
  };
}

export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user },
  };
}

export function signUpRequest(name, email, password, navigate) {
  return {
    type: '@auth/SIGI_UP_REQUEST',
    payload: {
      name, email, password, navigate,
    },
  };
}

export function signInFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function signOut(navigate) {
  return {
    type: '@auth/SIGN_OUT',
    payload: { navigate },
  };
}
