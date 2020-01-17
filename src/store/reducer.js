import { combineReducers } from 'redux';

// import votes from 'src/store/votes';
import visiteur from 'src/store/Visiteur/reducer';
import videos from 'src/store/Videos/reducer';

export default combineReducers({
  // votes,
  visiteur,
  videos
});
