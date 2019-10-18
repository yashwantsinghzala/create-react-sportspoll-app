import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { shallow } from "./enzyme";
import Game from "./components/Game";
import Match from "./components/Match";
import PollData from "./components/PollData";
import Poll from "./components/Poll";
import reducer, { initialState } from "./reducers/index";
import { UPDATE_SCORE } from "./constants/types";

describe("component and reducer testing", () => {
  const match = {
    awayName: "Panthrakikos Komotini",
    createdAt: "2015-12-18T12:30:39.228Z",
    group: "Greek Cup",
    homeName: "Chania FC",
    id: 1002916450,
    name: "Chania FC - Panthrakikos Komotini",
    objectId: "1UaQjc7lIb",
    sport: "FOOTBALL",
    country: "ENGLAND",
    state: "STARTED"
  };
  const scores = {
    1002916450: {
      home: 1,
      away: 1,
      draw: 1
    }
  };
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should test Match component", () => {
    const component = shallow(<Match match={match} />);
    expect(component.getElements()).toMatchSnapshot();
  });

  it("should test Game component", () => {
    const component = shallow(<Game match={match} scores={scores} />);
    expect(component.getElements()).toMatchSnapshot();
  });

  it("should test Poll component", () => {
    const component = shallow(<Poll match={match} updateScore={() => {}} />);
    expect(component.getElements()).toMatchSnapshot();
  });

  it("should test PollData component", () => {
    const component = shallow(<PollData />);
    expect(component.getElements()).toMatchSnapshot();
  });

  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should update the score in store", () => {
    const matchId = 1002916450;
    const initialState = { scores: {} };
    const outcome = "home";
    const newState = {
      scores: {
        1002916450: {
          home: 1
        }
      }
    };
    expect(
      reducer(initialState, {
        type: UPDATE_SCORE,
        payload: {
          matchId,
          outcome
        }
      })
    ).toEqual(newState);
  });
});
