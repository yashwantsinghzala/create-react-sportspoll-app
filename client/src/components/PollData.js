import React from "react";
import { get } from "lodash";

const PollData = ({ match, scores }) => {
  return (
    <div className='poll-data-wrapper'>
      <div className='poll-data-title'>Predictions:</div>

      <div className='poll-data-options'>
        <div className='polled-option-row'>
          <span>
            1.{" "}
            <strong>
              <i>{get(match, "homeName")}</i>
            </strong>{" "}
            will win.
          </span>
          <span className='score'>{get(scores, "home") || 0}</span>
        </div>
        <div className='polled-option-row'>
          <span>
            2.{" "}
            <strong>
              <i>{get(match, "awayName")}</i>
            </strong>{" "}
            will win.
          </span>
          <span className='score'>{get(scores, "away") || 0}</span>
        </div>
        <div className='polled-option-row'>
          <span>3. Draw</span>
          <span className='score'>{get(scores, "draw") || 0}</span>
        </div>
      </div>
    </div>
  );
};

export default PollData;
