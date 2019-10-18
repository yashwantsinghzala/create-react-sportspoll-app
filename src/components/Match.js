import React from "react";

const Match = ({ match }) => {
  return (
    <div className="match-wrapper">
      <div className="home-team">{match.homeName}</div>
      <div className="versus">
        <span>VS</span>
      </div>
      <div className="away-team">{match.awayName}</div>
    </div>
  );
};

export default Match;
