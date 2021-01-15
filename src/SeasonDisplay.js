import './SeasonDisplay.css'
import React from "react";


//Object with 2 value:key pairs
const seasonConfig = {
  Summer: {
    text: "Let's hit the beach!",
    iconName: "sun",
  },
  Winter: {
    text: "Let it snow!",
    iconName: "snowflake",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "Summer" : "Winter";
  } else {
    return lat > 0 ? "Winter" : "Summer";
  }
};

const SeasonDisplay = (props) => {
  //returns to us Winter or Summer
  const season = getSeason(props.lat, new Date().getMonth());

  const { text, iconName } = seasonConfig[season]; //returns {text, iconName} for related season.

  const h1 = "Your Current Season: ";
  return (
    <div className={`season-display ${season}`}>
      <h1>{h1}</h1>
      <div className="season-subdisplay">
      {season}</div>
      <br/>
      <i className={`massive icon ${iconName}`} />
      <br/>
      <div className="season-subdisplay">
      {text}
      </div>
    </div>
  );
};

export default SeasonDisplay;
