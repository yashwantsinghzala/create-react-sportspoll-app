import React, { Fragment, useEffect, useState } from "react";
import { getRandomMatch } from "../utils";
import { useSelector, useDispatch } from "react-redux";
import { updateScoreInStore } from "../actions/index";
import Game from "../components/Game";

const AppContainer = () => {
  const dispatch = useDispatch();
  const scores = useSelector(state => state.scores);
  let [count, setCount] = useState(0);
  const [match, setCurrentMatch] = useState([]);

  useEffect(() => {
    // componentDidMount
    if (!count) {
      setCurrentMatch(getRandomMatch());
      setCount(1);
      return;
    }
    // componentWillRecieveProps
    updateLocalStorage();
  }, [scores]);

  const updateLocalStorage = () => {
    localStorage.setItem("SCORES", JSON.stringify(scores));
  };

  const updateScore = (matchId, outcome) => {
    dispatch(updateScoreInStore({ matchId, outcome }));
  };

  return (
    <Fragment>
      <Game
        match={match}
        scores={scores && scores[match.id]}
        updateScore={updateScore}
      />
    </Fragment>
  );
};

export default AppContainer;
