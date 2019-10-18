import { UPDATE_SCORE } from '../constants/types';

export const updateScoreInStore = score => {
  return {
    type: UPDATE_SCORE,
    payload: score
  };
};
