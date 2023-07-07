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

export function signInFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}
