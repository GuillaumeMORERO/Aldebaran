import { DISPLAY_VIDEO_MODAL } from 'src/store/Videos/actions';

const initialState = {
  showModalVideo: false,
  videoToShow: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_VIDEO_MODAL: {
      return {
        ...state,
        showModalVideo: true,
        videoToShow: action.value
      };
    }
    default: {
      return state;
    }
  }
};