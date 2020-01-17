// Actions for Login / Register reducer
export const CHANGE_EMAIL = 'action/CHANGE_EMAIL';
export const CHANGE_MESSAGE = 'action/CHANGE_MESSAGE';

export const changeEmail = (value) => {
  return { type: CHANGE_EMAIL, value }
};

export const changeMessage = (value) => {
  return { type: CHANGE_MESSAGE, value }
};