import React from "react";
import { get, toLower } from "lodash";
import { flagsMap, getSportIcon, matchStateMap } from "../utils";

const Header = ({ match }) => {
  const matchStatusClass = toLower(get(match, "state"));
  return (
    <div className="header">
      <h1>Sport Poll</h1>
      <div>
        <span className="name">{get(match, "name")}</span> -{" "}
        <span className="group">({get(match, "group")})</span>
      </div>
      <div>
        <strong>Sport:</strong>{" "}
        <img
          className="sport-img"
          src={getSportIcon(match.sport)}
          alt={match.country}
        />{" "}
        {get(match, "sport")}
      </div>
      <div>
        <strong>Country:</strong>{" "}
        <img
          className="flag-img"
          src={flagsMap[match.country]}
          alt={match.country}
        />{" "}
        {get(match, "country")}
      </div>
      <div className={matchStatusClass}>
        Match {matchStateMap[get(match, "state")]}
      </div>
    </div>
  );
};

export default Header;
