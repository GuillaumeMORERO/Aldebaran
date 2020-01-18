import { DISPLAY_VIDEO_MODAL, CLOSE_VIDEO_MODAL } from 'src/store/Videos/actions';

const initialState = {
  show: false,
  videoToShow: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_VIDEO_MODAL: {
      console.log( 'valeur  de l\'action : show modal');
      return {
        ...state,
        show: true,
      };
    }
    case CLOSE_VIDEO_MODAL: {
      console.log( 'valeur  de l\'action : close modal');
      return {
        ...state,
        show: false,
      };
    }
    default: {
      return state;
    }
  }
};