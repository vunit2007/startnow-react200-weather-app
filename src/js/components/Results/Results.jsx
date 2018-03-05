import React from "react";

export default class Results extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { result } = this.props;
  
    if (!result.main) {
      return <div>Please Select a City</div>
    }
    return (
      <div className="card">
        <div className="card-header">City Information</div>
        <div className="card-body">
          <div className="cityTitle">
            <p>{result.name}</p>
          </div>
          <br />

          <div className="firstLine1">
            <div className="firstLine">
              <div>Temperature (F)</div>
              <div>{result.main.temp} </div>
            </div>
            <div className="firstLine">
              <div>Pressure</div>
              <div>{result.main.pressure}</div>
            </div>
            <div className="firstLine">
              <div>Humidity</div>
              {result.main.humidity}
              <div />
            </div>
          </div>
          <br />
          <div className="secondLine2">
            <div className="secondLine">
              <div>Lowest Temp (F)</div>
              <div>{result.main.temp_min}</div>
            </div>
            <div className="secondLine">
              <div>Highest Temp (F)</div>
              <div>{result.main.temp_max}</div>
            </div>
            <div className="secondLine">
              <div>Wind Speed</div>
              <div>{result.wind.speed}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
