import React, { useState } from "react";
import { isUndefined, get } from "lodash";

const Poll = ({ match, updateScore }) => {
  const [vote, setVote] = useState();
  const homeTeam = get(match, "homeName");
  const awayTeam = get(match, "awayName");

  if (match.state === "FINISHED") {
    return null;
  }

  const handleOnChange = target => {
    setVote(target.value);
    updateScore(match.id, target.value);
  };
  return (
    <div className="poll-wrapper">
      <div className="poll-title">Your Predictions?</div>
      <label className="poll-option">
        <input
          type="radio"
          name="poll"
          disabled={!isUndefined(vote)}
          value="home"
          onChange={e => handleOnChange(e.target)}
        />
        <span>
          <strong>
            <i>{homeTeam}</i>
          </strong>{" "}
          will win.
        </span>
      </label>
      <label className="poll-option">
        <input
          type="radio"
          name="poll"
          disabled={!isUndefined(vote)}
          value="away"
          onChange={e => handleOnChange(e.target)}
        />
        <span>
          <strong>
            <i>{awayTeam}</i>
          </strong>{" "}
          will win.
        </span>
      </label>
      <label className="poll-option">
        <input
          type="radio"
          name="poll"
          disabled={!isUndefined(vote)}
          value="draw"
          onChange={e => handleOnChange(e.target)}
        />
        <span>Draw.</span>
      </label>
      {!isUndefined(vote) && (
        <div className="success-message">
          &#x2714; Thanks! Your predictions updated successfully.
        </div>
      )}
    </div>
  );
};

export default Poll;
