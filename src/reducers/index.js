import { UPDATE_SCORE } from '../constants/types';

export const initialState = {
  loading: false,
  scores: JSON.parse(localStorage.getItem('SCORES'))
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SCORE:
      const { matchId, outcome } = action.payload;
      let scores = { ...state.scores };
      let currentMatch = scores && scores[matchId];
      const updatedScore = {
        ...scores,
        [matchId]: {
          ...currentMatch,
          [outcome]:
            // if match already exists increment the correct scores, otherwise initialize score to 1
            currentMatch && currentMatch[outcome]
              ? currentMatch[outcome] + 1
              : 1
        }
      };
      return { ...state, scores: updatedScore };

    default:
      return state;
  }
};
