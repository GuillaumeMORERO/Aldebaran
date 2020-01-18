export const DISPLAY_VIDEO_MODAL = 'action/DISPLAY_VIDEO_MODAL';
export const CLOSE_VIDEO_MODAL = 'action/CLOSE_VIDEO_MODAL';

export const displayModal = () => {
  return { type: DISPLAY_VIDEO_MODAL };
};

export const closeModal = () => {
  return { type: CLOSE_VIDEO_MODAL };
};