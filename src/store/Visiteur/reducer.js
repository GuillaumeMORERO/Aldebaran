import { CHANGE_EMAIL, CHANGE_MESSAGE } from 'src/store/Visiteur/actions';

const initialState = {
  emailValue: '',
  messageValue: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_EMAIL: {
      return {
        ...state,
        emailValue: action.value,
      };
    }
    case CHANGE_MESSAGE: {
      return {
        ...state,
        messageValue: action.value,
      };
    }
    default: {
      return state;
    }
  }
};