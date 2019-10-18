// sorting algorithm from https://www.w3schools.com/js/js_array_sort.asp

import events from "./response";

export const getRandomMatch = () => {
  const randomIndex = Math.floor(Math.random() * events.length);
  return events[randomIndex];
};

// retrieve a flag img URL
export const flagsMap = {
  SWEDEN: "https://restcountries.eu/data/swe.svg",
  FRANCE: "https://restcountries.eu/data/fra.svg",
  ENGLAND: "https://restcountries.eu/data/gbr.svg"
};

// retrieve a human readable match state
export const matchStateMap = {
  STARTED: "in progress",
  FINISHED: "over",
  NOT_STARTED: "not yet started"
};

// retrieve the icon based on sport name
export const getSportIcon = sportName => {
  try {
    return require(`./icons/${sportName}.svg`);
  } catch (e) {
    return require(`./icons/FALLBACK.svg`);
  }
};
