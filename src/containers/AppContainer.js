import React, { Fragment, useEffect, useState } from "react";
import { getRandomMatch } from "../utils";
import { useSelector, useDispatch } from "react-redux";
import { updateScoreInStore } from "../actions/index";
import Game from "../components/Game";

const AppContainer = () => {
  const dispatch = useDispatch();
  const scores = useSelector(state => state.scores);
  let [count, setCount] = useState(0);
  const [score, setScore] = useState(scores);
  const [match, setCurrentMatch] = useState([]);

  useEffect(() => {
    // componentDidMount
    if (!count) {
      console.log("component has mounted");
      window.addEventListener("onbeforeunload", updateLocalStorage);
      setCurrentMatch(getRandomMatch());
      setCount(1);
    }
    setScore(scores);
    // componentWillUnmount
    return () => {
      console.log("component has unmounted");
      updateLocalStorage();
      window.removeEventListener("beforeunload", updateLocalStorage); // remove the event handler for normal unmounting
    };
  }, [scores]);

  const updateLocalStorage = () => {
    console.log(scores);
    localStorage.setItem("SCORES", JSON.stringify(score));
  };

  const updateScore = (matchId, outcome) => {
    dispatch(updateScoreInStore({ matchId, outcome }));
  };

  return (
    <Fragment>
      <Game
        match={match}
        scores={score && score[match.id]}
        updateScore={updateScore}
      />
    </Fragment>
  );
};

export default AppContainer;
