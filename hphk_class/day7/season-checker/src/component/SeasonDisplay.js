import React from 'react';
import './SeasonDisplay.css';

const getSeason = (lat, month) => {
  if (month > 3 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const seasonConfig = {
  summer: {
    text: '찜통 더위 조심하세요!',
    iconName: 'sun'
  },
  winter: {
    text: '따뜻하게 입으세요!',
    iconName: 'snowflake'
  }
};

const SeasonDisplay = props => {
  const month = new Date().getMonth();
  const season = getSeason(props.lat, month);

  const { text, iconName } = seasonConfig[season];
  return (
    // jsx template이 반환되어야 한다
    <div className={`season-display ${season}`}>
      <i className={`icon ${iconName}`} />
      <div>
        {season} : {text}
      </div>
    </div>
  );
};

export default SeasonDisplay;
