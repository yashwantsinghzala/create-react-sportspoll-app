import React, { Fragment } from "react";
import Match from "./Match";
import Header from "./Header";
import Poll from "./Poll";
import PollData from "./PollData";

const Game = ({ match, scores, updateScore }) => {
  return (
    <Fragment>
      <Header match={match} />
      <Match match={match} />
      <Poll match={match} updateScore={updateScore} />
      <PollData scores={scores} match={match} />
    </Fragment>
  );
};

export default Game;
